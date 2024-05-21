import React from "react";
import { Typography, Grid } from "@mui/material";
import review1 from "./assets/motionarteffect-img2.png";
import review2 from "./assets/motionarteffect-img1.png";
import review3 from "./assets/motionarteffect-img3.png";
import stars from "./assets/motionarteffect-img4.png";

export default function Review() {
    return (
        <div>
            <Typography
                style={{
                    fontFamily: "'Sora', sans-serif",
                    marginTop: '100px',
                    fontSize: '19px',
                    textAlign: 'center',
                }}
            >
                Trusted by thousands of users around the world
            </Typography>
            <Grid container style={{ marginTop: '60px' }} spacing={2}>
                <Grid item xs={12} md={6} lg={4} container justifyContent="center">
                    <div style={{ display: 'flex' }}>
                        <div>
                            <img src={review1} alt="Review 1" />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <img src={stars} alt="Stars" style={{ marginTop: '25px' }} />
                            <Typography
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    marginTop: '10px',
                                    fontSize: '15px'
                                }}
                            >
                                4.5 Score, 9 Reviews
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={4} container justifyContent="center">
                    <div style={{ display: 'flex' }}>
                        <div>
                            <img src={review2} alt="Review 2" />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <img src={stars} alt="Stars" style={{ marginTop: '25px' }} />
                            <Typography
                                style={{
                                    fontFamily: "'Outfit', sans-serif'",
                                    marginTop: '10px',
                                    fontSize: '15px'
                                }}
                            >
                                4.5 Score, 9 Reviews
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} lg={4} container justifyContent="center">
                    <div style={{ display: 'flex' }}>
                        <div>
                            <img src={review3} alt="Review 3" />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <img src={stars} alt="Stars" style={{ marginTop: '25px' }} />
                            <Typography
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    marginTop: '10px',
                                    fontSize: '15px'
                                }}
                            >
                                4.5 Score, 9 Reviews
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
