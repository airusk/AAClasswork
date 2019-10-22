
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(){
  let dogLinks = [];

  Object.keys(dogs).forEach((key) => {
    let aTag = document.createElement("A");
    aTag.innerHTML = key;
    aTag.setAttribute("href", dogs[key]);//`${dogs[key]}`);
    let liTag = document.createElement("LI");
    liTag.className = "dog-link";
    liTag.append(aTag);
    dogLinks.push(liTag);
  });
  return dogLinks;
}

function attachDogLinks() {
  const htmlElement = document.getElementsByClassName("drop-down-dog-list")[0];
  let dogLinks = dogLinkCreator();
  // debugger
  dogLinks.forEach((dog)=>{
    htmlElement.append(dog);
  });
}

attachDogLinks();

function handleEnter() {
  const links = document.getElementsByClassName("dog-link");
  let linkArr = Array.from(links);
  linkArr.forEach(function(link) {
    link.className = "dog-link-open";
  });
}

function handleLeave() {
  const links = document.getElementsByClassName("dog-link-open");
  let linkArr = Array.from(links);
  linkArr.forEach(function (link) {
    link.className = "dog-link";
  });
}

document.getElementsByTagName("h3")[0]
  .addEventListener("mouseenter", handleEnter);

document.getElementsByClassName("drop-down-dog-nav")[0]
  .addEventListener("mouseleave", handleLeave);
