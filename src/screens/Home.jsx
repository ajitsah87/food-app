import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const Home = () => {
  const [value, setValue] = useState(0);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) =>
    setValue(Number(value * 100))
  );

  return (
    <div
      style={{ backgroundPositionY: -value, backgroundAttachment: 'fixed' }}
      ref={containerRef}
      id="/home"
      className="bg-blend-multiply bg-black/50 bg-landingPage h-96 grid place-content-center bg-cover landing_page"
    >
      <div className="text-white text-7xl font-bold">
        <h1>home</h1>
      </div>
    </div>
  );
};

export default Home;
