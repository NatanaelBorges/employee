import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  database: 'employee',
  host: '172.17.0.1',
  port: 3306,
  username: 'root',
  password: '123Senha',
  entities: ['dist/infrastructure/data/mappings/*.map.js'],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: true,
  migrationsRun: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
