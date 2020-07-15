import express, { Router, Request, Response } from "express";
import { checkJwt } from '../../middleware/check-jwt';
import { Post, IPost } from '../../models/Post';
import { check, validationResult, Result, ValidationError } from 'express-validator';
import { Profile } from '../../models/Profile';
import { User, IUser } from '../../models/User'
const router: Router = express.Router();

// @route  POST api/post
// @desc   Create a post
// @access Private

router.post('/',
  [
    checkJwt,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req: Request, res: Response) => {
    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const user: IUser | null = await User.findById(req.user.id).select('-password');

      if (!user) {
        return res.status(400).json({ msg: 'User is not found' });
      }

      const newPost: IPost = new Post ({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

});

// @route  GET api/post
// @desc   Get all posts
// @access Private

router.get('/', checkJwt, async (req: Request, res: Response) => {
  try {
    const posts: IPost[] = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const post: Router = router;

export { post };
