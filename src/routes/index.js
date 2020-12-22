const {Router} = require('express');
const router = Router();

const webpush = require('../webpush');
let pushSubscription;

router.post('/subscription', async (req, res) =>{
  pushSubscription = req.body;
  return res.status(200).json();
});

router.post('/message', async (req, res)=>{

  const {message} = req.body;

  const payload = JSON.stringify({
    title: "SBIS ERP",
    message: message
  });

  try{
    await webpush.sendNotification(pushSubscription,payload);
  }catch(err){
    console.log(err);
  }

});


module.exports = router;