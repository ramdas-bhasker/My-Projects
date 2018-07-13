$(document).ready(function() {
	
	if ( 0 < $('.product').length ) {
		$('.hoticon').click(function() {
								
			var offset = $(this).parent().offset();
			$(this).parent().clone().addClass('product-clone').css({
				'left' : offset.left + 'px',
				'top' : parseInt(offset.top-$(window).scrollTop()) + 'px',
				'width' :  $(this).parent().width() + 'px',
				'height' : $(this).parent().height() + 'px'
			}).appendTo($('.product').parent());

			var cart = $('.leadscountbox').offset();
			$('.product-clone').animate( { top: parseInt(cart.top-$(window).scrollTop()) + 'px', left: cart.left + 'px', 'height': '0px', 'width': '0px' }, 800, function(){
	            $(this).remove();
	            var price = parseInt($('.product').attr('data-price'));
	            var productPrice = parseInt($(this).attr('data-price'));
	            var cartPrice = parseInt(price+productPrice);
				
					 alert(productPrice);
	            $('.leadscountbox').html('$' + cartPrice);
	            $('.product').attr('data-price', cartPrice);
	        });
		});
	}

});