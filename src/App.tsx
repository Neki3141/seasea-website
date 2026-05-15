/*!
 * @license
 * Copyright (C) 2026 Ethan Bastian, Kien Nguyen
 * All Rights Reserved. Licensed under GNU AGPLv3.
 * Full license text available in the source repository.
 */

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
