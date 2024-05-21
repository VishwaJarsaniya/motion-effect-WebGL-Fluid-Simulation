import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import sectionimg from "./assets/motionarteffect-img11.png";
import pageimg from "./assets/motionarteffect-img10.png";


export default function Section_Page(){

    return(
        <div style={{marginLeft:'9%',marginRight:'9%'}}>
           <Typography style={{fontFamily: "'Sora', sans-serif",marginTop:'130px',fontSize:'250%',lineHeight:'1.3',textAlign:'center',fontWeight:500}}>Apply On Any Section Or Enable<br></br> For Whole Page</Typography>
            <Grid container spacing={2} style={{justifyContent:'center'}}>
                <Grid item xs={12} md={6}>
                    <Card style={{marginTop:'80px',display: 'inline-block',width:"90%",position:'relative',padding:'30px',background:'linear-gradient(180deg, rgba(14,7,32,1) 10%, rgba(23,16,40,1) 32%, rgba(35,28,52,1) 67%, rgba(33,27,46,1) 89%)',border:'2px solid #2d253d',borderRadius:'25px' }}>
                        <Typography style={{fontFamily: "'Sora', sans-serif",marginTop:'5px',fontSize:'25px',color:'#dfd7f0',fontWeight:500,textAlign:'left'}} >Apply On Section</Typography>
                        <Typography style={{fontFamily: "'Outfit', sans-serif",marginTop:'30px',fontSize:'18px',color:'#a6a1b6',marginBottom:'30px',textAlign:'left'}}>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </Typography>
                        <img src={sectionimg} style={{width:'100%'}} />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card style={{marginTop:'150px',display: 'inline-block',width:"90%",position:'relative',padding:'30px',background:'linear-gradient(180deg, rgba(14,7,32,1) 10%, rgba(23,16,40,1) 32%, rgba(35,28,52,1) 67%, rgba(33,27,46,1) 89%)',border:'2px solid #2d253d',borderRadius:'25px' }}>
                        <Typography style={{fontFamily: "'Sora', sans-serif",marginTop:'5px',fontSize:'25px',color:'#dfd7f0',fontWeight:500,textAlign:'left'}} >Apply On Page</Typography>
                        <Typography style={{fontFamily: "'Outfit', sans-serif",marginTop:'30px',fontSize:'18px',color:'#a6a1b6',marginBottom:'30px',textAlign:'left'}}>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation. </Typography>
                        <img src={pageimg} style={{width:'100%'}} />
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    );
};