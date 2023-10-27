import React from 'react';
import HeadPage from './component/HeadPage';
import Navbar from './component/Navbar';
import About from './component/About';
import MobileSite from './component/MobileSite';

const App = () =>{
  return(
    <div className="main">
      <Navbar />
       <HeadPage title="Compare Pal" desc="A Product Comparision Web Application"/> 
       <MobileSite/>
      <About />
    </div>
  );
}
export default App;