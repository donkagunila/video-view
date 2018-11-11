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

	var li1 = $('#link1data');
	var li2 = $('#link2data');
	var li3 = $('#link3data');
	var intro = $('#linkintro');


	li1.hide();
	li2.hide();
	li3.hide();


	$('#link2').on('click', function (e) {
		e.preventDefault();
		li1.hide();
		li3.hide();
		intro.hide();
		$('#link1').removeClass('active');
		$('#link3').removeClass('active');
		$('#link2').addClass('active');
		li2.show()
	});


	$('#link1').on('click', function (e) {
		e.preventDefault();
		li2.hide();
		li3.hide();
		intro.hide();
		li1.show();
		$('#link1').addClass('active');
		$('#link2').removeClass('active');
		$('#link3').removeClass('active');
	});


	$('#link3').on('click', function (e) {
		e.preventDefault();
		li2.hide();
		li1.hide();
		intro.hide();
		$('#link1').removeClass('active');
		$('#link2').removeClass('active');
		$('#link3').addClass('active');
		li3.show()
	});

});
