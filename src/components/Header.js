import React from 'react'
import { SearchOutlined, ShoppingBasket } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import '../styles/Header.scss'



export const Header = () => {
  return (
    <div className='header'>
     <nav>
       <ul className='ul-items hide-for-mobile'>
        <li className='li-items'>
            <Link to='/women'>Women</Link>
            <Link to='/men'>Men</Link>
            <Link to='/denim'>Denim</Link>
            <Link to='/shop' className='orange'>The Gift Shop</Link>
            <Link to='/about'>About</Link>
        </li>
       </ul> 
       <div className="logo">
        <h1>Eshopland</h1>
       </div>

       <div className='right hide-for-mobile'>
        <div className="search">
            <SearchOutlined className='search-icon '/>
            <button className='sch-btn'>Search</button>
        </div>
        

        <div className='right-buttons hide-for-mobile'>
          <button>
            <Link to='/login'>Log in</Link>
          </button>

          <button>
            <Link to='/sing-up'>Sign up</Link>
          </button>
              <ShoppingBasket className='basket'/>
        </div>
        
        </div>

        <Link to='#' className='hamburger hide-for-desktop'>
            <span></span>
            <span></span>
            <span></span>
          </Link>
    </nav>  
    </div>
  )
}


