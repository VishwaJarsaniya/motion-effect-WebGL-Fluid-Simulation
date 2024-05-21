import React from "react";
import logo from "./assets/MotionArtEffect-logo.png";
import magicwand from "./assets/motionarteffect-img5.png";
import { Typography, Grid, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Review from "./Review";
import Section from "./Section_Page";
import Section_Page from "./Section_Page";
import BrowserSupport from "./BrowserSupport";
import Features from "./Features";


export default function LandingPage(){

    return(
        <div>
            {/* logo */}
            <img src={logo} style={{marginTop:'60px',display:'flex',flexDirection:'flex-start',marginLeft:'9%',marginRight:'9%'}}/>

            <Grid container style={{marginLeft:'10%',marginRight:'10%'}}>
            <Grid item xs={12} md={3}>
                <div className="fontA">
            <Typography className="gradientText" style={{fontFamily: "'Sora', sans-serif",marginTop:'100px',fontSize:'20px',fontWeight:500,lineHeight:'1.3',textAlign:'left'}}>Tranform <br /> Your Website</Typography>
            <Typography style={{fontFamily: "'Outfit', sans-serif",marginTop:'20px',fontSize:'20px',fontWeight:300,lineHeight:'1.3',textAlign:'left'}}>With Motion Art <br /> Effect</Typography>
            </div>
            </Grid>
            <Grid item xs={12} md={4.1}>
            <Typography className="fontB" style={{fontFamily: "'Sora', sans-serif",marginTop:'100px',fontSize:'4.2vw',lineHeight:'1.3',fontWeight:500,textAlign:'left',marginLeft:'-10%',marginRight:'-10%'}}>Attract Your Visitors Attention With Colorful</Typography>
            <Typography className="gradientText" style={{fontFamily: "'Sora', sans-serif",fontSize:'4.2vw',lineHeight:'1.3',fontWeight:500,textAlign:'left',marginLeft:'-10%',marginRight:'-10%'}}>Motion Art Effect</Typography>
            <Typography className="fontC" style={{fontFamily: "'Outfit', sans-serif",marginLeft:'-2%',marginTop:'30px',fontSize:'18px',color:'#a6a1b6',textAlign:'left',marginLeft:'-10%',marginRight:'-10%'}}>Unleash the power of creativity with Motion Art for Elementor - 
                your ultimate solution for seamlessly integrating captivating animations into your website.</Typography>
            </Grid>
            </Grid>

            {/* Review */}
            <Review />

            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Typography style={{fontFamily: "'Sora', sans-serif",marginTop:'130px',fontSize:'260%',lineHeight:'1.5',fontWeight:500,textAlign:'left',marginLeft:'12%',marginRight:'12%'}}>Turn Your Cursor Into A Colorful<br></br> Magic Wand & Charm Your Visitors</Typography>
                    <Typography style={{fontFamily: "'Outfit', sans-serif",marginTop:'30px',fontSize:'18px',color:'#a6a1b6',textAlign:'left',marginLeft:'12%',marginRight:'12%'}}>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse<br></br> your website with visually stunning motion art elements.</Typography>
                    <Button style={{background:'linear-gradient(90deg, rgba(94,17,255,1) 6%, rgba(112,29,228,1) 26%, rgba(150,53,171,1) 45%, rgba(168,65,144,1) 63%, rgba(204,88,89,1) 76%, rgba(231,106,48,1) 93%)',color:'white',fontFamily: "'Outfit', sans-serif",textTransform:'none',fontWeight:300,fontSize:'22px',borderRadius:'15px',padding:'10px',width:'320px',marginTop:'30px',display:'flex',flexDirection:'flex-start',marginLeft:'12%',marginRight:'12%'}}>Purchase From Envato<ArrowForwardIcon /></Button>
                </Grid>
                <Grid item xs={12} md={3} container justifyContent={{ xs: 'center' }}>
                    <img src={magicwand} style={{paddingTop:'150px',marginLeft:'2%',marginRight:'2%',paddingBottom:'75px',width:'248px',height:'246px'}}/>
                </Grid>
            </Grid>

            {/* Section & Page */}
            <Section_Page />

            {/* Browser Support */}
            <BrowserSupport/>

            {/* Features */}
            <Features />
           
        </div>
    );
};