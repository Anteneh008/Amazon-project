import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import CheckOut from "./Pages/CheckOut/CheckOut";
import SharedLayOut from "./Pages/SharedLayOut";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { auth } from "./Components/Login/Firebase";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
import DetailExplanation from "./Components/DetailExplanation/DetailExplanation";
import SearchResults from "./SearchResults/SearchResults";


const promise = loadStripe(
  "pk_test_51NQlGVB7j1gOJhJ5VVhMHXirbt9Gqo8XCSLUB30Gf2KHfo8erp84yS3Pi4smWXp4t0POtTUCUx1GxxNbaYDuVeOc00yry6il59"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          // user logged out
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SharedLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/detail/:id" element={<DetailExplanation />} />
          <Route path="/search" element={<SearchResults />} />

          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
