document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('tasks__form');
	const input = document.getElementById('task__input');
	const list = document.getElementById('tasks__list');


	form.addEventListener('submit', function(e) {
		e.preventDefault();

		const text = input.value.trim();
		if (text) {
			const task = document.createElement('div');
			task.className = 'task';
			task.innerHTML = `
                <div class="task__title">${text}</div>
                <a href="#" class="task__remove">&times;</a>
            `;

			task.querySelector('.task__remove').addEventListener('click', function(e) {
				e.preventDefault();
				task.remove();
			});

			list.append(task);
			input.value = '';
		}
	});
});
