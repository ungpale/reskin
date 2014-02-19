(function($) {
$(document).ready(function() {
	// 메뉴전체보기
	$('#nav-all .btn').click(function(){
		$('.list-wrap').toggle();
	});

	// 롤오버이미지on/off
	$('.rollover').hover(function() {
		// var currentImg = $(this).attr('src');
		// $(this).attr('src', $(this).attr('hover'));
		// $(this).attr('hover', currentImg);
		$(this).attr("src", $(this).attr("src").replace("_off","_on"));
		$(this).attr("src", $(this).attr("src").replace("-off","-on"));
	}, function() {
		// var currentImg = $(this).attr('src');
		// $(this).attr('src', $(this).attr('hover'));
		// $(this).attr('hover', currentImg);
		if($(this).parent().attr("class") != "on"){
			$(this).attr("src", $(this).attr("src").replace("_on","_off"));
			$(this).attr("src", $(this).attr("src").replace("-on","-off"));	
		}
	});
});
})(jQuery);