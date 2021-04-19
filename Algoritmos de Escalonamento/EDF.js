//Não entendi muito bem essa função pois ela não é chamda em nenhum momento.
function hiper_periodo(processos, qnt) {
    let temp = 0;
    for (let i = 0; i < qnt; i++){
        if(processos[i][3] > temp){
            temp = processos[i][3];
        }
    }
    return temp
}

//Função criada para escolher o menor deadline.
function escolher_menor_deadline(processos, qnt, deadlines){
    let menor_deadline = 10000;
    let escolhido = -1;
    for (let i = 0; i < qnt; i++){
        if(deadlines[i] < menor_deadline){
            menor_deadline = deadlines[i];
            escolhido = i;
        }
    }
    return escolhido
}



//Comecei por essa função por acreditar ser mais fácil de realizar os testes
function edf(processos, qnt){
    let relogio = 0;

    //No Python ele cria as matrizes utilizando lista de lista, aqui criei utilizando "for" e "push".
    //Lista de qnt posições com valor "0".
    let deadlines = [];
    let periodos = [];
    let contador = [];

    for (let i = 0; i < qnt; i++){
        deadlines.push(0);
        periodos.push(0);
        contador.push(0);
    }

    //O JS não possui a função "range()"", tive que usar o for convencional, partindo de zero e indo incrementando até o final.
    for (let i = 0; i < qnt; i++){
        deadlines[i] = processos[i][2];
        periodos[i] = processos[i][3];
    }

    //Utilizei a "," para concatenar porque não existe concatenação com "{}" no JS e a concatenção com "+" estava pegando somente os valores e não as listas em si. 
    console.log("Processos: ", processos);
    console.log('Deadlines: ', deadlines);
    console.log('Períodos: ', periodos);

    
    while (true) {
        let escolhido = escolher_menor_deadline(processos, qnt, deadlines);
        //Utilizei o "+" para concatenar ao invés da "," pois vou utilizar somente valores.
        console.log("Processo Escolhido: " + escolhido);
        if (periodos[escolhido] >= relogio){
            relogio += processos[escolhido][1];
            console.log("Processo: P" + escolhido + " executando...");
            console.log("Relogio: " + relogio);
            console.log("Burst Time do Processo P" + escolhido + ": " + processos[escolhido][1]);

            console.log("Deadline ANTERIOR do Processo : " + deadlines[escolhido]);
            deadlines[escolhido] += processos[escolhido][3]
            console.log("Deadline do Processo P" + escolhido + " Atualizada: " + deadlines[escolhido]);
            
            console.log("Periodo ANTERIOR do Processo: " + periodos[escolhido]);
            periodos[escolhido] += processos[escolhido][3]
            console.log("Periodo do Processo P" + escolhido + " Atualizado: " + periodos[escolhido] + "\n");
            contador[escolhido] += 1
        }

        if (relogio >= 20){
            break;
        }

    }

    for (let i = 0; i < qnt; i++){
        console.log("O processo " + i + " executou " + contador[i] + " vezes"); 
    }

}


//Usei Let para demonstrar que aquela variável pode ser modificada.
let processos = [
    [0, 3, 7, 20],
    [1, 2, 4, 5],
    [2, 2, 8, 10]  
];

//O JavaScript(JS) não possui a função "len()"" igual no Python.
//Sendo assim, usei a função ".length", que faz a mesma coisa.
let qnt = processos.length;


//Chamada da função principal.
console.log(edf(processos, qnt));


