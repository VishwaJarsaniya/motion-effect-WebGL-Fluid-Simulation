import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import LandingPage from './LandingPage';
import { useRef, useEffect } from 'react';
import Fluid from 'webgl-fluid';

function App() {
  const canvas = useRef(null);

  useEffect(() => {
    const c = canvas.current;

    const initializeFluid = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      Fluid(c); // Initialize the fluid effect only once
    };

    const resizeCanvas = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };

    initializeFluid();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (event) => {
      const rect = c.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (Fluid.addDrop) {
        Fluid.addDrop(x, y);
      }
    };

    c.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      c.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <canvas ref={canvas} className="fluid-canvas"></canvas>
      <div className="landing-page-wrapper">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
