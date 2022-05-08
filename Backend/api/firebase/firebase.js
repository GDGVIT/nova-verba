const admin = require('firebase-admin')
const dotenv = require("dotenv");
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    secretKey : process.env.SECRET_KEY,
    privateKey : process.env.PRIVATE_KEY,
    privateKeyId : process.env.PRIVATE_KEY_ID,
    clientId : process.env.CLIENT_ID,
    clientEmail : process.env.CLIENT_EMAIL,
    tokenUri: process.env.TOKEN_URI,
    authUri: process.env.AUTH_URI,
    authProviderX509CertUrl: process.env.AUTH_PROVIDER_X509_CERT_URL,
    clientX509CertUrl: process.env.CLIENT_X509_CERT_URL
};

// Initialize Firebase
admin.initializeApp(firebaseConfig);

module.exports = admin