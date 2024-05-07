import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken, JwtPayload } from '../../../../utils/jwtHelper';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No authorization header' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const payload = verifyAccessToken(token) as JwtPayload;
    console.log(payload );
    if (typeof payload === 'string') {
      return res.status(403).json({ error: payload });

    }
    req.body.userId = payload.userId;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};