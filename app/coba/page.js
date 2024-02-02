"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gambar1 from "../assets/images/bear-8364583_1280.png"
import gambar2 from "../assets/images/boat-8515980_1280.jpg"
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg"
import gambar4 from "../assets/images/winter-8445565_1280.jpg"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="row row-cols-3 align-content-center justify-content-center">
                <div className="isi-konten col w-50 justify-content-start">
                    <Image src={gambar1} className="image-detail"></Image>
                </div>
                <div className="col">
                    <h1>side content</h1>
                </div>
                <div className="col-8">
                    <h1>sub content</h1>
                </div>
            </div>

            <Footer />
        </>
    );
}