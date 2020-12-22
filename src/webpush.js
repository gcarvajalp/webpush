const webpush = require('web-push');

const email = 'mailto:' + (typeof process.env.MAIL_TO !== 'undefined' ? process.env.MAIL_TO : 'test@gmail.com'); 

webpush.setVapidDetails(email,process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY);

module.exports = webpush; 