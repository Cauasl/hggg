function alertar() {
    window.alert('lalala');
}

function selecao() {
    var mostra = document.querySelector('div#selecao');
    var div = document.querySelector('div#divdiv1');
    div.setAttribute('onclick', ' ');
    var EstiloNome = ["Negrito", "Italic", "Sublinhado", "Nenhum"];
    var ENn1 = EstiloNome.length; //Numero de elemetos da array (2)
    
    for(var i = 0; i < ENn1; i++) {
        var inpt = document.createElement('input');
        inpt.setAttribute('type', 'radio');
        inpt.setAttribute('name', 'estilo');
        inpt.setAttribute('id', EstiloNome[i]);
        mostra.appendChild(inpt);

        // Adicione um rótulo para o botão de rádio
        var label = document.createElement('label');
        label.setAttribute('for', EstiloNome[i]);
        label.innerHTML = EstiloNome[i];
        mostra.appendChild(label);

    }

    mostra.innerHTML += `<br>`;
    inpt.setAttribute('type', 'button');
    inpt.setAttribute('value', 'Concluir');
    inpt.addEventListener("click", nomeComEstilo);
    mostra.appendChild(inpt);
}

function nomeComEstilo() {
    var div = document.querySelector('div#divdiv1');
    div.setAttribute('onclick', 'selecao()');
    var nome_estilo = document.querySelector('h1#nome');
    var inpt_estilo = document.getElementsByName("estilo");
    var mostra = document.querySelector('div#selecao');

    if (inpt_estilo[0].checked == true) {
        nome_estilo.innerHTML = `Olá, <strong>Cauã</strong>`;
    }else if (inpt_estilo[1].checked == true) {
        nome_estilo.innerHTML = `Olá, <em>Cauã</em>`;
    }else if (inpt_estilo[2].checked == true) {
        nome_estilo.innerHTML = `Olá, <ins>Cauã</ins>`;
    }else if (inpt_estilo[3].checked == true) {
        nome_estilo.innerHTML = `Olá, Cauã`;
    }

    mostra.innerHTML = " ";
}