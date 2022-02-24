import Footer from "./components/footer/Footer";
import Generator from "./components/generator/Generator";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App" style={{overflowX : 'hidden'}}>
    <Header/>
    <Generator/>
    <Hero/>
    <Footer/>
    </div>
  );
}

export default App;
