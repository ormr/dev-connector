import express, { Router, Request, Response } from "express";
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { checkJwt } from '../../middleware/check-jwt';
import { User } from '../../models/User'

import gravatar from 'gravatar';

const auth: Router = express.Router();

// @route  GET api/auth
// @desc   test route
// @access Public
auth.get('/', checkJwt, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/auth
// @desc   Register user
// @access Public
auth.post('/',
  [
    check('email', 'Please include a valid email')
      .isEmail(),
    check('password',
      'Password is required')
       .exists()
  ],
  async (req: Request, res: Response) => { 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // See if user exists

    let user: any = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 }, 
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export { auth };
