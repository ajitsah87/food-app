import { FaImage } from "react-icons/fa";

function News() {
  return (
    <>
      <div className="py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold mb-4">LATEST NEWS</h1>
          <p className="text-xl font-medium">Stay up to Date</p>
        </div>
        <div className="flex items-center justify-evenly mx-36 gap-5 flex-wrap">
          <div className=" w-80 h-80 relative rounded-xl group">
            <img
              className="h-full w-full object-cover rounded-xl"
              src="block4.jpg"
              alt=""
            />
            <div className="absolute left-0 bottom-0 w-full h-1/3 group-hover:h-full transition-all duration-500 bg-black/50 grid place-content-center text-white rounded-xl">
              <div className="text-center overflow-hidden">
                <FaImage className="mx-auto text-3xl mb-2 opacity-0 group-hover:opacity-100 duration-500 h-0 group-hover:h-8 transition-all" />
                <h5 className="text-3xl font-semibold">TITLE</h5>
                <p className="font-medium text-base">events</p>
                <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, neque.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-10/12 py-2 bg-[#c59d5f] rounded-lg text-center text-white">
              30 december 2023
            </div>
          </div>

          <div className=" w-80 h-80 relative rounded-xl group">
            <img
              className="h-full w-full object-cover rounded-xl"
              src="block4.jpg"
              alt=""
            />

            <div className="absolute left-0 bottom-0 w-full h-1/3 group-hover:h-full transition-all duration-500 bg-black/50 grid place-content-center text-white rounded-xl">
              <div className="text-center overflow-hidden">
                <FaImage className="mx-auto text-3xl mb-2 opacity-0 group-hover:opacity-100 duration-500 h-0 group-hover:h-8 transition-all" />
                <h5 className="text-3xl font-semibold">TITLE</h5>
                <p className="font-medium text-base">events</p>
                <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, neque.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-10/12 py-2 bg-[#c59d5f] rounded-lg text-center text-white">
              30 december 2023
            </div>
          </div>

          <div className=" w-80 h-80 relative rounded-xl group">
            <img
              className="h-full w-full object-cover rounded-xl"
              src="block4.jpg"
              alt=""
            />
            <div className="absolute left-0 bottom-0 w-full h-1/3 group-hover:h-full transition-all duration-500 bg-black/50 grid place-content-center text-white rounded-xl">
              <div className="text-center overflow-hidden">
                <FaImage className="mx-auto text-3xl mb-2 opacity-0 group-hover:opacity-100 duration-500 h-0 group-hover:h-8 transition-all" />
                <h5 className="text-3xl font-semibold">TITLE</h5>
                <p className="font-medium text-base">events</p>
                <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, neque.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-10/12 py-2 bg-[#c59d5f] rounded-lg text-center text-white">
              30 december 2023
            </div>
          </div>
        </div>
        <div className="w-full mt-20 " >
      <iframe
        title="Google Map"
        width="100%"
        height="450"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20gurugram,%20delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">Population mapping</a>
      </iframe>
    </div>
      </div>
    </>
  );
}

export default News;
