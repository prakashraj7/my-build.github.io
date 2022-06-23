import React from 'react'
import "./images/img4.png";

// import "./About.css";
// import abs from "./About.css";

var Diamond = require("./images/img4.png");
var Diamond1 = require("./images/icn/Icon awesome-building@2x.png");
var Diamond2 = require("./images/icn/Icon awesome-user-tie@2x.png");
var Diamond3 = require("./images/icn/Icon awesome-users-cog@2x.png");
var Diamond4 = require("./images/icn/Icon map-local-government@2x.png");




const About = () => {
    return (
        <section >
            <div class="container py-5 ">
                <div class="row align-items-center  my-5">
                    <div class="col-md-6">
                        {/* <div>
                            <img class="lazyload" src={Diamond} data-src="img/landing/porto_dots2.png" alt=""
                                width="149" height="142" style={{ position: "absolute", top: "-60px", right: " -8%" }} />
                        </div> */}
                        <div >
                            <div class="strong-shadow rounded strong-shadow-top-right">
                                <img src={Diamond}
                                    class=" img-fluid  rounded box-shadow-3"
                                    alt="img4" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 position-relative py-5 row" style={{ display: "flex" }}>
                        <h2 class="font-weight-bold text-9 mb-4 "
                        >About Us!</h2>
                        <p class="pb-2 mb-4 " >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                        <h6 class="  mb-4 "
                        >LEARN MORE</h6>
                        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <div class="card" style={{ height: "100px", width: "100px", boxShadow: "0px 3px 6px #00000029", display: "flex", alignItems: "center", paddingTop: "15px" }}>
                                <img src={Diamond1} alt="yes" height="36px" width='32px' />
                                <p class="card-text">Company</p>
                            </div>
                            <div class="card" style={{ height: "100px", width: "100px", boxShadow: "0px 3px 6px #00000029", display: "flex", alignItems: "center", paddingTop: "15px" }}>
                                <img src={Diamond2} alt="yes" height="36px" width='32px' />
                                <p class="card-text">Ceo message</p>
                            </div>
                            <div class="card" style={{ height: "100px", width: "100px", boxShadow: "0px 3px 6px #00000029", display: "flex", alignItems: "center", paddingTop: "15px" }}>
                                <img src={Diamond3} alt="yes" height="36px" width='32px' />
                                <p class="card-text">Management</p>
                            </div>
                            <div class="card" style={{ height: "100px", width: "100px", boxShadow: "0px 3px 6px #00000029", display: "flex", alignItems: "center", paddingTop: "15px" }}>
                                <img src={Diamond4} alt="yes" height="36px" width='32px' />
                                <p class="card-text">Governance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >

    )
}

export default About