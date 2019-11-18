// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here, other Firebase libraries
// // are not available in the service worker.

importScripts('https://www.gstatic.com/firebasejs/6.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.6.0/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/6.6.0/firebase.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
   'messagingSenderId': '741511518277'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var obj = JSON.parse(payload.data.notification);
  const notificationTitle =obj.title;
  const notificationOptions = { 
    // body: 'Background Message body.',
    vibrate: [100, 50, 100]
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(self.clients.openWindow(event.notification.data));
});