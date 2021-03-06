import { Pool } from 'pg';

export default new Pool ({
    max: 20,
    connectionString: 'postgres://user:password@hostname:port/dbname',
    idleTimeoutMillis: 30000
});