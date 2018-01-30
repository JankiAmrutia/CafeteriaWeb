/**
* mongodb connection setup
* @method - open - creates a mongodb connection
* @method - close - closes the existing mongodb connection
**/
 const mongoose =  require('mongoose');
//import { DB_URL } from './index';
//import logger from '../utils/logger';
const DB_URL = 'mongodb://meraju:meraju123@ds041484.mlab.com:41484/commentsdb'
//mongodb://meraju:meraju123@ds041484.mlab.com:41484/commentsdb
//mongodb://Hackathon-user:mlab123@ds117758.mlab.com:17758/cafeteria

module.exports = {
  open() {
    mongoose.Promise = global.Promise;
    mongoose.connect(DB_URL);
    var conn = mongoose.connection;

    conn.on('error', (err) => {console.log(err)});

    conn.once('open', function() {
      var userCtrl = require('./../modules/user.controller');
      console.log('done');
    });

  },

  close() {
    mongoose.connection.close();
  }
};
