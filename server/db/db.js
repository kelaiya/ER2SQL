// const Sequelize = require('sequelize')

// const db = new Sequelize( process.env.RDS_DB_NAME, process.env.RDS_USERNAME, process.env.RDS_PASSWORD,
//   {
//     host: process.env.RDS_HOSTNAME,
//     dialect: 'postgres',
//     port: process.env.RDS_PORT,
//     logging: false
//   }
// )
// module.exports = db

const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/er2sql', {
    logging: false
  }
)

module.exports = db;
