import React from 'react'
import { useState } from 'react'

function Grid({rows=10,columns=10}) {
    const [mouseDown,setMouseDown]=useState(false)
    const [selectedBox,setSelectedBox]=useState([])
    const [totalbox,setTotalBox]=useState([])
    const handleMouseEnter=(index)=>{
        if(mouseDown){

            const start=selectedBox[0]
            const end=index
            const startRow=Math.floor((start-1)/columns)
            const startCol=(start-1)%columns
            const endRow=Math.floor((end-1)/columns)
            const endCol=(end-1)%columns

            // login for finding min and max because a user start from 35 then drag the mouse in lower side like 12 then it show error when i iterate loop 

            const minRow=Math.min(startRow,endRow)
            const maxRow=Math.max(startRow,endRow)
            const minCol=Math.min(startCol,endCol)
            const maxCol=Math.max(startCol,endCol)

            const Selected=[]
            for (let i=minRow;i<=maxRow;i++){
                for(let j=minCol;j<=maxCol;j++){
                    Selected.push(i*columns+j+1)
                }
            }
            setTotalBox(Selected)
        }
    }
    const handleMouseUp=()=>{
        setMouseDown(false)
    }
    const handleMouseDown=(index)=>{
        setMouseDown(true)
        setTotalBox([])
        setSelectedBox([index])
    }

    
  return (
    <div className='Grid' style={{"--columns":columns,"--rows":rows}} onMouseUp={handleMouseUp}>
        {[...Array(rows*columns).keys()].map((i)=>{
            return <div key={i} className={`box ${totalbox.includes(i+1)?'selected':''}`}
                onMouseDown={()=>handleMouseDown(i+1)}
                onMouseEnter={()=>handleMouseEnter(i+1)}
            >{i+1}</div>

        })}
    </div>
  )
}

export default Grid