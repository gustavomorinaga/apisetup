import express from 'express';
import cors from 'cors';
// import routes from './routes';
import { DatabaseConnection } from '@configs/databaseConnection';
import logger from './logger';

class App {
	public express: express.Application;

	public constructor() {
		this.express = express();
		this.middleware();
		this.database();
		// this.routes();
	}

	private middleware(): void {
		this.express.use(express.json());
		this.express.use(cors());
	}

	private database(): void {
		try {
			DatabaseConnection.connect();

			logger.info('MongoDB Connected!');
		} catch (error) {
			logger.error(error);
		}
	}

	// private routes(): void {
	// 	this.express.use(routes);
	// }
}

export default new App().express;
