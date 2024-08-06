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
        const response = await fetch('http://localhost:4000/login', {
          method : 'POST', 
          headers : {'Content-type' : 'application/json'}, 
          body : JSON.stringify(LoginForm)
        })

        const data = await response.json()

        if(data.message === 'Wrong Email'){
          alert('Wrong Email')
        }
        else if(data.message === 'Wrong Password'){
          alert('Wrong Password')
        }
        else if(data.message === 'Logged In'){
          alert('Successfully Logged In')
        }
        else{
          alert('Internal Server Error')
        }
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
        <p>Log In</p>
        <div className='register-container'>
          <form method='POST' className='register-form' onSubmit={HandleForm}>
            
            <label htmlFor="email">E-mail *</label>
            <input type="email" id="email" name="email" placeholder='E-mail' required value={LoginForm.email} onChange={HandleChange}/>
            
            <label htmlFor="password">Password *</label>
            <input type="password" id="password" name="password" placeholder='Password' required value={LoginForm.password} onChange={HandleChange}/>
            
            <button type='submit'>Log In</button>
          </form>
          <Link  to=''>Forgot your password ?</Link>
          <Link  to='/register'>Don't have an account yet ?</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;