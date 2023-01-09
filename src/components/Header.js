import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { SearchOutlined, ShoppingBasket } from '@mui/icons-material'
// import GridViewIcon from '@mui/icons-material/GridView'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import '../styles/Header.scss'



export const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector('.header')
  //   header.classList.toggle("active", window.screenY > 200)
  // })
  return (
    <div className='header'>
     <nav>
       <ul className={sidebar ? "nav-links-sidebar" : "hide-for-mobile"}  onClick={() => setSidebar(false)}>
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
            <SearchOutlined className='search-icon'/>
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

      
          <button className='navbar-items-icons hide-for-desktop' onClick={() => setSidebar(!sidebar)}>{sidebar ?<CloseIcon/> : <MenuIcon/>}</button>
    </nav>  
    </div>
  )
}


