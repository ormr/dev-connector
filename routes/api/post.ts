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

// @route GET api/post/:id
// @desc Get post by id
// @access Private

router.get('/:id', checkJwt, async (req: Request, res: Response) => {
  try {
    const post: IPost | null = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' })
    }

    res.status(500).send('Server Error');
  }
});

// @route DELETE api/post/:id
// @desc Delete post by id
// @access Private

router.delete('/:id', checkJwt, async (req: Request, res: Response) => {
  try {
    const post: IPost | null = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    if (post.user.toString() !== req.user.id) {
      return res.status(401)
        .json({ msg: 'User not authorized' });
    }

    await post.remove();

    res.json({ msg: 'Post deleted' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' })
    }

    res.status(500).send('Server Error');
  }
});

// @route PUT api/post/like/:id
// @desc Like a post
// @access Private

router.put('/like/:id',
  checkJwt,
  async (req: Request, res: Response) => {
    try {
      const post: IPost | null = await Post.findById(req.params.id);

      if (!post) {
        return res.json('Like by ID not found');
      }

      // Check if the post has already been linked
      if (post.likes.filter((like: any) => like.user.toString() === req.user.id).length > 0) {
        return res.status(400).json({ msg: 'Post already liked' });
      }

      post.likes.unshift({ user: req.user.id });

      await post.save();

      res.json(post.likes);
    } catch (err) {
      console.error(err.message);

      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Id not found' })
      }

      res.status(500).send('Server Error');
    }
  }
);

// @route PUT api/post/unlike/:id
// @desc Unlike a post
// @access Private

router.put('/unlike/:id',
  checkJwt,
  async (req: Request, res: Response) => {
    try {
      const post: IPost | null = await Post.findById(req.params.id);

      if (!post) {
        return res.status(400).json('Id not found');
      }

      // Check if the post has already been linked
      if (post.likes.filter((like: any) => like.user.toString() === req.user.id).length === 0) {
        return res.status(400).json('Post has not yet been liked')
      }

      const removeIndex: number = post.likes.map((like: any) => like.user.toString()).indexOf(req.params.id);

      post.likes.splice(removeIndex, 1);

      await post.save();

      res.json(post.likes);
    } catch (err) {
      console.error(err.message);

      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Id not found' })
      }

      res.status(500).send('Server Error');
    }
  }
);

// @route  POST api/post/comment/:id
// @desc   Comment on a post
// @access Private

router.post('/comment/:id',
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
      const post: IPost | null = await Post.findById(req.params.id);

      if (!user || !post) {
        return res.status(400).json({ msg: 'User is not found' });
      }

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);

      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Post not found' })
      }

      res.status(500).send('Server Error');
    }
});

// @route  DELETE api/post/comment/:id/:comment_id
// @desc   Delete comment on post
// @access Private

router.delete('/comment/:id/:comment_id',
  checkJwt,
  async (req: Request, res: Response) => {
    try {
      const post: IPost | null = await Post.findById(req.params.id);

      if (!post) {
        return res
          .status(404)
          .json({ msg: 'Post not found' });
      }

      const comment = post.comments.find(
        (comment: any) => comment.id === req.params.comment_id
        );

      if (!comment) {
        return res
          .status(404)
          .json({ msg: 'Comment does not exist' });
      }

      // Check user
      if (comment.user.toString() !== req.user.id) {
        return res
          .status(404)
          .json({ msg: 'User not authorized' });
      }

      const removeIndex: number = post.comments
        .map((comment: any) => comment.user.toString())
        .indexOf(req.user.id);

      post.comments.splice(removeIndex, 1);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);

      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Post not found' })
      }

      res.status(500).send('Server Error');
    }
});

const post: Router = router;

export { post };
