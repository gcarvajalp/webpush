console.log('worker.js');

self.addEventListener('push', e =>{
  const data = e.data.json();
  console.log(data);
  console.log('Notification received');
  self.registration.showNotification(data.title,{
    body: data.message,
    icon: 'https://cdn3.iconfinder.com/data/icons/facebook-ui-flat/48/Facebook_UI-20-512.png'
  })
});