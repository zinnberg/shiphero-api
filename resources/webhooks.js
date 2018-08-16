module.exports = function webhooks(instance){
  return {
    registerWebhook(data){
      return instance.post('/register-webhook', {
        data,
      });
    },
    unregisterWebhook(data){
      return instance.post('/unregister-webhook', {
        data,
      });
    },
    getWebhooks(){
      return instance.get('/get-webhooks')
    },
  };
};
