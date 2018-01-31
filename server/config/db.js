/**
 * Intializing connection for MongoDB.
 *  Using mongoose
*/

import mongoose from 'mongoose';
import { DB_URL } from './index';
import logger from '../utils/logger';

/**
* mongodb connection setup
* @method - open - creates a mongodb connection
* @method - close - closes the existing mongodb connection
**/

module.exports = {
  open() {
    mongoose.Promise = global.Promise;
    mongoose.connect(DB_URL);
    var conn = mongoose.connection;

    conn.on('error', (err) => {console.log(err)});

    conn.once('open', function() {
      var userCtrl = require('./../modules/user/user.controller');
      console.log('done');
    });

  },

  close() {
    mongoose.connection.close();
  }
};
