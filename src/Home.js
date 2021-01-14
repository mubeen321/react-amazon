import React from 'react';
import  './Home.css';
import Product from './Product'
function Home(){
    return (
        <div className="home">
        <div className="home-container">

<img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
    className="home-image"
alt=""

/>

<div className="home-row">
    {/* Products */}
   

     <Product 
        title="The Lean Starup"
        price={19.99}
image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
       rating={5}
    />
    <Product 
        title="The Lean Starup"
        price={19.99}
// image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"

image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
       rating={5}
    />
    {/* Products */}

</div>

<div className="home-row">
<Product 
        title="The Lean Starup"
        price={19.99}
// image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"    />
image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
    <Product 
        title="The Lean Starup"
        price={19.99}
image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" 
       rating={5}
    />

    <Product 
        title="The Lean Starup"
        price={19.99}
        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        rating={5}
    />


</div>
      
      <div className="home-row">
      <Product 
        title="The Lean Starup"
        price={19.99}
        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"    
        rating={5}
    />  
</div>
        </div>

        </div>
    )
}

export default Home;