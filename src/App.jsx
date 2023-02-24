import './App.css'
import Events from './Pages/Home/Events'
import Hero from './Pages/Home/Hero'
import Services from './Pages/Home/Services'
import Testimonial from './Pages/Home/Testimonial'
import Footer from './Pages/Shared/Footer'
import Navbar from './Pages/Shared/Navbar'
import 'swiper/css';

function App() {
  return (
    <div>
      <div className='w-10/12 max-w-screen-xl mx-auto'>
        <Navbar />
        <Hero />
        <Events />
        <Services />
        <Testimonial />
      </div>
      <Footer />
    </div>
  )
}

export default App
