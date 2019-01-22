
'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const mongoDbUri = 'mongodb://localhost:27017/example_db';

//Connect to db
//connect with mongoDB
mongoose.connect(mongoDbUri, {
  useNewUrlParser: true
});
mongoose.connection.on('connected',function() {
  console.log(`App is connected to ${mongoDbUri}`);
});
mongoose.connection.on('error', function(error) {
  console.log('Error while connecting to mongodb', err);
});

// Create a server with a host and port
const server = new Hapi.Server({
  host: 'localhost',
  port: 3000
});

server.route({
  path: '/',
  method: 'GET',
  handler(request, h) {
    return 'Welcome to node-hapi-mongo-rest-example';
  }
});

//Register plugins and start server
const registerPluginsAndStartServer = async function () {
  await server.register([
    require('./plugins/products')
  ]);

  try {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`);
  } catch (error) {
    console.log(error)
  }
}

registerPluginsAndStartServer();