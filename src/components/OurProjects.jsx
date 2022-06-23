import React from 'react'
import "./OurProject.css";


var build1 = require("./images/img5.png")
var build2 = require("./images/i1.png")
var build3 = require("./images/img2.png")
var bu1 = require("./images/icn/Icon feather-arrow-right@2x.png")


const OurProjects = () => {
    return (
        <section >
            <div class="container ">
                <div class="row" style={{ paddingTop: "20px" }}>
                    <div class="col-6" style={{ backgroundColor: "#F0F0F0", height: "328px", width: "644px", opacity: "1" }}>
                        <div className="col-6">
                            <div className="content ">
                                <h3 className='hds'>Our Project</h3>
                                <h7 className='hds2 ' >Ut vel veritus adipisci pertin acia, noster viderer detracto ea est, et clit</h7>
                                <h6 style={{ paddingTop: "10px", textDecoration: "underline" }}>LEARN MORD</h6>

                            </div>
                        </div>
                        <div className="col-6"></div>


                    </div>
                    {/* <div class="col-4"></div> */}
                    <div class="col-6 " style={{ marginLeft: "-300px", marginTop: "80px", display: "flex" }}>
                        <div className="Container1">
                            <img src={build1} alt="yes" style={{ height: "363px", width: "251px", opacity: "1", }} />
                            <div class="bottom " >
                                <p style={{ marginTop: "14px", paddingLeft: "10px" }}>KREIC Complex</p>
                                <img src={bu1} alt="1" style={{ height: "18px", width: "40px", marginTop: "18px", paddingRight: "8px" }} />
                            </div>
                        </div>

                        <div className="Container1">
                            <img src={build2} alt="yes" style={{ height: "363px", width: "251px", opacity: "1", }} />
                            <div class="bottom " >
                                <p style={{ marginTop: "14px", paddingLeft: "10px" }}>KREIC Complex</p>
                                <img src={bu1} alt="1" style={{ height: "18px", width: "40px", marginTop: "18px", paddingRight: "8px" }} />
                            </div>
                        </div>

                        <div className="Container1">
                            <img src={build3} alt="yes" style={{ height: "363px", width: "251px", opacity: "1", }} />
                            <div class="bottom " >
                                <p style={{ marginTop: "14px", paddingLeft: "10px" }}>KREIC Complex</p>
                                <img src={bu1} alt="1" style={{ height: "18px", width: "40px", marginTop: "18px", paddingRight: "8px" }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </section >
    )
}

export default OurProjects