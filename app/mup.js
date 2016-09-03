module.exports = {
  servers: {
    one: {
      host: '67.205.135.35',
      username: 'root'
      // pem:
      // password:
      // or leave blank for authenticate from ssh-agent
      //"pem": "C:\Users\Ndereba\Documents\meteor-dapp-boilerplate\app\public\PubKeys"
    }
  },

  meteor: {
    name: 'SmartWalletDapp',
    path: '../app',
    servers: {
      one: {}
    },
    "setupMongo": true,
     "setupNode": true,
     "nodeVersion": "0.10.36",
    "setupPhantom": true,

    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://67.205.135.35',
      //MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};