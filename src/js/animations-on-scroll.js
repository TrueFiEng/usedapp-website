const allAnimatedElements = body.querySelectorAll('.animate__animated');

const animationsCallback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
			if (mutation.type === 'attributes') {
				let currentAnimatedSection = body.querySelector('.section.active');
				allAnimatedElements.forEach((elementFromAll) => {
					let elementAnimationsList = elementFromAll.dataset.animations.split(' ');
					elementFromAll.classList.remove(...elementAnimationsList);
				});
				let currentAnimatedElements = currentAnimatedSection.querySelectorAll('.animate__animated');
				currentAnimatedElements.forEach((animatedElement) => {
					let elementAnimationsList = animatedElement.dataset.animations.split(' ');
					animatedElement.classList.add(...elementAnimationsList);
				});
			}
    }
};

const animationObserver = new MutationObserver(animationsCallback);
animationObserver.observe(body, config);
