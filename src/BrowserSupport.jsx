import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import sectionimg from "./assets/motionarteffect-img11.png";
import bsupport from "./assets/motionarteffect-img8.png";


export default function BrowserSupport(){

    return(
        <div style={{textAlign:'center',marginTop:'150px',marginLeft:'3%',marginRight:'3%'}}>
          
                    <Card xs={12} style={{width:'80%',margin:'auto',marginTop:'80px',padding:'45px',background:'linear-gradient(180deg, rgba(14,7,32,1) 10%, rgba(23,16,40,1) 32%, rgba(35,28,52,1) 67%, rgba(33,27,46,1) 89%)',border:'2px solid #2d253d',borderRadius:'25px' }}>
                        <Typography style={{fontFamily: "'Sora', sans-serif",marginTop:'5px',fontSize:'25px',color:'#dfd7f0',fontWeight:500}} >Supported by All Popular Browsers</Typography>
                        <Typography style={{fontFamily: "'Outfit', sans-serif",marginTop:'20px',fontSize:'18px',color:'#a6a1b6',marginBottom:'30px'}}>Rest assured, Motion Art is designed to be compatible<br></br> with all major web browsers.</Typography>
                        <img src={bsupport} />
                    </Card>
            
        </div>
    );
};