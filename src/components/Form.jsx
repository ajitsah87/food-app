import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

function Form() {
  const [value, setValue] = useState(0);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) =>
    setValue(Number(value * 300))
  );

  return (
    <>
      <div
        style={{ backgroundPositionY: -value, backgroundAttachment: "fixed" }}
        className="text-center bg-landingPage bg-no-repeat bg-cover bg-center border-red-500 bg-black/60 bg-blend-multiply py-16"
      >
        <h1 className="text-4xl mb-4 text-white typewriter">RESERVATION</h1>
        <h3 className="text-xl mb-6 text-white  flex items-center justify-center gap-2">
          <span className="h-[1px] w-8 bg-white"></span>
          <span id="bookYourTable"> Book your table </span>
          <span className="h-[1px] w-8 bg-white"></span>
        </h3>
        <div className="flex items-center justify-center gap-6 ">
          <div className="flex gap-5">
            <div className="grid flex-1 grid-cols-2 grid-rows-4 gap-6">
              <input
                className="bg-transparent pl-4 py-2 outline-none border-[2px] px-28 rounded-xl "
                placeholder="YOUR NAME*"
                type="text"
              />
              <input
                className="bg-transparent focus-within:outline-white/30 outline-white  pl-4 py-2 border-[2px] rounded-xl "
                placeholder="OCCASION"
                type="text"
              />
              <input
                className="bg-transparent focus-within:outline-white/30 outline-white  pl-4 py-2 border-[2px] rounded-xl "
                placeholder="BRANCH NAME"
                type="text"
              />
              <input
                className="bg-transparent focus-within:outline-white/30 outline-white  pl-4 py-2 border-[2px] rounded-xl "
                placeholder="PHONE NO."
                type="text "
              />
              <input
                className="bg-transparent focus-within:outline-white/30 outline-white  pl-4 py-2 border-[2px] rounded-xl "
                placeholder="EMAIL"
                type="text"
              />
              <input
                className="bg-transparent focus-within:outline-white/30 outline-white  pl-4 py-2 border-[2px] rounded-xl "
                placeholder="name"
                type="text"
              />
              <input
                className="bg-transparent focus-within:outline-white/30 outline-white  pl-4 py-2 border-[2px] rounded-xl "
                placeholder="name"
                type="text"
              />
              <input
                className="bg-transparent focus-within:outline-white/30 outline-white  pl-4 py-2 border-[2px] rounded-xl "
                placeholder="name"
                type="text"
              />
            </div>
            <div className="grid flex-1">
              <textarea
                className="bg-transparent rounded-xl pl-4 pt-4 resize-none outline-white focus-within:outline-white/50 border-[2px] "
                placeholder="MESSAGE"
                id=""
                cols="70"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>
        <button className=" mt-6 py-1 px-4 border-amber-300 border-[2px] text-white rounded-lg hover:bg-amber-500 transition-all duration-500">
          BOOK YOUR TABLE
        </button>
      </div>
    </>
  );
}

export default Form;
