import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import logger from '../../../utils/logger';

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        logger.error(errorMessages);
        return res.status(400).json({ errors: errorMessages });
    }
    next();
}


// import { body, validationResult } from 'express-validator';
// import { Request, Response, NextFunction } from 'express';

  
// export const validate = (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.body);
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//         console.log(errors.array());
// }
// next();
// }