function App() {
  return (
    <>
      <div className="navbar bg-secondary">
        <a className="btn btn-ghost text-xl text-white">MathGrowth</a>
      </div>

      <div className="bg-primary flex flex-col lg:flex-row justify-center items-center text-secondary ">
        <div className="w-1/2 flex flex-col px-12 text-center lg:text-left">
          <h1 className="text-xl font-bold after:content['*'] after:bg-accent">
            MathGrowth
          </h1>
          <p className="py-6 text-5xl font-bold">
            Ayo Jelajahi <br /> Dunia Matematika yang Penuh Petualangan Seru!
          </p>
          <button className="btn btn-accent text-white w-fit">
            Jelajahi Yuk
          </button>
        </div>
        <div className="w-1/2 h-100">
          <img src="/mathematics-cuate.svg" alt="" className="h-full" />
        </div>
      </div>

      <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-secondary flex flex-row justify-center">
          <div className="flex flex-col text-left">
            <span className="text-3xl font-bold">Kenapa</span>
            <span className="text-5xl font-bold -mt-1">MathGrowth</span>
          </div>
          <img src="/icons/question-mark.svg" alt="" className="-mt-10" />
        </h2>
        <div className="w-4/5 grid grid-cols-3 mt-10">
          <div className="card">
            <figure className="px-10 pt-10">
              <img
                src="/icons/games.svg"
                alt="Console Game"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body flex flex-col items-center justify-between text-center">
              <h2 className="card-title">Pembelajaran yang Menyenangkan</h2>
              <p className="mt-4">
                Belajar matematika sambil main game membuat belajar jadi lebih
                menyenangkan.
              </p>
            </div>
          </div>
          <div className="card">
            <figure className="px-10 pt-10">
              <img
                src="/icons/target.svg"
                alt="Arrow Target"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body flex flex-col items-center justify-between text-center">
              <h2 className="card-title">Banyak Tantangan</h2>
              <p className="mt-4">
                Akan ada banyak tantangan matematika yang seru setiap minggunya.
              </p>
            </div>
          </div>
          <div className="card">
            <figure className="px-10 pt-10">
              <img
                src="/icons/plus-and-minus.svg"
                alt="Console Game"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body flex flex-col items-center justify-between text-center">
              <h2 className="card-title">Banyak Materi Pembelajaran</h2>
              <p className="mt-4">
                Kalian bisa belajar banyak materi terkait penjumlahan,
                pengurangan, perkalian, dan pembagian.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero bg-primary min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 h-min text-center lg:text-left flex flex-col space-between">
            <h2 className="text-5xl font-bold text-accent">
              Jadi Yang Teratas di Papan Peringkat Kami!
            </h2>
            <p className="py-6">
              Selesaikan setiap tantangan untuk mendapatkan poin dan naik ke
              peringkat teratas di{" "}
              <span className="font-bold text-accent">Papan Peringkat</span>{" "}
              kami! Bayangkan betapa hebatnya rasanya menjadi yang terbaik dalam
              memecahkan tantangan matematika!
            </p>
            <button className="btn btn-accent w-fit text-xl">
              Mulai Sekarang!
            </button>
          </div>
          <div className="w-1/2">
            <img src="/winners-amico.svg" alt="Winners" className="" />
          </div>
        </div>
      </div>

      <div className="hero bg-gray-200 min-h-screen">
        <div className="hero-content flex flex-col justify-center items-center">
          <h2 className="text-secondary text-5xl font-bold">
            Mari Bergabung bersama MathGrowth!
          </h2>
          <p className="mt-10 text-2xl w-3/5 text-center">
            Ayo segera bergabung dengan MathGrowth dan mulailah petualangan
            matematika seru bersama kami hari ini!
          </p>
          <button className="btn btn-accent btn-lg mt-20">
            Gabung Sekarang
          </button>
        </div>
      </div>

      <div className="hero bg-primary min-h-screen text-secondary">
        <div className="hero-content flex flex-col justify-center items-center">
          <div className="flex flex-row space-x-5 items-end">
            <img src="/icons/star.svg" alt="" className="w-8" />
            <img src="/icons/star.svg" alt="" className="w-12" />
            <img src="/icons/star.svg" alt="" className="w-16" />
            <img src="/icons/star.svg" alt="" className="w-12" />
            <img src="/icons/star.svg" alt="" className="w-8" />
          </div>
          <p className="text-4xl text-center italic my-20">
            “Dengan MathGrowth, belajar matematika sekarang menjadi lebih mudah
            dan menyenangkan!”
          </p>
          <div className="flex flex-row">
            <img src="/icons/user.svg" alt="" className="w-16" />
            <div className="flex flex-col justify-center ms-3">
              <p className="text-xl font-bold">Budi Setiono</p>
              <p className="italic">Pelajar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-secondary flex flex-row justify-center">
          <div className="flex flex-col text-left">
            <span className="text-5xl font-bold">FAQ</span>
          </div>
          <img src="/icons/question-mark.svg" alt="" className="-mt-10" />
        </h2>
        <div className="w-1/2 mt-16">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Apa itu MathGrowth?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Bagaimana cara bergabung dengan Mathgrowth?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Apakah Mathgrowth sesuai dengan kurikulum SD?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Apakah ada biaya untuk menggunakan Mathgrowth?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Apakah Mathgrowth memiliki fitur pemantauan progress?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar bg-secondary flex justify-center">
        <a className="btn btn-ghost text-lg text-white">MathGrowth &copy; 2024</a>
      </div>
    </>
  );
}

export default App;
