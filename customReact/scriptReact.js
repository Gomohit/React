function renderFunction(mainContainer,reactElement){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // creating optimized code
    for (const prop in reactElement.props){
        console.log(prop);
        if(prop==="children")continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href: "https://google.com",
        target: "_blank",
    },
    children : "Click on google"
}
const mainContainer=document.querySelector("#root")

renderFunction(mainContainer,reactElement)