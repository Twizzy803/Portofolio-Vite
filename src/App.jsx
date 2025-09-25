// Langkah 1: Import gambar Anda di bagian atas file
import coverImage1 from "./assets/images/img1.jpg";
import coverImage2 from "./assets/images/img2.jpg";
import ReactLogo from "./assets/icons/react.svg";
import LaravelLogo from "./assets/icons/laravel.svg";
import FlutterLogo from "./assets/icons/flutter.svg";
import TailwindLogo from "./assets/icons/tailwind.svg";
import ViteLogo from "./assets/icons/vite.svg";
import FigmaLogo from "./assets/icons/figma.svg";
import instagramLogo from "./assets/icons/instagram.svg";
import githubLogo from "./assets/icons/github.svg";
import linkedinLogo from "./assets/icons/linkedin.svg";
import EmailLogo from "./assets/icons/email.svg";
import WhatsappLogo from "./assets/icons/whatsapp.svg";
import CVSaya from "./assets/files/CV.pdf";

// Animasi
import {
  AnimasiNama,
  AnimasiScroll,
  AnimasiKiri,
  AnimasiKanan,
  AnimasiText,
  PixelatedImage,
} from "./components/Animasi";

// Ccomponen Items
import Navbar from "./components/Navbar";
import ProjectGrid from "./components/ProjectGrid";
import { FloatingIcon } from "./components/FlotingIcon";
import { LiveClock } from "./components/LiveClock";
import SkillIcon from "./components/SkillIcon";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor />

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
            className="md:top-[20%] right-[15%] top-[25%]"
          />
          <FloatingIcon
            src={ViteLogo}
            alt="Vite Logo"
            className="bottom-[22%] left-[20%]"
          />
          <FloatingIcon
            src={FlutterLogo}
            alt="Flutter Logo"
            className="bottom-[15%] right-[5%]"
          />
          <FloatingIcon
            src={TailwindLogo}
            alt="JavaScript Logo"
            className="top-[50%] md:left-[40%] left-[60%]"
          />
          <LiveClock className="hidden md:block font-marker text-4xl md:text-9xl text-white select-none md:top-[20%] md:left-[25%] font-[family-name:var(--font-kode)]" />

          <div className="flex flex-col w-full h-screen items-center md:flex-row">
            <div className="flex flex-col h-screen md:w-1/2 text-white md:justify-center md:items-end md:p-10 justify-center items-center">
              <AnimasiKiri>
                <h2 className="text-md font-semibold mb-2 md:text-4xl">
                  Selamat Datang di Portofolio ,
                  <span className="text-[var(--color-tertinary)]">Saya</span>
                </h2>
              </AnimasiKiri>
              <AnimasiText
                text="Agil Gilang C.S"
                className={
                  "md:text-5xl text-md font-bold mb-4 bg-[var(--color-tertinary)] p-4 text-[var(--color-primary)] rounded-lg"
                }
              />
              <AnimasiKiri>
                <p className="md:text-lg text-sm mb-4 text-center">
                  Saya adalah seorang pengembang web dan mobile yang
                  bersemangat.
                </p>{" "}
                <a
                  href={CVSaya}
                  download="CV_AgilGilangCS.pdf"
                  className="group flex justify-center mx-30 text-sm bg-[var(--color-tertinary)] hover:bg-[var(--color-primary)] hover:outline-2 md:px-8 md:py-4 px-3 py-3 font-bold text-white transition-colors duration-300 rounded-lg"
                >
                  Donwload CV
                </a>
              </AnimasiKiri>
            </div>
            <AnimasiKanan className="w-xs md:w-1/2 flex justify-center relative md:mb-0 bottom-15">
              {/* Langkah 2: Gunakan gambar yang sudah di-import */}
              <div className="w-full max-w-md bg-[var(--color-quaternary)] p-2 shadow-2xl rounded-lg ">
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
        <section id="tentang" className="relative">
          <div className="flex md:flex-row flex-col items-center justify-center h-screen text-gray-900 bg-white md:space-x-20 mt-40 md:mt-0">
            <AnimasiScroll>
              <img
                src={coverImage2}
                alt="cover2"
                className="md:h-240 w-full object-cover rounded-lg"
              />
            </AnimasiScroll>
            <AnimasiScroll>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="md:text-4xl mb-4 text-2xl md:mt-0 mt-5">
                  Tentang <span className="font-bold"> Saya </span>{" "}
                </h2>
                <p className="md:text-lg md:p-0 px-5 mb-4 max-w-2xl text-justify">
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
                <h2 className="md:text-4xl text-2xl mb-4">
                  Kemampuan <span className="font-bold">Saya</span>
                </h2>
                <div className="grid grid-col grid-cols-3 justify-center md:mb-0 mb-30">
                  <SkillIcon src={ReactLogo} alt="React" />
                  <SkillIcon src={LaravelLogo} alt="Laravel" />
                  <SkillIcon src={FlutterLogo} alt="Flutter" />
                  <SkillIcon src={TailwindLogo} alt="Tailwind" />
                  <SkillIcon src={ViteLogo} alt="Vite" />
                  <SkillIcon src={FigmaLogo} alt="figma" />
                </div>
              </div>
            </AnimasiScroll>
          </div>
        </section>

        {/* Section Proyek */}
        <section id="proyek" className="bg-white pt-50 md:pt-20">
          <div className="container mx-auto md:px-4">
            <AnimasiScroll>
              <div className="flex flex-col text-center items-center justify-center">
                <h2 className="md:text-4xl text-2xl font-semibold mb-4">
                  Proyek
                </h2>
                <hr className="w-1/2 mb-4 border-t-4 border-[var(--color-tertinary)]" />
                <div className="md:w-5xl" id="project-grid-container">
                  <ProjectGrid />
                </div>
              </div>
            </AnimasiScroll>
          </div>
        </section>

        {/* Section Kontak */}
        <section id="kontak" className="bg-[var(--color-primary)]">
          <AnimasiScroll>
            <div className="flex flex-col items-center justify-start text-white">
              <h2 className="md:text-4xl text-2xl font-semibold mb-4 mt-15 text-[var(--color-quaternary)] px-5">
                Kontak
              </h2>
              <p className="text-sm pb-4">
                Makasih udah mampir, semoga harimu seru terus.
              </p>
              <div className="flex items-center space-x-4 mb-15">
                {/* Langkah 3: Ubah event handler 'onclick' menjadi 'onClick' */}
                <a href="https://www.instagram.com/chandra_saputra02/">
                  <img src={instagramLogo} alt="" className="md:w-10 w-8" />
                </a>
                <a href="https://github.com/Twizzy803">
                  <img src={githubLogo} alt="" className="md:w-13 w-11" />
                </a>
                <a href="https://www.linkedin.com/in/agilgilangcs/">
                  <img src={linkedinLogo} alt="" className="md:w-10 w-8" />
                </a>
                <a href="mailto:agilgilangcs@gmail.com?subject=Pertanyaan%20dari%20Website%20Portofolio">
                  <img src={EmailLogo} alt="" className="md:w-12 w-10" />
                </a>
              </div>
            </div>
          </AnimasiScroll>
        </section>

        {/* Footer */}
        <section className="bg-[var(--color-secondary)] py-2">
          <footer>
            <div className="text-center text-white">
              <p className="md:text-md text-sm">
                © 2025{" "}
                <span className="font-bold text-[var(--color-tertinary)]">
                  Twizzy
                </span>{" "}
                All Rights Reserved.Inc
              </p>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}

export default App;
