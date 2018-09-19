const axios = require('axios');

ShipHeroApi.resources = {
  fulfillmentStatus: require('./resources/fulfillment-status'),
  orders: require('./resources/orders'),
  products: require('./resources/products'),
  purchaseOrders: require('./resources/purchase-orders'),
  returns: require('./resources/returns'),
  shipments: require('./resources/shipments'),
  vendors: require('./resources/vendors'),
  webhooks: require('./resources/webhooks'),
};

function ShipHeroApi(token){
  if (!(this instanceof ShipHeroApi)) {
    return new ShipHeroApi(token);
  }

  this.request = axios.create({
    baseURL: 'https://api-gateway.shiphero.com/v1.2/general-api/',
    headers: {
      'x-api-key': token,
    },
  });

  this.request.interceptors.request.use(config => {
    if(config.method === 'get'){
      Object.assign(config, {
        params: {
          token,
        },
      });
    }

    if(config.method === 'post'){
      Object.assign(config, {
        data: {
          token,
        },
      });
    }

    return config;
  }, err => {
    return Promise.reject(err);
  });

  this.init();
}

ShipHeroApi.prototype = {
  init(){
    Object.keys(ShipHeroApi.resources).forEach(resource => {
      ShipHeroApi.prototype[resource] =  ShipHeroApi.resources[resource](this.request)
    });
  },
};

module.exports = ShipHeroApi;
