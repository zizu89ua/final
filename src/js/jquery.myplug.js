window.onload = function(){
var slides = $('.step-image');
var currentSlide = 0;
		
function nextSlide() {
	goToSlide($(this).siblings('.step-image'), currentSlide+1);
}

function previousSlide() {
   goToSlide($(this).siblings('.step-image'),currentSlide-1);
}

function goToSlide(img, n) {
    img[currentSlide].className = 'step-image';
    currentSlide = (n+img.length)%img.length;
    img[currentSlide].className = 'step-image showing';
}



	
$('.slider-button-right').click(nextSlide)

$('.slider-button-left').click(previousSlide)



	

	
};