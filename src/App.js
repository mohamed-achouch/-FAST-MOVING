import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Location from "./pages/Location";
import Details from "./pages/Details";
import Trick from "./pages/Trick";
import GetQoute from "./pages/GetQoute";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="location" element={<Location />} />
        <Route path="details" element={<Details />} />
        <Route path="tricks" element={<Trick />} />
        <Route path="qoute" element={<GetQoute/>} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
