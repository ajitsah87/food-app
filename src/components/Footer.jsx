import { BiLogoFacebook } from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGoogle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white w-full">
        <div className="flex justify-evenly items-start mx-10 ">
          <div className="w-1/4 ">
            <h1 className="font-semibold text-2xl uppercase font-serif mb-10">
              our location
            </h1>
            <span className="text-slate-500">Majesty Head Office:</span>
            <p className="mb-8">1422 1st St. Santa Rosat, CA 94559. USA</p>
            <p>
              <span className="text-slate-500">Call for Reservations:</span>{" "}
              (001) 123-4567
            </p>
            <p className="mb-8">
              <span className="text-slate-500">E-mail:</span> admin@e-mail.com
            </p>
            <div className="flex gap-2">
              <p className="text-2xl rounded-full p-2 w-10 bg-gray-600">
                
                <AiOutlineGoogle />
              </p>
              <p className="text-2xl rounded-full p-2 w-10 bg-gray-600">
                
                <AiOutlineInstagram />
              </p>
              <p className="text-2xl rounded-full p-2 w-10 bg-gray-600">
              
                <AiOutlineTwitter />
              </p>
              <p className="text-2xl rounded-full p-2 w-10 bg-gray-600">
                
                <BiLogoFacebook />
              </p>
            </div>
          </div>
          <div className=" w-1/4">
            <h1 className="font-semibold text-2xl uppercase mb-10 font-serif">
              latest post
            </h1>
            <div>
              <div className="flex mb-4 ">
                <div className="h-[60px] w-[84px]"> 
                  <img
                    className="rounded-xl h-[64px]"
                    src="https://html.miraclestudio.design/majesty/img/post_thumb.jpg"
                    alt="img"
                  />
                </div>

                <div className="top-0">
                  <h3 className="text-lg font-medium">Thai Tanic</h3>
                  <p className="text-sm leading-4 text-slate-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex mb-4"><div className="h-[60px] w-[84px]"><img
                className="rounded-xl h-[64px]"
                src="https://html.miraclestudio.design/majesty/img/post_thumb2.jpg"
                alt="img"
              /></div>
              <div><h3 className="text-lg font-medium">Thai Tanic</h3>
              <p className="text-sm leading-4 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></div></div>
              <div className="flex ">
                <div className="h-[60px] w-[84px]">
                  <img
                    className="rounded-xl  h-[64px]"
                    src="https://html.miraclestudio.design/majesty/img/post_thumb.jpg"
                    alt="img"
                  />
                </div>

                <div>
                  
                  <h3 className="text-lg font-medium">Thai Tanic</h3>
                  <p className="text-sm leading-4 text-slate-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="1/4 ">
            <h1 className="font-semibold text-2xl uppercase font-serif mb-10">
              opening times
            </h1>
            <p className="mb-2">
              <span className="text-slate-500 pr-20">Monday</span> 1 pm-10 pm
            </p><p className="mb-2">
              <span className="text-slate-500 pr-20">Tuesday</span> 1 pm-10 pm
            </p><p className="mb-2">
              <span className="text-slate-500 pr-20">Wednesday</span> 1 pm- Midnight
            </p><p className="mb-2">
              <span className="text-slate-500 pr-20">Thusday</span> 1 pm-10 pm
            </p><p className="mb-2">
              <span className="text-slate-500 pr-20">Friday</span> 1 pm- Midnight
            </p><p className="mb-2">
              <span className="text-slate-500 pr-20">Saturday</span> closed
            </p>
            <p className="mb-2">
              <span className="text-slate-500 pr-20">Saturday</span> 1 pm-10 pm
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl uppercase font-serif">
              flicker photos
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// cd new
//git clone http///
