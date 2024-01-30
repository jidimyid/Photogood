import React from "react";

export const Footer = () => {
  return <main>
      <footer
        class="text-center text-lg-start text-black bg-body-tertiary">
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="footer__kolom-satu col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  <b>Media</b>
                </h6>
                <p><a>Gif</a></p>
                <p><a>Foto</a></p>
                <p><a>Vektor</a></p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold"><b>Lebih Banyak</b></h6>
                <p>
                  <a class="text-black">Pencarian Populer</a>
                </p>
                <p>
                  <a class="text-black">Rekomendasi Kreator</a>
                </p>
                <p>
                  <a class="text-black">Gambar Populer</a>
                </p>
                <p>
                  <a class="text-black">Pilihan Editor</a>
                </p>
                <p>
                  <a class="text-black">Gabung</a>
                </p>
              </div>
              <hr class="w-100 clearfix d-md-none" />

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold"><b>Tentang</b></h6>
                <p><i class="fas fa-home mr-3"></i>Tentang Kami</p>
                <p><i class="fas fa-envelope mr-3"></i>FAQ</p>
                <p><i class="fas fa-phone mr-3"></i>Privasi</p>
                <p><i class="fas fa-print mr-3"></i>Kebijakan</p>
                <p><i class="fas fa-print mr-3"></i>Lisensi</p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold"><b>Hubungi Kami Melalui</b></h6>
              </div>
            </div>
          </section>
        </div>

        <div class="text-center p-3">
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">PHOTOGOOD</a>
        </div>
      </footer>
  </main>
};
