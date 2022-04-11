'use strict'

let imgs = document.querySelectorAll('.slider-big__imgs img'),
	dots = document.querySelectorAll('.slider-big__dots div'),
	slide = 0;

dots.forEach((elem) => elem.addEventListener('click', {
	handleEvent(event) {
		if (elem.classList.contains('slider-big__cur-dot')) return;
		clearInterval(BigImgInterval);
		shiftToIndex(+event.target.dataset.index);
		BigImgInterval = setInterval(() => {
			if (slide == imgs.length - 1) shiftToIndex(0);
			else shiftToIndex(slide + 1);
		}, 4000);
	}
}));

let BigImgInterval = setInterval(() => {
	if (slide == imgs.length - 1) shiftToIndex(0);
	else shiftToIndex(slide + 1);
}, 4000);

function shiftToIndex(index) {
	let curDot = document.querySelector('.slider-big__cur-dot');

	curDot.classList.remove('slider-big__cur-dot');
	curDot.classList.add('slider-big__just-dot');
	dots[index].classList.remove('slider-big__just-dot');
	dots[index].classList.add('slider-big__cur-dot');

	let interval = setInterval(function () {
		let dindex = slide - index;
		if (dindex > 0) {
			shiftBigImg(slide - 1, 'right', 'center');
			slide--;
		} else if (dindex < 0) {
			shiftBigImg(slide + 1, 'left', 'center');
			slide++;
		} else {
			clearInterval(interval);
		}
	}, 20);
}

function shiftBigImg(index, curSlide, nextSlide) {
	let curClassList = imgs[slide].classList,
		nextClassList = imgs[index].classList;
	if (curClassList.contains('slider-big__right')) curClassList.remove('slider-big__right');
	if (curClassList.contains('slider-big__left')) curClassList.remove('slider-big__left');
	if (curClassList.contains('slider-big__center')) curClassList.remove('slider-big__center');
	imgs[slide].classList.add('slider-big__' + curSlide);

	if (nextClassList.contains('slider-big__right')) nextClassList.remove('slider-big__right');
	if (nextClassList.contains('slider-big__left')) nextClassList.remove('slider-big__left');
	if (nextClassList.contains('slider-big__center')) nextClassList.remove('slider-big__center');
	imgs[index].classList.add('slider-big__' + nextSlide);
}