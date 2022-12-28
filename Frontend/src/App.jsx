import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage/HomePage";
import AdminPage from "../components/AdminPage/AdminPage";
import LoginPage from "../components/LoginPage/Login";
import SignupPage from "../components/SignupPage/Signup";
import Profile from "../components/Profile";
import Reservation from "../components/ReservationPage/ReservationPage";
import ProductsPage from "../components/ProductPage/ProductPage";
import Cart_Page from "../components/Cart_Page";
import ProductInfoPage from "../components/ProductInfoPage"
import Employee from "../components/Employees/Employee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import Employee from "../components/Employees/Employee";
import Provider from "../components/ProviderPage/Provider";
export const userContext = createContext({});
export const cartContext = createContext([]);

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  const addItem = (item, qty = undefined) => {
    const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
    let flag = 0;
    if (cart.length != 0) {
      for (let i in cart) {
        if (item.item_name === cart[i].item_name) {
          flag = 1;
          if (qty === 0) {
            cart.splice(i, 1);
          } else if (qty > 0) {
            cart[i].qty = qty;
          } else {
            cart[i].qty = cart[i].qty + 1;
          }
          break;
        }
      }
    }
    if (!flag) cart.push({ ...item, qty: 1 });
    storeCart(cart);
  };
  const storeCart = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
    setCart(cart);
  };

  const clearUser = () => {
    setCart([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("user");
    setUser(null);
  };
  const logUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };
  return (
    <Router>
      <div className="min-h-screen relative flex flex-col">
        <cartContext.Provider value={{ cart, addItem }}>
          <userContext.Provider value={{ user, clearUser, logUser }}>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/menu/:id" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductInfoPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/cart" element={<Cart_Page />} />
              <Route path="/reservations" element={<Reservation />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/employee" element={<Employee />} />
            </Routes>
            <Footer />
          </userContext.Provider>
        </cartContext.Provider>
      </div>
    </Router>
  );
};

export default App;
