

function Form() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl mb-4">RESERVATION</h1>
        <h3 className="text-xl mb-6 ">Book your table</h3>
        <div className="flex items-center justify-evenly mx-52 ">
            <div className="grid grid-cols-2 grid-rows-4 gap-6 mx-auto">
                <input className="text-white pl-4 py-2 outline-none border-[2px] border-green-500 rounded-xl " placeholder="YOU NAME*"  type="text" />
                <input  className="text-white pl-4 py-2 outline-none border-[2px] border-green-500 rounded-xl " placeholder="OCCASION" type="text" />
                <input  className="text-white pl-4 py-2 outline-none border-[2px] border-green-500 rounded-xl " placeholder="BRANCH NAME" type="text" />
                <input className="text-white pl-4 py-2 outline-none border-[2px] border-green-500 rounded-xl " placeholder="PHONE NO."  type="text " />
                <input  className="text-white pl-4 py-2 outline-none border-[2px] border-green-500 rounded-xl " placeholder="EMAIL" type="text" />
                <input  className="text-white pl-4 py-2 outline-none border-[2px] border-green-500 rounded-xl " placeholder="name" type="text" />
                <input className="text-white pl-4 py-2 outline-none border-[2px] border-green-500 rounded-xl " placeholder="name"  type="text" />
                <input  className="text-white pl-4 py-2 outline-none border-[2px] border-green-500 rounded-xl " placeholder="name" type="text" />
            </div>
            <div className="grid">
                <textarea  className="rounded-xl pl-4 pt-4 resize-none border-green-500 outline-none border-[2px] " placeholder="MESSAGE" id="" cols="66" rows="10"></textarea>
            </div>
        </div>
        <button className=" mt-6 py-1 px-4 border-amber-500 border-[2px] rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-500">BOOK YOUR TABLE</button>
      </div>
    </>
  )
}

export default Form
