
function Timing() {
  return (
    <>
      <div className="">
        <div className="bg-black h-[490px] py-28">
            <div className="flex flex-wrap mx-44 text-center items-center  justify-between ">
            <div className="border-[4px] border-white h-[285px] w-[260px] rounded-xl text-white  ">
                <img className="mx-auto mt-12 mb-4" src="breakfast.png" alt="" />
                <h1 className="mb-4 text-2xl font-semibold">BREAKFAST</h1>
                <p>6.00 am 10.00 am</p>
            </div>
            <div className="border-[4px] h-[285px] w-[260px]  border-white rounded-xl text-white">
                <img className="mx-auto mt-12 mb-4" src="lunch.png" alt="" />
                <h1 className="mb-4 text-2xl font-semibold">LUNCH</h1>
                <p>10.00 am 2.00 pm</p>
            </div> <div className="border-[4px] h-[285px] w-[260px]  border-white rounded-xl text-white">
                <img className="mx-auto mt-12 mb-4" src="dinner.png" alt="" />
                <h1 className="mb-4 text-2xl font-semibold">DINNER</h1>
                <p>4.00 pm 12.00 pm</p>
            </div> <div className="border-[4px] h-[285px] w-[260px]  border-white rounded-xl text-white">
                <img className="mx-auto mt-12 mb-4" src="dessert.png" alt="" />
                <h1 className="mb-4 text-2xl font-semibold">DESSERT</h1>
                <p>All Day</p>
            </div>            
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Timing
