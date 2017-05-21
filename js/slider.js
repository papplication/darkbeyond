var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    if (slideIndex > 6) {
		slideIndex = 0;
    }
    var slide = document.getElementById("mobilec");
    slide.style.backgroundImage = "url('images/mobile"+slideIndex+".jpg')";
    slideIndex++;
    setTimeout(showSlides, 2000);
}