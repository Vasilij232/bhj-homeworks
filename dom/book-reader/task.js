document.addEventListener('DOMContentLoaded', function() {
	const book = document.getElementById('book');

	setupFontSize(book);

	setupTextColor(book);

	setupBackgroundColor(book);
});

function setupFontSize(book) {

	const fontButtons = document.querySelectorAll('.font-size[data-size]');

	fontButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			setActiveButton(fontButtons, this);
			setBookFontSize(book, this.dataset.size);
		});
	});
}

function setupTextColor(book) {

	const textButtons = document.querySelectorAll('[data-text-color]');

	textButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			setActiveButton(textButtons, this);
			setBookTextColor(book, this.dataset.textColor);
		});
	});
}

function setupBackgroundColor(book) {

	const bgButtons = document.querySelectorAll('[data-bg-color]');

	bgButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			setActiveButton(bgButtons, this);
			setBookBgColor(book, this.dataset.bgColor);
		});
	});
}

function setActiveButton(buttons, activeButton) {
	buttons.forEach(btn => btn.classList.remove('font-size_active', 'color_active'));
	activeButton.classList.add(activeButton.classList.contains('font-size') ? 'font-size_active' : 'color_active');
}

function setBookFontSize(book, size) {
	book.classList.remove('book_fs-big', 'book_fs-small');
	if (size === 'big') book.classList.add('book_fs-big');
	if (size === 'small') book.classList.add('book_fs-small');
}

function setBookTextColor(book, color) {
	book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
	book.classList.add(`book_color-${color}`);
}

function setBookBgColor(book, color) {
	book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
	book.classList.add(`book_bg-${color}`);
}