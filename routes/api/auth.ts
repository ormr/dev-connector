import express, { Router, Request, Response } from "express";

const auth: Router = express.Router();

// @route  GET api/auth
// @desc   test route
// @access Public
auth.get('/', (req: Request, res: Response) => {
  res.send('Auth route');
});

export { auth };
