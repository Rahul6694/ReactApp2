import React from 'react';

import Meenu from './Components/Meenu/Meenu';
import Hadder from './Components/Meenu/Hadder';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Contact/Footer';
import Edu from './Components/Aj and eq/Edu';
//import Ceo from './Ceo';
const App = () => {
    return (
        <div>
        <div className='container' >
            <Hadder/>
            <Meenu/>
            <Home/>
            <About/>
            {/* //<Ceo/> */}
            <Edu/>
            <Contact/>
            
        </div>
        <Footer/>
        </div>
    )
}

export default App;
