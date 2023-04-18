import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



function Form() {
  const schema =  yup.object().shape({
    fullName : yup.string().min(3).max(16).required('Please enter a valid name'),
    email : yup.string().email().required('Please Enter a valid Email'),
    age : yup.number().integer().min(13).max(100).required('Please Enter a Valid Age'),
    password :yup.string().min(6).max(16).required('Password not available, please change another'),
    confirmPassword : yup.string().oneOf([yup.ref('password') , null]).required('password did not match')
  })



  const {register , handleSubmit , formState:{errors}} = useForm({
    resolver:yupResolver
  })
  const onSubmit = (e) =>{
    console.log(e)
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex' , flexDirection:'column'}}>
      <input type="text" placeholder='Full Name'{...register('fullName')}/>
      <input type="text"  placeholder='Email'{...register('email')}/>
      <input type="number" placeholder='Age' {...register('age')}/>
      <input type="password" placeholder='Password' {...register('password')}/>
      <input type="password" placeholder='Confirm Password' {...register('confirmPassword')}/>
      <input type="submit" />
    </form>

  )
}

export default Form