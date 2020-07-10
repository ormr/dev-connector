import express, { Router, Request, Response } from "express";

const post: Router = express.Router();

// @route  GET api/post
// @desc   test route
// @access Public
post.get('/', (req: Request, res: Response) => {
  res.send('Post route');
});

export { post };
