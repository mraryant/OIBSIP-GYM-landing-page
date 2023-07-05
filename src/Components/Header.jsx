import React from 'react';
import '../index.css'
import './Header.css'


 function Header() {
  return (
        <div id='main'>
            <div className="header-heading"> 
               <div className="cont-header">

                  <h2 id='h2'>STEP UP YOUR</h2> 
                  <h1 id='h1'><span id='span'>FITENESS</span> WITH US</h1>
                  <p className="details" id='p'> IT'S ALL ABOUT DISCIPLINE, PERFECT MAN ALSO HAS PERFECT BODY AND PERFECT BODY ALWAYS HAVE PERFECT MIND.</p>
               </div>
            </div>
                  <div className="header-btns">
                    <a href="hh" className="header-btn">JOIN US</a>

                  </div>
        </div>
  )
}

export default Header;