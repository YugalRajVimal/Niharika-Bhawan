import React, { useContext } from "react";
import { MyProvider } from "./store/MyContext";

import Nav from "./Components/Nav";
import HomeImageComponent from "./Components/HomeImageComponent";
import GalleryComponent from "./Components/GalleryComponent";

import Footer from "./Components/Footer";

import AboutPage from "./Components/AboutPage";
import HotelFacilityPage from "./Components/HotelFacilityPage";
import Testimonials from "./Components/Testimonials";
import Gallery from "./Components/Gallery";
import NiharikaRetreat from "./Components/NiharikaRetreat";
import BookingCTA from "./Components/BookingCTA";
import NearbyAttractions from "./Components/NeabyAttractions";
import FloatingIcons from "./Components/FloatingIcons";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MyProvider>
              <div className="relative w-full overflow-hidden">
                <Nav />
                <HomeImageComponent />
                <AboutPage />
                <NiharikaRetreat />
                <GalleryComponent />
                <BookingCTA />
                <HotelFacilityPage />
                {/* <Testimonials /> */}
                <Gallery />
                <NearbyAttractions />
                {/* 
      <BirlaDharamshala /> */}
                <Footer />
                <FloatingIcons />
              </div>
            </MyProvider>
          }
        />
        <Route path="/call" element={<Navigate replace to="/" />} />
        <Route path="/whatsapp" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
