
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNavigation from './shared/navigation/MainNavigation';
import Home from "./HomePage/page/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/" element={<Home />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
