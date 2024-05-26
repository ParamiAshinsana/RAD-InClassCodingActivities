const reactElement = {
    element: 'a',
    props: {
        href: 'https://ijse.lk',
    },
    innerHTML: 'CLICK HERE TO VISIT IJSE'
}

function renderElement(mainController,reactElement){

{/* <a href='https://ijse.lk'>CLICK HERE TO VISIT IJSE</a> */}

    const newDomElement = document.createElement(reactElement.element);
    newDomElement.innerHTML = reactElement.innerHTML;

    newDomElement.setAttribute('href',reactElement.props.href);

    
    mainController.append(newDomElement);
}

const mainController =  document.getElementById('root');

renderElement(mainController,reactElement);