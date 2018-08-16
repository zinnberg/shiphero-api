module.exports = function returns(instance){
  return {
    getReturn(params){
      return instance.get('/returns', {
        params,
      });
    },
    createReturn(data){
      return instance.post('/returns', {
        data,
      });
    },
  };
};
