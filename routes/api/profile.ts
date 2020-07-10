import express, { Router, Request, Response } from "express";

const profile: Router = express.Router();

// @route  GET api/profile
// @desc   test route
// @access Public
profile.get('/', (req: Request, res: Response) => {
  res.send('Profile route');
});

export { profile };