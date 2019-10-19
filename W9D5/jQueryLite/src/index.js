const DOMNodeCollection = require("./dom_node_collection.js");

Window.prototype.$l = function (arg) {
 
  let nodeList  = document.querySelectorAll(arg);
  let nodeArr = Array.from(nodeList);

  if (typeof arg === "string") {
    let domNode = new DOMNodeCollection(nodeArr);
    return domNode;
  }
  
  if (arg instanceof HTMLElement){
    let domNode = new DOMNodeCollection(nodeArr);
    return domNode;
  }
};



