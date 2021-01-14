import './App.css';
import React,{useEffect} from 'react'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'


const promise=loadStripe('pk_test_51HytwbHUAkH526jvBsnaNtLBGC361XJMpW7PPCjvPsER3slPSlcB9dEz66CbnFqnfRdweBNE8s1Daa30kj4grwTA000NyZfItT')



function App() {
  const[{},dispatch]=useStateValue();

  useEffect(()=>{
auth.onAuthStateChanged(authUser=>{console.log('the user is ',authUser);

if(authUser){

  //the user was logged in /the user was logged out
  dispatch({
    type:'SET_USER',
    user:authUser
  })
}
else{
  //the user is logged out
dispatch({
  type:'SET_USER',
  user:null
})
}

}
)
  },[])
  return (
   

    <Router>
 <div className="App">
    
 

    <Switch>


<Route path='/login'>
<Login />
</Route>


<Route path="/checkout">
{/* <Header /> */}
<Header />
<Checkout />
</Route>

<Route path='/payment'>
<Header />
<Elements stripe={promise}>
<Payment />
</Elements>

</Route>

<Route path='/'>
{/* <Header /> */}  
<Header />
<Home />

</Route>

</Switch>
  </div>
</Router>
  
  );
}

export default App;
