import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function BreadCrumbs() {
  const {pathname}=useLocation()
  const pathnames=pathname.split("/").filter((x)=>x)
  // console.log(pathnames)
  let breadCurmb=""
  return (
    <div className='breadcrumb'>
      <Link to="/">Home</Link>
      {pathnames?.map((name,ind)=>{
        breadCurmb+=`/${name}`
        const last=(ind==pathnames.length-1)

        return last? 
        <span key={breadCurmb}>
          /{name}
        </span>:
        <span key={breadCurmb}>
          <Link to={breadCurmb}>
            /{name}
          </Link>
        </span>
      })}
    </div> 
)
}
export default BreadCrumbs