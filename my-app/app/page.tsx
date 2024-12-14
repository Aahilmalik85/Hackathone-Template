import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero";
import SubHero from "./Components/SubHero";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import Slide from "./Components/Slide";


export default function Home() {
  return (
    <div>
      
    <Navbar />
    <Hero />
    <SubHero />
    <Product />
      
      <Slide />
      <Contact />
      <Footer />
      
    </div>
  )
}