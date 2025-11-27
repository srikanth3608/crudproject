// Home page

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Footer from "./Footer";

function Home() {
  const { theme } = useTheme();
  

  const products = [
    { id: 1, name: "Mixture", price: 4500, availability: "Availability", image: "/Images/mixture.jpg" },
    { id: 2, name: "Lights", price: 8000, availability: "Availability", image: "/Images/light.jpg" },
    { id: 3, name: "Mic", price: 1500, availability: "Availability", image: "/Images/mic.jpg" },
    { id: 4, name: "Decoration Tent", price: 5000, availability: "Availability", image: "/Images/tent.jpg" },
    { id: 5, name: "Table & Chairs", price: 2000, availability: "Availability", image: "/Images/table.jpg" },
  ];

  const upcomingProducts = [
    { id: 1, name: "DJ", availability: "Coming Soon", image: "/Images/dj.jpg" },
    { id: 2, name: "Photography", availability: "Coming Soon", image: "/Images/camera.jpg" },
  ];

  return (
    <div className={theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}>
      <section className="text-center py-5" style={{backgroundImage: "url('./Images/bg.jpg')", backgroundSize: "cover",
          backgroundPosition: "center", color: "white",}}>
        <div className="bg-dark bg-opacity-50 py-5">
          <h1 className="fw-bold display-4">Sri Sounds & Event Management</h1>
          <p className="lead">We Bring Life to Every Celebration</p>
          <p className="lead">Your One-Stop Solution for Events, Sounds & Lighting</p>
          <Link to="/products" className="btn btn-primary mt-3 px-4 py-2">
            View Products
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="container py-5">
        <h2 className="fw-bold text-center">About <span className="text-primary">Us</span></h2>
        <p className="text-center w-75 mx-auto">
          At <b>Sri Sounds & Event Management</b>, we specialize in providing high-quality
          sound systems, lighting setups, and event decoration services. With years of
          experience, our mission is to make every event unforgettable — whether it's a
          wedding, concert, or corporate celebration.
        </p>
      </section>

      {/* featured products */}
      <section className="container py-5">
        <h2 className="fw-bold text-center">Featured <span className="text-primary">Products</span></h2>
        <div className="row justify-content-center">
          {products.map((val, key) => (
            <div key={key} className="col-md-3 m-3">
              <div className={theme === "light" ? "card shadow" : "card shadow bg-secondary text-light"}>
                {val.image && (
                  <img src={val.image} className="card-img-top" alt={val.name} style={{ height: "200px", objectFit: "cover" }} />
                )}
                <div className="card-body text-center">
                  <h5 className="card-title">{val.name}</h5>
                  <p className="card-text">₹{val.price}</p>
                  <p className="text-muted small">Available: {val.availability}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <Link to="/products" className="btn btn-outline-primary">See All Products</Link>
        </div>
      </section>

      {/* upcoming products */}
      <section className="container py-5">
        <h2 className="fw-bold text-center">Upcoming <span className="text-primary">Products</span></h2>
        <div className="row justify-content-center">
          {upcomingProducts.map((val, key) => (
            <div key={key} className="col-md-3 m-3">
              <div className={theme === "light" ? "card shadow" : "card shadow bg-secondary text-light"}>
                <img src={val.image} className="card-img-top" alt={val.name} style={{ height: "300px", objectFit: "cover" }}/>
                <div className="card-body text-center">
                  <h5 className="card-title">{val.name}</h5>
                  <p className="text-muted small">{val.availability}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact */}
      <section className="container text-center py-5">
        <h2 className="fw-bold">Contact <span className="text-primary">Us</span></h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold d-flex justify-content-center align-items-center gap-2 mb-3"><FaMapMarkerAlt /> Address</h5>
              <p>East Street, Periyanagalur Post, Ariyalur Main Road,<br />
                Ariyalur - 621 704, Tamil Nadu.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold d-flex justify-content-center align-items-center gap-2 mb-3"><FaEnvelope /> Email</h5>
              <p>sridharelectronics1985@gmail.com</p>
              <p>sri3608j@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold d-flex justify-content-center align-items-center gap-2 mb-3"><FaPhoneAlt /> Phone</h5>
              <p>+91 9585930984</p>
              <p>+91 9751243316</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
