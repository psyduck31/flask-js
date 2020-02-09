$(document).ready(function(){
	var yPos;
	var scrolled = 0;
	var $parralaxDOM = $('body > nav');
	$(window).scroll(function() {
		scrolled = $(window).scrollTop();
		$parralaxDOM.each(function(i) {
			console.log("...")
			yPos = scrolled * 0.5 * (i+1);
			console.log(yPos);
			$(this).css({top: yPos});
		})
	})
});