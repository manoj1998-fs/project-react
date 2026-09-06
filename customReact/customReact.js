function customRender(reactElement,container){
    const createDomElement = document.createElement(reactElement.type);
    console.log("dom element",createDomElement)
    createDomElement.innerHTML = reactElement.children;
    const props = reactElement.props;
     for(const prop in props){
        if(prop == 'children')continue;
        createDomElement.setAttribute(prop,reactElement.props[prop]);
        container.appendChild(createDomElement);
     }

     container.appendChild(createDomElement)

}
const reactElement ={
    type :'a',
    props :{
        href:'https://google.com',
        target:'_blank'
    },
    children:"This is the link to open the google"
   }
const container = document.querySelector("#root");
customRender(reactElement,container)