import React from 'react'

const Footer = () => {
    return (
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-lg-6 col-xl-7">
                    <div class="social-icons">
                        <a href="#" className="me-1"><i class="fab fa-twitter"></i></a>
                        <a href="#"  className="me-1"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"  className="me-1"><i class="fab fa-instagram"></i></a>
                        <a href="#"  className="me-1"><i class="fab fa-github cover"></i></a>
                    </div>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <h4>Sign up for our newsletter!</h4>
                    <form action="">
                        <div class="newsletter-wrapper">
                            <input type="text" name="" id="" placeholder="Enter your email here" class="form-control"/>
                            <button type="submit" class="btn custom-btn">Sign Up</button>
                        </div>
                    </form>
                </div>

                <div class="col-md-12">
                    <ul>
                        <li><a href="#">Getting Started with Bitcoin</a></li>
                        <li><a href="#">Bitcoin Wallet</a></li>
                        <li><a href="#">Monero Wallet</a></li>
                        <li><a href="#">Ripple Wallet</a></li>
                        <li><a href="#">Ethereum Wallet</a></li>
                        <li><a href="#">Litecoin Wallet</a></li>
                        <li><a href="#">Dash Wallet</a></li>
                        <li><a href="#">Stellar Wallet</a></li>
                        <li><a href="#">EOS Wallet</a></li>
                        <li><a href="#">Binance Wallet</a></li>
                    </ul>
                    <div class="terms-n-privacy text-center">
                        <a href="#">Terms of Service</a>
                        <span>|</span> <a href="#">Privacy Policy</a>

                    </div>

                </div>
            </div>
        </div>


    </footer>
    )
}

export default Footer
