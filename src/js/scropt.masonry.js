
var URL = "https://pixabay.com/api/?key=5276352-5eeec9953d725415cb7dab763" + "&q="  + "&image_type=photo" + "&min_width=350" + + "&min_height=300" + "&page=10" + "&per_page=7" ;

var xdr = new XDomainRequest();
	// console.log(xdr.open("get", URL));
	xdr.onprogress = function () { };
	xdr.ontimeout = function () { };
	xdr.onerror = function () { };
	xdr.onload = function() {
	  success(xdr.responseText);
	}
	// setTimeout(function () {xdr.send();}, 0);


window.onload = function(){
    var counte = document.querySelector('.grid-block');
    
    var msnry = new Masonry(counte, {
        itemSelector: '.grid__item',
        columnWidth: 300
    });
};