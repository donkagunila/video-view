$(document).ready(function () {
	var menu = $('#menu');
	var overlap = $('.overlap');
	var sidenav = $('.sidenav');

	menu.on('click', function () {
		$(document.body).addClass('has-overlap'),overlap.show(),sidenav.show();
	}),overlap.on('click', function () {
		$(this).hide();
		$(document.body).removeClass('has-overlap'),sidenav.hide();
	});


	// scroll reveal
	// window.sr = new scrollReveal();
	ScrollReveal().reveal('.left-in', {
		duration: 2000,
		origin: 'left',
		distance: '30px',
		reset: true
	});

	ScrollReveal().reveal('.bottom-in', {
		duration: 2000,
		origin: 'bottom',
		distance: '10px',
		reset: true
	});

	ScrollReveal().reveal('.right-in', {
		duration: 2000,
		origin: 'right',
		distance: '30px',
		reset: true
	});
	// sr.reveal('.right-in');

});
