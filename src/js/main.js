'use strickt';

window.addEventListener('DOMContentLoaded', () => {
	const trigger = document.querySelectorAll('.accordion-item__trigger');

	trigger.forEach((item) => {
		item.addEventListener('click', () => {
			const parent = item.parentNode;

			if (parent.classList.contains('active')) {
				parent.classList.remove('active');
			} else {
				document.querySelectorAll('.accordion-item').forEach((child) => {
					child.classList.remove('active');
				});

				parent.classList.add('active');
			}
		});
	});
});
