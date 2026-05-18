import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/Home/NavBar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import PhotoGallery from './Components/PhotoGallery/PhotoGallery'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/photoGallery' element={<PhotoGallery />} />
      </Routes>
    </>
  )
}

export default App