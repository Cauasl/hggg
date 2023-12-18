let familia = ['Faz Parte da Familia?'];
let amigo = ['Faz Parte da Familia?', 'É amigo(a)?', 'Proximo?'];
let amg_fml = 0;
let hist = [];
let n1 = 0;
let per = window.document.getElementsByTagName('p');
let sn = window.document.getElementsByName('sim-nao');
let res = window.document.querySelector('div#res');

function laal() {
    if(n1 == 0) {
        if(sn[0].checked == true) {
            return true;
        }else {
            return false;
        }
    }
    n1++;
}

function noenvitar() {
    per[0].innerHTML = 'Não convidado';
    per[1].innerHTML = '';
}

function envitar() {
    per[0].innerHTML = 'Convidado';
    per[1].innerHTML = '';
}

function teste() {
    if(sn[0].checked == true) {
        alert('sim')
    }else {
        alert('nao');
    }
}

function perguntas() {
    amg_fml = laal();   
    var temp = -1;
    if(amg_fml) {
        temp = familia[n1];
        hist.push(`${familia[n1]}: ${sn[0].checked}`);
    }else {
        temp = amigo[n1];
        hist.push(`${amigo[n1]}: ${sn[0].checked}`)
    }

    per[0].innerHTML = temp;
    res.innerHTML = hist;
    if(n1 > 1) {n1++}
}