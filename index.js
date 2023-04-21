
function showOverlay(){
    let imageCollection = document.querySelectorAll("div#thumbnailContainer img");
    document.querySelector("div#imageOverlay img").src = imageCollection[0].src;
    document.querySelector("div#imageOverlay").style.display = "flex";
}
function hideOverlay(){
    document.querySelector("div#imageOverlay").style.display = "none";
}
function randomRange(min, max) {
let range = max - min;
let random = range * Math.random();
random = Math.round(random) + min;
return random;
}
function randomPicsumUrl() {
    let urlPrefix = "https://picsum.photos/";
    let randomWidth = randomRange(1800,2000);
    let randomHeight = randomRange(1000,1200);
    let finalUrl = urlPrefix + randomWidth + "/" + randomHeight;
    return finalUrl;
}
function getRandomImages() {
    let imageCollection = document.querySelectorAll("div#thumbnailContainer img");
    for(let i = 0; i < imageCollection.length; i++) {
        imageCollection[i].src = randomPicsumUrl();
    }
    document.querySelector("div#bigImage > img").src = imageCollection[0].src;
}

window.addEventListener("load", getRandomImages);

document.querySelector("div#bigImage img").addEventListener("click", showOverlay);

document.querySelector("div#imageOverlay").addEventListener("click", hideOverlay);