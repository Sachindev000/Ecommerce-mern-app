import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [currentState,setCurrentState]=useState('Login')
  const [name,setName]=useState("")
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState("")
  const {token,setToken,navigate,backendUrl}=useContext(ShopContext)

  const onSubmitHandler=async(e)=>{
    e.preventDefault()
    try {
      if (currentState === 'Sign Up') {
        const res=await axios.post(backendUrl + '/api/user/register',{name,email,password})
        if (res.data.success) {
          setToken(res.data.token)
          localStorage.setItem('token',res.data.token)
        }else{
          toast.error(res.data.message)
        }        
      }else{
        const res=await axios.post(backendUrl + '/api/user/login',{email,password})
        if (res.data.success) {
          setToken(res.data.token)
          localStorage.setItem('token',res.data.token)
        }else{
          toast.error(res.data.message)
        }

      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
      
    }
  }

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState==='Login'?'':<input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-800' placeholder='Name' type="text"  required/>}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' type="email"  required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800' placeholder='Password' type="password" required/>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState ==='Login'?<p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
        :<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>}
      </div>
      <button className='bg-black text-white font-medium px-8 py-2 mt-4 cursor-pointer'>{currentState==='Login'?'Sign In':'Sign Up'}</button>
    </form>
  )
}

export default Login