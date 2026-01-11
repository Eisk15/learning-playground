// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import { ThemeProvider } from './components/landing-page/Header/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {<LandingPage/>
}
    </ThemeProvider>
  )
}

export default App
