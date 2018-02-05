// Welcome to the easy to understand, wholesome, and cool Chrome extension, Darkness.

console.log('%c Darkness has loaded. ', 'color: purple;');

var mode;
var textElemets = document.querySelectorAll('h1,h2,h3,p,a');

function setMode() {
	if (mode == "day" || mode == undefined) {
		console.log('%c Ouch! Your poor eyes. Going into night mode. ', 'color: purple;');
		document.body.style.backgroundColor = '#212121';

		for (var i = 0; i < textElemets.length; i++) {
   			textElemets[i].style.color = '#bfbfbf';
   			//textElemets[i].style.backgroundColor = '#212121';
		}

		window.mode = "night";
	} else {
		console.log('%c Oh no! Your poor eyes. Going into day mode. ', 'color: orange;');
		document.body.style.background = 'white';

		for (var i = 0; i < textElemets.length; i++) {
   			textElemets[i].style.color = 'black';
   			textElemets[i].style.backgroundColor = 'white';
		}

		window.mode = "day";
	}
}

setMode();