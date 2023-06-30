import React from 'react';

function About(props){
    return(
        <div id='about'>
            <div className='about'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto a non quaerat molestias sunt deserunt. Ipsum culpa consequatur fuga quos magnam possimus sunt est cupiditate, quae earum debitis officia odit!</p>

                <button>{props.button}</button>
            </div>
        </div>
    )
}
export default About;