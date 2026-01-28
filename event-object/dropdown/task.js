document.addEventListener("click", function(event) {

	const dropdowns = document.querySelectorAll(".dropdown");

	for (let dropdown of dropdowns) {
		const list = dropdown.querySelector(".dropdown__list");
		list.classList.remove("dropdown__list_active");
	}

	if (event.target.closest(".dropdown__value")) {
		const value = event.target.closest(".dropdown");
		const list = value.querySelector(".dropdown__list");
		list.classList.add("dropdown__list_active");
	}

	if (event.target.closest(".dropdown__item")) {
		const link = event.target.closest(".dropdown__item").querySelector(".dropdown__link");
		const value = link.closest(".dropdown").querySelector(".dropdown__value");
		value.textContent = link.textContent;

		const list = link.closest('.dropdown').querySelector('.dropdown__list');
		list.classList.remove('dropdown__list_active');

		event.preventDefault();
	}
});