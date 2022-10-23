import { Route, Routes, useRoutes } from "react-router-dom";
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
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";
import BlogsSample from "./pages/BlogsSample";
import MainLayout from "./layouts/MainLayout";

import {
  createRoutesFromElements,
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "about",
  //     element: <About />,
  //   },
  //   {
  //     path: "services",
  //     element: <Services />,
  //   },
  //   {
  //     path: "team",
  //     element: <Team />,
  //   },
  //   {
  //     path: "branches",
  //     element: <Branches />,
  //   },
  //   {
  //     path: "help",
  //     element: <Help />,
  //   },
  //   {
  //     path: "contact",
  //     element: <Contact />,
  //   },
  //   {
  //     path: "login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "dashboard",
  //     element: <Dashboard />,
  //   },
  // ]);
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/help" element={<Help />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/1" element={<BlogsSample />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
