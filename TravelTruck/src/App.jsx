import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Header from "./components/Header.jsx";
import Catalog from "../src/pages/campers/Catalog.jsx";
import CamperDetails from "./pages/camperDetails/CamperDetails.jsx";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CamperDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
