import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
function Checkout() {

    const[{basket},dispatch]=useStateValue();
    return (
        <div className='checkout'>
        <div className='checkout-left'>
<img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
    className="checkout-ad"
    alt=""
/>

<div>
    <h2 className="checkout-title">Your Shopping Basket</h2>

{basket.map(item=>
(<CheckoutProduct 
id={item.id}
price={item.price}
title={item.title}
rating={item.rating}
image={item.image}  
/>))}


</div>

        </div>
            
<div className='checkout-right'>
    <Subtotal />
</div>

        </div>
    )
}

export default Checkout
