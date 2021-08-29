import { Sequelize } from 'sequelize';
import config from '../../config/default';

export const sequelize = new Sequelize(
    config.DB,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: 'postgres',
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        },
    }
)
