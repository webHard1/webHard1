import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/Home/NavBar'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import PhotoGallery from './Components/PhotoGallery/PhotoGallery'
import NepalTrek from './Components/About/NepalTrek'
import NepalTrekTeam from './Components/About/NepalTrekTeam'
import Services from './Components/About/Services'
import TrekkingNepal from './Components/trekkinginNepal/TrekkingNepal'



function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/contact' element={<Contact />} />
        <Route path='/nepalTrek' element={<NepalTrek />} />
        <Route path='/trekkingInNepal' element={<TrekkingNepal />} />
        <Route path='/services' element={<Services />} />
        <Route path='/photoGallery' element={<PhotoGallery />} />
        <Route path='/nepalTrekTeam' element={<NepalTrekTeam />} />

        
      </Routes>
    </>
  )
}

export default App