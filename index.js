function showOverlay() {
    let imageCollection = document.querySelectorAll("div#thumbnailContainer img");
    document.querySelector("div#imageOverlay img").src = imageCollection[0].src;
    //uwidocznij nakładkę - zmień display z none na flex
    document.querySelector("div#imageOverlay").style.display = "flex";
}
function hideOverlay() {
    //schowaj nakładkę - zmień display z flex na none
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
        //zapnij na obrazku funkcję po kliknięciu
        imageCollection[i].addEventListener("click", showPicture);
    }
    //zamień główny obrazek na pierwszą miniaturkę
    document.querySelector("div#bigImage > img").src = imageCollection[0].src;
}
function showPicture(event) {
    //funkcja która wyświetla wybraną miniaturkę jako duże zdjęcie
    //wyciągnij url z obrazka który został kliknięty
    let url = event.srcElement.src;
    //podmień duży obrazek na wyciągnięty url
    document.querySelector("div#bigImage > img").src = url;
}
function nextPicture(){
    //wuyciagnij obecny url zdjecia
    let currentUrl = document.querySelector("div#bigImage > img").src;
    //wyciagnij kolekcje zdjec miniatur
    let imageCollection = document.querySelectorAll("div#thumbnailContainer img");
    for(let i=0; i<imageCollection.length;  i++){
        //z kazdej miniatury kopiujemy url do tablcy
        urlArray.push(imageCollection[i].src);
    }
    //znajdz pozycje obecnego zdjecia i zapisz do currentIndex
    let currentIndex = urlArray.indexOf(currentUrl);
    let nextPictureUrl = "";
    if(currentIndex == urlArray.length-1){
        //ostatnie zdjecie - pokaz pierwxzze
    }
    else{
        //wkazdym innym wypadku
        nextPictureUrl = urlArray[currentIndex+1];
    }
    document.querySelector("div#bigImage > img").src = nextPictureUrl; 
}
//dodaj zdarzenie po załadowaniu strony
window.addEventListener("load", getRandomImages);
//dodaj zdarzenie do zdjęcia umieszczonego w divie z id bigImage
//zdarzenie wywoływane po kliknięciu uruchamia funkcję showOverlay
document.querySelector("div#bigImage img").addEventListener("click", showOverlay);
//zdarzenie zamknięcia nakładki
document.querySelector("div#imageOverlay").addEventListener("click", hideOverlay);
//stzralka w pawo
document,querySelector("div#rightArrow").addEventListener("click", nextPicture)