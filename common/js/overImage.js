 // ------------------ overImage

$(document).ready(function(){
	$("img[src*='_on']").addClass("current");
		$("img,input").mouseover(function(){
			if ($(this).attr("src")){
				$(this).attr("src",$(this).attr("src").replace("_off.", "_on."));
			}
		});
		$("img[class!='current'],input").mouseout(function(){
			if ($(this).attr("src")){
				$(this).attr("src",$(this).attr("src").replace("_on.", "_off."));
			}
	});
});
