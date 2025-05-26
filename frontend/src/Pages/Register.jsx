import { Link } from 'react-router-dom'
import './CSS/Register.css'

const Register = () => {
  return (
    <div className='register'>
      <div className='register-container'>
        <h1>Sign Up</h1>
        <div className='register-fields'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='email' placeholder='Email Address' />
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='register-login'>
          Already have an account? <Link to="/login"><span>Login</span></Link>
        </p>
        <div className='register-agree'>
          <input type='checkbox' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Register

