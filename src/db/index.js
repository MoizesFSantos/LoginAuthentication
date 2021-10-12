const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD, 
    {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    }
);
    sequelize.sync();
(async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

module.exports = sequelize;