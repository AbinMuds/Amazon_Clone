// This is goona grap the top header 
import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
// importing search icons from material ui
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo" src="https://png2png.com/wp-content/uploads/2021/08/images-9.png" alt=""/>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            {/* refering to children for the header */}
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign in</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">   
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">0</span> 
                    </div>
                </Link>
            </div>
            
        </div>
    )

}

export default Header