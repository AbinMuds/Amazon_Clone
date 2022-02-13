// This is goona grap the top header 
import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
// importing search icons from material ui
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }
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
                <Link to={ !user && "/login"}>
                    <div onClick={handleAuthenticaton} className="header_option">
                        <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header_optionLineTwo">{!user ? 'SignIn' : 'SignOut'}</span>
                    </div>
                </Link>
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
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span> 
                    </div>
                </Link>
            </div>
            
        </div>
    )

}

export default Header