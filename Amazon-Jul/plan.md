- first build the header part we call it Header.js and Header.css component/ basket from material ui
- create a component we call it Home.js and Home.css
- on Home.js we will have banner image and fade it by using linear gradient and use margin-bottom = -150px
- and render both Header.js and Home.js on app.js
- the other component are Product.js and Product.css
- and we render this product.js on Home.js and the z-index = 1 to became on the top
- on Product.js we will have different products each products have id, title, price, rating, product image and a button called Add to basket
- we pass values from Home.js component from the render component called <Product id=..., title=..., price=...., rating=..., image=.... /> and then distructure on product.js like this {id, title, price, rating, image}

- then build CheckOut.js component and CheckOut.css component
- instal npm i react-router-dom
- import { BrowserRouter } from "react-router-dom"; and on index.js wrap our <App /> by BrowserRouter
- and go to App.js import { Routes, Route } from "react-router-dom"; and create routes for CheckOut.js <Route path="/checkout" element={<CheckOut />} />
- when we at the adress of localhost:3000/checkout we will render CheckOut.js component
- then build Subtotal.js and Subtotal.css component and install npm i react-currency-format
- on subtotal component import CurrencyFormat from react-currency-format
- and we use just like this <CurrencyFormat /> use renderText mean render as a text
- this Subtotal.js component render on CheckOut.js
- to get a route to the checkout we need to wrap the baket icon by <link to="/checkout"></link>
- to get a route to the home we need to wrap the amazon logo by <link to="/"></link>

- to create a data laye we create StateProvider.js and import React, {createContext, useContext, useReducer} from 'react';
- prepare the datalayer export const StateContext = createContext();
- using StateContext.provider we are going to provide a data layer for the childer components
- and by using useContext we can pull and push our data so we export const useStateValue = () => useContext(StateContext)
- and we are going to wrap our App on index.js by <StateProvider initialState={initialState} reducer = {reducer}> and provide to our app initial sate and reducer

- and create file we call it reducer, declare initialState of the basket empty array just like this baket: [] on it then export and import on index.js import reducer,{ initialState } from "./Pages/reducer";

- and write a reducer function on reducer files, a reducer function take two parameter called the initial state of the app and action. and we will have a switch case inside the function with different case type if that case fulfill it returns the updated state of the basket.

- then go to the button of Add to basket and when the button onClick run a function addToBasket.
- to push to the datalayer we use dispatch and the state is the state of the data layer or app mean we need the state of the basket const [{basket}, dispatch] = useStateValue();

- by going to the Header.js component we can know the number of item in the basket (basket.length)
- and go to also to the Subtotal component to know the number of basket item (basket.length)

- go to subtotal component and calcualte the total amount of the price, on value= a function {getBaketTotal(basket)} give the the baket as an argument and use reduce method of array to calculate the total price and pass the value

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

explanation

In this example, we have an array numbers containing [1, 2, 3, 4, 5]. We use the reduce method to calculate the sum of all the numbers in the array. The reduce method starts with an initial value of 0 for the total accumulator.

During each iteration, the num represents each number in the array (1, 2, 3, 4, 5), and we add it to the total accumulator. So, the first iteration adds 1 to 0, resulting in 1. The second iteration adds 2 to 1, resulting in 3. The third iteration adds 3 to 3, resulting in 6, and so on.

The reduce method continues this process until it goes through all the numbers in the array, resulting in the final sum, which is 15 (1 + 2 + 3 + 4 + 5).

- create a product called CheckOutProduct.js and CheckOutProduct.css and render on CheckOut.js
- then pull our data layer and pass id, title, rating, image and price by using map as a props to CheckOutProduct.js from CheckOut.
- then accept by destructuring {id,rating,price,image,title } on CheckOutProduct.js

- how to remove from basket. onClick = write a function {removeFromBasket} and action type REMOVE-FROM-BASKET using the id the on reduce we will have a case type REMOVE-FROM-BASKET

  (example)

  const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  ];

// Find the index of the student with ID 3
const studentIndexToRemove = students.findIndex((student) => student.id === 3);

// Remove the student from the array using splice
if (studentIndexToRemove !== -1) {
students.splice(studentIndexToRemove, 1);
}

console.log(students);

(output)
[
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
{ id: 4, name: "David" },
]

- next create Login.js and Login.css component
- create a path and route fot /login
- we use hooks to grap emails and password using useState by onChange method.
- button onclick = write a function signIn and button type submit
- to create account onclick - write a function called {register}

- then go to the fire base click get started, add project, add project name, continue, anable , continue, select an account default,
  create project continue
- presss this <> register app Amazone-clone then register app next and copy and install npm install -g firebase-tools then next
  continue to console
- then go to the project settings and copy by selecting config

- create a firebase.js and paste it here

- then go to one of the firebase servises Authentication and press get started go to signin method then enable email and password
  then save

- then npm i firebase

- then first make the registration using auth.createwithEamailandPaswerd(email,pasword)
- then the last step for sign in use auth.signInWithEmailAndPassword(email, password)

- as areminder if a user logged in he can access the entire page we must tell for our data layer there is a user
  use this auth.onAuthStateChanged then dispatch type SET_USER and user authUser
- if a user is logged out make it user: null( we write this code on our app.js using useEffect)

- then go to reducer and create case for type SET_USER set the user by the new one logged in
- then go to the header.js and pull the user email and give to the guest

- onclick = write {handleauthentication} for signOUt

backend

- proceed to checkout
- on subtotal onclick on the button of proceed to checkout directly navigate to Payement Component
- configure route on App.js
- on Payement.js component we take our basket from the data layer and render here from <CheckOutProduct>
  using map method
- to create a payment method we install the following modules 
- npm i @stripe/stripe-js
- npm i @stripe/react-stripe-js
- import {loadstripe} on app.js
- import Elements from @stripe/react-stripe-js on app.js
- then go to stripe.com get publishable key and load on stripe method then wrap payment modules by Elements to use stripe functionality
- then import this two const stripe = useStripe();
  const elements = useElements(); from from "@stripe/react-stripe-js";
- and imoprt cardElement and use it for card
- and use here currency format for order total
- and use two useSate one is for error and the other for to disable the buy now button
- and also create a sates processing and succeded
- create a function onSumit for handlesumit for the form
- onchange also for when we give an input to the card element onChange={handleChange} this function run and from disable to enable the button of buy 
- next to get client secret we use useState and useEffect 
- npm i axios
- create axios file and create a baseURL
- then go to inside hanlesumit function say it confirm the payement by geting the card element what we give as an input by the payement method of card 
- and navigate to the order page

// backend

- firebase init 
- select function and enter
- javascript
- Eslint yes
- install dependencies yes

- it creates a function we call it the backend
- then go to the back end cd functions/
- install npm i express, npm i cors, npm i stripe

- import secret key from stripe
- app.use(express.json()); mean to parse JSON format what we send the files

- activate cloud function and we listen using this Listen Command
// Listen Command
exports.api = functions.https.onRequest(app);

- then create a route 
app.get("/", (request, response) => response.status(200).send("hello world"));
mean on this / route give me a response helo world using the base url http://127.0.0.1:5001/feb-22892/us-central1/api

- then start firebase emulators:start
- after that we get the api key http://127.0.0.1:5001/feb-22892/us-central1/api
functions[us-central1-api]: http function initialized (http://127.0.0.1:5001/feb-22892/us-central1/api).

here it is our baseURl: http://127.0.0.1:5001/feb-22892/us-central1/api.

- to see the emulator use tis link  View Emulator UI at http://127.0.0.1:4000/     
- and also we see our logs here

- on backend we say if you gate a post from this route http://127.0.0.1:5001/feb-22892/us-central1/api/payments/create
- any thing after question mark we call it query

- we can see our payement on strip what we credit on our account
- next order payement and database

- on cloudefire store create a database
- create database
- start in test mode
- next
- enable
- if we say db.collection ... mean we acces our database of cloudfirestore
- db.collection(user)  mean create a collection called user then by user id create a document and also create a collection called orders
.set mean load and created mean the time the payement is made

- finaly create orders page

- .onSnapshot((snapshot) => ... ): This sets up a real-time listener for the query. Whenever the data in the "orders" subcollection changes, the provided callback function will be called with a new snapshot of the data.

- setOrders(...): This is a state updater function that sets the component's local state variable named orders to the new value returned by the callback function.

- snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })): This maps each document in the snapshot to an object with two properties: "id" (the ID of the document) and "data" (the data contained in the document).

- setOrders(...) (again): Finally, the mapped array of orders is set as the new value of the orders state variable using setOrders. This will cause the component to re-render with the updated orders.

-else { setOrders([]); }: If there is no user logged in (user is null or undefined), the orders state is set to an empty array, clearing any previously fetched orders.

- Overall, this code is fetching orders from a Firestore collection called "orders" for a specific user and updating the component's state with the retrieved data. The component will automatically update whenever new orders are added or removed from the "orders" subcollection, providing real-time updates.

- create a component called Order.js render on Orders.js
- npm i moment /to render time 
- first stop the emulator
- to deploy the backend - firebase deploy --only functions
- so currently I can not upgrade to blaze plan so i deploy only the frontend 
- firebase deploy --only hosting
