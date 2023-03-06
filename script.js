function createElement(tagName, textContent) {
    const element = document.createElement(tagName);
    element.innerHTML = textContent;
    console.log(element);
    return element;
}

const myElement1 = createElement("button","Hello");
const myElement2 = createElement("h1","Hello");
const myElement3 = createElement("p","Hello");
document.body.appendChild(myElement1);
document.body.appendChild(myElement2);
document.body.appendChild(myElement3);

