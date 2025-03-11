import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./globals.css";
import AnimatedCursor from 'react-animated-cursor'

const Root = () => {
  const [showCursor, setShowCursor] = useState(false);
  
  useEffect(() => {
    // Function to detect if device is mobile or tablet
    const isMobileOrTablet = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
      // Regular expressions for mobile and tablet detection
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      
      return mobileRegex.test(userAgent);
    };
    
    // Set cursor visibility based on device type, not just screen size
    setShowCursor(!isMobileOrTablet());
    
  }, []);
  
  return (
    <StrictMode>
      <App />
      {showCursor && (
        <AnimatedCursor
          color="#00ffff"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            mixBlendMode: 'exclusion',
            zIndex: 10000,
            backgroundColor: '#00ffff'
          }}
          showSystemCursor={false} 
          clickables={['a', 'button', 'input', 'textarea', '.clickable']}
          innerStyle={{ backgroundColor: '#00ffff', mixBlendMode: 'exclusion', zIndex: 10000 }}
        />
      )}
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);