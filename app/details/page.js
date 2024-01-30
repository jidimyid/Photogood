"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import gambar1 from "../assets/images/bear-8364583_1280.png"
import gambar2 from "../assets/images/ladybug-8491654_1280.jpg"

export default function Home() {
  return (
    <>
      <UserLayout>
        <main className="detail__container-detail">
          <Image className="detail__gambar" src={gambar1} alt=""></Image>
          <div class="detail__rincian card">
            <div class="card-body p-5">
              <span className="detail__button-unduh">
                <button class="detail__btn-download">Unduh</button>
              </span>
              <div class="detail__button-grup">
                <div class="detail__tiga-button">
                <button class="detail__like-button" onclick="toggleLike()">Like</button>
                <button class="detail__simpan-button" onclick="toggleLike()">Simpan</button>
                <button class="detail__bagikan-button" onclick="toggleLike()">Bagikan</button>
                </div>
                    </div>
                    <div class="detail__gambar-rincian">
                      <div className="detail__row-rinci">
                        <span>Download</span>
                        <span>5322</span>
                      </div>
                      <div className="detail__row-rinci">
                        <span>Suka</span>
                        <span>322</span>
                      </div>
                      <div className="detail__row-rinci">
                        <span>Komentar</span>
                        <span>15</span>
                      </div>
                      <div className="detail__row-rinci">
                        <span>Tipe Media</span>
                        <span>JPEG</span>
                      </div>
                      <div className="detail__row-rinci">
                        <span>Tanggal Publikasi</span>
                        <span>25 Januari 2024</span>
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
