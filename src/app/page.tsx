import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <body>
        <nav className=" absolute z-10 w-full bg-opacity-0 text-white h-12 flex justify-center">
          <div className="flex w-4/5 justify-between items-center ">
            <div>Logo</div>
            <div>Navegation</div>
          </div>
        </nav>

        <main>
          <section className="h-screen relative ">
            <div className="hero-image h-screen text-white text-2xl flex justify-center align-middle flex-col text-center">
            <div className="z-10 ">Assistencia Tecnica</div>
            <div className="z-10">Simplificada</div>
            </div>

          </section>
  {/*
          <section className="h-screen  relative ">
          <div className=" text-white shadow-black shadow-2xl rounded-2xl bg-blue-900 w-6/12 ml-80 h-3/4">
                <div className="text-white text-5xl my-10 mx-5">
                    Nossa Missão
                </div>
            </div>  
          </section>
          <section className="h-screen bg-green-300">section 3</section>
          <section className="h-screen bg-green-600">section 4</section>
          <section className="h-screen bg-green-900">section 5</section>
          <footer className="bg-green-600">footer</footer>
  */}
        </main>
      </body>
    </>
  );
}
