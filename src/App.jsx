import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { ResProvider } from "./Data/ResturantData";
import "./index.css";
import FullMenuPage from "./Pages/MenuPage/FullMenuPage";

function App() {
  return (
    <ResProvider>
      <Routes>
        {/* Navbar Layout with Nested Routes */}

        <Route path="/" element={<Navbar />}>
          <Route index element={<Body />} />
          <Route index path="/ResturantMenu/:id" element={<FullMenuPage />} />
        </Route>
      </Routes>
    </ResProvider>
  );
}

export default App;
