import React from "react";
import Navbar from './Navbar'
function Header(){
    return(
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1>
                    <span>Launch Your App</span>
            
                With Confidence And Creativity
                
                
                </h1>
                <p className="details" >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nobis nam eius. Minus doloremque minima, ut tempore, perspiciatis quod nisi dolore error corrupti sequi quidem. Reiciendis exercitationem aut corporis officia.
                </p>
                <a href='#' className='cv-btn'>Download</a>
            </div>
        </div>
    )
}
export default Header;