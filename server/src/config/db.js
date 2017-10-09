import mongoose from 'mongoose';

import constants from './constants';

mongoose.Promise = global.Promise;

mongoose.set('debug', true); // debug mode

try {
  mongoose.connect(constants.DB_URL, {
    useMongoClient: true,
  });
} catch (err) {
  mongoose.createConnection(constants.DB_URL, {
    useMongoClient: true,
  });
}

mongoose.createConnection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', (err) => {
    throw err;
  });
