/*!
 * Function: flyToElement
 * Author: CodexWorld
 * Author URI: http://www.codexworld.com  
 * Author Email: contact@codexworld.com
 * Description: This function is used for adding flying effect to the element.
 */
function flyToElement(flyer, flyingTo) {
	var $func = $(this);
	var divider = 10;
	var flyerClone = $(flyer).clone();
	$(flyerClone).css({position: 'absolute', background:'#fff', padding: '12px', float: 'left', display: 'inline-block', height: '243px',width: '376px', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000});
	$('body').append($(flyerClone));
	var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 4) - ($(flyer).width()/divider)/4;
	var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 4) - ($(flyer).height()/divider)/4;
	$('body').css('overflow', 'hidden');
	 
	$(flyerClone).animate({
		opacity: 0.4,
		left: gotoX,
		top: gotoY,
		width: $(flyer).width()/divider,
		height: $(flyer).height()/divider
	}, 1000,
	function () {
		$(flyingTo).fadeOut('fast', function () {
			$(flyingTo).fadeIn('fast', function () {
				$(flyerClone).fadeOut('fast', function () {
					$(flyerClone).remove();
				});
			});
		});
	});
}




function flyToElement2(flyer, flyingTo, from) {
	var $func = $(this);
	var divider = 10;
	var flyerClone = $(flyer).clone();
	$(flyerClone).css({position: 'absolute', background:'#fff', padding: '12px', float: 'left', display: 'inline-block', top: $(from).offset().top + "px", left: $(from).offset().left + "px", opacity: 1, 'z-index': 1000});
	$('body').append($(flyerClone));
	var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 20) - ($(flyer).width()/divider)/4;
	var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 20) - ($(flyer).height()/divider)/4;
	$('body').css('overflow', 'hidden');
	 
	$(flyerClone).animate({
		opacity: 0.4,
		left: gotoX,
		top: gotoY,
		width: $(flyer).width()/divider,
		height: $(flyer).height()/divider
	}, 700,
	function (flyToElement2) {
		console.log($(flyer).width());
		$(flyingTo).fadeOut('fast', function () {
			$(flyingTo).fadeIn('fast', function () {
				$(flyerClone).fadeOut('fast', function () {
					$(flyerClone).remove();
				});
			});
		});
	});
}

