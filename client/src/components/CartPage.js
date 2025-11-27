import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'
import Footer from './Footer';
import App from '../App';

function CartPage() {
    const { theme } = useTheme();

    const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    console.log(cart);

    const [cartCount, setCartCount] = useState(cart.length)
    
    function removeProduct(productName){
        console.log(productName);
        const updatedCart = cart.filter((item) => item.name !== productName)
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        console.log(cart);  
        setCartCount(cartCount-1)
    }

    function clearCart(){
      localStorage.clear()
      setCart([])
      setCartCount(0)
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
              <Link className="nav-link active" to="/cart">Cart</Link>
            </li>
          </ul>
          <div>
            <p className={theme === 'light' ? `text-dark` : `text-licgt`}>Total Product: {cartCount}</p>
            <button className='btn btn-outline-secondary' onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      </nav>

      <h3 className='text-center text-primary fw-bold mt-3 mb-3'>Cart Products</h3>
      
      {/* cart */}
      <div className="container my-5">
        <div className="row">
          {cart.length > 0 ? (
            cart.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card shadow-sm border-0 rounded-3 h-100">
                  <img src={product.image} alt={product.name} className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                      <h5 className="card-title fw-semibold text-black">{product.name}</h5>
                      <p className="text-success fw-bold mb-2">Rent: ₹{product.price} / Piece</p>
                      <p className='text-secondary'>Category: {product.category}</p>
                      <Link to="/book" className="btn btn-outline-primary btn-sm me-2">Book Now</Link>
                      <button className="btn btn-outline-primary btn-sm" onClick={() => removeProduct(product.name)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
            <div className="text-center">
              <img src='/Images/cart.gif'style={{height:'250px'}}/> <br />
              <p className="text-danger fs-3 fw-bold">Your Cart is Empty</p>
              <Link to='/products' className='btn btn-primary'>Add Products</Link>
            </div>
           )}
          </div>
        </div>

        {/* footer */}
        <Footer />
    </div>
  )
}

export default CartPage