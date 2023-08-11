const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NQlGVB7j1gOJhJ5ZhYPkXaibI0jSwtX70IyIWfGXkyIFJbLbrVuhbNSHLSRYTOMsJdgECZmWJzu4e9WLVkrjeRG008gpXraqH"
);
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    response.status(201).send({
      message: "please provide total price",
    });
  }
});
exports.api = functions.https.onRequest(app);
