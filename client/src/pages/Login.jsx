import React from 'react'
import {useForm} from 'react-hook-form'
import LoguinForm from '../components/LoginForm.jsx'
import '../styles/loginPage.css'

function Login() {
  return (
    <div className='login'>
      <LoguinForm></LoguinForm>
    </div>
  )
}

export default Login