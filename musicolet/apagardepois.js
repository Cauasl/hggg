function coloar(ini=1, passo=1, final=5) {
    console.log(`Incio:${ini}, Passo:${passo}, Final:{final}`);
    var dados = [];
    var c = 0;

    if (final <= 0 || passo <= 0 || ini <= 0) {
        return "---> Impossivel contar!!";
    }else if (final > ini) {
        for(var i = ini; i <= final; i += passo) {
            dados[c] = i;
            c++;
        }

        return dados;
    }else if (ini > final) {
        for(var i = ini; i >= final; i -= passo) {
            dados[c] = i;
            c++;
        }

        return dados;
    }
}
var v = coloar(100, 1, 1);
console.log(v);