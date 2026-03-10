async function loadCourses() {
	const loader = document.getElementById('loader');
	const items = document.getElementById('items');

	try {
		items.style.display = 'none';
		loader.classList.add('loader_active');


		const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
		const data = await response.json();

		items.innerHTML = '';

		for (const code in data.response.Valute) {
			const currency = data.response.Valute[code];

			const item = document.createElement('div');
			item.className = 'item';
			item.innerHTML = `
                <div class="item__code">${currency.CharCode}</div>
                <div class="item__value">${currency.Value.toFixed(2)}</div>
                <div class="item__currency">руб.</div>
            `;
			items.append(item);
		}

		items.style.display = 'block';
		loader.classList.remove('loader_active');

	} catch (error) {
		console.error('Ошибка:', error);
		loader.classList.remove('loader_active');
	}
}

document.addEventListener('DOMContentLoaded', loadCourses);