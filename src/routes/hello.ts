import { Router, NextFunction, Request, Response } from 'express';
import { sayHello } from '@controllers/helloController';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		res.send(await sayHello());
	} catch (err) {
		next(err);
	}
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log(err);
	res.status(400).send({ error: err.message });
});

export default router;
