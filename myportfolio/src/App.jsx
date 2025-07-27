

import { Routes,Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Context/ThemeContextProvider'

import Home from './Pages/Home'
import Layout from './Layout/Layout'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Education from './Pages/Education'
import ContactPage from './Pages/ContactPage'
import Footer from './Components/Footer'


function App() {


  return (
    
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/education' element={<Education/>} />
            <Route path='/contact' element={<ContactPage/>} />
          </Route>
        </Routes>

        <Footer/>

      </ThemeProvider>
    
  )
}

export default App
