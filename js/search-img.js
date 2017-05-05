$(function(){
	function randomPage(){
  			var number = Math.floor((Math.random() * 20)+1);
  			return number;
		}

	function load(){
			
			var URL = "https://pixabay.com/api/?key=5276352-5eeec9953d725415cb7dab763" + "&q="  + "&image_type=photo"  + "&page=" + randomPage() + "&per_page=7" ;
			$.getJSON(URL, function(data){
			
		    if (parseInt(data.totalHits) > 0 )
		        $.each(data.hits, function(i, hit){
		        $("<div class='grid-box'></div>").appendTo("#grid");
	        	$("<img class='grid__item'>").appendTo(".grid-box").attr("src", hit.webformatURL);
		        		
		        });
		    else
		        console.log('No hits');
			});
			
		}
	
load();

	function clickFun(){
		$("img.grid__item").detach();
		var search = $('.holiday-cattegory__search-block').val();

		var URL = "https://pixabay.com/api/?key=5276352-5eeec9953d725415cb7dab763" + "&q=" + search + "&image_type=photo"  + "&per_page=7";
		$.getJSON(URL, function(data){
			
	    if (parseInt(data.totalHits) > 0 )
	        $.each(data.hits, function(i, hit){
	        	$("<div class='grid-box'></div>").appendTo("#grid");
	        	$("<img class='grid__item'>").appendTo(".grid-box").attr("src", hit.webformatURL);
	        		
	        });
	    else
	        console.log('No hits');
		});
	};

	$('.holiday-cattegory__search-button').click(clickFun);
	
});




