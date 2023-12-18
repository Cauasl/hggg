//Colocando um evento na lista
let list = window.document.querySelector('ol');
list.addEventListener("click", very);

//Input do texto(Tarefa a ser adicionada)
let tar = window.document.querySelector('input#tarefa').value; //Tarefa

//Listas e Inputs de check das listas
let name = window.document.getElementsByName("certo");
let li = window.document.getElementsByTagName('li');

//Número de listas e variavel de controle
let nTar = 1;
let simtem = false;



function adicionar() {
    let tar = window.document.querySelector('input#tarefa').value; //Tarefa
    let P_info = window.document.getElementsByTagName('p')[1];

    //Criando o input de check
    var inp = window.document.createElement('input');
    inp.setAttribute('type', 'checkbox');
    inp.setAttribute('name', 'certo');

    //Criando um item da lista
    var lis = window.document.createElement('li');

    for(var i = 0; i <= nTar; i++) {
        let txt = ` - ${tar}`;
        txt = txt.toLowerCase();
        txt = txt.replace(/\s/g, '');

        let tarefa = li[i].innerText;
        tarefa = tarefa.toLowerCase();
        tarefa = tarefa.replace(/\s/g, '');

        if(txt === tarefa) {
            simtem = true;
        }
    }

    if(simtem == true) {
        window.document.querySelector('input#tarefa').value = '';
        alert('Não é possivel colocar uma mesma tarefa.');
        simtem = false;
    }else {
        list.appendChild(lis);
        lis.appendChild(inp)
        lis.innerHTML += ` - ${tar}`;
        nTar++;
        simtem = false;
        P_info.innerHTML = `Número de tarefas: ${nTar + 1}.`;
    }
}

function very() {

    for(var i = 0; i <= nTar; i++) {
        var inp = window.document.createElement('input');
        inp.setAttribute('type', 'checkbox');
        inp.setAttribute('name', 'certo');
        let del = window.document.createElement('del');

        if(name[i].checked == false){
            var temp = li[i].innerText;
            li[i].innerText = '';
            li[i].appendChild(inp);
            li[i].innerHTML += temp;

        }else if(name[i].checked == true) {

            var temp = li[i].innerText;
            li[i].innerText = '';
            li[i].appendChild(inp);
            li[i].appendChild(del);

            inp.checked = true;
            del.innerText = temp;
        }
    }

    //alert(`Linha: ${li[2].innerText} Chack:${name[2].checked} Numero de Elementos: ${nTar}`);
}