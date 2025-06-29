import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    console.log("Logging in with:", email, password);
    navigate("/"); 
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>

              {/* Social Login Buttons */}
              <div className="d-grid gap-2 mb-3">
                <button className="btn btn-social btn-google">
                  <i className="bi bi-google me-2"></i> Sign in with Google
                </button>
              
              </div>

              {/* Divider */}
              <p className="divider-text">
                <span className="bg-light">OR</span>
              </p>

              {/* Login Form */}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>

              <div className="text-center mt-3">
                <a href="/" className="text-decoration-none">Forgot password?</a>
              </div>
               <div className="text-center mt-3">
                                <p>don't have an account? <Link to="/signup">signup here</Link></p>
                            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;