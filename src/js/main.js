var myFullpage = new fullpage('#fullpage', {
	navigation: true,
	navigationPosition: 'left',
	scrollOverflow: true,
	normalScrollElements: '.window',
	keyboardScrolling: false,
});

let body = document.querySelector('body');
let anchors = body.querySelectorAll('.anchor');
let sections = body.querySelectorAll('.section');
let sectionsBackgrounds = body.querySelector('.sections-backgrounds');
let firstActiveSection = body.querySelector('.section.active');

sections.forEach((section) => {
	let newBackground = document.createElement('div');
	newBackground.classList.add('section-background');
	newBackground.dataset.backgroundgradient = section.dataset.sectioncolor.replace('#','')
	newBackground.setAttribute('style', `background: linear-gradient(180deg, #${newBackground.dataset.backgroundgradient} 0%, rgba(255, 255, 255, 0) 100%), #fff`);
	sectionsBackgrounds.appendChild(newBackground);
});

let firstActiveBackground = body.querySelector(`.section-background[data-backgroundgradient="${firstActiveSection.dataset.sectioncolor.replace('#','')}"]`);
let backgrounds = sectionsBackgrounds.querySelectorAll('.section-background');
firstActiveBackground.classList.add('section-background--active');

body.addEventListener('click', (event) => {
	if (event.target.classList.contains('anchor')) {
		event.preventDefault();
		let destination = event.target.dataset.destination;
		fullpage_api.moveTo(destination);
	}
})

const config = { attributes: true, childList: false, subtree: false };
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
			if (mutation.type === 'attributes') {
				backgrounds.forEach((background) => {
					background.classList.remove('section-background--active');
				});
				let currentActiveSection = body.querySelector('.section.active');
				let currentActiveBackground = sectionsBackgrounds.querySelector(`.section-background[data-backgroundgradient="${currentActiveSection.dataset.sectioncolor.replace('#','')}"]`);
				currentActiveBackground.classList.add('section-background--active');
			}
    }
};
const observer = new MutationObserver(callback);
observer.observe(body, config);

const codes = body.querySelectorAll('code');

codes.forEach((code) => {
	const numberOfLines = code.textContent.split("\n").length;
	code.dataset.lines = numberOfLines;
	const linesHolder = document.createElement("span");
	linesHolder.classList.add('code__lines');
	let linesString = ``
	for (let i = 1; i < numberOfLines; i++) {
		linesString = linesString + `${i}<br/>`
	}
	linesHolder.innerHTML = linesString;
	code.appendChild(linesHolder);
});
