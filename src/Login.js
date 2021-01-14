import React,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import {auth} from './firebase';

function Login() {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')
const history=useHistory();

const signIn=e=>{
    e.preventDefault()



//firebasse login stuff
auth.signInWithEmailAndPassword(email,password)
.then((auth)=>{
 if(auth){   
    history.push('/')
 }
})
.catch(
    error=>alert(error.message)
)

}

const register=e=>{
    e.preventDefault()
//firebase register stuff
auth.createUserWithEmailAndPassword(email,password)
.then((auth)=>{
    console.log(auth)

    if(auth){
history.push('/')
    }

})
.catch(error=>alert(error.message))


}

    return (
        <div className='login'>
        <Link to ='/'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
               className='login-logo' 
            />
            </Link>

            <div className='login-container'> 
          
          <form>  
          <h3>Sign In</h3>
            <h5>Email</h5>
            <input value={email} type='text'onChange={e=>setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input value={password} onChange={e=>setPassword(e.target.value)} type='text'/>
            </form>

     <button className="login-signInBtn" type="submit" onClick={signIn}>Sign In</button>
            
            <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>


            <button className='login-regBtn' onClick={register}>Create Your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
{/* <H1>Hello Login</H1> */}