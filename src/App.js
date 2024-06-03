import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import LandingPage from './LandingPage';
import { useRef, useEffect } from 'react';
import Fluid from 'webgl-fluid';

function App() {
  const canvas = useRef(null);
  useEffect(function () {
    let c = canvas.current;
    Fluid(c, {
      SIM_RESOLUTION: 128, // Lower resolution for smaller size
      DENSITY_DISSIPATION: 10, // Increased dissipation for quicker fade
      VELOCITY_DISSIPATION: 1, // Increased dissipation for quicker fade
      PRESSURE: 0.52, // Adjust pressure for smaller effect
      SPLAT_RADIUS: 0.05, // Smaller splat radius for smaller interaction
    });
  }, []);


  return (
    <div className="App">
       <canvas
        ref={canvas}
        style={{
          width: "100%",
          height: "103%",
          position: "absolute",
          top: -80,
          left: 0,
          backgroundColor:'#000080'
        }}></canvas>
      <div
        style={{ zIndex: 9999, position: "relative", pointerEvents: "none" }}
      >
        <LandingPage />
      </div>
    </div>
  );
}

export default App;