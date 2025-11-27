import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function RegisterPage() {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(e) {

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Welcome, ${name}! Your account has been created.`);
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
              <Link className="nav-link active" to="/register">Register</Link>
            </li>
          </ul>
            {/* <form className="d-flex" role="search">
              <Link to='/product'>Product Page</Link>
            </form> */}
        </div>
      </nav>
    <div className={`d-flex justify-content-center align-items-center my-5 ${ theme === "light" ? "bg-light" : "#121212"}`}>
      <div className={`card p-4 ${ theme === "light" ? "" : "bg-secondary text-light"}`}
        style={{ width: "380px", borderRadius: "15px" }}>
        <h3 className="text-center text-primary fw-bold mb-4">Create Account</h3>
        <form onSubmit={handleRegister}>
          <div>
            <label>Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label>Email Address</label>
            <input type="email"  className="form-control"  placeholder="Enter your email"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label>Password</label>
            <input  type="password"  className="form-control"  placeholder="Enter password"  value={password}  onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" className="form-control"  placeholder="Confirm password" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-2">Register</button>
        </form>
        <span className="mt-3 text-secondary fs-6">--or--</span>
        <div className="text-center mt-3">
          <p className="small mb-0">
            Already have an account?
            <Link to="/login" className="text-primary fw-bold text-decoration-none fs-6"> Login</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default RegisterPage;
