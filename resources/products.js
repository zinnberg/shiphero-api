modules.exports = function products(instance){
  return {
    createProduct(data){
      return instance.post('/product-creation', {
        data,
      });
    },
    updateInventory(data){
      return instance.post('/update-inventory', {
        data,
      });
    },
    createKit(data){
      return instance.post('/kit-creation', {
        data,
      });
    },
    removeKit(data){
      return instance.post('/remove-kit', {
        data,
      });
    },
    clearKit(data){
      return instance.post('/clear-kit', {
        data,
      });
    },
    getProduct(params){
      return instance.get('/get-product', {
        params,
      });
    },
  };
};
