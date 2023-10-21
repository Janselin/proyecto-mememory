navigator.serviceWorker.register('sw.js');


let initializeApp;

fetch('/__/firebase/init.json').then(async response => {
  const config = await response.json();
  initializeApp = initializeApp(config);
})

export const app = initializeApp;