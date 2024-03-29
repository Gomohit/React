import React, { useEffect, useRef, useState } from 'react'

function OtpInput({length,onOtpSubmit=()=>{}}) {
    const [otp,setOtp]=useState(new Array(length).fill(""))
    const inpRef=useRef([])
    // console.log(inpRef)
    useEffect(()=>{
        if(inpRef.current[0]){
            inpRef.current[0].focus()
        }
    },[])
    const handleOtp=(index,e)=>{
        const value=e.target.value
        if(isNaN(value))return
        const newOtp=[...otp]
        // allow only latest input
        newOtp[index]=value.substring(value.length-1)
        console.log(newOtp)
        setOtp(newOtp)
        // submit trigger 
        const finalOtp=newOtp.join("")
        if(finalOtp.length==length) {
            console.log("new otp")
            onOtpSubmit(finalOtp)

        }

        // move cursor to the next input field 
        if( value && index<length-1 && inpRef.current[index+1]){
            inpRef.current[index+1].focus()
        }
        console.log("first",e)
        
    }
    const handleClick=(index)=>{
        inpRef.current[index].setSelectionRange(1,1)
    }
    const handleKeyDown=(index,e)=>{
        if((e.key==="ArrowLeft"|| e.key==="ArrowDown") && index>0 && inpRef.current[index-1]){
            e.preventDefault()
            inpRef.current[index-1].focus()
            if(otp[index]==1){
                inpRef.current[index].setSelectionRange(1,1)
            }
        }
        if((e.key==="ArrowRight" ||e.key==="ArrowUp") && index<length && inpRef.current[index+1]){
            // e.preventDefault()
            inpRef.current[index+1].focus()
        }
        if(e.key==="Backspace" &&
            !otp[index] &&
            index>0 && inpRef.current[index -1]
        ) {
            console.log("mmowkoef")
            inpRef.current[index-1].focus()
            return
        }  
    }
  return (
    <div>
        {
            otp.map((val,index)=>{
                return (
                <input 
                    ref={(input)=>(inpRef.current[index]=input)}
                    key={index}
                    type="text"
                    value={val}
                    onChange={(e)=>handleOtp(index,e)}
                    onClick={(e)=>handleClick(index,e)}
                    onKeyDown={(e)=>handleKeyDown(index,e)}
                    className='otpInput'
                />
                )
            })
        }

    </div>
  )
}

export default OtpInput