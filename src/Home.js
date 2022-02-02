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
                    id="12321341"
                    title= "The Lean startup"
                    price = {29.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating = {5}
                />
                <Product
                    id="49678094"
                    title ="kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="4903850"
                    title= "Samsung LC 49' Curved LED Gaming Monitor"
                    price = {250}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating = {3}
                />
                <Product
                    id="12451341"
                    title= "Amazon Echo (3rd Generation) | Smart speaker with ALexa, Charcoal Fabric"
                    price = {99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating = {5}
                />
                <Product
                    id="12365741"
                    title= "The Lean startup"
                    price = {29.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating = {5}
                />
            </div>
            <div className="home_row">
                <Product
                    id="12654341"
                    title= "The Lean startup"
                    price = {29.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating = {5}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
