const button = document.querySelector('#submit');

function randomColor () {
	const r = Math.floor(Math.random()*256);
	const g = Math.floor(Math.random()*256);
	const b = Math.floor(Math.random()*256);
	const bgColor = "rgb(" + r + "," + g + "," + b + ")";
	document.body.style.background = bgColor;
}


button.addEventListener('click', randomColor)
