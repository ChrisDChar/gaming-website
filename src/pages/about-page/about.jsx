import React, { useState, useEffect } from "react";


export default function About() {
  const images = [
    "/gaming.png",
    "https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqyu8LBLLDa2ExSMugWI.Z_bWTR3T1YBI_5Zn3Oi46ePdxXjCBIGtOjtzxb5UgwDro9jWKgBk1GlNd91YDYWRQlXqjon39F.ht_xKn1VKfmmNwsqHqCHcSnFcsgP5A_zA8&h=576",
    "https://cdn.mos.cms.futurecdn.net/owvHPT5FYHD7u757t8PQtT.jpg",
    "https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqVNMoskyrz49vqW7F3DZ.UIMoWcOVxAk1k9.Zc528RiKx_rAmUhA9JnxKhMgxmz..7.pqlaiqU7_LMfMgwoCiM3gWZMKEaL3l2HixKqcu8sM1SVVNrlKwmqurqQ4bnMPsgf..t_xXiT.xmzyc7y3_mcN.BephLTZgpxTYik6TCMk-&h=576",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGuJeRloObHMYWqalzkN7Mru-LR87EczzlA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQV_MSVTNUgo5Nkc3LcmdgiTiHQdBwhxQlg&s",
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="bg-[#07042B] min-h-screen text-slate-100">
     <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <nav className="text-sm text-pink-400 mb-4 gap-3 max-[600px]:ml-5">
            Home &gt; <span className="text-pink-300">About us</span>
          </nav>
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-6 leading-[180%] max-[600px]:ml-5">
            Lorem Ipsum is simply <br /> dummy text of the printing <br /> and.
          </h1>
          <p className="text-slate-300 max-w-xl mb-6 max-[600px]:ml-5">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <button className="bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-red-600 transition duration-300 cursor-pointer px-6 py-3 rounded-full font-semibold shadow-lg w-[176px] h-[50px] max-[600px]:ml-5">
            Get in touch
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-xl  rounded-md border border-blue-600 overflow-hidden shadow-2xl relative">
            <img
              src={images[index]}
              alt={`slide-${index}`}
              className="w-full h-[420px] max-[600px]:h-[300px] max-[600px]:w-[400px] object-cover transition-all duration-500"
            />

            <div className="absolute left-4 bottom-4 bg-slate-800/70 backdrop-blur-sm rounded-md px-3 py-2 flex items-center gap-3">
              <button onClick={prev} className="text-sm px-3 py-1 rounded hover:bg-white/10">◀</button>
              <div className="text-sm">{index + 1} of {images.length}</div>
              <button onClick={next} className="text-sm px-3 py-1 rounded hover:bg-white/10">▶</button>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <section className="mt-20">
        <h2 className="text-[25px] font-bold font-semibold mb-8">Why work with us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, text: "Lorem ipsum", title: "Lorem ipsum", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
            { id: 2, text: "Lorem ipsum", title: "Lorem ipsum", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
            { id: 3, text: "Lorem ipsum", title: "Lorem ipsum", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
          ].map(card => (
            <article key={card.id} className="rounded-2xl p-6 shadow-lg bg-[white]">
              <div className="text-xs px-3 py-1 rounded-full mb-4 text-[black] bg-[#B000DC1C] w-[140px] h-[40px] flex items-center justify-center">{card.text}</div>
              <h3 className="text-[20px] mb-3 text-[black]">{card.title}</h3>
              <p className="text-sm leading-relaxed text-[black] leading-[188%]">{card.body}</p>
            </article>
          ))}
        </div>
      </section>


        <section className="py-[100px]">
          <div className="container mx-auto max-w-[1440px]  w-full bg-white rounded-[20px] grid lg:grid-cols-2 gap-6 items-center p-6">
   
            <div className="w-full lg:w-auto h-auto flex justify-center">
             <img src="/rasm1.png" alt="rasm1" className="w-full max-w-[500px] h-auto object-cover rounded-lg" />
            </div>

  
           <div className="flex flex-col justify-center py-8 px-4 lg:py-40 lg:px-12 text-black">
            <p className="text-[20px] max-[600px]:text-[16px] mb-2">Lorem ipsum</p>
            <h1 className="text-[28px] max-[768px]:text-[24px] max-[600px]:text-[20px] font-bold leading-[158%] mt-4">Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry.</h1>
            <p className="mt-6 text-[18px] max-[600px]:text-[14px] leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting <br className="hidden sm:block"/> industry. Lorem Ipsum has been the industry's standard dummy <br className="hidden sm:block"/> text ever since the 1500s, when an unknown printer took a galley of <br className="hidden sm:block"/> type and scrambled it to make a type specimen book. It has <br className="hidden sm:block"/> survived not only five centuries. </p>
          </div>
         </div>
        </section>


          
        <section className="py-[90px] ">
          <div className="container mx-auto">
            <h1 className="text-[25px] font-bold">Our Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
              {
               id: 1,
               images: "/team1.png",
               name: 'John Peter',
               text: "COO"
              },

              {
                id: 2,
                images: "/team2.png",
                name: "John peter",
                text: "COO"
              },

              {
                id: 3,
                images: "/team3.png",
                name: "John peter",
                text:"COO"
              },

              {
                id: 4,
                images: "/team4.png",
                name: "John peter",
                text: "COO"
              }
             ].map(team => (
          <div key={team.id} className="bg-white rounded-2xl p-6 shadow-lg text-center mt-15">
           <img src={team.images} alt={team.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
           <h3 className="text-xl font-semibold text-[black]">{team.name}</h3>
           <p className="text-[black]">{team.text}</p>
         </div>
       ))}
     </div>
         </div>
        </section>

        
      </div>
    </div>
  );
}




