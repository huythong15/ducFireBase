const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.get('/helloworld', (request, response) => {
    response.send("DUC FIRE BASE");
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
