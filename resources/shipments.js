module.exports = function shipments(instance){
  return {
    createShipment(data){
      return instance.post('/create-shipment', data);
    },
    getShipments(params){
      return instance.get('/get-shipments', {
        params,
      });
    },
  };
};
