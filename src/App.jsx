import './App.css'
import Signup from './components/signup/Signup'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className="App">
      <Navbar/>

      <Home/>
      
      <Footer/>
    </div>
  )
}

export default App
