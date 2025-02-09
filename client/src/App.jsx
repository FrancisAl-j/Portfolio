import React, { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Body from "./pages/Body/Body";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <BrowserRouter>
      <main>
        <Nav setShowMenu={setShowMenu} />
        <Body showMenu={showMenu} setShowMenu={setShowMenu} />
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
