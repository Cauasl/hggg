let mostrarsenha = document.getElementById('mostrarsenha');
mostrarsenha.addEventListener("change", function() {
	document.getElementsByClassName('text')[1].type = mostrarsenha.checked? 'text':'password';
});