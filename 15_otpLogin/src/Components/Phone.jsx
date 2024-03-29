import React, { useState } from 'react'
import OtpInput from './OtpInput'
function Phone() {
  const[phnNumber,setPhnNumber]=useState("")
  const [showOtpField,setShowOtpField]=useState(false)
  const handlePhoneSubmit=(e)=>{
    e.preventDefault()
    const regex=/[^0-9]/g
    if(phnNumber.length<10 ||regex.test(phnNumber)){
      alert("Invalid Phone Number")
      return
    }
    setShowOtpField(true)
  }
  const onOtpSubmit=(otp)=>{
    console.log("login sucessfully")
  }
  const handlePhnNumber=(e)=>{
    setPhnNumber(e.target.value)
  }
 
  return (
    <div>
        {!showOtpField?<form onSubmit={handlePhoneSubmit}>
          <input 
          type='text'
          value={phnNumber}
          onChange={handlePhnNumber}
          placeholder='Enter Phone Number'
           />
          <button>Submit</button>  
        </form>:
        <div>
          <p>Enter Otp sent to {phnNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
        }
    </div>
  )
}

export default Phone