import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
	if (process.env.NODE_ENV === 'production') {
		return {
			http: {
				usePods: true
			},
			redis: {
				ttl: +process.env.REDIS_TTL,
				url: process.env.REDIS_URL,
				password: process.env.REDIS_PASSWORD,
			},
			database: {
				username: process.env.POSTGRES_USER,
				password: process.env.POSTGRES_PASSWORD,
				db_name: process.env.POSTGRES_DB,
				host: process.env.POSTGRES_HOST,
				port: +process.env.POSTGRES_PORT,
			},
			ml: {
				url: process.env.ML_URL,
			}
		}
	} 
	
	return yaml.load(readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8')) as Record<string, any>;
};
