
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import ScrollToTop from './shared/components/ScrollToTop';
import MainNavigation from './shared/navigation/MainNavigation';
import Home from "./HomePage/page/Home";
import Footer from './shared/footer/Footer';
import PageNotFound from './shared/components/PageNotFound';
import { ShareContext } from "./shared/context/share-contex";
import { useCart } from "./shared/hooks/auth-hook";
import './App.css';

function App() {
  const { buy, removeItem, shop, showModal, closeModal, show } = useCart();

  return (
    <ShareContext.Provider value={{ buy: buy, removeItem: removeItem, shop: shop, showModal: showModal, closeModal: closeModal, show: show }}>
      <BrowserRouter>
        <ScrollToTop>
          <MainNavigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            {/* <Route exact path="/" element={<Home />} /> */}
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </ShareContext.Provider>
  );
}

export default App;
