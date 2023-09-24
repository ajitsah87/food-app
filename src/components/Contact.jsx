function Contact() {
  const form=[
    {type:"text",placeholder:"NAME"},
    {type:"text",placeholder:"EMAIL"},
    {type:"text",placeholder:"WEBSITE"},]
  return (
    <>
      <div className="w-full mx-auto text-center">
        <div className=" w-1/3 mx-auto">
          <h1 className="text-5xl tracking-tight font-semibold mb-4 font-[Fjalla One] text-[#262626] ">
            GET IN TOUCH
          </h1>
          <p className="text-xl font-medium mb-16 text-[#262626]">
            Connect from heart
          </p>
          <p className="text-[#515151] text-lg ">
            Majesty is a team work of Majesty Restaurant & Cafe, we aim at
            promoting the foodstuff industry through the branches.
          </p>
        </div>
        <div className="flex border-red-100 items-center justify-center h-80 w-full">
          <div className="flex flex-col gap-10 w-1/3 mr-20">
           
            { form.map((f,i)=>(
              <input key={i}
              className="outline-2 outline-[#c59d5f] border-b-[1px] border-stone-300  rounded-md pl-2 py-2"
              placeholder={f.placeholder}
              type={f.type}
            />
             ))}
          </div>
          <div>
            <textarea
              className="border-stone-300 rounded-md pl-4 pt-2 text-[#515151] outline-[#c59d5f]   border-[1px]  w-full resize-none"
              name="comment"
              cols="60"
              rows="8"
              placeholder="MESSAGE"
            ></textarea>
          </div>
        </div>
        <button className="text-center text-md hover:text-white hover:bg-[#c59d5f] border-[#c59d5f]  rounded-xl py-2 px-6 border-[2px] mb-16 transition-all ease-in-out duration-500">
          SEND
        </button>
      </div>
    </>
  );
}

export default Contact;
