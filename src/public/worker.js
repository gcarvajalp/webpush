console.log('worker.js');

self.addEventListener('push', e =>{
  const data = e.data.json();
  console.log(data);
  console.log('Notification received');
  self.registration.showNotification(data.title,{
    body: data.message,
    icon: 'https://www.lubricar.cl/lubricar-ecommerce/web/bundles/opensite/images/icons/lubricar.svg'
  })
});