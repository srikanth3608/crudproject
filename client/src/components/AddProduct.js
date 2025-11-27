// Add product

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Axios from 'axios'
import Footer from './Footer'

function AddProduct() {
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [quantity,setQuantity] = useState("")
  const [availability,setAvailability] = useState("")
  const [image,setImage] = useState("")

  const navigate = useNavigate()
  const { theme } = useTheme()

  function addProductData(){
    if (!name || !price || !quantity || !availability) {
       alert("Please fill all fields before adding a product to Database!");
      return;
    }
    Axios.post('http://localhost:3001/insert', {name,price,quantity,availability,image})
    .then((response) => {
      console.log(response);
      navigate('/productList')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div>
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
              <Link className="nav-link active" to="/addProduct">Add Product</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <Link to='/product'>Product Page</Link>
          </form> */}
        </div>
      </nav>

        <h3 className='text-center text-primary fw-bold mt-3 mb-3'>Add Products</h3>

        <div className='text-center mb-5'>
            <input type="text" placeholder='Product Name' className='form-control w-25 mx-auto mb-2' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder='Product Price' className='form-control w-25 mx-auto mb-2' value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="number" placeholder='Product Quantity' className='form-control w-25 mx-auto mb-2' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            <select className='form-select w-25 mx-auto mb-2 text-secondary' value={availability} onChange={(e) => setAvailability(e.target.value)}>
              <option value={""}>-- Select Availability --</option>
              <option value={"Available"}>Available</option>
              <option value={"Not Available"}>Not Available</option>
            </select>
            <input type="text" placeholder='Product Image src' className='form-control w-25 mx-auto mb-2' value={image} onChange={(e) => setImage(e.target.value)}/>
            <button className='btn btn-primary mt-2' onClick={addProductData}>Add Product To Database</button>
        </div>

        {/* Footer */}
        <Footer />
        
    </div>
  )
}

export default AddProduct