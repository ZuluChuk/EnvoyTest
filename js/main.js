jQuery(document).ready(function(){
    //product page image gallery
	$( ".js-thumb" ).click(function() {
		var imgSrc = $(this).find("img").attr("src")
	  	$(this).addClass("active").parents().find(".js-main-image").attr("src", imgSrc);
	  	$(this).siblings().removeClass("active");
	  	return false;	
	});

	//ajax components
    var questions = '';//global object

    jQuery.ajax({
        type: "GET",
        url: "data/products.json",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "",
        success: function (result) {
            questions = result;
            console.log(result);
            DisplayFAQ();
        },
        error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      },
        complete: function () { console.log("done"); }
    });

    function DisplayFAQ() {
        var jsontitle = "",
        	jsonquestion = "";
        console.log("writing" + questions);
        $.each(questions, function (i, q) {
        	if(i == "title"){
        		jsontitle += "<h3>"+ q + "</h3>";
        	} else if(i == "faqs"){
        		$.each(q, function(i, a){
        			jsonquestion += "<li class='js-showAnswer'>"+ a.question + "</li>";
        		});
        	}   
        });
        $(jsontitle).prependTo("#faq");
        $(jsonquestion).appendTo("#faq ul");
    }

    $(".js-showAnswer").click(function(){
    	
    });
});
