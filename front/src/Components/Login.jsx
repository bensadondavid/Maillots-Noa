import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Login = () => {
  
  const [LoginForm, setLoginForm] = useState({
    email : '', 
    password : '',
  })

  const HandleChange = (e)=>{
    const {name, value} = e.target
        setLoginForm((previousState) =>({
          ...previousState, 
          [name] : value
        }))
  }

  const HandleForm = async(e)=>{
      e.preventDefault()
      try{
        const response = await fetch('/login', {
          method : 'POST', 
          headers : {'Content-type' : 'application/json'}, 
          body : JSON.stringify(LoginForm)
        })
        const data = await response.json()
        alert(data.message)
      }
      catch(error){
        console.error('error : ', error)
      }
  }

  useEffect(()=>{
    console.log(LoginForm);
  }, [LoginForm])


  return (
    <>
      <Header />
      <div className='Register'>
        <img src="register-photo.jpg" />
        <p>Join Us</p>
        <div className='register-container'>
          <form method='POST' className='register-form' onSubmit={HandleForm}>
            
            <label htmlFor="email">E-mail *</label>
            <input type="email" id="email" name="email" placeholder='E-mail' required value={LoginForm.email} onChange={HandleChange}/>
            
            <label htmlFor="password">Password *</label>
            <input type="password" id="password" name="password" placeholder='Password' required value={LoginForm.password} onChange={HandleChange}/>
            
            <button type='submit'>Log In</button>
          </form>
          <Link to='/all'>Return to store</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;