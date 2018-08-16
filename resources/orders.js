modules.exports = function orders(instance){
  return {
    getOrders(params){
      return instance.get('/get-orders', {
        params,
      });
    },
    getOrder(params){
      return instance.get('/get-order', {
        params,
      });
    },
    createOrder(data){
      return instance.post('/order-creation', {
        data,
      });
    },
    updateOrder(data){
      return instance.post('/order-update', {
        data,
      });
    },
    createOrderHistory(data){
      return instance.post('/order-history-creation', {
        data,
      });
    },
  };
};
