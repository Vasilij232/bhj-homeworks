async function initPoll() {
	const titleEl = document.getElementById('poll__title');
	const answersEl = document.getElementById('poll__answers');

	try {
		const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
		const poll = await response.json();

		titleEl.textContent = poll.data.title;

		answersEl.innerHTML = '';
		poll.data.answers.forEach(answer => {
			const btn = document.createElement('button');
			btn.className = 'poll__answer';
			btn.textContent = answer;
			answersEl.append(btn);
		});

		answersEl.querySelectorAll('.poll__answer').forEach(btn => {
			btn.addEventListener('click', () => {
				alert('Спасибо, ваш голос засчитан!');
			});
		});

	} catch (error) {
		console.error('Ошибка загрузки опроса:', error);
	}
}

document.addEventListener('DOMContentLoaded', initPoll);
