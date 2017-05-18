//product page image gallery
$( ".js-thumb" ).click(function() {
	var imgSrc = $(this).find("img").attr("src")
  	$(this).addClass("active").parents().find(".js-main-image").attr("src", imgSrc);
  	$(this).siblings().removeClass("active");	
});