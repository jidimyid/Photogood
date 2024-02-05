"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import gambar1 from "../assets/images/ladybug-8491654_1280.jpg";
import gambar2 from "../assets/images/bear-8364583_1280.png";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="row">
                <h1>Berlangganan</h1>
            </div>
            <div className="row">
                <div className="col-5 bg-secondary">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="row border-bottom text-center mx-2">
                                <div className="col-5 bg-primary"></div>
                                <div className="col"><span className="text-th">Gratis</span></div>
                                <div className="col"><span className="text-th">Member</span></div>
                            </div>
                            <div className="row mx-2">
                                <div className="col-5">Maksimal download gambar</div>
                                <div className="col text-center"><span>3</span></div>
                                <div className="col text-center"><span>Tak terbatas</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row bg-info">row1</div>
                    <div className="row bg-primary">row2</div>
                </div>
            </div>
      <Footer />
    </>
  );
}
