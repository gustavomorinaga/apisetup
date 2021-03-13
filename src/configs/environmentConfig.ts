import { config } from 'dotenv';

export class Configs {
	static getConfig(name: string): string | null {
		if (process.env[name]) return <string>process.env[name];

		const { parsed } = config();
		return parsed ? parsed[name] : null;
	}
}
