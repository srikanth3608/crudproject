import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please enter both email and password");
    } else {
      alert(`Welcome back!`);
    }
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
              <Link className="nav-link active" to="/login">Login</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <Link to='/product'>Product Page</Link>
          </form> */}
        </div>
      </nav>
      <div className={`d-flex justify-content-center align-items-center mt-5 ${ theme === "light" ? "bg-light" : "#121212"}`}>
        <div  className={`card p-4 ${theme === "light" ? "" : "bg-secondary text-light"}`}style={{ width: "350px", borderRadius: "15px" }}>
          <h3 className="text-center text-primary fw-bold mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="">
              <label>Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
          </form>
          <span className="mt-3 text-secondary">--or--</span>
          <div className="text-center mt-3">
            <p className="small mb-2 fs-6">
              Don't have an account?
              <Link to="/register" className="text-primary fw-bold text-decoration-none"> Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
