document.addEventListener('DOMContentLoaded', function() {

	const tooltips = document.querySelectorAll('.has-tooltip');
	let tooltip = null;

	tooltips.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();

			const text = this.title;
			const rect = this.getBoundingClientRect();

			if (tooltip) {
				tooltip.remove();
			}

			tooltip = document.createElement('div');
			tooltip.className = 'tooltip tooltip_active';
			tooltip.textContent = text;

			tooltip.style.left = rect.right + 'px';
			tooltip.style.top = rect.bottom + 'px';

			document.body.append(tooltip);
		});
	});
});