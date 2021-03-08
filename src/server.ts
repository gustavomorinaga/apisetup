import { Request, Response } from 'express';
import app from './app';
import logger from './logger';

app.listen(3333, () => {
	try {
		logger.info('API Started!');
		app.get('/', (req: Request, res: Response) =>
			res.json({ message: 'Deu Certo!' })
		);
	} catch (error) {
		logger.error(error);
	}
});
