//Booking

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Axios from 'axios'
import Footer from "./Footer";

const BookAppointment = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [] 
  const { theme } = useTheme();

  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [date,setDate] = useState("")
  const [details,setDetails] = useState("")

  function addCustomerData(){
    if(!name || !phone || !date || !details){
        alert(`Please Fill the Form`)
      }
    else{
      Axios.post('http://localhost:3001/customerInsert', {name,phone,date,details})
      .then((response) => {
        console.log(response);
        alert(`Hi ${name}, Your booking is Success`)
      })
      .catch((err) => console.log(err))
     }
  }

  return (
    <section className="book-section p-0 ">
    <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <ul className="navbar-nav d-flex flex-row mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <span className="nav-link disabled">›</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/book">Booking</Link>
          </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <Link to='/product'>Product Page</Link>
          </form> */}
        </div>
      </nav>

      <h2 className="mt-5">Book Your Appointment</h2>
      <p className="mt-2">Once You Enter The Details, Our Team Will Contact You.</p>
      <form>
        <input type="text" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <textarea name="details" placeholder="Event Details" value={details} onChange={(e) => setDetails(e.target.value)} rows="4" ></textarea>
        {/* <div>
          {cart.length > 0 ? (
            <div>
              {cart.map((product) => (
                <div className="d-flex justify-content-evenly align-items-center border border-1 bg-light">
                  <p>{product.name}</p>
                  <img src={product.image} alt={product.name} style={{height:'100px'}} />
                  <p>Price: ₹{product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p className="text-danger">Your Cart is Empty</p>
              <Link to="/products" className="btn btn-outline-primary">View Products</Link>
            </div>
          )}
        </div> */}
        <button type="submit" onClick={addCustomerData}>Submit</button>
      </form>

      {/* Footer */}
      <Footer />

    </section>
  );
};

export default BookAppointment;

