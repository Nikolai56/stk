$(function() {
	$('.sect2-mats-item-title').each(function() {
		$('.popup-buy .popup-select').append('<option>' + $(this).text() + '</option>');
	});

	$('.popup-select').on('change', function() {
		$(this).parent().find('span').text($(this).val());
	});

	$('input[type=tel]').mask('+7-999-999-9999');

	$('.sect1 h2 span').on('click', function() {
		// $('body, html').animate({scrollTop: $('.sect2-mats-item').eq($(this).index()).offset().top - 50 + 'px'}, 500);
		$('body, html').animate({scrollTop: $('.sect2-mats').offset().top - 50 + 'px'}, 500);
	});

	$('.popup-wrapper').on('click', function(e) {
		if (e.target === this) $('.popup-wrapper').css('display', 'none');
	});

	$(document).on('keypress', function(e) {
		if (e.keyCode == 27) $('.popup-wrapper').css('display', 'none');
	});

	$('.popup-close, .popup-tnx-close').on('click', function() {
		$('.popup-wrapper').css('display', 'none');
	});

	$('.callback').on('click', function() {
		$('.popup-callback').parent().css('display', 'flex');
	});

	$('.sect2-mats-item-order').on('click', function() {
		var mat = $(this).parent().find('.sect2-mats-item-title').text();
		$('.popup-buy').parent().css('display', 'flex')
      .find('.label--select select').val(mat)
      .parent().find('span').text(mat);
	});

	$('.checkQuality').on('click', function() {
		$('.popup-checkQuality').parent().css('display', 'flex');
	});

	$('form').on('submit', function() {
		$('.popup-wrapper').css('display', 'none');
		$('.popup-tnx').parent().css('display', 'flex');
		setTimeout(function() {
      $('.popup-tnx').parent().fadeOut(1000);
      // $(this).find('input:not([type=hidden]):not([type=submit])').val('');
		}, 5000);
	});
});
