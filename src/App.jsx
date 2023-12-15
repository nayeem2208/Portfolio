import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Header from './components/header'
import Home from './components/home'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div  className='overflow-x-hidden' style={{background: 'linear-gradient(90deg, rgba(43,37,65,1) 0%, rgba(34,33,37,1) 68%, rgba(10,10,10,1) 100%)', }}>
      <ToastContainer/>
        <Header/>
       <Home/>
       <Aboutme />
       <Projects/>
       <Skills/>
       <Contact/>
        </div>
    </>
  )
}

export default App
