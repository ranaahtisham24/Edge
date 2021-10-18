import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
        <nav id="navbar" className="navbar custom-nav navbar-expand-lg navbar-fixed-top" onscroll="scrollFunction()">
            <div className="container custom-contain nav-inner">
                <a className="navbar-brand" href="#">
                    <svg id="sitelogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.797 129.795">
                        <g id="Group_222" data-name="Group 222" transform="translate(-154.618 -320.701)">
                            <g id="Group_221" data-name="Group 221" transform="translate(154.618 320.701)">
                                <path id="Path_87" data-name="Path 87"
                                    d="M-3884.852-99.364c-.118-.05-.233-.107-.354-.148a2.788,2.788,0,0,1-1.663-1.46q-.735-1.5-1.448-3.016-1.177-2.5-2.342-5.011c-.266-.57-.532-1.14-.784-1.716a2.665,2.665,0,0,1-.057-1.968,16.756,16.756,0,0,1,.747-1.732c.782-1.689,1.732-3.287,2.665-4.895q3.28-5.658,6.558-11.316,2.422-4.172,4.854-8.338,3.838-6.6,7.671-13.2,2.662-4.578,5.33-9.153,3.719-6.394,7.436-12.791c.388-.667.782-1.331,1.162-2a3.032,3.032,0,0,0,.157-3.031,2.867,2.867,0,0,0-2.464-1.615c-.525-.043-1.057-.015-1.585-.014q-3.11.006-6.219.015a4.175,4.175,0,0,0-2.721.873,4.83,4.83,0,0,0-.929,1c-1.306,1.881-2.454,3.86-3.613,5.832q-4.347,7.394-8.686,14.792a3.215,3.215,0,0,1-2.337,1.71,3.1,3.1,0,0,1-2.953-1.1,9.866,9.866,0,0,1-1.017-1.637q-3.021-5.263-6.027-10.533c-1.426-2.511-2.824-5.037-4.231-7.559a9.474,9.474,0,0,0-1.588-2.277,4.989,4.989,0,0,0-2.933-1.376,10.509,10.509,0,0,0-1.752-.011c-1.086.038-2.173.023-3.259.037-.957.013-1.914.035-2.871.055a2.97,2.97,0,0,0-2.67,4.329c.292.649.677,1.258,1.028,1.88q2.766,4.913,5.54,9.823,3.2,5.631,6.417,11.249,3.231,5.637,6.478,11.263a4.863,4.863,0,0,1-.058,5.322c-1.307,2.1-2.575,4.223-3.834,6.351a3.5,3.5,0,0,1-1.712,1.5,3.136,3.136,0,0,1-3.652-1.034,4.885,4.885,0,0,1-.427-.642q-4.6-8.065-9.2-16.128-3.951-6.929-7.9-13.86-3.846-6.742-7.7-13.479-3.251-5.7-6.491-11.4-1.072-1.882-2.149-3.76a5.7,5.7,0,0,1-.705-1.6,1.327,1.327,0,0,0-.125-.271v-.772a1.868,1.868,0,0,0,.22-.555,3.11,3.11,0,0,1,2.38-2.122,4.907,4.907,0,0,1,1.108-.087c4.315.034,8.631,0,12.947.067,5.659.081,11.318.012,16.978.087,6.059.081,12.119,0,18.178.087,5.859.079,11.719.005,17.578.085,5.931.081,11.862.012,17.792.084,5.188.063,10.376.034,15.564.041a10.588,10.588,0,0,1,1.283.074,3.265,3.265,0,0,1,1.542.6,3.115,3.115,0,0,1,1.227,1.9v1.2a3.95,3.95,0,0,1-.353,1.006c-.331.6-.643,1.212-.981,1.809-1.106,1.952-2.222,3.9-3.331,5.848q-3.6,6.315-7.188,12.632-3.776,6.631-7.556,13.26-3.986,7-7.966,14.014-3.085,5.422-6.173,10.841-4.206,7.4-8.406,14.8-4.186,7.36-8.381,14.715c-.07.124-.151.243-.215.371a3.621,3.621,0,0,1-2.376,2.068Zm.442-89.211a4.347,4.347,0,0,0-4.432,4.3,4.331,4.331,0,0,0,4.329,4.525,4.436,4.436,0,0,0,4.457-4.292A4.437,4.437,0,0,0-3884.41-188.575Z"
                                    transform="translate(3937.264 229.16)" />
                                <path id="Path_88" data-name="Path 88"
                                    d="M-3734.756-992.222a5.548,5.548,0,0,0,1.187.139,18.821,18.821,0,0,1,9.941,4.176,19.129,19.129,0,0,1,7,12.531,17.137,17.137,0,0,1,.16,1.878c.013.456.025.469.5.471,1.344.005,2.688.005,4.031.012a6.353,6.353,0,0,1,2.706.573,5.242,5.242,0,0,1,3.054,4.031,6.942,6.942,0,0,1,.082,1.282q-.011,2.144-.01,4.289a4.255,4.255,0,0,1-.129,1.018.4.4,0,0,1-.348.326,4.392,4.392,0,0,1-.9.07c-6.589-.09-13.178-.03-19.767-.1-6.16-.065-12.321,0-18.48-.086-5.774-.076-11.549,0-17.323-.083-6.089-.083-12.178-.008-18.266-.088-5.831-.077-11.663-.033-17.494-.078-.743-.006-1.486-.03-2.228-.053-.346-.01-.394-.053-.394-.409,0-1.572-.107-3.143-.057-4.715.019-.585.032-1.173.1-1.754a4.983,4.983,0,0,1,3.144-4.167,6.029,6.029,0,0,1,2.509-.47c1.543-.009,3.088-.025,4.631.009,4.673.1,9.347.032,14.021.073,1.272.011,2.545-.013,3.816.012,5.846.113,11.691.041,17.537.081.777.005.77,0,.8-.785a18.169,18.169,0,0,1,1.635-6.836,18.962,18.962,0,0,1,3.691-5.437,18.919,18.919,0,0,1,4.4-3.386,19.172,19.172,0,0,1,6.272-2.226,14.983,14.983,0,0,1,1.914-.226.867.867,0,0,0,.376-.069Zm-2.848,18.991a.986.986,0,0,0-.247-.327,6.511,6.511,0,0,1-.6-.781,3.79,3.79,0,0,1,2-5.662,5.6,5.6,0,0,1,1.521-.226c.426-.005.425-.011.584-.415.141-.359.277-.72.428-1.075.132-.311.177-.334.486-.215.72.277,1.436.564,2.151.855.278.113.292.154.2.46s-.2.6-.3.894c-.133.407-.13.434.229.664a15.354,15.354,0,0,1,1.742,1.386c.227.2.223.224.041.457q-.738.946-1.487,1.884c-.216.271-.252.276-.564.066-.581-.391-1.154-.792-1.733-1.186a3.54,3.54,0,0,0-.96-.468,1.786,1.786,0,0,0-.334-.074.622.622,0,0,0-.616.306.512.512,0,0,0,.04.636,10.457,10.457,0,0,0,.872,1,16.227,16.227,0,0,1,1.489,1.6.824.824,0,0,0,.765.348c2.129,0,4.258.007,6.388,0,.921,0,.966.164.849-.949a10.816,10.816,0,0,0-3.8-7.3,11.165,11.165,0,0,0-7.242-2.693,10.374,10.374,0,0,0-4.146.76,10.692,10.692,0,0,0-4.257,3.021,11.181,11.181,0,0,0-2.667,6.512c-.051.66.087.559.536.561q4.072.012,8.146.02A.976.976,0,0,0-3737.6-973.231Zm1.991-16.058a18.044,18.044,0,0,0-2.2.16,15.916,15.916,0,0,0-5.568,1.764,16.283,16.283,0,0,0-4.713,3.731,16.146,16.146,0,0,0-2.43,3.723,16.073,16.073,0,0,0-1.513,6.337c-.012.323.015.365.359.371.472.008.944.007,1.416.005s.511-.029.542-.5a12.61,12.61,0,0,1,.134-1.365,13.832,13.832,0,0,1,7.688-10.472,13.315,13.315,0,0,1,8.635-1.2,13.84,13.84,0,0,1,7.2,3.653,13.789,13.789,0,0,1,4.367,9.587c.018.37.052.4.439.413.471.015.943-.018,1.415.029.4.04.441,0,.437-.418a13.43,13.43,0,0,0-.271-2.468,16.256,16.256,0,0,0-5.71-9.657A16.116,16.116,0,0,0-3735.613-989.289Z"
                                    transform="translate(3807.327 992.222)" />
                            </g>
                        </g>
                    </svg>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" onclick="hamburgerfunction(this)">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link menu-nav-link active-nav-link" to="/">Home <span
                                    className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/aboutus' className="nav-link menu-nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/edgelearn' className="nav-link menu-nav-link">Edge Learn</Link>
                            {/* <a className="nav-link menu-nav-link" href="edge-learn.html">Edge Learn</a> */}
                        </li>
                        <li className="nav-item">
                        <Link to='/gettingstarted' className="nav-link menu-nav-link">Getting Started with
                                Bitcoin</Link>
                            {/* <a className="nav-link menu-nav-link" href="getting-started.html">Getting Started with */}
                                {/* Bitcoin</a> */}
                        </li>
                        <li className="nav-item">
                        <Link to='/support' className="nav-link menu-nav-link">Support</Link>
                            {/* <a className="nav-link menu-nav-link" href="support.html">Support</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default Header