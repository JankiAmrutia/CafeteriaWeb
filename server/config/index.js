//mongodb://Hackathon-user:mlab123@ds117758.mlab.com:17758/cafeteria

/**
 * Houses all the application configuration.
*/
const ENV = process.env.ENV || 'development';
const isProd = (ENV === 'production');
const LOGS_LOCATION = './logs';
const LOGS = `${LOGS_LOCATION}/${ENV}.log`;
const DB_URL = 'mongodb://Hackathon-user:mlab123@ds117758.mlab.com:17758/cafeteria';
const PORT = process.env.PORT || 3000;

module.exports = {
    LOGS_LOCATION,
    LOGS,
    DB_URL,
    isProd
};
