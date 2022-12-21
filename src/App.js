
import React, { useContext, useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNavigation from './shared/navigation/MainNavigation';
import Home from "./HomePage/page/Home";

import { ShareContext } from "./shared/context/share-contex";
import { useCart } from "./shared/hooks/auth-hook";
import './App.css';

function App() {
  const { buy, shop } = useCart();

  return (
    <ShareContext.Provider value={{ buy: buy, shop: shop }}>
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/" element={<Home />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </ShareContext.Provider>
  );
}

export default App;
