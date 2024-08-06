import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Register = () => {
  
  const [RegisterForm, setRegisterForm] = useState({
    firstname : '',
    lastname : '',
    email : '', 
    password : '',
    phone : '', 
    birthDay : '', 
    birthMonth : '',
    country : ''
  })

  const HandleChange = (e)=>{
    const {name, value} = e.target
        setRegisterForm((previousState) =>({
          ...previousState, 
          [name] : value
        }))
  }

  const HandleForm = async(e)=>{
      e.preventDefault()
      try{
        const response = await fetch('http://localhost:4000/register', {
          method : 'POST', 
          headers : {'Content-type' : 'application/json'}, 
          body : JSON.stringify(RegisterForm)
        })
        const data = await response.json()
        if(data.message === 'User already exists'){
        alert('User Already exists')
        }
        else if(data.message){
          alert('Registration successful')
          window.location.href ='http://localhost:5173/login'
        }
      }
      catch(error){
        console.error('error : ', error)
      }
  }

  return (
    <>
      <Header />
      <div className='Register'>
        <img src="register-photo.jpg" />
        <p>Join Us</p>
        <div className='register-container'>
          <form method='POST' className='register-form' onSubmit={HandleForm}>
            <label htmlFor="firstname">First name *</label>
            <input type="text" id="firstname" name="firstname" placeholder='First name' required value={RegisterForm.firstname} onChange={HandleChange} />
            
            <label htmlFor="lastname">Last name *</label>
            <input type="text" id="lastname" name="lastname" placeholder='Last name' required value={RegisterForm.lastname} onChange={HandleChange} />
            
            <label htmlFor="email">E-mail *</label>
            <input type="email" id="email" name="email" placeholder='E-mail' required value={RegisterForm.email} onChange={HandleChange}/>
            
            <label htmlFor="password">Password *</label>
            <input type="password" id="password" name="password" placeholder='Password' required value={RegisterForm.password} onChange={HandleChange}/>
            
            <label htmlFor="phone">Phone *</label>
            <input type="tel" id="phone" name="phone" placeholder='Phone' required value={RegisterForm.phone} onChange={HandleChange}/>
            
            <label htmlFor="birth-day">Birthday *</label>
            <div className="birthday">
              <input type="number" id="birth-day" name='birthDay' min={1} max={31} placeholder='Day' required value={RegisterForm.birthDay} onChange={HandleChange} />
              <input type="number" id="birth-month" name='birthMonth' min={1} max={12} placeholder='Month' required value={RegisterForm.birthMonth} onChange={HandleChange}/>
            </div>
            
            <label htmlFor="country">Country *</label>
            <select id="country" name="country" required value={RegisterForm.country} onChange={HandleChange}>
              <option value="france">France</option>
              <option value="israel">Israel</option>
            </select>
            
            <button type='submit'>Register</button>
          </form>
          <Link to='/all'>Return to store</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;