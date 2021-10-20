import React, { Component } from "react";
import Slider from "react-slick";
class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]

        };
        return (
            <div>
                <Slider {...settings}>
                    <div class="item">
                        <div class="testimonial">
                            <div class="person-image">
                                <img src="assets/images/testimonial-img-1.png" alt="" />
                            </div>
                            <div class="person-description">
                                <p><q> Airbitz is the most simple and secure bitcoin wallet available
                                    today. They have excellent customer support, and always have the best
                                    interest of the users in mind!</q></p>
                            </div>
                            <div class="person-name">
                                <span>Yoel Lapscher</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial">
                            <div class="person-image">
                                <img src="assets/images/testimonial-img-2.png" alt="" />
                            </div>
                            <div class="person-description">
                                <p><q>The most user friendly mobile Bitcoin wallet app available in the market.
                                    Its the only Bitcoin wallet I refer individuals to.</q></p>
                            </div>
                            <div class="person-name">
                                <span>Chris Groshong</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial">
                            <div class="person-image">
                                <img src="assets/images/testimonial-img-3.png" alt="" />
                            </div>
                            <div class="person-description">
                                <p><q>Airbitz is THE best wallet to recommend to new users, and I hook a LOT of
                                    new users with their first bitcoin tips and gifts. It's easy and
                                    familiar to use and has a look and feel people are used to with other
                                    fiat banking apps.</q></p>
                            </div>
                            <div class="person-name">
                                <span>Doug Scribner</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial">
                            <div class="person-image">
                                <img src="assets/images/testimonial-img-4.png" alt="" />
                            </div>
                            <div class="person-description">
                                <p><q>My favorite crypto wallet <a href="#">@EdgeWallet</a> is now officially
                                    listed on my website. It is the wallet I recommend to
                                    noobs at my meetups, because it's so easy to use and heaps secure. Lots
                                    of other good resources there too. Check it out at </q></p>
                            </div>
                            <div class="person-name">
                                <span>Doug Scribner</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
export default SimpleSlider;