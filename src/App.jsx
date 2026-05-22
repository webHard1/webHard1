import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './Components/Home/NavBar'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import PhotoGallery from './Components/PhotoGallery/PhotoGallery'
import NepalTrek from './Components/About/NepalTrek'
import NepalTrekTeam from './Components/About/NepalTrekTeam'
import Services from './Components/About/Services'
import TrekkingNepal from './Components/trekkinginNepal/TrekkingNepal'
import Annapurna from './Components/trekkinginNepal/Annapurna'
import Everest from './Components/trekkinginNepal/Everest'
import Langtang from './Components/trekkinginNepal/Langtang'
import Mansalu from './Components/trekkinginNepal/Mansalu'
import UpperMustang from './Components/trekkinginNepal/UpperMustang'
import Kori from './Components/trekkinginNepal/Kori'
import ScrollToTop from './Components/Scroller_top/ScrollToTop.jsx.jsx'



function App() {
  return (
    <>
    <title> Nepal Trek</title>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/nepalTrek' element={<NepalTrek />} />
        <Route path='/trekkingInNepal' element={<TrekkingNepal />} />
        <Route path='/services' element={<Services />} />
        <Route path='/photoGallery' element={<PhotoGallery />} />
        <Route path='/nepalTrekTeam' element={<NepalTrekTeam />} />
        <Route path='/Annapurna' element={<Annapurna />} />
        <Route path='/everest' element={<Everest />} />
        <Route path='/langtang' element={<Langtang />} />
        <Route path='/manaslu' element={<Mansalu />} />
        <Route path='/upperMustang' element={<UpperMustang />} />
        <Route path='/kori' element={<Kori />} />
      </Routes>

    </>
  )
}

export default App