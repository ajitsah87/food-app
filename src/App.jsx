import "./globals.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import News from "./components/News";
import Form from "./components/Form";
import Desert from "./components/Desert";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Home />
        <About />
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
