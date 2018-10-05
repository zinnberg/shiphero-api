module.exports = function webhooks(instance){
  return {
    getWebhooks(){
      return instance.get('/get-webhooks')
    },
    registerWebhook(data){
      return instance.post('/register-webhook', data);
    },
    unregisterWebhook(data){
      return instance.post('/unregister-webhook', data);
    },
  };
};
