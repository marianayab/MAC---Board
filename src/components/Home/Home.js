// import React from 'react'
// import Image from './image.jpg'
// import { Parallax } from "react-parallax";
// import './Home.css'

// const Home = () => {
//     return (
//         <>
//             <Parallax className='parallax' strength={300} bgImage={Image} >
//                 <div className="main-content">

//                     <div className="home-text">

//                         <h1 className='hero-head'>Welcome to MAD Board –</h1>

//                         <p className='hero-para'>where advertising meets innovation! We're on a mission to revolutionize traditional marketing by transforming everyday shopping bags into powerful mobile billboards.</p>

//                         <button className="learn-more" style={{ width: '145px' }}>Learn more</button>

//                     </div>
//                 <//div>
//                 <div className='slogan-div'>
//                             <h4 className='slogan'>Jahan Shoppping, Wahan Branding</h4>
//                         </div>
//             </Parallax>
//         </>
//     )
// }

// export default Home

import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Home.css'


function Home() {
  return (
    <div>
      <Header />
      <div className="home-main">
      <div className="slogan">
     <h4>Jahan Shoppping, Wahan Branding</h4>
      </div>

        <div className="home-conent"> 
          <h1>Welcome to MAD Board –</h1>

          <p>
            where advertising meets innovation! We're on a mission to
            revolutionize traditional marketing by transforming everyday
            shopping bags into powerful mobile billboards.
          </p>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Home;
