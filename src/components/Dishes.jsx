
function Dishes() {
    const desertField=[
      {image:"chrismas.png"}, //suno humko lgta hai ki ye jo hum name use kiye shayad vo ho skte {image ,}
      {image:"vite.svg"},
      {image:"music.jpg"},
      {image:"chrismas"},
      {image:"chrismas"},
      {image:"chrismas"},
    ]
    return (
      <>
      <h1 className="py-12 mb-16 w-full text-center text-5xl font-semibold bg-yellow-200">DISHES</h1>
        <div className="grid mx-40 mb-20 grid-cols-3 grid-rows-2 gap-4">
          
          {desertField.map((d,i)=>(
            <div key={i}   className=" w-[360px] h-[360px] relative rounded-xl group">
                <img
                className="h-full w-full object-cover rounded-xl"
                src={d.image}
                alt=""
                
              />
              <div className="absolute left-0 bottom-0 w-full h-1/3 group-hover:h-full transition-all duration-500 bg-black/50 grid place-content-center text-white rounded-xl">
                <div className="text-center  overflow-hidden">
                  <img className="mx-auto text-5xl  mb-4 opacity-0 group-hover:opacity-100 duration-500 h-0 group-hover:h-8 transition-all" />
                  <h5 className="text-2xl font-semibold">HAPPY CRISTMAS</h5>
                  <p className="font-medium text-base">Event</p>
                  <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Porro, neque.
                  </p>
                </div>
              </div>            
            </div>
          ))}    
  </div>
      </>
    )
  }
  
  export default Dishes