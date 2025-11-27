import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'

function Filterprodct({ products, filteredKeyword, sortDirection }) {

  let cart = JSON.parse(localStorage.getItem("cart")) || []
  console.log(cart);
  
  function addToCart(product){
    const alreadyInCart = cart.some((item) => item.name === product.name)
    if(alreadyInCart){
      alert(`${product.name} already in Cart`)
    }
    else{
      alert(`${product.name} added to Cart`)
      cart.push(product)
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }

  const { theme } = useTheme();
    
  try {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(filteredKeyword.toLowerCase())
    );

    // const sorted = [...filtered]
    const sorted = [...filtered].sort((a, b) =>
      sortDirection === 'asc' ? a.price - b.price : b.price - a.price
    );

    return (
      <div className="container my-4">
        <div className="row">
          {sorted.length > 0 ? (
            sorted.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card shadow-sm border-0 rounded-3 h-100">
                  <img src={product.image} alt={product.name} className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-semibold text-black">{product.name}</h5>
                    <p className="text-success fw-bold mb-2">Rent: ₹{product.price} / Piece</p>
                    <p className='text-secondary'>Category: {product.category}</p>
                    <Link to="/book" className="btn btn-outline-primary btn-sm me-2">Book Now</Link>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => addToCart(product)}>Add To Cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p className="text-danger fw-semibold">No Results Found</p>
            </div>
          )}
        </div>
      </div>
    );
  } 
  catch (err) {
    console.error(err);
    return (
      <div className="text-center">
        <p>Something went wrong.</p>
      </div>
    );
  }
}

export default Filterprodct;
