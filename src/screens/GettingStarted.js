import React from 'react'

const GettingStarted = () => {
    return (
        <main className="page-content getting-started">
        {/* <!------------------------ Hero -----------------------> */}
        <section className="hero">
            <div className="container custom-contain">
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="hero-content">
                            <h1>Getting Started with Bitcoin</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!------------------------ End Hero -----------------------> */}

        <section className="blog detail-post">
            <div className="container custom-contain">
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="detail-post-wrapper">
                            <h2>Getting Started with Bitcoin</h2>
                            <div className="meta">
                                <div className="author-and-date">
                                    <a href="#">Brett Musser</a><span>July 29th, 2021</span>
                                </div>
                            </div>
                            <div className="feature-image">
                                <img src="assets/images/supported-currencies.jpeg" alt=""/>
                            </div>
                            <div className="detail-post-content">
                                <h3>What is Bitcoin?</h3>
                                <p>Bitcoin is the world’s first digitally native money and payment network. The asset
                                    has a
                                    limited supply and can be sent anywhere in the world with no government,
                                    corporation, or
                                    individual having control over the network. Anyone with an internet connection can
                                    download the appropriate software on their device and start using Bitcoin.</p>
                                <p>“Software is eating the world.” – <a href="#">Marc Andreeson, August 2011</a></p>
                                <p>Software is a collection of instructions and data that tells a computer how to work.
                                    Put
                                    simply, software applications from Facebook, to email, to Google search, and many
                                    others
                                    that millions of people use on a daily basis are a set of rules that a computer
                                    follows
                                    and executes. Users of these software tools optionally opt in and take advantage of
                                    these platforms based on the value that they are able to provide. Facebook allows
                                    you to
                                    connect with friends, email allows you to communicate quickly, Google allows you to
                                    search, and the list goes on. </p>
                                <p>Bitcoin is no different in this sense. Bitcoin is monetary software that follows a
                                    certain set of rules which users, when interacting with this software, can take
                                    advantage of. In the case of Bitcoin, the high level rules are simple:</p>

                                <ul>
                                    <li>New bitcoin can only be minted by miners who help secure the network and process
                                        transactions with their computing power.</li>
                                    <li>Bitcoin has a pre-programmed inflation rate that eventually hits 0% once the 21
                                        millionth bitcoin has been mined in approximately 2140.</li>
                                    <li>Transactions are processed approximately every 10 minutes.</li>
                                    <li><a href="#">Confirmed transactions</a> are irreversible</li>
                                </ul>
                                <h3>Why is Bitcoin valuable?</h3>
                                <p>Money is useful because it stores value over time and can be exchanged for various
                                    goods
                                    and services. Bitcoin is no different than any other money in this respect. However,
                                    bitcoin is uniquely valuable compared to monies of the past as it lacks <a
                                        href="#">counterparty
                                        risk</a>, is natively digital, is globally accessible, and has a hard cap on its
                                    supply.
                                    Bitcoin can be sent anywhere in the world at any time over the internet and users
                                    have
                                    high assurances that their holdings will not be diluted by any unexpected inflation,
                                    all
                                    without a trusted central party like a bank or government in the middle. No other
                                    monies
                                    on the planet, up until the creation of bitcoin, have had these characteristics.</p>
                                <p>People can choose to hold their personal assets in many different forms, whether that
                                    is
                                    in U.S. dollars, stock in a company, bonds, etc. However, by holding any of these
                                    assets, and many others not mentioned here, there is inherent counterparty risk,
                                    meaning
                                    holders of these assets must trust centralized organizations to maintain the value
                                    of
                                    these assets and remain honest in their operations. In contrast to trusting an
                                    organization, Bitcoin relies on a distributed network of computers, mathematics, and
                                    incentives for its successful operation.</p>
                                <p>If you hold one bitcoin, you hold one out of 21 million bitcoin that will ever exist.
                                    How
                                    you decide to secure your bitcoin determines your reliance on outside parties. You
                                    can
                                    hold your bitcoin in a vault on your smartphone, in a vault on your computer, in a
                                    vault
                                    on a special hardware device, in a vault with a bank, and believe it or not, you can
                                    even hold bitcoin in a vault <a href="#">in your head.</a></p>

                                <h3>Bitcoin Said Simply</h3>
                                <p>Bitcoin is an asset that is absolutely limited in supply with no third party having
                                    the
                                    means to tamper with this feature. Bitcoin can be sent anywhere in the world to
                                    anyone
                                    with an internet connection, unobstructed by borders or would-be censors. Bitcoin
                                    can be
                                    stored in countless ways, each of which has its own security implications, but if a
                                    user
                                    so desires, they have zero need to rely on a financial institution, a bank, or a
                                    custodian of any kind for securing, holding, and/or managing their assets. These
                                    features are what drives incredible demand for bitcoin and gives bitcoin a strong
                                    foundation for an even brighter future. </p>
                                <h3>Want to learn more?</h3>
                                <span>Additional resources:</span>
                                <ul>
                                    <li><a href="#">What is mining and how does mining supply bitcoin to the market?</a>
                                    </li>
                                    <li><a href="#">What are private keys?</a></li>
                                    <li><a href="#">What is a wallet?</a></li>
                                    <li><a href="#">What is an exchange?</a></li>
                                    <li><a href="#">Where can I spend Bitcoin? </a></li>
                                </ul>
                                <form action="">
                                    <div className="newsletter-wrapper">
                                        <h4>Sign up for our newsletter!</h4>
                                        <input type="text" name="" id="" placeholder="Email" className="form-control"/>
                                        <button type="submit" className="btn custom-btn btn-style-1 btn-block">Sign
                                            Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>

    </main>
    )
}

export default GettingStarted
