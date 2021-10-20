import React from 'react'
import SimpleSlider from '../components/Testimonials';
import AppsSlider from "../components/AppSlider"
const Landing = () => {
    return (
        <div>
            {/* <!------------------------ Header -----------------------> */}
            <main className="page-content home-page">
                {/* <!------------------------ Hero -----------------------> */}
                <section className="hero">
                    <div className="container custom-contain">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 col-xl-4">
                            </div>
                            <div className="col-md-12 col-lg-8 col-xl-8">
                                <div className="hero-content">
                                    <h1>Cryptocurrency Simplified.</h1>
                                    <p>The most secure way to buy, store & trade crypto under your control.</p>
                                    <div className="hero-cta">
                                        <button className="btn custom-btn">iOS</button>
                                        <button className="btn custom-btn">Android</button>
                                        <div className="direct-link">
                                            <a href="#">Android Direct Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ End Hero -----------------------> */}
                {/* <!------------------------ Arrow List -----------------------> */}
                <section className="arrow-list">
                    <div className="container custom-contain">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="arrow-list-item">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="arrow-list-icon">
                                                <img src="./assets/icons/multi-asset.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-8 pl-0">
                                            <div className="arrow-list-desc">
                                                <h3>Multi-Asset Support</h3>
                                                <p>Bitcoin, Ethereum, and many others. Long term or short term, hold your assets safely.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="arrow-list-item">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="arrow-list-icon">
                                                <img src="./assets/icons/exchange.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-8 pl-0">
                                            <div className="arrow-list-desc">
                                                <h3>Exchange between assets</h3>
                                                <p>Seamlessly shift between digital currencies/assets on the go.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="arrow-list-item">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="arrow-list-icon">
                                                <img src="./assets/icons/in-app.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-8 pl-0">
                                            <div className="arrow-list-desc">
                                                <h3>Multi-Asset Support</h3>
                                                <p>Bitcoin, Ethereum, and many others. Long term or short term, hold your assets safely.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ Arrow List -----------------------> */}
                {/* <!------------------------ Ease of Security -----------------------> */}
                <section className="ease-of-security pt-0">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h3>Secure, Private, and Easy to Use</h3>
                                <p>Cutting edge security, user privacy, and ease of use are at the foundation of everything we build. The Edge Wallet combines these features into one user friendly platform for beginners and experts alike.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ Ease of Security -----------------------> */}
                {/* <!------------------------ Logo List  -----------------------> */}
                <section className="logo-list">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <ul className="list-unstyled">
                                    <li className="logo-item">
                                        <a href="#"><img src="assets/logos/bitcoin.png" alt="" /></a>
                                    </li>
                                    <li className="logo-item">
                                        <a href="#"><img src="assets/logos/bitcoin.com.png" alt="" /></a>
                                    </li>
                                    <li className="logo-item">
                                        <a href="#"><img src="assets/logos/cryptocoin.png" alt="" /></a>
                                    </li>
                                    <li className="logo-item">
                                        <a href="#"><img src="assets/logos/forbes.png" alt="" /></a>
                                    </li>
                                    <li className="logo-item">
                                        <a href="#"><img src="assets/logos/dash-news.png" alt="" /></a>
                                    </li>
                                    <li className="logo-item">
                                        <a href="#"><img src="assets/logos/99-bitcoins.png" alt="" /></a>
                                    </li>
                                    <li className="logo-item">
                                        <a href="#"><img src="assets/logos/card-rates.png" alt="" /></a>
                                    </li>
                                    <li className="logo-item">
                                        <a href="#"><img src="assets/logos/hosting-advice.png" alt="" /></a>
                                    </li>
                                    <li className="logo-item">
                                        <a href="#"><img src="assets/logos/yahoo.png" alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ Logo List  -----------------------> */}
                {/* <!------------------------ The Edge Way  -----------------------> */}
                <section className="the-edge-way">
                    <div className="container custom-contain">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2>Securing digital assets doesn’t have to be difficult</h2>
                                <div className="description">
                                    <p>Managing multiple wallets for multiple assets is hard. Add in complicated backups like long pass phrases, lengthy strings of random letters and numbers, and you’ve got serious usability challenges. Not anymore. Hold all of
                                        your assets in one place with Edge—all you need is a username and password.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12 col-lg-5 col-xl-5">
                                <h3>THE OLD WAY</h3>
                                <div className="graph-img">
                                    <img src="assets/images/graphic_1.png" alt="" />
                                </div>
                                <ul className="list-unstyled">
                                    <li><img src="assets/icons/cross.svg" className="list-icon" alt="" />Several apps to manage multiple assets</li>
                                    <li><img src="assets/icons/cross.svg" className="list-icon" alt="" />Difficult to use backups</li>
                                    <li><img src="assets/icons/cross.svg" className="list-icon" alt="" />No auto-sync between devices
                                    </li>
                                    <li><img src="assets/icons/cross.svg" className="list-icon" alt="" />No forgiveness for user mistakes
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-12 col-lg-2 col-xl-2">
                                <div className="centered">
                                    <h3 className="pb-0">VS</h3>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-5 col-xl-5">
                                <h3>THE EDGE WAY</h3>
                                <div className="last-graph-img ">
                                    <img src="assets/images/edge-way.png" alt="" />
                                </div>
                                <ul className="list-unstyled">
                                    <li><img src="assets/icons/tick.svg" className="list-icon" alt="" />One app for all of your assets
                                    </li>
                                    <li><img src="assets/icons/tick.svg" className="list-icon" alt="" />Backup with just username and password
                                    </li>
                                    <li><img src="assets/icons/tick.svg" className="list-icon" alt="" />Seamlessly login using multiple devices</li>
                                    <li><img src="assets/icons/tick.svg" className="list-icon" alt="" />Easy, secure access with PIN or Touch ID</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ The Edge Way  -----------------------> */}
                {/* <!------------------------ Assets in one place -----------------------> */}
                <section className="assets-in-one-place">
                    <div className="container custom-contain">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2>All of your digital assets in one place</h2>
                                <p>Currently supported digital assets by Edge</p>
                                <ul className="list-unstyled">
                                    <li> <img src="assets/icons/bitcoin.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Bitcoin</span>
                                        </div>
                                    </li>
                                    <li><img src="assets/icons/etherium.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Ethereum</span>
                                        </div>
                                    </li>
                                    <li><img src="assets/icons/litecoin.png" alt="" />
                                        <div className="cureency-name">
                                            <span> Litecoin</span>
                                        </div>
                                    </li>
                                    <li><img src="assets/icons/monero.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Monero</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/ripple.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Ripple/XRP</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/bitcoin-cash.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Bitcoin Cash</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/dash.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Dash</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/augur-rep.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Augur REP</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/wings.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Wings</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/indorse.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Indorse</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/indorse.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Firo</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/feathercoin.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Feathercoin</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/digibyte.png" alt="" />
                                        <div className="cureency-name">
                                            <span>DigiByte</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/digibyte.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Vertcoin</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/bitcoin-gold.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Bitcoin Gold</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/dai.png" alt="" />
                                        <div className="cureency-name">
                                            <span>DAI</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/stellar.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Stellar</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/smartcash.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Smartcash</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/groestlcoin.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Groestlcoin</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/bitcoin-sv.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Bitcoin SV</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/eos.png" alt="" />
                                        <div className="cureency-name">
                                            <span>EOS</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/dogecoin.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Dogecoin</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/qtum.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Qtum</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/ravencoin.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Ravencoin</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/eboost.png" alt="" />
                                        <div className="cureency-name">
                                            <span>eBoost</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/ufo.png" alt="" />
                                        <div className="cureency-name">
                                            <span>UFO</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/tezos.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Tezos</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/rsk.png" alt="" />
                                        <div className="cureency-name">
                                            <span>RSK</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/binance-chain.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Binance Chain </span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/anthem-gold.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Anthem Gold</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/icons/hercules.png" alt="" />
                                        <div className="cureency-name">
                                            <span>Hercules</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="submit-form">
                                    <p>Don't see your favorite currency? <a href="#">Submit a request</a> and we'll add it to our list!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ Assets in one place -----------------------> */}
                {/* <!------------------------ why us -----------------------> */}
                <section className="why-us">
                    <div className="container custom-contain">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="icon">
                                    <img src="./assets/icons/exchange.png" alt="" />
                                </div>
                                <h2>Be the first to move when markets do</h2>
                                <p>Edge makes it easy to buy, sell, or move between assets. You want to exchange your Bitcoin Cash for Litecoin? No problem. You want to buy Ethereum from your credit card or bank account? No problem. In just a few easy steps, any
                                    user can exchange one blockchain asset for another. All of this is done seamlessly inside the Edge Wallet, without a 3rd party ever holding your funds!
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="img-wrapper">
                                    <img src="assets/images/why-us-img-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col-md-6 order-2 order-md-1">
                                <div className="img-wrapper">
                                    <img src="assets/images/why-us-img-2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-md-2">
                                <div className="icon">
                                    <img src="./assets/icons/in-app.png" alt="" />
                                </div>
                                <h2>One app for all your cryptocurrency needs</h2>
                                <p>We partner with top blockchain services around the world so users can maximize their assets. In-app buy/sell, mobile top-ups, gift cards, and crypto to crypto exchange, all inside Edge.
                                </p>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#"><img src="assets/logos/wyre.jpeg" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/simplex.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/libertyx.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/banx.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/safello.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/bits-of-gold.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/bity.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/moonpay.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/bitrefill.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/changelly.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/changenow.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/faa.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/godex.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/totle.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/fox-exchange.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/coinswitch.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/transak.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/logos/switchain.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href=""></a>
                                    </li>
                                    <li>
                                        <a href=""></a>
                                    </li>
                                    <li>
                                        <a href=""></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ why us -----------------------> */}
                {/* <!------------------------ Security -----------------------> */}
                <div className="tabs-section">
                    <div className="tabs-area">
                        <div className="container custom-contain">
                            <div className="row text-center">
                                <div className="col-md-12">
                                    <h2>Security is our foundation, not a feature</h2>
                                    <div className="description">
                                        <p>Many wallet options are compelling, but very few of them have the security track record Edge wallet has. Want to learn more? <a href="#">Download our White Paper.</a></p>
                                    </div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><div class="tab-icon"><img src="assets/icons/setting.png" alt="" /></div>Client-side Encryption</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><div class="tab-icon"><img src="assets/icons/backup.png" alt="" /></div>Automatic Backup</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><div class="tab-icon"><img src="assets/icons/setting-1.png" alt="" /></div>Powerful Security Tools</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container custom-contain">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="tab-content-img">
                                                    <img src="assets/images/clide-side-encryption.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="security-tab-desc">
                                                    <h2>Client-side Encryption</h2>
                                                    <h3>Your assets. Your keys.</h3>
                                                    <p>Client-side encryption means all of your data is encrypted on your device before any of your information touches our servers. No server-side hacks, no malware = safe assets. That also means that &nbsp;Edge as
                                                        a company does not have access to, nor have any knowledge of your account information. Only you and you alone has access and control of your assets—the way it should be.
                                                    </p>
                                                    <h3>Private By Default.</h3>
                                                    <p>Edge has a zero-knowledge security architecture meaning we don’t need nor do we want any of your private information. No email, no phone number, no ID or any other personal information is needed to create an
                                                        account with Edge. Respecting your privacy is a core value in everything we engineer.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="divider"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="tab-content-img">
                                                    <img src="assets/images/automatic-backup.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="security-tab-desc">
                                                    <h2>Automatic Backup</h2>
                                                    <h3>Redundant peer-to-peer cloud servers</h3>
                                                    <p>Client-side encryption means all of your data is encrypted on your device before any of your information touches the servers. Once your account and everything in it has been encrypted, we automatically back
                                                        it up. We can’t access your assets or any other information in any usable form but if anything happens to your device, you can just download the Edge app on a new device, enter your username and password
                                                        and your assets are right where you left them.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="divider"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="tab-content-img">
                                                    <img src="assets/images/security-tools.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="security-tab-desc">
                                                    <h2>Easy and Powerful Security Tools</h2>
                                                    <h3>One-Touch 2-Factor Authentication</h3>
                                                    <p>Easily set-up 2-Factor Authentication (2FA) with just a touch of a button. 2FA increases security by only allowing logins from previously logged in devices. <b>Even if </b> a malicious actor got access to your
                                                        username and password they won’t be able to log-in to your 2FA enabled account.</p>
                                                    <h3>Password Recovery</h3>
                                                    <p>Many of us forget passwords and this can be unforgiving to holders of digital assets. We have set up password recovery with this in mind. Users can set up password recovery for their Edge Wallet with just two
                                                        questions and an email.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="divider"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!------------------------ Security -----------------------> */}
                {/* <!------------------------ what ifs -----------------------> */}
                <section className="what-ifs">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2>We’ve got the important “what ifs” covered</h2>
                            </div>
                        </div>
                        <div className="row boxes-row">
                            <div className="col-md-12 col-lg-4 col-xl-4">
                                <div className="box">
                                    <div className="icon">
                                        <img src="assets/icons/question.png" alt="" />
                                    </div>
                                    <h3>What if Edge goes out of business? What will happen to my assets?</h3>
                                    <p>Even if Edge goes out of business, you have full control over your private key, so your assets are safe in your device.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 col-xl-4">
                                <div className="box">
                                    <div className="icon">
                                        <img src="assets/icons/question.png" alt="" />
                                    </div>
                                    <h3>What if I’m a beginner in digital currencies? Is Edge right for me?</h3>
                                    <p>Edge is a great wallet for beginners! We put a lot of effort into usability, and our support team is always there to help.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 col-xl-4">
                                <div className="box mb-0">
                                    <div className="icon">
                                        <img src="assets/icons/question.png" alt="" />
                                    </div>
                                    <h3>What happens if Edge’s servers are hacked?</h3>
                                    <p>All of your information is encrypted on your device, and only you have the key! So hackers won’t be able to access your data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ what ifs -----------------------> */}
                {/* <!------------------------ transparency -----------------------> */}
                <section className="transparency">
                    <div className="container custom-contain">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2>Security requires transparency</h2>
                                <p>Our code is open source and has been vetted by leading security experts including the Open Bitcoin Privacy Project.<a href="#"> View our source code
                                    Paper.</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ transparency -----------------------> */}
                {/* <!------------------------ Testimonials -----------------------> */}
                <section className="testimonials">
                    <div className="container custom-contain">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2>Loyal users from Airbitz to Edge</h2>
                                <p>Since the launch of our first bitcoin wallet under the name of "Airbitz" in 2014, our team has provided exceptional security and digital currency management experience for our users. Here's what some of our loyal users have said
                                    about Airbitz.</p>
                                {/*                                     
                                <div className="owl-carousel owl-theme owl-one">
                                    <div className="item">
                                        <div className="testimonial">
                                            <div className="person-image">
                                                <img src="assets/images/testimonial-img-1.png" alt="" />
                                            </div>
                                            <div className="person-description">
                                                <p><q> Airbitz is the most simple and secure bitcoin wallet available
                                                    today. They have excellent customer support, and always have the best
                                                    interest of the users in mind!</q></p>
                                            </div>
                                            <div className="person-name">
                                                <span>Yoel Lapscher</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial">
                                            <div className="person-image">
                                                <img src="assets/images/testimonial-img-2.png" alt="" />
                                            </div>
                                            <div className="person-description">
                                                <p><q>The most user friendly mobile Bitcoin wallet app available in the market.
                                                    Its the only Bitcoin wallet I refer individuals to.</q></p>
                                            </div>
                                            <div className="person-name">
                                                <span>Chris Groshong</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial">
                                            <div className="person-image">
                                                <img src="assets/images/testimonial-img-3.png" alt="" />
                                            </div>
                                            <div className="person-description">
                                                <p><q>Airbitz is THE best wallet to recommend to new users, and I hook a LOT of
                                                    new users with their first bitcoin tips and gifts. It's easy and
                                                    familiar to use and has a look and feel people are used to with other
                                                    fiat banking apps.</q></p>
                                            </div>
                                            <div className="person-name">
                                                <span>Doug Scribner</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial">
                                            <div className="person-image">
                                                <img src="assets/images/testimonial-img-4.png" alt="" />
                                            </div>
                                            <div className="person-description">
                                                <p><q>My favorite crypto wallet <a href="#">@EdgeWallet</a> is now officially
                                                    listed on my website. It is the wallet I recommend to
                                                    noobs at my meetups, because it's so easy to use and heaps secure. Lots
                                                    of other good resources there too. Check it out at </q></p>
                                            </div>
                                            <div className="person-name">
                                                <span>Doug Scribner</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                 */}

                               {/* <Testimonials /> */}
                                 <SimpleSlider />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ Testimonials -----------------------> */}
                {/* <!------------------------ Download Edge -----------------------> */}
                <section className="download-edge">
                    <div className="container custom-contain">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2>Download Edge to secure and trade all of your cryptocurrency in one place</h2>
                                <p>Edge is avaialble on iOS, Android, and direct Android download</p>
                                <div className="download-btns">
                                    <button className="btn custom-btn">iOS</button>
                                    <button className="btn custom-btn">Android</button>
                                    <div className="pt-3">
                                        <a href="#">Get Android Direct Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ Download Edge -----------------------> */}
                {/* <!------------------------ Looking for developer -----------------------> */}
                <section className="looking-for-developer">
                    <div className="container custom-contain">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2>Are you a developer looking for key management solution?</h2>
                                <p>Give your users a familiar and secure key management solution with Edge Security API/SDK. All it takes is five lines of code.</p>
                                {/* <div className="owl-carousel owl-theme owl-two">
                                    <div className="item">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <img src="assets/images/app-img-1.png" alt="" />
                                            </div>
                                            <div className="col-md-6">
                                                <h3>Augur</h3>
                                                <p>Augur is a decentralized application built on the Ethereum blockchain. Augur uses our SDK to offer their users a proven way to secure and manage their private keys as well as an easy way to sign in to the platform.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <img src="assets/images/app-img-2.jpeg" alt="" />
                                            </div>
                                            <div className="col-md-6">
                                                <h3>Ember</h3>
                                                <p>Ember is a non-custodial cryptocurrency hedge fund accessible to everyone. With as little as $100, anyone with a mobile phone can access portfolios previously only accessible to millionaires.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <AppsSlider />
                            </div>
                        </div>
                        <div className="row text-center pt-4">
                            <div className="col-md-12">
                                <h4>Join these companies already using Edge Security</h4>
                                <button className="btn custom-btn btn-style-1">Learn More about Edge Security</button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!------------------------ Looking for developer -----------------------> */}
            </main>
            {/* <!------------------------ Footer -----------------------> */}

            {/* <!------------------------ footer -----------------------> */}
        </div>
    )
}

export default Landing
