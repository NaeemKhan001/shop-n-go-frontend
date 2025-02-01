import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
