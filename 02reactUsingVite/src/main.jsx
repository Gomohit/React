import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function myapp(){
//   return(
//     <h1>mohit goyal</h1>
//   )
// }


//finally the html in function is change into an object using an bundler so,can we pass a object directly to reduce one step of bundler
// const reactElement={
//   type:'a',
//   props:{
//       href: "https://google.com",
//       target: "_blank",
//   },
//   children : "Click on google"
// } 

 // but this object name reactElement not working beacause react follow a proper syntax naming and structure 


 //now we use a proper format given by react using its method
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click here to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    reactElement
  // reactElement
  // myapp
  // <React.StrictMode>
    
  /* </React.StrictMode>, */
)
