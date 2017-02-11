jQuery(function($){
	$('.animatable').click(function(e){
		e.preventDefault();
		var self = $(this);
		self.addClass('animate');
		setTimeout(function () {
			self.removeClass('animate');
		}, 2000);
	});
});