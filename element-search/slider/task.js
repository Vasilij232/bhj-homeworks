document.addEventListener('DOMContentLoaded', function() {
	const sliderItems = document.querySelectorAll('.slider__item');
	const prevBtn = document.querySelector('.slider__arrow_prev');
	const nextBtn = document.querySelector('.slider__arrow_next');

	let currentSlide = 0;


	function showSlide(index) {
		sliderItems.forEach(item => item.classList.remove('slider__item_active'));
		sliderItems[index].classList.add('slider__item_active');
	}

	prevBtn.addEventListener('click', function() {
		currentSlide = currentSlide === 0 ? sliderItems.length - 1 : currentSlide - 1;
		showSlide(currentSlide);
	});

	nextBtn.addEventListener('click', function() {
		currentSlide = currentSlide === sliderItems.length - 1 ? 0 : currentSlide + 1;
		showSlide(currentSlide);
	});
});
