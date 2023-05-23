import { createPool, Pool, PoolOptions } from 'mysql2';


export class database {
  configuration: PoolOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music',
    port: 3306
  };
  connection: Pool = createPool(this.configuration)

}

