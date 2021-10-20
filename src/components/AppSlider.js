import React, { Component } from "react";
import Slider from "react-slick";
class AppsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true
    };
    return (
      <div>
        <Slider {...settings}>
          <div class="item">
            <div class="row align-items-center">
              <div class="col-md-6">
                <img src="assets/images/app-img-1.png" alt="" />
              </div>
              <div class="col-md-6">
                <h3>Augur</h3>
                <p>Augur is a decentralized application built on the Ethereum blockchain. Augur
                  uses our SDK to offer their users a proven way to secure and manage their
                  private keys as well as an easy way to sign in to the platform. </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="row align-items-center">
              <div class="col-md-6">
                <img src="assets/images/app-img-2.jpeg" alt="" />
              </div>
              <div class="col-md-6">
                <h3>Ember</h3>
                <p>Ember is a non-custodial cryptocurrency hedge fund accessible to everyone.
                  With as little as $100, anyone with a mobile phone can access portfolios
                  previously only accessible to millionaires.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default AppsSlider;