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

// @route Get api/post/:id
// @desc Get post by id
// @access Private

router.get('/:id', checkJwt, async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const post: IPost | null = await Post.findById(req.params.id);

    if (!post) {
      return res.status(400).json({ msg: 'Post is not found' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/post/:id
// @desc Delete post by id
// @access Private

router.delete('/:id', checkJwt, async (req: Request, res: Response) => {
  try {
    // Remove by Id
    await Post.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Post deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const post: Router = router;

export { post };
