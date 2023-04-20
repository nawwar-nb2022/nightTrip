import Hero from "./components/HeroSection/Hero"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import image from "./image/background2.jpg"
import Visit from "./components/Visite/Visit";
import About from "./components/aboutUS/About";
import WhyUs from "./components/WhyUs/WhyUs";
import Footer from "./components/Fotter/Footer";
const App = () => {
  return (
    <div className="app" style={{position:"relative"}}>
      <Hero/>
      <Visit/>
      <About/>
      <WhyUs/>
      <Footer/>      
      
      <div style={{position:"absolute" , top:"0" , bottom:"0",left:"0",right:"0", zIndex :"-10" , overflow:"hidden" }}>
        <img src={image}
        style={{height:"100%", width:"100vw" , objectFit :"cover"}}
        alt=""/>
      </div>

    </div>
  )
}

export default App
