module.exports = function vendors(instance){
  return {
    addProductsToVendors(data){
      return instance.post('/add-products-to-vendor', data);
    },
    createVendor(data){
      return instance.post('/vendor-create', data);
    },
    listVendors(){
      return instance.get('/list-vendors')
    },
    removeProductFromVendor(params){
      return instance.get('/remove-product-from-vendor', {
        params,
      });
    },
  };
};
