function hiper_periodo(processos, qnt) {
    var temp = 0;
    for (var i in y){
        if(processos[i][3] > temp){
            temp = processos[i][3];
        }
    }
    return temp
}

function escolher_menor_deadline(processos, qnt, deadlines){
    var menor_deadline = 10000;
    var escolhido = -1;
    for (var i in y){
        if(deadlines[i] < menor_deadline){
            menor_deadline = deadlines[i];
            escolhido = i;
        }
    }
    return escolhido
}

function edf(processos, qnt){
    var relogio = 0;
    var deadlines = lista1;
    var periodos = lista2;
    var contador = lista3;
    for (var i in y){
        deadlines[i] = processos[i][2];
    }

    for (var i in y){
        periodos[i] = processos[i][3];
    }

    console.log("Processos: ", processos)
    console.log('Deadlines: ', deadlines)
    console.log('Períodos: ', periodos) 

    var b = new Boolean(true);
    while (b) {
        var escolhido = escolher_menor_deadline(processos, qnt, deadlines);
        console.log("Processo Escolhido: ", escolhido);
        if (periodos[escolhido] >= relogio){
            relogio += processos[escolhido][1] ;
            console.log("Processo: P" + escolhido + " executando...")
            console.log("Relogio: " + relogio)
            console.log("Burst Time do Processo P" + escolhido + ": processos[escolhido][1]")

            console.log("Deadline ANTERIOR do Processo : " + deadlines[escolhido])
            deadlines[escolhido] += processos[escolhido][3]
            console.log("Deadline do Processo P" + escolhido + " Atualizada: " + deadlines[escolhido])
            
            console.log("Periodo ANTERIOR do Processo: " + periodos[escolhido])
            periodos[escolhido] += processos[escolhido][3]
            console.log("Periodo do Processo P" + escolhido + " Atualizado: " + periodos[escolhido] + "\n")
            contador[escolhido] += 1
        }

        if (relogio >= 20){
            break;
        }

    }

    for (var i in y){
        console.log("O processo " + i + " executou " + contador[i] + " vezes"); 
    }

}

var processos = [
    [0, 3, 7, 20],
    [1, 2, 4, 5],
    [2, 2, 8, 10]  
];

var qnt = processos.length;
var y = [...Array(qnt).keys()]
lista1 = [0, 0, 0]
lista2 = [0, 0, 0]
lista3 = [0, 0, 0]


console.log(edf(processos, qnt));


