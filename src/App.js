import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Branches from "./pages/Branches";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from './pages/Register'
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
