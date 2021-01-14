import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import  { useStateValue }  from './StateProvider'

function Product({id,title,price,rating,image}){
    const[{basket},dispatch]=useStateValue()
console.log("this is besket ",basket)
    const addToBasket=()=>{
    dispatch({
        type:'ADD-TO-BASKET',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating
 
        },
    })
}
    
    return(

        <div className='product'>
<div className='product-info'>
    <p>{title}</p>
    <p className='product-price'>
        <small>$</small>
        <strong>{price}</strong>
    </p>
    <div className='product-rating'>    
{Array(rating).fill().map(()=>(
    <StarIcon className='star'/>
)
)}

   
     </div>
</div>

<img src={image} alt=""/ >
<button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
} 

export default Product;