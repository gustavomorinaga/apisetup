import { Configs } from '@configs/environmentConfig';
import app from './app';
import logger from './logger';

const port = Configs.getConfig('PORT') || 3333;

app.listen(port, () => {
	try {
		logger.info(`API Started at http://localhost:${port}`);
	} catch (error) {
		logger.error(error);
	}
});
