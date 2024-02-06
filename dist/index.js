'use strict';
var leftPane = document.querySelector('#left-pane');
var menu = document.querySelector('#menu');
var section = document.getElementById('section');
if (!leftPane || !menu || !section) {
	throw new Error('Element not found');
}
menu.addEventListener('click', function () {
	var _a, _b;
	if (leftPane.classList.contains('absolute')) {
		(_a = leftPane.classList).add.apply(_a, ['left-0', 'z-10', 'top-0']);
		console.log('here');
		section.classList.add('hidden');
		leftPane.classList.remove('absolute');
	} else {
		leftPane.classList.add('absolute');
		(_b = leftPane.classList).remove.apply(_b, ['left-0', 'z-10', 'top-0']);
		leftPane.classList.add('-left-[20rem]');
		section.classList.remove('hidden');
	}
});
