$.fn.myPlugin = function(){
	var leftButton = $('.slider-button-left');
	var rightButton = $('.slider-button-right');
	var one = $('.first-step')
	var sliderList = $('.for-slider');
	var sliderPos = 0;
	var pixelsOffset = 425;
	var sliderCount = sliderList.find('.for-slider').length;
    var minimumOffset = - ((sliderCount - 1) * pixelsOffset);
    var maximumOffset = 0;


    leftButton.on('click', function(){
		// one.hide();

		for (var i = 0; i < sliderList.length; i++) {
			$('.first-step').replaceAll(sliderList[i++])
			console.log(sliderList[i++])
		}
		
	});



	// leftButton.on('click', function(){
	// 	if(sliderPos != maximumOffset){
	// 	sliderPos += 425;
	// 	sliderList.animate({
	// 		left: sliderPos + 'px',
	// 	}, 500);
	// 	}
	// });
	// rightButton.on('click', function(){
	// 	if(sliderPos != minimumOffset) {
	// 	sliderPos -= 425;
	// 	sliderList.animate({
	// 		left: sliderPos + 'px',
	// 	}, 500);
	// 	}

	// });
}