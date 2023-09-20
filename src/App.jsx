import "./globals.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <div className="h-screen"></div>
        <Home />
        <About />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
