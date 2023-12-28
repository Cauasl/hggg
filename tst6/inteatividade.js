let botao = document.querySelector('span.botaomusica');
let sim_nao = true;
botao.addEventListener('click', function() {
    let div = document.querySelector('div.melhoresmusicas');
    if(sim_nao) {
        div.setAttribute('style', 'padding: 0px; border-radius: 15px;');
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://open.spotify.com/embed/track/4hKLzFvNwHF6dPosGT30ed?utm_source=generator');
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '100px');
        iframe.setAttribute('frameBorder', '0');
        iframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media;');
        div.innerHTML = '';
        div.appendChild(iframe);
    }
});