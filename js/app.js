$(document).ready(function () {
	var menu = $('#menu');
	var overlap = $('.overlap');
	var sidenav = $('.sidenav');

	menu.on('click', function () {
		$(document.body).addClass('has-overlap'),overlap.show(),sidenav.show();
	}),overlap.on('click', function () {
		$(this).hide();
		$(document.body).removeClass('has-overlap'),sidenav.hide();
	})
});