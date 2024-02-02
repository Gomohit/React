import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import authservice from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import {Input,Button,Logo} from "./index"
import {login} from "../store/authSlice"
import {useForm} from "react-hook-form"

function LogOut() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [error,setError]=useState()
    const {register,handleSubmit}=useForm()
    const create=async(data)=>{
        setError("")
        if (data.password !== data.repeatPassword) {
            setError('Passwords does not match');
            return;
        }    
        try {   
                const userData=await authservice.createAccount(data)
                if(userData){
                const user=await authservice.getCurrentUser()
                if(user)dispatch(login(userData))
                navigate('/')
            }    
        } 
        catch (error) { 
            setError(error.message)    
        }
    }
  return (
    <div className="flex items-center justify-center lg:mb-20">
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 flex flex-col items-center dark:bg-gray-800 dark:border-gray-900">
            <div className="mb-2 ">
                    <span className="inline-block w-full">
                        <Logo width="100%" textcolor='text-blue-400'/>
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight dark:text-gray-200">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60 dark:text-gray-200">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline dark:text-blue-500"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <Input
                            label="Repeat Password: "
                            type="password"
                            placeholder="Repeat your password"
                            {...register('repeatPassword',{required:true})}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default LogOut