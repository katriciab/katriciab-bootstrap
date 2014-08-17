/**
 * Scripts and things.
 * @author Meow
 */

(function($) {
	// Init Skrollr
	var s = skrollr.init({
		render : function(data) {
			//Debugging - Log the current scroll position.
			console.log(data.curTop);
		},
		mobileCheck : function() {
			//hack - forces mobile version to be off
			return false;
		}
	});

	var toggle = true;
	$('#logo').click(function() {
		if (toggle) {
			$(this).css({
				"-webkit-transform" : "rotate(-90deg)",
				"-moz-transform" : "rotate(-90deg)",
				"transform" : "rotate(-90deg)"
			});
		} else {
			$(this).css({
				"-webkit-transform" : "rotate(0deg)",
				"-moz-transform" : "rotate(0deg)",
				"transform" : "rotate(0deg)"
			});
		}
		toggle = !toggle;
	});

} )(jQuery);
