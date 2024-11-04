import React from "react";

const HeroSection =()=>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESRVE THE BEST</h1>
                <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
            <button>Shope Now</button>
            <button className="secondary-btn">Categary</button>
        </div>
        <div className="shoping">
            <p>Also Available On</p>
        </div>
        <div className="brands">
          
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />

        </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero-image.png" alt="" />
            </div>
        </main>

    )
}
export default HeroSection;