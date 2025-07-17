import { Children } from "react";

function customRender(reactElement, container) {

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.herf)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        herf: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}



const mainContainer = document.getquerySelector('#root');

customRender(reactElement, mainContainer)
