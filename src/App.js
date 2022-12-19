
import { BrowserRouter, Routes } from "react-router-dom";

import MainNavigation from './shared/navigation/MainNavigation'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
