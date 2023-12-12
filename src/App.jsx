import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Header from './components/header'
import Home from './components/home'
import Routers from './routers'

function App() {

  return (
    <>
      <div  className='overflow-x-hidden' style={{background: 'linear-gradient(90deg, rgba(43,37,65,1) 0%, rgba(34,33,37,1) 68%, rgba(10,10,10,1) 100%)', }}>
        <Header/>
       <Home/>
       <Aboutme />
       <Projects/>
        </div>
    </>
  )
}

export default App
