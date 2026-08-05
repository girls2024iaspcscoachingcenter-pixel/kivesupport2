importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyBUPIULkKxZx0d7sX6kag2Fa-nmkgjnDA8",
    authDomain: "livesupports-65142.firebaseapp.com",
    databaseURL: "https://livesupports-65142-default-rtdb.firebaseio.com",
    projectId: "livesupports-65142",
    storageBucket: "livesupports-65142.firebasestorage.app",
    messagingSenderId: "697418784895",
    appId: "1:697418784895:web:c1f21e30d218a1cb3f9f4a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "https://cdn-icons-png.flaticon.com/512/8280/8280802.png"
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
