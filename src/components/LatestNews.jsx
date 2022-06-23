import React from 'react'
import "./latestNews.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const LatestNews = () => {

    var build8 = require("./images/img8.jpg")
    var build9 = require("./images/img9.png")
    var build10 = require("./images/img2.png")
    var build11 = require("./images/icn/Icon awesome-fax@2x.png")
    var bu1 = require("./images/icn/@2x.png")

    return (

        <div class="container pb-4">
            <div class="row pt-5 mt-5 mb-4">
                <div class="col text-center " >
                    <h2 class="font-weight-bold mb-1">Latest News</h2>

                </div>
            </div>
            <div class="row pb-5 mb-5" style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Card sx={{ maxWidth: 329 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={build8}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" className={{ fontSize: "28px" }}>
                            Life is an Adventure if You Choose to Make it Life is an Adventure
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <img src={build11} height="12px" width="11px" alt="" style={{ marginRight: "15px", marginBottom: "5px" }} />
                            22 Mar 2020
                        </Typography>
                        <Typography variant="body2" color="text.third">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography size="small">READ MORE  <img src={bu1} height="40px" width="30px" alt="" style={{ paddingBottom: "10px", paddingLeft: "15px" }} /></Typography>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 329 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={build9}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" className={{ fontSize: "28px" }}>
                            Life is an Adventure if You Choose to Make it Life is an Adventure
                        </Typography>
                        <Typography variant="body2" color="text.secondary">

                            <img src={build11} height="12px" width="11px" alt="" style={{ marginRight: "15px", marginBottom: "5px" }} />
                            22 Mar 2020
                        </Typography>
                        <Typography variant="body2" color="text.third">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography size="small">READ MORE  <img src={bu1} height="40px" width="30px" alt="" style={{ paddingBottom: "10px", paddingLeft: "15px" }} /></Typography>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 329 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={build8}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" className={{ fontSize: "28px" }}>
                            Life is an Adventure if You Choose to Make it Life is an Adventure
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <img src={build11} height="12px" width="11px" alt="" style={{ marginRight: "15px", marginBottom: "5px" }} />
                            22 Mar 2020
                        </Typography>
                        <Typography variant="body2" color="text.third">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography size="small">READ MORE  <img src={bu1} height="40px" width="30px" alt="" style={{ paddingBottom: "10px", paddingLeft: "15px" }} /></Typography>
                    </CardActions>
                </Card>

            </div>
            <div class="row align-items-center">
                <div class="col"> </div>
                <div class="col">
                </div>
                <div class="col ">
                    <button style={{ backgroundColor: "#2E3191", color: "white", border: "none", borderRadius: "4px", padding: "10px 30px", display: "flex", marginLeft: "40px" }}>
                        Success
                    </button>
                </div>
                <div class="col"> </div>
                <div class="col"> </div>
            </div>
        </div >

    )
}

export default LatestNews