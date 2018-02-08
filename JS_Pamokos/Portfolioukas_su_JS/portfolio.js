"use strict";


let navbar = {
  style: {width: "100%", height: "600px", bgcolor: "red"}
};



function createPageElement(element, id) {
  let elem = document.createElement(element);
  let text = document.createTextNode("CLICK ME");
  elem.appendChild(text);
  getElemId(id).appendChild(elem);
}

function getElemId(id) {
  return document.getElementById(id);
}

createPageElement('div', 'portfolio');
