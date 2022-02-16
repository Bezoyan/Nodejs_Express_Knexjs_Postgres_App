'use strict'

const dotenv = require('dotenv')

// Load environment variables from .env file
dotenv.config()

const env = process.env.NODE_ENV || 'development'
const configs = {
  base: {
    env,
    host: '0.0.0.0',
    port: 8080
  },
  production: {
    //port: process.env.APP_PORT || 7071
  },
  development: {},
  test: {
    port: 8080
  }
}

const config = Object.assign(configs.base, configs[env])

module.exports = config