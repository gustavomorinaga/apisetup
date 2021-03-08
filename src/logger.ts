import winston from 'winston';

const { combine, timestamp, label, printf } = winston.format;
const format = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level} – ${message}`;
});

const logger = winston.createLogger({
	level: 'silly',
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: './logs/api.log' }),
	],
	format: combine(label({ label: 'api' }), timestamp(), format),
});

export default logger;
