$(document).ready(function(){
	var commonWidth = $('.navbar-brand').children(0).width()
	var commonHeight = $('.navbar-brand').children(0).height()
	var animationSpeed = 100;
	$('.navbar-brand').hover(function(event){
		$(event.currentTarget).children(0).animate({width: commonWidth + 20, height: commonHeight + 20}, animationSpeed);
	}, function(event){
		$(event.currentTarget).children(0).animate({width: commonWidth, height: commonHeight}, animationSpeed);
	})
});
