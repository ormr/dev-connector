import express, { Router, Request, Response } from "express";
import { check, validationResult } from 'express-validator';
import { checkJwt } from '../../middleware/check-jwt';
import { Profile } from '../../models/Profile/Profile';
import { User } from '../../models/User/User';

const router: Router = express.Router();


// @route  GET api/profile/me
// @desc   Get current users profile
// @access Private

router.get('/me', checkJwt,  async (req: any, res: Response) => {
  try {
    const profile = await Profile
      .findOne({ user: req.user.id })
      .populate('user', ['name', 'avatar']);

    if (!profile) {
      return res
        .status(400)
        .json({ msg: 'There is no profile for this user' })
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/profile
// @desc   Create or update user profile
// @access Private

router.post('/',
  [
    checkJwt, 
      [
        check('status', 'Status is required')
          .not()
          .isEmpty(),
        check('skills', 'Skills is required')
          .not()
          .isEmpty()
      ]
  ],
  async (req: any, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin
    } = req.body;

    // Build profile object

    interface IprofileFields {
      user: string;
      company?: string;
      website?: string;
      location?: string;
      bio?: string;
      status?: string;
      githubusername?: string;
      skills?: string[];
      social: {
        youtube?: string;
        twitter?: string;
        facebook?: string;
        linkedin?: string;
        instagram?: string;
      }
    }

    const profileFields: IprofileFields = {
      user: '',
      skills: [],
      social: {}
    };

    profileFields.user = req.user.id;

    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
      profileFields.skills = skills.split(',').map((skill: string) => skill.trim())
    }

    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    
    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
          );

        return res.json(profile);
      }

      // Create
      profile = new Profile(profileFields);

      await profile.save();

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

const profile: Router = router;

export { profile };