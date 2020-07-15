import express, { Router, Request, Response } from "express";
import { checkJwt } from '../../middleware/check-jwt';
import { Post } from '../../models/Post';
import { check, validationResult } from 'express-validator';
import { Profile } from '../../models/Profile';
import { User } from '../../models/User'
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const user = await User
});

const post: Router = router;

export { post };
