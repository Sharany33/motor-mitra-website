import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'
import Logo from './Logo.png';


function Footer() {
    return (

        <div className="container my-5">

            {/* <!-- Footer --> */}
            <footer
                className="text-center text-lg-start text-black"
                style={{ marginTop: "30px", paddingTop: "20px", backgroundColor: "rgb(255, 255, 255)" }}
            >


                {/* <!-- Section: Links  --> */}
                <section className="/">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3" style={{ gap: "50px" }}>
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-3 mx-auto mb-4">
                                <div className="img-container">
                                    <img src={Logo} alt='Motor Mitra' style={{ width: "250px", height: "100px" }} />
                                </div>
                                <div className="text-container">
                                    <p>
                                        Motor Mitra is the trusted marketplace for essential automotive solutions.
                                        We specialize in providing carefully selected auto parts tailored for major car brands.
                                    </p>
                                </div>
                            </div>


                            {/*  <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: " 60px", backgroundColor: "rgb(0, 0, 0)", height: "2px" }}
                                />
                                <p>
                                    <a href="/" className="text-black">MDBootstrap</a>
                                </p>
                                <p>
                                    <a href="/" className="text-black">MDWordPress</a>
                                </p>
                                <p>
                                    <a href="/" className="text-black">BrandFlow</a>
                                </p>
                                <p>
                                    <a href="/" className="text-black">Bootstrap Angular</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "rgb(0, 0, 0)", height: "2px" }}
                                />
                                <p>
                                    <a href="/" className="text-black">Your Account</a>
                                </p>
                                <p>
                                    <a href="/" className="text-black">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a href="/" className="text-black">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="/" className="text-black">Help</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "rgb(0, 0, 0)", height: " 2px" }}
                                />
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", marginTop: "20px" }}
                >
                    © 2025 All rights reserved.
                    <a href="/" className="text-black"
                    >Motor-Mitra.com</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}

        </div>

    );
}

export default Footer;
