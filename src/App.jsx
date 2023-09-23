import "./globals.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import News from "./components/News";
import Form from "./components/Form";
import Starter from "./components/Starter";

import Dishes from "./components/Dishes";
import Desert from "./components/Desert";
import Timing from "./components/Timing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Timing />
        <Starter />
        <Dishes />
        <Desert />
        <News />
        <Contact />
      </main>
      <Form/>
      <Footer />
    </div>
  );
}

export default App;
