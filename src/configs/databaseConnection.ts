import mongoose from 'mongoose';
import { Configs } from './environmentConfig';

export class DatabaseConnection {
	static connect(): void {
		const connectionUser = Configs.getConfig('MONGODB_CONNECTION_USER');
		const connectionPassword = Configs.getConfig('MONGODB_CONNECTION_PASSWORD');
		const connectionCluster = Configs.getConfig('MONGODB_CONNECTION_CLUSTER');
		const connectionDatabase = Configs.getConfig('MONGODB_CONNECTION_DATABASE	');

		const connectionString = `mongodb+srv://${connectionUser}:${connectionPassword}${connectionCluster}/${connectionDatabase}?retryWrites=true&w=majority`;

		mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useFindAndModify: true,
			useUnifiedTopology: true,
		});
	}
}
