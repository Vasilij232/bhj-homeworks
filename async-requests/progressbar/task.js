document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form');
	const progress = document.getElementById('progress');
	const sendBtn = document.getElementById('send');

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		const formData = new FormData(form);
		const xhr = new XMLHttpRequest();

		xhr.upload.addEventListener('progress', function(e) {
			if (e.lengthComputable) {
				const percent = e.loaded / e.total;
				progress.value = percent; // 0.0 → 1.0
			}
		});


		xhr.addEventListener('load', function() {
			if (xhr.status === 200) {
				progress.value = 1.0;
				alert('Файл загружен!');
			}
		});


		xhr.addEventListener('error', function() {
			alert('Ошибка загрузки');
			progress.value = 0;
		});


		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
		xhr.send(formData);


		sendBtn.disabled = true;
	});
});