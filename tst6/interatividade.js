(function() {
	let bodys = document.body;
	let sec = document.querySelector("section#personagens");
	let t = (sec.querySelectorAll('img').length) - 1;
	let tela = document.querySelector("#tela");
	let texto = ['Mario', 'Luigi', 'Peach', 'Bowser', 'DK', 'Toad', 'Wario', 'Yoshi'];
	
	//X
	tela.getElementsByTagName('p')[0].addEventListener("click", function() {
		tela.getElementsByTagName('img')[0].setAttribute("src", "");
		tela.setAttribute('style', 'display: none;');
		bodys.setAttribute('style', 'overflow: auto;');
	});
	
	//Imagens
	for(var i=0; i <= t; i++) {
		let k = sec.getElementsByTagName('img')[i].src;
		let n = i;
		sec.getElementsByTagName('img')[i].addEventListener("click", function() {
			tela.getElementsByTagName('img')[0].setAttribute("src", `${k}`);
			tela.setAttribute('style', 'display: block;');
			tela.getElementsByTagName('p')[1].innerHTML = texto[n];
			bodys.setAttribute('style', 'overflow: hidden;');
		});
	}
}());