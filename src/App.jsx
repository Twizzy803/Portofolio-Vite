// src/App.jsx

import Navbar from "./components/Navbar";

// Langkah 1: Import gambar Anda di bagian atas file
import coverImage1 from "./assets/images/img1.jpg";
import coverImage2 from "./assets/images/img2.jpg";
import ReactLogo from "./assets/icons/react.svg";
import LaravelLogo from "./assets/icons/laravel.svg";
import FlutterLogo from "./assets/icons/flutter.svg";
import TailwindLogo from "./assets/icons/tailwind.svg";
import ViteLogo from "./assets/icons/vite.svg";
import ProjectGrid from "./components/ProjectGrid";

import {
  AnimasiNama,
  AnimasiScroll,
  AnimasiKiri,
  AnimasiKanan,
  AnimasiText,
  PixelatedImage,
} from "./components/Animasi";
import { FloatingIcon } from "./components/FlotingIcon";
import { LiveClock } from "./components/LiveClock";

function App() {
  return (
    <>
      {" "}
      {/* Menggunakan Fragment <>...</> untuk membungkus semuanya */}
      <Navbar />
      <main>
        {/* Section Beranda */}
        <section
          id="beranda"
          className="bg-[var(--color-primary)] beranda relative overflow-hidden"
        >
          <FloatingIcon
            src={ReactLogo}
            alt="React Logo"
            className="top-[15%] left-[10%]"
          />
          <FloatingIcon
            src={LaravelLogo}
            alt="Laravel Logo"
            className="top-[20%] right-[15%] w-20 h-20"
          />
          <FloatingIcon
            src={ViteLogo}
            alt="Vite Logo"
            className="bottom-[25%] left-[20%]"
          />
          <FloatingIcon
            src={FlutterLogo}
            alt="Flutter Logo"
            className="bottom-[15%] right-[5%]"
          />
          <FloatingIcon
            src={TailwindLogo}
            alt="JavaScript Logo"
            className="top-[50%] left-[40%]"
          />
          <LiveClock className="font-marker text-8xl md:text-9xl text-white select-none top-[30%] left-[25%] font-[family-name:var(--font-kode)]" />

          <div className="flex flex-row w-full h-screen items-center">
            <div className="flex flex-col h-screen w-1/2 text-white justify-end items-end p-10">
              <AnimasiKiri>
                <h2 className="text-4xl font-semibold mb-4">
                  Selamat Datang di Portofolio ,
                  <span className="text-[var(--color-tertinary)]">Saya</span>
                </h2>
              </AnimasiKiri>
              <AnimasiText
                text="Agil Gilang C.S"
                className={
                  "text-5xl font-bold mb-4 bg-[var(--color-tertinary)] p-4 text-[var(--color-primary)] rounded-lg"
                }
              />
              <AnimasiKiri>
                <p className="text-lg mb-4">
                  Saya adalah seorang pengembang web dan mobile yang
                  bersemangat.
                </p>{" "}
                <a
                  href="#proyek"
                  className="group relative inline-block px-8 py-4 font-bold text-white transition-colors duration-300"
                >
                  {/* Lapisan Latar Belakang */}
                  <span className="absolute inset-0 bg-[var(--color-tertinary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)]/80 rounded-lg"></span>

                  {/* Teks Tombol (di atas lapisan latar belakang) */}
                  <span className="relative z-1 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                    Donwload CV
                  </span>

                  {/* --- INI BAGIAN AJAIBNYA: SUDUT-SUDUT BINGKAI --- */}

                  {/* Sudut Kiri Atas */}
                  <span className="absolute left-0 top-0 h-0 w-0 border-t-2 border-l-2 border-tertiary transition-all duration-300 group-hover:h-full group-hover:w-full rounded-tl-lg"></span>

                  {/* Sudut Kanan Bawah */}
                  <span className="absolute right-0 bottom-0 h-0 w-0 border-b-2 border-r-2 border-tertiary transition-all duration-300 group-hover:h-full group-hover:w-full rounded-br-lg"></span>
                </a>
              </AnimasiKiri>
            </div>
            <AnimasiKanan className="w-1/2 flex justify-center items-center">
              {/* Langkah 2: Gunakan gambar yang sudah di-import */}
              <div className="w-full max-w-md bg-[var(--color-quaternary)] p-2 shadow-2xl rounded-lg">
                <PixelatedImage
                  src={coverImage1}
                  alt="cover"
                  gridSize={25} // Coba mainkan angka ini (misal: 10, 20, 30)
                  className="shadow-2xl"
                />
              </div>
            </AnimasiKanan>
          </div>
        </section>

        {/* Section Tentang */}
        <section id="tentang" className="relative z-2">
          <div className="flex flex-row items-center justify-center h-screen text-gray-900 bg-white space-x-20">
            <AnimasiScroll>
              <img
                src={coverImage2}
                alt="cover2"
                className="h-240 w-full object-cover rounded-lg"
              />
            </AnimasiScroll>
            <AnimasiScroll>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl mb-4">
                  Tentang <span className="font-bold"> Saya </span>{" "}
                </h2>
                <p className="text-lg mb-4 max-w-2xl text-justify">
                  Saya adalah seorang pengembang web dan mobile yang antusias
                  dan memiliki semangat tinggi dalam menciptakan solusi digital.
                  Dengan pengalaman dalam membangun aplikasi yang responsif dan
                  memiliki kualitas yang bagus, saya terbiasa mengerjakan proyek
                  yang berfokus pada tampilan yang menarik sekaligus
                  fungsionalitas yang optimal, baik untuk platform web maupun
                  mobile. Saya juga terus berupaya mengembangkan kemampuan
                  dengan mempelajari teknologi terbaru di dunia pemrograman.
                  Bagi saya, dunia teknologi adalah ruang belajar tanpa henti,
                  dan saya selalu terbuka untuk tantangan baru yang dapat
                  meningkatkan keterampilan serta memberikan hasil kerja yang
                  lebih baik ke depannya.
                </p>
                <div>
                  <h2 className="text-4xl mb-4">
                    Kemampuan <span className="font-bold">Saya</span>
                  </h2>
                </div>
              </div>
            </AnimasiScroll>
          </div>
        </section>

        {/* Section Proyek */}
        <section id="proyek" className="relative bg-white py-20">
          <div className="container mx-auto px-4">
            <AnimasiScroll>
              <div className="flex flex-col text-center items-center justify-center">
                <h2 className="text-4xl font-semibold mb-4 mt-xl mt-25">
                  Proyek
                </h2>
                <hr className="w-1/2 mb-4 border-t-4 border-[var(--color-tertinary)]" />
                <div className="w-5xl" id="project-grid-container">
                  <ProjectGrid />
                </div>
              </div>
            </AnimasiScroll>
          </div>
        </section>

        {/* Section Kontak */}
        <section id="kontak" className="bg-[var(--color-primary)] py-20">
          <footer>
            <div className="flex flex-col items-center justify-start h-screen text-white">
              <h2 className="text-9xl font-semibold mb-4 mt-50 text-[var(--color-primary)] text-shadow-lg text-shadow-[var(--color-tertinary)] bg-[var(--color-tertinary)] px-5 rounded-lg">
                Kon
                {/* <span className="bg-[var(--color-tertinary)] px-5 rounded-lg"> */}
                tak
                {/* </span> */}
              </h2>
              <hr className="w-1/3 mb-4 border-t-4 border-[var(--color-tertinary)]" />
              <div className="grid grid-cols-2 gap-4 items-center mt-10 text-xl space-x-10 place-content-around">
                {/* Langkah 3: Ubah event handler 'onclick' menjadi 'onClick' */}
                <button
                  onClick={() =>
                    window.open("https://wa.me/6287861801695", "_blank")
                  }
                  className="bg-[var(--color-primary)] text-[var(--color-secondary)] font-bold py-4 px-4 rounded-full hover:text-white hover:bg-[var(--color-secondary)] shadow-lg shadow-[var(--color-secondary)] hover:shadow-none w-100"
                >
                  <i className="fa-brands fa-whatsapp"></i> Whatsapp
                </button>
                <button className="bg-[var(--color-primary)] text-[var(--color-secondary)] font-bold py-4 px-4 rounded-full hover:text-white hover:bg-[var(--color-secondary)] shadow-lg shadow-[var(--color-secondary)] hover:shadow-none w-100">
                  <i className="fa-regular fa-envelope"></i> Email
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/Twizzy803", "_blank")
                  }
                  className="bg-[var(--color-primary)] text-[var(--color-secondary)] font-bold py-4 px-4 rounded-full hover:text-white hover:bg-[var(--color-secondary)] shadow-lg shadow-[var(--color-secondary)] hover:shadow-none w-100"
                >
                  <i className="fa-brands fa-github"></i> Github
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/agilgilangcs/",
                      "_blank"
                    )
                  }
                  className="bg-[var(--color-primary)] text-[var(--color-secondary)] font-bold py-4 px-4 rounded-full hover:text-white hover:bg-[var(--color-secondary)] shadow-lg shadow-[var(--color-secondary)] hover:shadow-none w-100"
                >
                  <i className="fa-brands fa-linkedin"></i> LinkedIn
                </button>
              </div>
            </div>
          </footer>
          <div className="mt-10 text-center text-white">
            <p className="text-lg">
              Author: <span className="font-bold">Twizzy</span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
