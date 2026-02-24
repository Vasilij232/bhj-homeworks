document.addEventListener('DOMContentLoaded', function() {
	const rotators = document.querySelectorAll('.rotator');

	rotators.forEach(rotator => {
		startRotator(rotator);
	});

	function startRotator(rotator) {
		const cases = rotator.querySelectorAll('.rotator__case');
		let currentIndex = 0;

		function nextSlide() {
			cases[currentIndex].classList.remove('rotator__case_active');


			currentIndex = (currentIndex + 1) % cases.length;

			const nextCase = cases[currentIndex];
			nextCase.classList.add('rotator__case_active');

			const speed = parseInt(nextCase.dataset.speed) || 1000;
			const color = nextCase.dataset.color || null;

			if (color) {
				nextCase.style.color = color;
			}

			setTimeout(nextSlide, speed);
		}

		setTimeout(nextSlide, parseInt(cases[0].dataset.speed) || 1000);
	}
});