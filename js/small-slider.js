'use strict'

let slides = document.querySelectorAll('.slider-small__slide'),
	smallDots = document.querySelectorAll('.slider-small__dots div'),
	smallSlide = 0;

smallDots.forEach((elem) => elem.addEventListener('click', {
	handleEvent(event) {
		if (elem.classList.contains('slider-small__cur-dot')) return;
		clearInterval(SmallSlideInterval);
		shiftSmallToIndex(+event.target.dataset.index);
		SmallSlideInterval = setInterval(() => {
			if (smallSlide == slides.length - 1) shiftSmallToIndex(0);
			else shiftSmallToIndex(smallSlide + 1);
		}, 4000);
	}
}));

let SmallSlideInterval = setInterval(() => {
	if (smallSlide == slides.length - 1) shiftSmallToIndex(0);
	else shiftSmallToIndex(smallSlide + 1);
}, 4000);

function shiftSmallToIndex(index) {
	let curDot = document.querySelector('.slider-small__cur-dot');

	curDot.classList.remove('slider-small__cur-dot');
	curDot.classList.add('slider-small__just-dot');
	smallDots[index].classList.remove('slider-small__just-dot');
	smallDots[index].classList.add('slider-small__cur-dot');

	let interval = setInterval(function () {
		let dindex = smallSlide - index;
		if (dindex > 0) {
			shiftSmallImg('right');
			smallSlide--;
		} else if (dindex < 0) {
			shiftSmallImg('left');
			smallSlide++;
		} else {
			clearInterval(interval);
		}
	}, 100);
}

function shiftSmallImg(shift) {
	let slidesWrapper = document.querySelector('.slider-small__slides'),
		left = (isNaN(parseInt(slidesWrapper.style.left))) ? 0 : parseInt(slidesWrapper.style.left);
	if (shift == 'right') slidesWrapper.style.left = left + 100 + '%';
	else slidesWrapper.style.left = left - 100 + '%';
}