import React from 'react'
import "./up2.css";


var build4 = require("./images/img6.png")
var build5 = require("./images/img7.png")
var build6 = require("./images/img3.png")

var bu1 = require("./images/icn/@2x.png")


const Up2 = () => {
    return (
        <section>
            <div className="container py-5 ">
                <div className="topp-sec">
                    <div class="row mt-5">
                        <div class="col-md-8">
                            <div className="row">
                                <div className='yons'>
                                    <div className="item1a">
                                        <img src={build4} alt="ig" />
                                        <div className="row">
                                            <div className="item1acnt" style={{ paddingTop: "25px" }}>
                                                Search Property
                                            </div>
                                            <p className='tx'>Ut vel veritus adipisci pertin acia, noster viderer detracto ea est, etclita mediocrem</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='yons'>
                                    <div className="item1a">
                                        <div className="row" style={{ padding: "15px" }}>
                                            <div className="item1acnt" >
                                                Search Property
                                            </div>
                                            <p className='tx'>Ut vel veritus adipisci pertin acia, noster viderer detracto ea est, etclita mediocrem</p>
                                        </div>
                                        <img src={build5} alt="ig" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-4" >
                            <div className="jus" >
                                <div className="cnt1">
                                    <div className="row">

                                        <div className="cthead">
                                            <h4 >Related Links</h4>
                                        </div>


                                        <div className="ctheadp">
                                            <p >Ut vel veritus adipisci pertin acia, noster viderer detracto ea est, etclita mediocrem</p>
                                        </div>
                                        <div className="col"></div>
                                        <div className="col ess">
                                            <img src={bu1} height="40px" width="30px" alt="" style={{ paddingBottom: "10px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bttm-sec">
                    <div class="row">
                        <div class="col-6">
                            <img className='igs' src={build6} alt="g" />
                        </div>
                        <div class="col-6 ">
                            <div class="row">
                                <div class="col-md-8 htec">
                                    <h4 >For information about latest trade</h4>
                                </div>
                                <div class="col-6 col-md-4 htec1">

                                    <img src={bu1} height="40px" width="30px" alt="" style={{ paddingBottom: "10px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Up2