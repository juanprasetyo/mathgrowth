import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize(import.meta.env.VITE_MEASUREMENT_ID);

  return (
    <>
      <header className="navbar bg-secondary flex flex-row justify-center md:justify-start">
        <a href="#" className="btn btn-ghost text-xl text-white">
          MathGrowth
        </a>
      </header>

      <main>
        <section id="introduction" className="flex min-h-screen flex-col items-center justify-center space-y-10 bg-primary text-secondary md:flex-row">
          <div className="flex h-full w-10/12 flex-col items-center justify-between space-y-8 pt-10 text-center lg:w-1/2 lg:items-start lg:px-12 lg:text-left xl:space-y-16">
            <h1 className="relative text-xl font-bold after:mx-auto after:block after:h-1.5 after:w-4/5 after:bg-accent after:content-[''] lg:after:mx-auto xl:text-3xl">
              MathGrowth
            </h1>
            <p className="py-6 text-2xl font-bold xl:text-5xl">
              Ayo Jelajahi <br /> Dunia Matematika yang Penuh Petualangan Seru!
            </p>
            <a href="#" className="btn btn-accent w-fit text-white lg:btn-lg">
              Jelajahi Yuk
            </a>
          </div>
          <div className="flex h-full w-full items-center justify-center lg:w-1/2">
            <img src="/mathematics-cuate.svg" alt="Math Illustration" className="h-full object-contain" />
          </div>
        </section>

        <section id="whyUs" className="flex flex-col items-center justify-center bg-gray-200 py-24">
          <h2 className="flex flex-row justify-center px-10 text-secondary">
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold lg:text-2xl xl:text-3xl">Kenapa</span>
              <span className="-mt-1 text-3xl font-bold lg:text-4xl xl:text-5xl">MathGrowth</span>
            </div>
            <img src="/icons/question-mark.svg" alt="Question Mark Icon" className="-mt-10 w-10 xl:w-16" />
          </h2>
          <div className="mt-5 grid w-4/5 grid-cols-1 gap-1 lg:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <div className="card">
              <figure className="pt-10 lg:px-10">
                <img src="/icons/games.svg" alt="Console Game" className="rounded-xl" />
              </figure>
              <div className="card-body flex flex-col items-center justify-between text-center">
                <h3 className="card-title">Pembelajaran yang Menyenangkan</h3>
                <p className="mt-4">Belajar matematika sambil main game membuat belajar jadi lebih menyenangkan.</p>
              </div>
            </div>
            <div className="card">
              <figure className="pt-10 lg:px-10">
                <img src="/icons/target.svg" alt="Arrow Target" className="rounded-xl" />
              </figure>
              <div className="card-body flex flex-col items-center justify-between text-center">
                <h3 className="card-title">Banyak Tantangan</h3>
                <p className="mt-4">Akan ada banyak tantangan matematika yang seru setiap minggunya.</p>
              </div>
            </div>
            <div className="card md:col-span-2 lg:col-span-1">
              <figure className="pt-10 lg:px-10">
                <img src="/icons/plus-and-minus.svg" alt="Math Symbols" className="rounded-xl" />
              </figure>
              <div className="card-body flex flex-col items-center justify-between text-center">
                <h3 className="card-title">Banyak Materi Pembelajaran</h3>
                <p className="mt-4">Kalian bisa belajar banyak materi terkait penjumlahan, pengurangan, perkalian, dan pembagian.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="leaderboard" className="hero min-h-screen bg-primary py-10">
          <div className="hero-content flex-col gap-x-10 md:flex-row">
            <div className="w-full lg:w-1/2">
              <img src="/winners-amico.svg" alt="Winners" />
            </div>
            <div className="space-between flex h-min w-10/12 flex-col items-center justify-center space-y-8 md:items-start lg:w-1/2 lg:text-left xl:space-y-14">
              <h2 className="text-center text-2xl font-bold text-accent md:text-left lg:text-5xl xl:text-4xl">
                Jadi Yang Teratas di Papan Peringkat Kami!
              </h2>
              <p className="text-center font-medium md:text-left xl:py-6 xl:text-2xl">
                Selesaikan setiap tantangan untuk mendapatkan poin dan naik ke peringkat teratas di{" "}
                <span className="font-bold text-accent">Papan Peringkat</span> kami! Bayangkan betapa hebatnya rasanya menjadi yang terbaik dalam
                memecahkan tantangan matematika!
              </p>
              <a href="#" className="btn btn-accent btn-md w-fit lg:btn-lg">
                Mulai Sekarang!
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-32 md:px-16">
          <div className="mx-auto flex w-10/12 flex-col items-center justify-center space-y-14 lg:space-y-20">
            <h2 className="text-center text-2xl font-bold text-secondary lg:text-4xl xl:text-5xl">Mari Bergabung bersama MathGrowth!</h2>
            <p className="w-full text-center text-lg md:w-8/12 lg:w-10/12 lg:text-2xl xl:text-3xl">
              Ayo segera bergabung dengan MathGrowth dan mulailah petualangan matematika seru bersama kami hari ini!
            </p>
            <a href="#" className="btn btn-accent lg:btn-lg">
              Gabung Sekarang
            </a>
          </div>
        </section>

        <section id="review" className="flex min-h-screen flex-col items-center justify-center bg-primary px-5 text-secondary">
          <div className="flex w-10/12 flex-col items-center justify-center xl:w-8/12">
            <div className="flex flex-row items-end justify-center space-x-5">
              <img src="/icons/star.svg" alt="Star" className="w-6 lg:w-8" />
              <img src="/icons/star.svg" alt="Star" className="w-10 lg:w-12" />
              <img src="/icons/star.svg" alt="Star" className="w-14 lg:w-16" />
              <img src="/icons/star.svg" alt="Star" className="w-10 lg:w-12" />
              <img src="/icons/star.svg" alt="Star" className="w-6 lg:w-8" />
            </div>
            <blockquote className="my-14 w-full text-center text-lg italic md:text-xl lg:my-20 lg:text-2xl xl:text-4xl">
              “Dengan MathGrowth, belajar matematika sekarang menjadi lebih mudah dan menyenangkan!”
            </blockquote>
            <div className="flex flex-row">
              <img src="/icons/user.svg" alt="User" className="w-10 md:w-12 lg:w-16" />
              <div className="ms-3 flex flex-col justify-center">
                <p className="text-lg font-bold lg:text-xl xl:text-2xl">Budi Setiono</p>
                <p className="text-normal italic lg:text-lg xl:text-xl">Pelajar</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="flex min-h-screen flex-col items-center justify-center bg-gray-200 py-10">
          <h2 className="flex flex-row justify-center text-secondary">
            <div className="flex flex-col text-left">
              <span className="text-4xl font-bold lg:text-5xl">FAQ</span>
            </div>
            <img src="/icons/question-mark.svg" alt="Question Mark" className="-mt-10 w-10 xl:w-14" />
          </h2>
          <div className="mt-10 w-10/12 md:w-8/12 lg:mt-16 xl:w-1/2">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" id="faq1" />
              <label htmlFor="faq1" className="collapse-title text-lg font-medium lg:text-xl">
                Apa itu MathGrowth?
              </label>
              <div className="collapse-content">
                <p>
                  MathGrowth adalah platform pembelajaran matematika interaktif yang dirancang untuk membuat belajar matematika menyenangkan dan
                  efektif.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" id="faq2" />
              <label htmlFor="faq2" className="collapse-title text-lg font-medium lg:text-xl">
                Bagaimana cara bergabung dengan MathGrowth?
              </label>
              <div className="collapse-content">
                <p>Klik tombol &quot;Gabung Sekarang&quot; di bagian atas halaman untuk mendaftar dan memulai petualangan matematika Anda.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" id="faq3" />
              <label htmlFor="faq3" className="collapse-title text-lg font-medium lg:text-xl">
                Apakah MathGrowth sesuai dengan kurikulum SD?
              </label>
              <div className="collapse-content">
                <p>
                  Ya, konten MathGrowth dirancang agar sesuai dengan kurikulum SD dan dapat membantu siswa memahami konsep matematika dengan lebih
                  baik.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" id="faq4" />
              <label htmlFor="faq4" className="collapse-title text-lg font-medium lg:text-xl">
                Apakah ada biaya untuk menggunakan MathGrowth?
              </label>
              <div className="collapse-content">
                <p>MathGrowth menawarkan akses gratis untuk beberapa fitur. Namun, ada juga fitur premium yang memerlukan langganan berbayar.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" id="faq5" />
              <label htmlFor="faq5" className="collapse-title text-lg font-medium lg:text-xl">
                Apakah MathGrowth memiliki fitur pemantauan progress?
              </label>
              <div className="collapse-content">
                <p>
                  Ya, MathGrowth memiliki fitur pemantauan progress yang memungkinkan siswa dan orang tua melihat perkembangan belajar secara
                  real-time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="navbar flex justify-center bg-secondary">
        <a className="btn btn-ghost text-lg text-white">MathGrowth &copy; 2024</a>
      </footer>
    </>
  );
}

export default App;
