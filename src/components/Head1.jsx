
import React, { useState } from 'react'
import "./head1.css"
import "./Header.css";


const Head1 = () => {

    const [quin1, setQuin1] = useState(false);


    const changeBackground = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 80) {
            setQuin1(true);
        } else {
            setQuin1(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    var ic1 = require("./images/ic1.png")
    var ic2 = require("./images/icn/ic2.png")
    var ic3 = require("./images/icn/ic3.png")
    var ic4 = require("./images/icn/ic4.png")

    return (
        <section>
            <div className="hds1">
                <div className="container hds2">
                    <div className="left1" style={{ padding: "13px" }}>
                        <img src={ic1} height="14.79" width="12.67" alt="1" style={{ marginTop: "3px" }} />
                        <h5 style={{ paddingLeft: "15px", fontSize: "16px", color: "#505050" }}>Arabic</h5>
                        <h5 style={{ paddingLeft: "15px", fontSize: "16px", color: " #2E3191 " }}>English</h5>
                    </div>
                    <div className="right2">
                        <div class="row align-items-center">
                            <div class="col" style={{ display: "flex", }}>
                                <img src={ic2} height="12.12px" width="12.09px" alt="1" style={{ marginTop: "3px" }} />
                                <h5 style={{ paddingLeft: "15px", fontSize: "12px", color: "#505050" }}> 58684888</h5>
                            </div>
                            <div class="col" style={{ display: "flex" }}>
                                <img src={ic3} height="12.71px" width="15.89px" alt="1" style={{ marginTop: "3px" }} />
                                <h5 style={{ paddingLeft: "15px", fontSize: "12px", color: "#505050" }}>support@we.com</h5>
                            </div>
                            <div class="col" style={{ display: "flex" }}>
                                <img src={ic4} height="14.43px" width="14.43px" alt="1" style={{ marginTop: "3px" }} />
                                <h5 style={{ paddingLeft: "15px", fontSize: "12px", color: "#505050", marginTop: "2px" }}>@we.kw</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className='tazz'>


                
                <nav id="navbar-example2" class={quin1 ? " quin1 active" : "quin1"} >
                    <a class="navbar-brand" href="#1" style={{ color: "#2E3191", fontFamily: "Segoe UI Bold", fontSize: "32px", fontWeight: "800", paddingLeft: "8%" }}>Prakash</a>
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1" style={{ color: "#2E3191", fontFamily: "Segoe UI ", fontSize: "18px", paddingLeft: "8%" }}>Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#1" role="button" aria-expanded="false" style={{ color: "#2E3191", fontFamily: "Segoe UI ", fontSize: "18px", paddingLeft: "8%" }}>About Us</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#scrollspyHeading3">Projects</a></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#1" role="button" aria-expanded="false" style={{ color: "#2E3191", fontFamily: "Segoe UI ", fontSize: "18px", paddingLeft: "8%" }}>Projects</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading2" style={{ color: "#2E3191", fontFamily: "Segoe UI ", fontSize: "18px", paddingLeft: "8%" }}>Financial </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#1" role="button" aria-expanded="false" style={{ color: "#2E3191", fontFamily: "Segoe UI ", fontSize: "18px", paddingLeft: "8%" }}>Evaluate Your Property</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1" style={{ color: "#2E3191", fontFamily: "Segoe UI ", fontSize: "18px", paddingLeft: "8%" }}>Contact</a>
                        </li>
                    </ul>
                </nav>



                <div className='too'>


                </div>
                <div className="kad">
                    <h4 style={{ fontSize: "60px" }}>It's Probably for us to Build Stylis</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
                    <h6 style={{ textDecoration: "underline" }}>LEARN MORE</h6>
                </div>
                <div className=" kad1">
                    <h6 style={{ marginBottom: "30px" }}>01</h6>
                    <h6 style={{ marginBottom: "30px", border: "1px solid white", padding: "5px" }}>02</h6>
                    <h6 style={{ marginBottom: "30px" }}>03</h6>
                    <h6 style={{ marginBottom: "30px" }}>04</h6>
                </div>



                {/* <nav id="navbar-example2" class={quin1 ? "quin1 active" : "quin1"}  >
                    <a class="navbar-brand" href="#2">Navbar</a>
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#1" role="button" aria-expanded="false">About us</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#1" role="button" aria-expanded="false">Projects</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1">Financial Statements</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#1" role="button" aria-expanded="false">Evlaute your Property</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1">Financial Statements</a>
                        </li>


                    </ul>
                </nav>

                <div className='hero'>
                    <div className='content'>

                        <p>Call us</p>
                        <p>1-800-123-4567</p>
                        <p>Because Money</p>
                        <p>Doesn't come with instructions</p>
                        <button href='/' className='button'>Free Consultation</button>
                    </div>
                </div> */}
            </section>
        </section >
    )
}

export default Head1