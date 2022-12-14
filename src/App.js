import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Checkout from "./components/Checkout";
import { useStateValue } from "./context/StateProvider";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import HeaderLinks from "./components/HeaderLinks";
import { collectionGroup } from "firebase/firestore";
import SearchedProduct from "./components/SearchedProduct";

const promise = loadStripe(
  "pk_test_51LjtqUB69IYxqgvedGL3uYluzy7VuKvhwJ1euz0JjAn4PRZPAj4Px3bKiqbVu9i4Yp6YiYuexs4WFp31zaLD8ZLf00PwYIHVgq"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const [user, setUser] = useState("");
  // const dispatch = useStateValue();

  let params = useParams();
  console.log(params);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <HeaderLinks />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/:params" element={<SearchedProduct />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
