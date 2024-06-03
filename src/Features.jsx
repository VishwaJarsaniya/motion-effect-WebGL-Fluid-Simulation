import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import sectionimg from "./assets/motionarteffect-img11.png";
import img1 from "./assets/motionarteffect-img9.png";
import img2 from "./assets/motionarteffect-img6.png";
import img3 from "./assets/motionarteffect-img7.png";


export default function Features(){

    return(
        <div style={{marginBottom:'500px'}}>
           <Typography style={{fontFamily: "'Sora', sans-serif",marginTop:'130px',fontSize:'250%',lineHeight:'1.5',textAlign:'center',fontWeight:500}}>An All-Round Plugin With<br></br> Powerful Features</Typography>
           <Typography style={{fontFamily: "'Outfit', sans-serif",marginTop:'20px',fontSize:'18px',color:'#a6a1b6',textAlign:'center'}}>Whether you're a seasoned web designer or just starting out, Motion Art for<br></br> Elementor seamlessly integrates with the Elementor platform, providing you<br></br> with a seamless and intuitive experience.</Typography>
            <Grid container spacing={8} style={{width:'88%',justifyContent:'center',margin:'0 auto'}}>
                <Grid item xs={12} sm={6} md={4} >
                    <Card style={{width:'90%',marginTop:'20px',padding:'25px',paddingTop:'5px',paddingBottom:'5px',background:'linear-gradient(180deg, rgba(14,7,32,1) 10%, rgba(23,16,40,1) 32%, rgba(35,28,52,1) 67%, rgba(33,27,46,1) 89%)',border:'2px solid #2d253d',borderRadius:'18px',marginLeft:'-10%',marginRight:'-10%' }}>
                        <img src={img1} style={{marginLeft:'-10%',display:'block'}}/>
                        <Typography style={{fontFamily: "'Sora', sans-serif",marginTop:'5px',fontSize:'25px',color:'#dfd7f0',fontWeight:500,textAlign:'left'}} >Light Weight</Typography>
                        <Typography style={{fontFamily: "'Outfit', sans-serif",marginTop:'30px',fontSize:'18px',color:'#a6a1b6',marginBottom:'30px',textAlign:'left'}}>Motion Art for Elementor is designed to<br></br> be lightweight. </Typography>
                   </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card style={{width:'90%',marginTop:'20px',padding:'25px',paddingTop:'5px',paddingBottom:'5px',background:'linear-gradient(180deg, rgba(14,7,32,1) 10%, rgba(23,16,40,1) 32%, rgba(35,28,52,1) 67%, rgba(33,27,46,1) 89%)',border:'2px solid #2d253d',borderRadius:'18px',marginLeft:'-10%',marginRight:'-10%'}}>
                        <img src={img2} style={{marginLeft:'-10%',display:'block'}}/>
                        <Typography style={{fontFamily: "'Sora', sans-serif",marginTop:'5px',fontSize:'25px',color:'#dfd7f0',fontWeight:500,textAlign:'left'}} >100% Responsive</Typography>
                        <Typography style={{fontFamily: "'Outfit', sans-serif",marginTop:'30px',fontSize:'18px',color:'#a6a1b6',marginBottom:'30px',textAlign:'left'}}>Create a consistent visual experience<br></br> across all devices. </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card style={{width:'90%',marginTop:'20px',padding:'25px',paddingTop:'5px',paddingBottom:'5px',background:'linear-gradient(180deg, rgba(14,7,32,1) 10%, rgba(23,16,40,1) 32%, rgba(35,28,52,1) 67%, rgba(33,27,46,1) 89%)',border:'2px solid #2d253d',borderRadius:'18px',marginLeft:'-10%',marginRight:'-10%' }}>
                        <img src={img3} style={{marginLeft:'-10%',display:'block'}} />
                        <Typography style={{fontFamily: "'Sora', sans-serif",marginTop:'5px',fontSize:'25px',color:'#dfd7f0',fontWeight:500,textAlign:'left'}} >User Friendly Interface</Typography>
                        <Typography style={{fontFamily: "'Outfit', sans-serif",marginTop:'30px',fontSize:'18px',color:'#a6a1b6',marginBottom:'30px',textAlign:'left'}}>Ensure a smooth experience for<br></br> both applicants and administrators.</Typography>
                     </Card>
                </Grid>
            </Grid>
            
        </div>
    );
};