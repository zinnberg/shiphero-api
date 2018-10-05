module.exports = function returns(instance){
  return {
    createReturn(data){
      return instance.post('/returns', data);
    },
    getReturn(params){
      return instance.get('/returns', {
        params,
      });
    },
  };
};
