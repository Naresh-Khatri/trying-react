import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    // simple layout using chakra ui
    <Box>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
}

export default MainLayout;
