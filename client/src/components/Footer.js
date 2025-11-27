import React from 'react'
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp } from 'react-icons/fa';
function Footer() {
    const { theme } = useTheme();
    const footerBg = theme === "light" ? "#1E90FF" : "#222";
  return (
    <footer style={{ backgroundColor: footerBg }} className="text-light pt-5 pb-3 mt-4">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold text-white">About Us</h5>
              <p className="small mt-3">
                We provide top-quality sound and event management services
                for all types of functions including weddings, parties, and
                corporate events at affordable prices.
              </p>
              
              <div>
                <h5 className="fw-bold text-white mt-4">Follow Us</h5>
                <div className='d-flex justify-content-center justify-content-lg-start gap-2 fs-4'>
                    <FaInstagram/>
                    <FaFacebook/>
                    <FaWhatsapp/>
                    <FaPinterest/>
                    <FaTwitter/>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold text-white">Category</h5>
              <ul className="list-unstyled small mt-3">
                <li>Sound Systems</li>
                <li>Event Management</li>
                <li>Decorations</li>
                <li>Lighting</li>
                <li>Rentals</li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold text-white">Quick Links</h5>
              <ul className="list-unstyled small mt-3">
                <li>
                  <Link to="/" className="text-white text-decoration-none">Home</Link>
                </li>
                <li>
                  <Link to="/products" className="text-white text-decoration-none">Products</Link>
                </li>
                <li>
                  <Link to="/book" className="text-white text-decoration-none">Book Now</Link>
                  </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none">Contact</Link>
                </li>
                <li>
                  <Link to="/login" className="text-white text-decoration-none">Login</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold text-white">Useful Links</h5>
              <ul className="list-unstyled small mt-3">
                <li>My Account</li>
                <li>My Orders</li>
                <li>Booking</li>
                <li>New Offers</li>
              </ul>
            </div>
          </div>

          <hr className="border-light" />
          <div className="text-center small">
            &copy; 2025 <b>Sri Sounds & Event Management</b> | Designed by <b>Srikanth</b><br />
            All Rights Reserved | Privacy Policy | Terms & Conditions
          </div>
        </div>
      </footer>
  )
}

export default Footer