import React from 'react'

function Tab({image,text,onClick}) {
  return (
    <span className='user-pill'onClick={()=>onClick("mohit")}>
        <img src={image} alt={text} />
        <span>{text} &nbsp;&times;</span>
    </span>
  )
}

export default Tab