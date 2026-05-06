import './App.css'
import AboutUs from './component/about_us/about_us'
import Intro from './component/introduction/intro'
import Navbar from './component/navbar/navbar'

function App() {

  return (
    <div className='top'>
        <Navbar />
        <Intro />
        <AboutUs />
    </div>
              )
}

export default App
