import React from 'react'
import "./preFot.css";


const PreFot = () => {

    var ic7a = require("./images/icn/Icon ionic-ios-arrow-forward@2x.png")
    var ic7b = require("./images/icn/Icon awesome-home.png")
    var ic7c = require("./images/icn/Icon awesome-phone-square-alt.png")
    var ic7d = require("./images/icn/Icon awesome-fax.png")
    var ic7e = require("./images/icn/Icon zocial-email.png")

    return (
        <section>
            <div className="als">
                <p className='ptx'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed amet officia! Modi distinctio !</p>
            </div>
            <div className="container">
                <div class="row align-items-center " style={{ paddingTop: "10%" }}>
                    <div class="col">
                        <div class="" style={{
                            width: "321px",
                        }}>
                            <div class="card-body">
                                {/* <a class="navbar-brand" href="#1" style={{ color: "#2E3191", fontFamily: "Segoe UI Bold", fontSize: "32px", fontWeight: "800", paddingLeft: "8%" }}>Prakash</a> */}
                                <h5 class="card-title" style={{ height: "88px", color: "#2E3191", fontFamily: "Segoe UI Bold", fontSize: "32px", fontWeight: "800", paddingLeft: "8%" }}>Prakash</h5>

                                <p class="card-text" style={{ height: "209px", fontSize: "14px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.</p>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="col">
                            <div class="" style={{
                                width: "321px",
                            }}>
                                <div class="card-body">
                                    <h5 class="card-title" style={{
                                        height: "88px", fontSize: "16px", color: "#2E3191", padding: "15px", marginLeft: "10px",
                                        opacity: "1"
                                    }}>Links</h5>


                                    <p class="card-text" style={{ height: "209px", fontSize: "14px" }}>
                                        <div className="row">

                                            <div className="col">
                                                <ul >
                                                    <a style={{ padding: "9px", listStyle: "none" }}> <img src={ic7a} width="6px" height="11px" alt="" style={{ marginRight: "10px" }} /> Home</a>
                                                    <li style={{ padding: "9px", listStyle: "none" }}><img src={ic7a} width="6px" height="11px" alt="" style={{ marginRight: "10px" }} />About us</li>
                                                    <li style={{ padding: "9px", listStyle: "none" }}><img src={ic7a} width="6px" height="11px" alt="" style={{ marginRight: "10px" }} />Projects</li>
                                                    <li style={{ padding: "9px", listStyle: "none" }}><img src={ic7a} width="6px" height="11px" alt="" style={{ marginRight: "10px" }} /> Average</li>
                                                    <li style={{ padding: "9px", listStyle: "none" }}><img src={ic7a} width="6px" height="11px" alt="" style={{ marginRight: "10px" }} />Search</li>

                                                </ul>
                                            </div>
                                            <div className="col">
                                                <ul >
                                                    <li style={{ padding: "9px", listStyle: "none" }}><img src={ic7a} width="6px" height="11px" alt="" style={{ marginRight: "10px" }} />Evaluate</li>
                                                    <li style={{ padding: "9px", listStyle: "none" }}><img src={ic7a} width="6px" height="11px" alt="" style={{ marginRight: "10px" }} />Related</li>
                                                    <li style={{ padding: "9px", listStyle: "none" }}><img src={ic7a} width="6px" height="11px" alt="" style={{ marginRight: "10px" }} />Contact</li>


                                                </ul>
                                            </div>
                                        </div>

                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="col">
                            <div class="" style={{
                                width: "321px",
                            }}>
                                <div class="card-body">
                                    <h5 class="card-title" style={{
                                        height: "88px", fontSize: "16px", color: "#2E3191",
                                        opacity: "1"
                                    }}>Contact Us</h5>

                                    <p class="card-text" style={{ height: "209px", fontSize: "14px" }}>

                                        <span style={{ padding: "30px 0px", }}> <img src={ic7b} alt="" style={{ paddingRight: "15px" }} /> Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</span><br /><br />
                                        <span style={{ padding: "30px 0px", }}> <img src={ic7c} alt="" style={{ paddingRight: "15px" }} />(965) 22448260</span><br /><br />
                                        <span style={{ padding: "30px 0px" }}> <img src={ic7d} alt="" style={{ paddingRight: "15px" }} />Fax : (965) 22434440 - 22434454</span><br /><br />
                                        <span style={{ padding: "30px 0px" }}> <img src={ic7e} alt="" style={{ paddingRight: "15px" }} />support@we.com</span><br />



                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ paddingTop: "120px" }}>
                    <hr />
                    <p style={{
                        display: "flex", justifyContent: "center",
                        alignitems: "center"
                    }}>@ Copyright 2020 We, all rights reserved and managed by WE</p>
                </div>

            </div>
        </section >
    )
}

export default PreFot