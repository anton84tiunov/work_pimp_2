import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

  
export const validate = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
}
next();
}