"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MdGifBox, MdCameraAlt, MdBrush} from "react-icons/md"
import gambar1 from "../assets/images/bear-8364583_1280.png"
import gambar2 from "../assets/images/boat-8515980_1280.jpg"
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg"
import gambar4 from "../assets/images/winter-8445565_1280.jpg"

export default function Home() {
  return (
    <>
      <Navbar />
      <Footer />
        </>
        );
}

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
