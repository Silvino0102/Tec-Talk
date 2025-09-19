const is_logged = JSON.parse(localStorage.getItem('is_logged'))

if (is_logged !== true) {
    window.location.href = "TT-Sign in.html"
}
 function ape(){
    console.log("apertou")

   localStorage.setItem('is_logged', JSON.stringify(false))
    window.location.href = "TT-Sign in.html"
 }



let index = 0;
function showSlide() {
    const slidesContainer = document.querySelector('.carousel-images');
    index = (index + 1) % 6;
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
}
setInterval(showSlide, 3000);