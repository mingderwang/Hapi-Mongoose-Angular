'use strict';

module.exports = {
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  database: {
  	host: 'mongo',
    port: 27017,
    db: 'DatabaseName',
    username: '',
    password: '',
    url : 'mongodb://<user>:<password>@<url>'
  }
};
