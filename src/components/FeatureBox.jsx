import React from "react";

function FeatureBox(props){
    return(
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.image}/>

            </div>
            <div className="s-b-text">
                <h2>{props.title}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos animi, vitae eligendi expedita error rerum odio. Dicta, sunt ipsa animi eveniet commodi quidem quam, nam molestiae molestias dolore quos.</p>
            </div>
        </div>
    )
}
export default FeatureBox;