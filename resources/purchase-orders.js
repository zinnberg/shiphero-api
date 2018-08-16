module.exports = function purchaseOrders(instance){
  return {
    createPo(data){
      return instance.post('/po-creation', {
        data,
      });
    },
    getPo(params){
      return instance.get('/get-po', {
        params,
      });
    },
  };
};
