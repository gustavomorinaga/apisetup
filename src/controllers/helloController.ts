import logger from '../logger';

async function sayHello(): Promise<string> {
	logger.info('Hello World!');

	return 'Hello World!';
}

export { sayHello };
