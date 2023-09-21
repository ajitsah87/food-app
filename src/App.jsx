import "./globals.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import News from "./components/News";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <News />
        <Contact />
      </main>
      <Footer />
      <Form/>
    </div>
  );
}

export default App;
