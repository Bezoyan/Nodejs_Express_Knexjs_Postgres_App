const dotenv = require('dotenv');


module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_READ_HOST,
      port: process.env.DB_READ_PORT,
      user: process.env.DB_READ_USERNAME,
      password: process.env.DB_READ_PASSWORD,
      database: process.env.DB_READ_DATABASE
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  test: {
    client: 'pg',
    connection: {
      host: process.env.TEST_DB_READ_HOST,
      port: process.env.TEST_DB_READ_PORT,
      user: process.env.TEST_DB_READ_USERNAME,
      password: process.env.TEST_DB_READ_PASSWORD,
      database: process.env.TEST_DB_READ_DATABASE
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
}