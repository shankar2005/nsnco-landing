import './App.css'
import Events from './Pages/Home/Events'
import Hero from './Pages/Home/Hero'
import Services from './Pages/Home/Services'
import Testimonial from './Pages/Home/Testimonial'
import Navbar from './Pages/Shared/Navbar'

function App() {
  return (
    <div className='w-10/12 mx-auto'>
      <Navbar />
      <Hero />
      <Events />
      <Services />
      <Testimonial />
    </div>
  )
}

export default App
