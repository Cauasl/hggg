function dados() {
    var dados = [];
    var n1 = 3;
    for(var i = 0; i <= n1; i++) {
        var v1 = document.getElementsByName('dados')[i].value;
        v1 = v1.trim();
        if (v1 === '') {
            alert('Preencha porfavor todos os dados!');
            dados = 'Os dados não preenchidos corretamente!';
            break;
        }else if (v1.length <= 4 && i >= 3) {
            alert('A senha precisa ter no minímo 4 caracterias!');
            dados = 'Os dados não preenchidos corretamente!';
            break;
        }
        dados[i] = v1;
    }
    alert(dados)
    window.location.href = 'index2.html';
}

function selecionado(v1) {
    let localarray = [];
    for(let i = 0; i < v1.length; i++) {
        if(v1[i].selected) {
            let opcaoAtual = v1[i];
            localarray.push(opcaoAtual.value);
        }
    }

    return localarray;
}

function tocar() {
    let musica = window.document.querySelector('select');
    let opc = musica.options;
    musica.addEventListener('change', selecionado(opc));
    let audio1 = window.document.createElement('audio');
    let src_musica = window.document.createElement('source');
    let p = window.document.querySelector('p#nome-musica');
    let nome_pagina = window.document.querySelector('title');
    
    if (musica.value.length == 0) {
        p.innerHTML = 'Porfavor selecione uma musica!!'    
    }else {
        p.innerHTML = musica.value;
        nome_pagina.innerHTML = `Tocando: ${musica.value}`;
        
        //Local das tags
        var divlocal = window.document.querySelector('div#msuid');
        divlocal.innerHTML = '';

        //Adicionando o elemento audio
        audio1.setAttribute('controls', 'true');
        audio1.setAttribute('loop', 'true');
        audio1.setAttribute('autoplay', 'true');
        divlocal.appendChild(audio1);

        //Adicionando o elemento source
        src_musica.setAttribute('src', `musicas/${musica.value}.mp3`);
        src_musica.setAttribute('type', 'audio/mp3');
        audio1.appendChild(src_musica);
    }
}
