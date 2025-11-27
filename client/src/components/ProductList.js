// Product lists

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Axios from "axios";
import Footer from "./Footer";

function ProductLists() {
  const { theme } = useTheme();
  const [productList, setProductList] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newAvailability, setNewAvailability] = useState("");
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    Axios.get("http://localhost:3001/read")
    .then((response) => {
      setProductList(response.data)
    })
    .catch((err) => console.log(err));
  }

  function deleteProduct(id) {
    Axios.delete(`http://localhost:3001/delete/${id}`)
    .then(() => {
      fetchProducts()
    })
    .catch((err) => console.log(err));
  }

  function editProduct(id) {
    Axios.put("http://localhost:3001/edit", {id,newName,newPrice,newQuantity,newAvailability,newImage,})
    .then(() => {
      fetchProducts()
      setNewName("")
      setNewPrice("")
      setNewQuantity("")
      setNewAvailability("")
      setNewImage("")
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark" }`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <ul className="navbar-nav d-flex flex-row mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <span className="nav-link disabled">›</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products">Product List</Link>
            </li>
          </ul>
        </div>
      </nav>

      <h3 className="text-center text-primary fw-bold mt-3">Product List</h3>

      <section className="container d-flex flex-wrap justify-content-center">
        {productList.length > 0 ? (
          productList.map((val, key) => (
            <div key={key} className={`card shadow-sm p-3 m-3 text-center ${theme === "light" ? "bg-light" : "bg-secondary text-light"}`}
              style={{width: "320px",borderRadius: "15px",}}>
              <img src={val.image} alt={val.name} className="card-img-top mb-3 rounded" style={{ height: "250px", objectFit: "cover" }} />
              <h5 className="fw-bold">{val.name}</h5>
              <p className="mb-1">Quantity: {val.quantity}</p>
              <p className="mb-1">Availability: {val.availability}</p>
              <p className="text-success fw-bold mb-2">Rent: ₹{val.price} /Piece</p>

              {/* Edit */}
              <div className="text-start">
                <input type="text" placeholder="New Name" className="form-control mb-2" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                <input type="number" placeholder="New Price" className="form-control mb-2" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}/>
                <input type="number" placeholder="New Quantity" className="form-control mb-2" value={newQuantity} onChange={(e)=>setNewQuantity(e.target.value)}/>
                <select className="form-select mb-2 text-secondary" value={newAvailability} onChange={(e) => setNewAvailability(e.target.value)} >
                  <option value="">Select Availability</option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
                <input type="text" placeholder="Image URL" className="form-control mb-3" value={newImage} onChange={(e)=>setNewImage(e.target.value)}/>
              </div>

              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-warning text-white" onClick={() => editProduct(val._id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteProduct(val._id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mx-auto mt-4">
            <p>No products added yet.</p>
            <Link to="/addProduct" className="btn btn-primary">Add Product</Link>
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductLists;
