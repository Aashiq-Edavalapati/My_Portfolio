import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./globals.css";
import AnimatedCursor from 'react-animated-cursor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
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
  </StrictMode>,
)
