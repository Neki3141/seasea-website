import './App.css'
import Navbar from './component/navbar/navbar'

function App() {

  return (
    <div className='top'>
        <Navbar />
        <div className='home-page'>
            <div className='left'>
                    <h1>Seasae</h1>
                    <h2>south east asotiation in netherlands</h2>
                </div>
                <div className='right'>
                    <h1>right box here</h1>
                    <h2>delete if you dont want </h2>
                    <h3> see the css, there is a border for every flexbox for easier debugging, delete this if you dont want it to be there ! </h3>

                </div>  
            </div>
 <div className='home-page'>
            <div className='left'>
                    <h1>Seasae</h1>
                    <h2>south east asotiation in netherlands</h2>
                </div>
                <div className='right'>
                    <h1>right box here</h1>
                    <h2>delete if you dont want </h2>
                    <h3> see the css, there is a border for every flexbox for easier debugging, delete this if you dont want it to be there ! </h3>

                </div>  
            </div>
        </div>
              )
}

export default App
