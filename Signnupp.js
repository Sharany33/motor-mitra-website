import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Signup Data:', formData);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Sign Up</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input type="text" id="fullName" className="form-control" value={formData.fullName} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" id="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
                                </div>
                                {/* <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="terms" required />
                                    <label className="form-check-label" htmlFor="terms">I agree to the <a href="/">Terms & Conditions</a></label>
                                </div> */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <div className="text-center mt-3">
                                <p>Already have an account? <Link to="/login">Login here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;