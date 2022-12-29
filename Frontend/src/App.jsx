import NavBar from "../components/atoms/NavBar";
import Footer from "../components/atoms/Footer";
import HomePage from "../components/HomePage/HomePage";
import AdminPage from "../components/AdminPage/AdminPage";
import LoginPage from "../components/LoginPage/Login";
import SignupPage from "../components/SignupPage/SignupPage";
import Profile from "../components/ProfilePage/Profile";
import Reservation from "../components/ReservationPage/ReservationPage";
import Cart_Page from "../components/CartPage/CartPage";
import Employee from "../components/Employees/Employee";
import Provider from "../components/ProviderPage/Provider";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import ProductsPage from "../components/ProductsPage/ProductsPage";
import ProductPage from "../components/ProductPage/ProductPage";
import Protected from "../components/atoms/ProtectedRoute";
export const BACKEND = "https://dbproject-zbiu.onrender.com";
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
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  }
  const storeCart = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
    setCart(cart);
  };

  const clearUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    clearCart();
  };
  const logUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };
  return (
    <div className="min-h-screen relative flex flex-col">
      <cartContext.Provider value={{ cart, addItem, clearCart }}>
        <userContext.Provider value={{ user, clearUser, logUser }}>
          <NavBar />
          <Routes>
            <Route path="/" element={
              <Protected isSignedIn={!user || user && user.kind === 'c'}>
                <HomePage />
              </Protected>
            } />
            <Route path="/admin" element={
              <Protected isSignedIn={user && user.kind === 'a'}>
                <AdminPage />
              </Protected>
            } />
            <Route path="/menu/:id" element={
              <Protected isSignedIn={!user || user.kind === 'c'}>
                <ProductsPage />
              </Protected>
            } />
            <Route path="/product/:id" element={
              <Protected isSignedIn={!user || user.kind === 'c'}>
                <ProductPage />
              </Protected>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={
              <Protected isSignedIn={user && user.kind === 'c'}>
                <Cart_Page />
              </Protected>
            } />
            <Route path="/reservations" element={
              <Protected isSignedIn={user && user.kind === 'c'}>
                <Reservation />
              </Protected>
            } />
            <Route path="/profile" element={
              <Protected isSignedIn={user && user.kind === 'c'}>
                <Profile />
              </Protected>
            } />
            <Route path="/employee" element={
              <Protected isSignedIn={user && user.kind === 'e'}>
                <Employee />
              </Protected>
            } />
            <Route path="/provider" element={
              <Protected isSignedIn={user && user.kind === 'p'}>
                <Provider />
              </Protected>
            } />
          </Routes>
          <Footer />
        </userContext.Provider>
      </cartContext.Provider>
    </div>
  );
};

export default App;
