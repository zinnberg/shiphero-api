module.exports = function fulfillmentStatus(instance){
  return {
    createFulfillmentStatus(data){
      return instance.post('/fulfillment-status-create', data);
    },
    deleteFulfillmentStatus(data){
      return instance.post('/fulfillment-status-delete', data);
    },
  };
};
