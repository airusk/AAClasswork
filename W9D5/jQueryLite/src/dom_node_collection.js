class DOMNodeCollection{
  constructor(arr){
    this.arr = arr;
  }

  html(str) {
    if (str) {
      this.arr.forEach((node) => {
        node.innerHTML = str;
      });
    } else {
      return this.arr[0].innerHTML;
    }
  } 

  empty() {
    let str = "";
    this.html(str);
  }

  append(appNode) {
    this.arr.forEach((node)=>{
      node.innerHTML += appNode.outerHTML;
    });
  }

  attr(attribute,resolve){
    if (!resolve) return this.arr[0].getAttribute(attribute);
    else this.arr[0].setAttribute(attribute, resolve);
  }
}





module.exports = DOMNodeCollection;