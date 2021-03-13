import app from './app';
import logger from './logger';

app.listen(3333, () => {
	try {
		logger.info('API Started!');
	} catch (error) {
		logger.error(error);
	}
});
