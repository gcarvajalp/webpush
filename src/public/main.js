const PUBLIC_VAPID_KEY = 'BGKE9cnjctJfvhDbZdffXSjoNBHc5mqEn9zb5IjjDxiuQceiw9QetjFX-nYDPc6O1cDGyzEHDgBcajsbpfP1syU';


function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
 
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const subscription = async () => {
  
  // Service Worker
  const register = await navigator.serviceWorker.register('./worker.js',{
    scope: '/'
  });

  const susbcription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey:  urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
  });
  
  await fetch('/subscription',{
    method: 'POST',
    body: JSON.stringify(susbcription),
    headers: {
      'Content-Type':'application/json'
    }
  });

  console.log('subscribed');
};

const form = document.querySelector('#myform');
const message = document.querySelector('#message');

form.addEventListener('submit', e =>{
  e.preventDefault();

  fetch('/message',{
    method: 'POST',
    body: JSON.stringify({message: message.value}),
    headers:{
      'Content-Type': 'application/json'
    }
  });

  form.reset();
});


subscription();