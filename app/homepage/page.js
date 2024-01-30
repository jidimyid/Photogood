"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import gif from "../assets/icon/gif-file.png"
import kamera from "../assets/icon/photo-camera.png"
import vektor from "../assets/icon/paint-brush.png"
import gambar1 from "../assets/images/ladybug-8491654_1280.jpg"
import gambar2 from "../assets/images/bear-8364583_1280.png"
import gambar3 from "../assets/images/boat-8515980_1280.jpg"
import gambar4 from "../assets/images/winter-8445565_1280.jpg"



export default function Home() {
  return (
    <>
      <UserLayout>
        <main>
          <header className="home__header">
            <h1 className="home__heading">
              <span className="home__heading-utama">Gambar terbaik yang dapat ditemukan</span>
              <span className="home__heading-sub">Terdiri dari ribuan gambar yang diunggah oleh seluruh pengguna di dunia</span>
            </h1>
            <div class=" home__search-bar input-group md-form form-sm form-1 pl-0 position-absolute top-50 start-50 translate-middle w-50">
              <input class="form-control my-0 py-1 rounded-pill position-absolte" type="text" placeholder="Temukan gambar lebih banyak" aria-label="Search"></input>
            </div>
            <div id="carouselExampleInterval" class="home__gambar-carousel carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="home__gambar-homepage carousel-item active" data-bs-interval="10000">
                  <Image src={gambar1} class="d-block w-100" alt="..."></Image>
                </div>
                <div class="home__gambar-homepage carousel-item" data-bs-interval="2000">
                  <Image src={gambar2} class="d-block w-100" alt="..."></Image>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </header>
          <div className="home__container-button">
            <ul className="home__kategori-button">
              <button type="button" class="home__tiga-button rounded-pill me-2"><Image className="home__untuk-icon" src={gif}></Image>Gif</button>
              <button type="button" class="home__tiga-button rounded-pill me-2"><Image className="home__untuk-icon" src={kamera}></Image>      Foto</button>
              <button type="button" class="home__tiga-button  rounded-pill me-2"><Image className="home__untuk-icon" src={vektor}></Image>   Vektor</button>
            </ul>
          </div>
          <div className="home__container-gambar row">
            <div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <div className="img-container">
                  <Image src={gambar1} alt="contoh gambar"></Image>
                  <div className="overlay">
                    <p className="caption">Judul bolo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <div className="img-container">
                  <Image src={gambar2} alt="contoh gambar"></Image>
                  <div className="overlay">
                    <p className="caption">Judul bolo</p>
                  </div>
                </div>
              </div>
            </div><div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <div className="img-container">
                  <Image src={gambar3} alt="contoh gambar"></Image>
                  <div className="overlay">
                    <p className="caption">Judul bolo</p>
                  </div>
                </div>
              </div>
            </div><div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <div className="img-container">
                  <Image src={gambar4} alt="contoh gambar"></Image>
                  <div className="overlay">
                    <p className="caption">Judul bolo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <div className="img-container">
                  <Image src={gambar1} alt="contoh gambar"></Image>
                  <div className="overlay">
                    <p className="caption">Judul bolo</p>
                  </div>
                </div>
              </div>
            </div><div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <div className="img-container">
                  <Image src={gambar2} alt="contoh gambar"></Image>
                  <div className="overlay">
                    <p className="caption">Judul bolo</p>
                  </div>
                </div>
              </div>
            </div><div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <div class="img-container">
                  <Image src={gambar3} alt="contoh gambar"></Image>
                  <div className="overlay">
                    <p className="caption">Judul bolo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <div className="img-container">
                  <Image src={gambar4} alt="contoh gambar"></Image>
                  <div className="overlay">
                    <p className="caption">Judul bolo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </main>
      </UserLayout>
    </>
  );
}

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
