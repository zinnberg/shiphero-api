module.exports = function vendors(instance){
  return {
    listVendors(){
      return instance.get('/list-vendors')
    },
    removeProductFromVendor(params){
      return instance.get('/remove-product-from-vendor', {
        params,
      });
    },
    createVendor(data){
      return instance.post('/vendor-create', {
        data,
      });
    },
    addProductsToVendors(data){
      return instance.post('/add-products-to-vendor', {
        data,
      });
    }
  };
};
