
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if(!!htmlElement.children.length){
    htmlElement.innerHTML = `<p>${string}</p>`;
  }else{
    htmlElement.innerHTML += `<p>${string}</p>`;
  }
};

htmlGenerator('Welcome To the Pocket Project Marathon!', partyHeader);