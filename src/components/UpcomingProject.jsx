import React from 'react'
import "./UpcomingProject.css";

var build1 = require("./images/img5.png")
var build2 = require("./images/i1.png")
var build3 = require("./images/img2.png")
var bu1 = require("./images/icn/Icon feather-arrow-right@2x.png")



const UpcomingProject = () => {
    return (
        <section style={{ backgroundColor: "#AFAFAF", width: "100%", height: "603px" }}>

            <div class="container py-5 ">
                <div class="row " >
                    <div class="col-sm-3 mt-1">
                        <div className="content ">
                            <h3 className='hds'>Upcoming Project</h3>
                            <h7 className='hds2 ' >Ut vel veritus adipisci pertin acia, noster viderer detracto ea est, et clit</h7>
                            <h6 style={{ paddingTop: "10px", textDecoration: "underline" }}>LEARN MORE</h6>

                        </div>
                    </div>
                    <div class="col-sm-9 mt-5">
                        <div class="row">
                            <div class="col-8 col-sm-6">
                                <div className="Container1">
                                    <img src={build2} alt="yes" style={{ height: "400PX", width: "354px", opacity: "1", position: 'relative' }} />

                                    <div class="bottomm1"  >
                                        <p>KREIC Complex</p>
                                        <img src={bu1} alt="2" width="70px" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 col-sm-6">
                                <div className="Container1">
                                    <img src={build3} alt="yes" style={{ height: "400px", width: "354px", opacity: "1", }} />
                                    <div class="bottomm1" >
                                        <p>KREIC Complex</p>
                                        <img src={bu1} alt="2" width="70px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default UpcomingProject