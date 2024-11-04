import React from "react";

const Navigation=()=>{
    return(
    <nav className="container">
    <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
    </div>
                <li><a href="/Navigation">Home</a></li>
                <li><a href="/Menu">Products</a></li>
                <li><a href="/Menu">About Us</a></li>
                <li><a href="#contact">Order</a></li>
                <li><a href="#blog">Profile</a></li>

    <button>Login</button>
</nav>
    )

}
export default Navigation;