import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./Components/StateProvider/StateProvider.js"

import { BrowserRouter } from "react-router-dom";
import reducer,{ initialState } from "./Pages/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer = {reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);


// Replace reducer and initialState with your own reducer function and initial state.
// With these steps, you have created a data layer using a simplified format. The StateProvider wraps your app and provides the data layer using the useReducer hook. The useStateValue hook allows components to access the state and dispatch function from the data layer.

// Make sure to replace reducer and initialState with your own implementation in the index.js file.

