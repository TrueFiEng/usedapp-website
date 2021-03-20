let body = document.querySelector('body');

let anchors = body.querySelectorAll('.anchor');

body.addEventListener('click', (event) => {
	if(event.target.classList.contains('anchor')) {
		event.preventDefault();
		let destination = event.target.dataset.destination;
		fullpage_api.moveTo(destination);
	}
})