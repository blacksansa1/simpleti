import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <body>
        <nav className=" absolute z-10 w-full bg-opacity-0 text-white h-12 flex justify-center">
          <div className="flex w-4/5 justify-between items-center ">
            <Image src="/favicon.svg" height={30} width={30} alt="Logo"/>
            
          </div>
        </nav>

        <main>
          <section className="h-screen relative ">
            <div className="hero-image h-screen text-white text-5xl flex justify-center items-center flex-col text-center">
            <div className="z-10 ">Assistencia Tecnica</div>
            <div className="z-10 bg-slate-900  h-14 w-80 mt-2 rounded-sm items-center">Simplificada</div>
            <div className="flex gap-4">
              <div className="flex gap-5 items-center mt-8">
                <a href="https://www.instagram.com/simple__ti/">
                <Image src="/instagram.svg" height={50} width={50} alt="social icon"/>             
                </a>

                <a href="https://www.facebook.com/Simple-TI-116247424692536">
                <Image src="/facebook.svg" height={50} width={50} alt="social icon"/>             
                </a>

                <a href="https://twitter.com/simple__ti">
                <Image src="/twitter.svg" height={50} width={50} alt="social icon"/>             
                </a>

                <a href="https://api.whatsapp.com/send/?phone=5524993321159">
                <Image src="/whatsapp.svg" height={50} width={50} alt="social icon"/>             
                </a>

              </div>

            </div>
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
