import React from "react";
import Headers from "../src/components/Headers";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Headers title="Testy na Prawo Jazdy" description="Rozpocznij egzamin próbny" />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default HomePage;
