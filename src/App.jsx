import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize(import.meta.env.VITE_MEASUREMENT_ID);

  return (
    <>
      <header className="navbar bg-secondary">
        <a href="#" className="btn btn-ghost text-xl text-white">
          MathGrowth
        </a>
      </header>

      <main>
        <section className="bg-primary flex flex-col lg:flex-row justify-center items-center text-secondary ">
          <div className="w-1/2 flex flex-col px-12 text-center lg:text-left">
            <h1 className="text-4xl font-bold">MathGrowth</h1>
            <p className="py-6 text-2xl">
              Ayo Jelajahi <br /> Dunia Matematika yang Penuh Petualangan Seru!
            </p>
            <a href="#" className="btn btn-accent text-white w-fit">
              Jelajahi Yuk
            </a>
          </div>
          <div className="w-1/2 h-100">
            <img src="/mathematics-cuate.svg" alt="Math Illustration" className="h-full" />
          </div>
        </section>

        <section id="explore" className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-secondary flex flex-row justify-center">
            <div className="flex flex-col text-left">
              <span className="text-3xl font-bold">Kenapa</span>
              <span className="text-5xl font-bold -mt-1">MathGrowth</span>
            </div>
            <img src="/icons/question-mark.svg" alt="Question Mark Icon" className="-mt-10" />
          </h2>
          <div className="w-4/5 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="card">
              <figure className="px-10 pt-10">
                <img src="/icons/games.svg" alt="Console Game" className="rounded-xl" />
              </figure>
              <div className="card-body flex flex-col items-center justify-between text-center">
                <h3 className="card-title">Pembelajaran yang Menyenangkan</h3>
                <p className="mt-4">
                  Belajar matematika sambil main game membuat belajar jadi lebih menyenangkan.
                </p>
              </div>
            </div>
            <div className="card">
              <figure className="px-10 pt-10">
                <img src="/icons/target.svg" alt="Arrow Target" className="rounded-xl" />
              </figure>
              <div className="card-body flex flex-col items-center justify-between text-center">
                <h3 className="card-title">Banyak Tantangan</h3>
                <p className="mt-4">
                  Akan ada banyak tantangan matematika yang seru setiap minggunya.
                </p>
              </div>
            </div>
            <div className="card">
              <figure className="px-10 pt-10">
                <img src="/icons/plus-and-minus.svg" alt="Math Symbols" className="rounded-xl" />
              </figure>
              <div className="card-body flex flex-col items-center justify-between text-center">
                <h3 className="card-title">Banyak Materi Pembelajaran</h3>
                <p className="mt-4">
                  Kalian bisa belajar banyak materi terkait penjumlahan, pengurangan, perkalian, dan pembagian.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hero bg-primary min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-1/2 h-min text-center lg:text-left flex flex-col space-between">
              <h2 className="text-5xl font-bold text-accent">
                Jadi Yang Teratas di Papan Peringkat Kami!
              </h2>
              <p className="py-6">
                Selesaikan setiap tantangan untuk mendapatkan poin dan naik ke
                peringkat teratas di{" "}
                <span className="font-bold text-accent">Papan Peringkat</span>{" "}
                kami! Bayangkan betapa hebatnya rasanya menjadi yang terbaik
                dalam memecahkan tantangan matematika!
              </p>
              <a href="#" className="btn btn-accent w-fit text-xl">
                Mulai Sekarang!
              </a>
            </div>
            <div className="w-1/2">
              <img src="/winners-amico.svg" alt="Winners" />
            </div>
          </div>
        </section>

        <section id="join" className="hero bg-gray-200 min-h-screen">
          <div className="hero-content flex flex-col justify-center items-center">
            <h2 className="text-secondary text-5xl font-bold">
              Mari Bergabung bersama MathGrowth!
            </h2>
            <p className="mt-10 text-2xl w-3/5 text-center">
              Ayo segera bergabung dengan MathGrowth dan mulailah petualangan
              matematika seru bersama kami hari ini!
            </p>
            <a href="#" className="btn btn-accent btn-lg mt-20">
              Gabung Sekarang
            </a>
          </div>
        </section>

        <section className="hero bg-primary min-h-screen text-secondary">
          <div className="hero-content flex flex-col justify-center items-center">
            <div className="flex flex-row space-x-5 items-end">
              <img src="/icons/star.svg" alt="Star" className="w-8" />
              <img src="/icons/star.svg" alt="Star" className="w-12" />
              <img src="/icons/star.svg" alt="Star" className="w-16" />
              <img src="/icons/star.svg" alt="Star" className="w-12" />
              <img src="/icons/star.svg" alt="Star" className="w-8" />
            </div>
            <blockquote className="text-4xl text-center italic my-20">
              “Dengan MathGrowth, belajar matematika sekarang menjadi lebih mudah dan menyenangkan!”
            </blockquote>
            <div className="flex flex-row">
              <img src="/icons/user.svg" alt="User" className="w-16" />
              <div className="flex flex-col justify-center ms-3">
                <p className="text-xl font-bold">Budi Setiono</p>
                <p className="italic">Pelajar</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-secondary flex flex-row justify-center">
            <div className="flex flex-col text-left">
              <span className="text-5xl font-bold">FAQ</span>
            </div>
            <img src="/icons/question-mark.svg" alt="Question Mark" className="-mt-10" />
          </h2>
          <div className="w-1/2 mt-16">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" id="faq1" />
              <label htmlFor="faq1" className="collapse-title text-xl font-medium">
                Apa itu MathGrowth?
              </label>
              <div className="collapse-content">
                <p>
                  MathGrowth adalah platform pembelajaran matematika interaktif yang dirancang untuk membuat belajar matematika menyenangkan dan efektif.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" id="faq2" />
              <label htmlFor="faq2" className="collapse-title text-xl font-medium">
                Bagaimana cara bergabung dengan MathGrowth?
              </label>
              <div className="collapse-content">
                <p>
                  Klik tombol &quot;Gabung Sekarang&quot; di bagian atas halaman untuk mendaftar dan memulai petualangan matematika Anda.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" id="faq3" />
              <label htmlFor="faq3" className="collapse-title text-xl font-medium">
                Apakah MathGrowth sesuai dengan kurikulum SD?
              </label>
              <div className="collapse-content">
                <p>
                  Ya, konten MathGrowth dirancang agar sesuai dengan kurikulum SD dan dapat membantu siswa memahami konsep matematika dengan lebih baik.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" id="faq4" />
              <label htmlFor="faq4" className="collapse-title text-xl font-medium">
                Apakah ada biaya untuk menggunakan MathGrowth?
              </label>
              <div className="collapse-content">
                <p>
                  MathGrowth menawarkan akses gratis untuk beberapa fitur. Namun, ada juga fitur premium yang memerlukan langganan berbayar.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" id="faq5" />
              <label htmlFor="faq5" className="collapse-title text-xl font-medium" >
                Apakah MathGrowth memiliki fitur pemantauan progress?
              </label>
              <div className="collapse-content">
                <p>
                  Ya, MathGrowth memiliki fitur pemantauan progress yang memungkinkan siswa dan orang tua melihat perkembangan belajar secara real-time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="navbar bg-secondary flex justify-center">
        <a className="btn btn-ghost text-lg text-white">
          MathGrowth &copy; 2024
        </a>
      </footer>
    </>
  );
}

export default App;
