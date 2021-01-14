import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider'
// import {useHistory} from 'react-router-dom'
function CheckoutProduct({id,image,title,price,rating}) {
    
    // const history=useHistory();
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
dispatch({
    type:'REMOVE-FROM-BASKET',
    id:id
})
    }
    
    return (
        <div className='checkoutProduct'>
            
            <img src={image} className='checkoutProduct-image'/>
<div className='checkoutProduct-info'>

<p className='checkoutProduct-title'>{title}</p>
<p className='checkoutProduct-price'>
    <small>$</small>
    <strong>{price}</strong>
</p>
{/* */}
<div className='checkoutProduct-rating'>
    {Array(rating).fill().map((_,i)=>
        
    (<StarIcon className='star'/> )
    )
    }
</div>
<button onClick={removeFromBasket}>Remove from basket</button>

</div>


        </div>
    )
}

export default CheckoutProduct 
