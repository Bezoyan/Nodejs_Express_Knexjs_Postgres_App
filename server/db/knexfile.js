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
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds'
    }
  }
}