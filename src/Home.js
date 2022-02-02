import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-T-59d56e74-90ad-47d3-b893-5d1b6665011b._CB417386572_.jpg" alt="" />
            <div className="home_row">
                <Product
                    title= "The Lean startup"
                    price = {29.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating = {5}
                />
                <Product/>
            </div>
            <div className="home_row">
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className="home_row">
                <Product/>
            </div>
            </div>
        </div>
    )
}

export default Home
