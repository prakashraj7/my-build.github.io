import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const LatestAnnouncement = () => {


    var build8 = require("./images/tony-yeung-Exq6e9gH4Ag-unsplash@2x.png")
    var build9 = require("./images/mahmoud_15@2x.png")
    var build10 = require("./images/mahmoud_4.png")

    var build11 = require("./images/icn/Icon awesome-fax@2x.png")


    return (
        <section style={{ backgroundColor: "#F2F2F2" }}>
            <div class="container pb-4" >
                <div class="row pt-5 mt-5 mb-4">
                    <div class="col text-center " >
                        <h2 class="font-weight-bold mb-1">Latest Announcement</h2>

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
                            <Typography variant="body2" color="text.secondary">

                                <img src={build11} height="12px" width="11px" alt="" style={{ marginRight: "15px", marginBottom: "5px" }} />
                                22 Mar 2020
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" className={{ fontSize: "28px" }}>
                                Life is an Adventure if You Choose to Make it
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Typography size="small">READ MORE</Typography>
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
                            <Typography variant="body2" color="text.secondary">
                                <img src={build11} height="12px" width="11px" alt="" style={{ marginRight: "15px", marginBottom: "5px" }} />
                                22 Mar 2020
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" className={{ fontSize: "28px" }}>
                                Life is an Adventure if You Choose to Make it
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Typography size="small">READ MORE</Typography>
                        </CardActions>

                    </Card>
                    <Card sx={{ maxWidth: 329 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={build10}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <img src={build11} height="12px" width="11px" alt="" style={{ marginRight: "15px", marginBottom: "5px" }} />
                                22 Mar 2020
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" className={{ fontSize: "28px" }}>
                                Life is an Adventure if You Choose to Make it
                            </Typography>


                        </CardContent>
                        <CardActions>
                            <Typography size="small">READ MORE</Typography>
                        </CardActions>
                    </Card>


                </div>
                <div class="row align-items-center">
                    <div class="col"> </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <button style={{ backgroundColor: "#2E3191", color: "white", border: "none", borderRadius: "4px", padding: "10px 30px", display: "flex", marginLeft: "40px" }}>
                            Success
                        </button>
                    </div>
                    <div class="col"> </div>
                    <div class="col"> </div>
                </div>
            </div >
        </section>
    )
}

export default LatestAnnouncement