import React from 'react'
import "./lnp.css";

const Lnp = () => {

    var ins11 = require("./images/mahmoud_4.png")
    var ins12 = require("./images/tony-yeung-Exq6e9gH4Ag-unsplash.png")
    var ins13 = require("./images/irina-iriser-Vn7LOc5PE-E-unsplash.png")
    var ins14 = require("./images/icn/Icon feather-arrow-left.png")
    var ins17 = require("./images/icn/icr.png")



    return (

        <div className="asn7">
            <div class="row">
                <div class="col-6 asn7a">

                    <h4 style={{ paddingTop: "110px", paddingLeft: "90px" }}>Latest Instagram Posts</h4>
                    <p style={{ paddingLeft: "90px", paddingTop: "30px", width: "320px", }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>
                    <h6 style={{ textDecoration: "underline", paddingLeft: "90px" }}>VIEW MORE</h6>
                </div>
                <div class="col-6 asn7b" >
                    <img src={ins14} alt="" style={{ alignSelf: "flex-end", justifyContent: "center" }} />
                    <img src={ins17} alt="" style={{ alignSelf: "flex-end", }} />

                </div>
                <div class="inss1 ">
                    <div class="inss1a ">
                        <img src={ins11} height="300px" width="300px" style={{ paddingTop: "20px", position: "relative", }} alt="" />
                    </div>
                    <div class="inss1a ">
                        <img src={ins12} height="300px" width="300px" alt="" style={{ paddingTop: "20px", position: "relative", }} />
                    </div>
                    <div class="inss1a ">
                        <img src={ins13} alt="" height="300px" width="300px" style={{ paddingTop: "20px", position: "relative", clipPath: "square(20%)", }} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Lnp