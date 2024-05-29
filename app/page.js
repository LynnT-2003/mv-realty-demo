"use client"

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HomeBrowse from "./components/HomeBrowse"
import NavbarDemo from "./components/NavbarDemo"
import MapDemo from "./components/MapDemo"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeBrowse/>
      <MapDemo/>
    </>
  );
}
