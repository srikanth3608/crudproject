// Product page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Filterprodct from './Filterprodct';
import Footer from './Footer';

function ProductPage() {
  const { theme } = useTheme();

  const products = [
    { id: 1, name: "Mixture", price: 1500, image: "/Images/mixture.jpg", category: "Mixture"},
    { id: 2, name: "Amplifiers", price: 1500, image: "/Images/amp.jpg", category: "Audio Equipment"},
    { id: 3, name: "Speakers", price: 1000, image: "/Images/speaker.png", category: "Audio Equipment"},
    { id: 4, name: "Decorative Lights", price: 800, image: "/Images/light.jpg", category: "Lighting"},
    { id: 5, name: "Lights Bulp", price: 900, image: "/Images/light2.jpg", category: "Lighting"},
    { id: 6, name: "Mic", price: 150, image: "/Images/mic.jpg" , category: "Audio Equipment"},
    { id: 7, name: "Decoration Panthal", price: 2000, image: "/Images/tent.jpg", category: "Stage & Tent Setup" },
    { id: 8, name: "Decoration Panthal", price: 2000, image: "/Images/tent2.jpg", category: "Stage & Tent Setup" },
    { id: 9, name: "Royal Table & Chairs", price: 500, image: "/Images/table.jpg", category: "Furniture" },
    { id: 10, name: "Electrical Generator", price: 1500, image: "/Images/generator.jpeg", category: "Electrical Equipment" },
    { id: 11, name: "Diesel Generator", price: 2500, image: "/Images/generator1.png", category: "Electrical Equipment" },
    { id: 12, name: "Big Amplifiers", price: 1000, image: "/Images/products/amp1.jpg" },
    { id: 13, name: "Amplifiers", price: 800, image: "/Images/products/amp2.webp", category: "Audio Equipment", category: "Audio Equipment" },
    { id: 14, name: "Amplifiers", price: 800, image: "/Images/products/amp3.jfif", category: "Audio Equipment" },
    { id: 15, name: "Tower Speakers", price: 800, image: "/Images/products/speaker1.jfif", category: "Audio Equipment" },
    { id: 16, name: "Tower Speakers", price: 1000, image: "/Images/products/speaker2.jpg" , category: "Audio Equipment"},
    { id: 17, name: "8'' 4xSpeaker", price: 1500, image: "/Images/products/speaker3.jfif" , category: "Audio Equipment"},
    { id: 18, name: "Base Speaker", price: 1200, image: "/Images/products/speaker4.jfif", category: "Audio Equipment" },
    { id: 19, name: "Horn", price: 200, image: "/Images/products/horn1.jfif", category: "Audio Equipment" },
    { id: 20, name: "Wall Serial Lights", price: 150, image: "/Images/products/light1.webp", category: "Lighting" },
    { id: 21, name: "Serial Lights", price: 100, image: "/Images/products/light2.jfif", category: "Lighting" },
    { id: 22, name: "Serial Light", price: 100, image: "/Images/products/light3.jfif", category: "Lighting" },
    { id: 23, name: "House Serial Lights", price: 150, image: "/Images/products/light4.jfif", category: "Lighting" },
    { id: 24, name: "LED Tube Light", price: 50, image: "/Images/products/light5.jpg", category: "Lighting"},
    { id: 25, name: "Chairs", price: 5, image: "/Images/products/chair1.jpg", category: "Furniture"},
    { id: 26, name: "Soft Chairs", price: 10, image: "/Images/products/chair2.jpg", category: "Furniture" },
    { id: 27, name: "Table", price: 30, image: "/Images/products/table1.webp", category: "Furniture" },
    { id: 28, name: "Table", price: 30, image: "/Images/products/table2.webp", category: "Furniture"},
    { id: 29, name: "Single Stove", price: 600, image: "/Images/products/stove1.jfif", category: "Cooking Equipment" },
    { id: 30, name: "Double Stove", price: 1000, image: "/Images/products/stove2.webp", category: "Cooking Equipment"},
    { id: 31, name: "Cooking Things", price: 500, image: "/Images/products/cook1.jpg", category: "Cooking Equipment"},
    { id: 32, name: "Cooking Pathiram", price: 600, image: "/Images/products/cook2.jfif", category: "Cooking Equipment"},
    { id: 33, name: "Cooking Pathiram", price: 700, image: "/Images/products/cook3.jfif", category: "Cooking Equipment"},
    { id: 34, name: "Cooking Pathiram", price: 800, image: "/Images/products/cook4.jfif", category: "Cooking Equipment"},
    { id: 35, name: "Stage ", price: 2000, image: "/Images/products/stage1.webp", category: "Stage & Tent Setup"},
    { id: 36, name: "Stage", price: 2500, image: "/Images/products/stage2.jfif", category: "Stage & Tent Setup"},
    { id: 37, name: "Saminatha Panthal", price: 1200, image: "/Images/products/tent1.webp", category: "Stage & Tent Setup"},
    { id: 38, name: "Saminatha Panthal", price: 1200, image: "/Images/products/tent2.jfif", category: "Stage & Tent Setup"},
    { id: 39, name: "Design Panthal", price: 1800, image: "/Images/products/tent3.jfif", category: "Stage & Tent Setup" },
    { id: 40, name: "Design Panthal", price: 2000, image: "/Images/products/tent4.jpg", category: "Stage & Tent Setup" },
    { id: 41, name: "Welcome Board", price: 400, image: "/Images/products/welcome1.jfif",category: "Decor & Display"},
    { id: 42, name: "Welcome Board", price: 500, image: "/Images/products/welcome2.jfif", category: "Decor & Display" },
  ];

  const [filteredKeyword, setFilteredKeyword] = useState('')

  const searchProduct = () => {
    const searchItem = document.getElementById('search').value;
    setFilteredKeyword(searchItem);
  };

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
              <Link className="nav-link active" to="/products">Products</Link>
            </li>
          </ul>

          {/* search */}
          <div className="d-flex flex-end align-items-center">
            <input className="form-control me-2" type="search" id="search" placeholder="Search Products"
              aria-label="Search" style={{ width: '250px' }} />
            <button type="button" className="btn btn-primary" onClick={searchProduct} >Search</button>
          </div>
        </div>
      </nav>

      <h3 className="text-center my-3 fw-bold text-primary">Available Rental Products</h3>

      <Filterprodct products={products} filteredKeyword={filteredKeyword} sortDirection="asc" />

      {/* Footer */}
      <Footer />
      
    </div>
    
  );
}

export default ProductPage;
