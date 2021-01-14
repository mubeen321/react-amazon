const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe=require('stripe')(
"sk_test_51HytwbHUAkH526jvEciok3hnr6UmdnhsT63wyMgvwvHMdzOMe6hHd7MXfcd3Tkp3taRovVFgIhi7PeDq4mDWBXUx00no898siB")

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/mubeen", (request, response) => response.status(200).send("Hey Mubeen"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd",
  });

//   OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// "http://localhost:5001/fir-634ba/us-central1/api"