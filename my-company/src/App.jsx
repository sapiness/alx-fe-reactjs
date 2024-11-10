// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/my-company/src/components/Home'
import About from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/my-company/src/components/About'
import Services from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/my-company/src/components/Services'
import Contact from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/my-company/src/components/Contact'
import Navbar from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/my-company/src/components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route >
          <Route index element={<Home />} />
          <Route path="Navbar" element={<Navbar />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

