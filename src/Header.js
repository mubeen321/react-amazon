import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link } from 'react-router-dom'
import {useStateValue} from './StateProvider'
import { auth } from './firebase'
function Header(){

const[{basket,user},dispatch]=useStateValue(); 

const handleAuthentiation=()=>{
    if(user){
        auth.signOut()
    }
}

    return (
        <div className='header'>
<Link to= "/">
<img className='header-logo'
    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
/>
</Link>

{/* Search Bar */}
<div className='header-search'>
    <input className='header-searchInput' type="text"/>
    {/* logo */}
<SearchIcon className='header-searchIcon'
/>
</div>

{/* Search Bar End */}

{/* Nav */}

<div className="header-nav">
<Link to={!user && '/login'} className='underLine'>
<div className='header-options' onClick={handleAuthentiation}>
    <span className='header-optionLineOne'>{user?user.email:'Hello Guest'}</span>
    <span className='header-optionLineTwo'>{user?'Sign Out':'Sign In'}</span>
</div>
</Link>

<div className='header-options'>
    <span className='header-optionLineOne'>returns</span>
    <span className='header-optionLineTwo'>& Orders</span>
</div>


<div className='header-options'>
    <span className='header-optionLineOne'>Your</span>
    <span className='header-optionLineTwo'>Prime</span>
</div>

<Link to="/checkout" className='underLine'>
<div className='header-optionBasket '>
    <ShoppingBasketIcon />
    <span className='header-optionLineTwo basketCount '>{basket?.length}</span>
</div>
</Link>

</div>
{/* Nav End */}

        </div>
    )
}

export default Header