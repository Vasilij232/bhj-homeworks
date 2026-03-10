document.addEventListener('DOMContentLoaded', function() {
	const modal = document.getElementById('subscribe-modal');


	function getCookie(name) {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(';').shift();
		return null;
	}


	if (!getCookie('popup_closed')) {
		modal.classList.add('modal_active');
	}


	modal.querySelector('.modal__close').addEventListener('click', function(e) {
		e.preventDefault();
		modal.classList.remove('modal_active');


		document.cookie = 'popup_closed=1; max-age=' + (365 * 24 * 60 * 60);
	});
});