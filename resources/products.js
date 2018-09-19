modules.exports = function products(instance){
  return {
    clearKit(data){
      return instance.post('/clear-kit', {
        data,
      });
    },
    createKit(data){
      return instance.post('/kit-creation', {
        data,
      });
    },
    createProduct(data){
      return instance.post('/product-creation', {
        data,
      });
    },
    getProduct(params){
      return instance.get('/get-product', {
        params,
      });
    },
    removeKit(data){
      return instance.post('/remove-kit', {
        data,
      });
    },
    updateInventory(data){
      return instance.post('/update-inventory', {
        data,
      });
    },
  };
};
