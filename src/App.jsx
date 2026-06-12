import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/work" element={<OurWork />} />
      </Routes>
    </>
  );
}