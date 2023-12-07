import Header from './components/header'
import Home from './components/home'
import Routers from './routers'

function App() {

  return (
    <>
      <div  style={{background: 'linear-gradient(90deg, rgba(43,37,65,1) 0%, rgba(34,33,37,1) 68%, rgba(10,10,10,1) 100%)',height:'100vh' }}>
        <Header/>
       <Home/>
        </div>
    </>
  )
}

export default App
