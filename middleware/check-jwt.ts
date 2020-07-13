import { Request, Response, NextFunction } from 'express';
import { IGetUserAuthInfoRequest } from './auth-definition'
import jwt from 'jsonwebtoken';
import config from 'config';

const checkJwt: any = (req: Request, res: Response, next: NextFunction) => {

  // Get token from header
  const token: any = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token authorization denied' })
  }

  // Verify token

  try {
    const decoded: any = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token isn\'t valid' });
  }
}

export {
  checkJwt
};