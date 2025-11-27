import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import AddProduct from "./components/AddProduct";
import ProductLists from "./components/ProductList";
import BookAppointment from "./components/Book";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CartPage from "./components/CartPage";
import './App.css'

function App(){  
  return(

    <div>

      <ThemeProvider>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<ProductPage/>}></Route>
            <Route path="/addProduct" element={<AddProduct/>}></Route>
            <Route path="/productList" element={<ProductLists />}></Route>
            <Route path="/book" element={<BookAppointment />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  )
}
export default App