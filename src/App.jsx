import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About';
import Header from './Components/Header';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyles';
import Prices from './Pages/Prices';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer';
import Booking from './Pages/Booking';
const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      grey: "#808080",
      greyshade: "rgb(229 228 226)",
      white: "#ffffff",
      black: "#000000",
      orange: "rgb(228 155 15)",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App