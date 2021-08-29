const button = document.querySelector('#submit');

/* The way I already knew
// function randomColor () {
// 	const r = Math.floor(Math.random()*256);
// 	const g = Math.floor(Math.random()*256);
// 	const b = Math.floor(Math.random()*256);
// 	const bgColor = "rgb(" + r + "," + g + "," + b + ")";
// 	document.body.style.background = bgColor;
// }
*/

/* The way I learned with this project */
function randomColorGenerator() {
  let code = '0123456789ABCDEF';
  let colorMake = '#';

  for (let index = 0; index < 6; index += 1) {
    colorMake += code[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = colorMake;
}

button.addEventListener('click', randomColorGenerator)
