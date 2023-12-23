function lala() {
	let sec = document.querySelector("section#personagens");
	let t = (sec.querySelectorAll('img').length) - 1;
	
	for(var i=0; i <= t; i++) {
		let k = sec.getElementsByTagName('img')[i].src;
		sec.getElementsByTagName('img')[i].addEventListener("click", function() {
			alert(`aqui ${k}`);
		});
		
	}
}