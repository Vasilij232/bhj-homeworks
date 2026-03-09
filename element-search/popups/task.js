document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('modal_main').classList.add('modal_active');

	document.querySelectorAll('.modal__close').forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.modal_active').classList.remove('modal_active');
		});
	});

	document.querySelector('.show-success').addEventListener('click', function(e) {
		e.preventDefault();
		document.getElementById('modal_main').classList.remove('modal_active');
		document.getElementById('modal_success').classList.add('modal_active');
	});
});