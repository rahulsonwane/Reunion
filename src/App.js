import React from 'react'
// import Featured from './components/featured/Featured'
// import Best from './components/best/Best'
// import Hero from './components/hero/Hero'
// import Navbar from './components/navbar/Navbar'
// import Footer from './components/footer/Footer'
import { Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from "./components/home/Home"
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Sign from './components/sign/Sign';
function App() {
  return (
    <>
      <Routes>

        <Route path="/">

          <Route index element={<Home/>} />
          <Route path="Sign" element={<Sign/>} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Search" element={<Search />} />
          <Route path="About" element={<About/>} />
          <Route path="Login" element={<Login/>} />
        




            {/* <Route path=":postId" element={<Detailes />} /> */}


        </Route>

      </Routes>
      {/* <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer /> */}
    </>
  );
}

export default App;
