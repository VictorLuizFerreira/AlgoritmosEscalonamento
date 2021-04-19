//Função para mostrar o tempo de espera dos processos.
function waiting_time(processos){

    //Igual no primeiro, o Python cria as matrizes utilizando lista de lista, aqui criei utilizando "for" e "push".
    //Lista de "qnt" posições com valor zero.
    let tempo_servico = []
    let wt = []

    for (let i = 0; i < processos.length; i++){
       tempo_servico.push(0)
       wt.push(0)
    }
    
    tempo_servico[0] = 0

    //Assim como no primeiro, o JS não possui a função "range()", tive que usar o "for" convencional, partindo de "1" e indo incrementando até o final.
    for (let x = 1; x < processos.length; x++){

        //Utilizei o "parseInt" para definir que o valor da posição na lista vai ser inteiro e não string. 
        tempo_servico[x] = parseInt(tempo_servico[x-1]) + parseInt(processos[x-1][1])
        wt[x] = parseInt(tempo_servico[x]) - parseInt(processos[x][0])
      
        if (wt[x] < 0){
            wt[x] = 0
        }
    }
    return wt
}



//Função para mostrar o tempo de resposta dos processos.
function turn_around_time(processos){

    let tat = []
  
    for (let i = 0; i < processos.length; i++){
       tat.push(0)
    }

    //Chamada da função "waiting_time".
    let wt = waiting_time(processos)
  
    for(let x = 0; x < processos.length; x++){
        tat[x] = parseInt(processos[x][1]) + parseInt(wt[x])
    }
  
    return tat
}



//Função para mostrar a média do tempo de espera dos processos.
function average_wt(processos){
  
    let qnt_proc = processos.length

    //No Python é usado a função "sum()" para realizar a soma de valores na lista.
    //No JS é usado o ".reduce()" onde recebe como parametro uma função com duas variáves e realiza a soma delas e caso não tenha valor, retorna zero.
    let wt = waiting_time(processos).reduce((a, b) => a + b, 0)
  
    return (wt / qnt_proc)
}



//Função para mostrar a média do tempo de resposta dos processos.
function average_tat(processos){

    let qnt_proc = processos.length
    let tat = turn_around_time(processos).reduce((a, b) => a + b, 0)
  
    return (tat / qnt_proc)
}



let processos = []

//Utilizei o metodo "prompt" para permitir que o usuário insira um valor.
let qnt_processos = prompt("Qnt de Processos: ");

for (let i = 0; i < qnt_processos; i++){
    at = prompt("Arrival Time: ")
    bt =  prompt("Burst Time: ")

    //No Python é usado o ".append" e aqui no JS utilizei o ".push" para adicionar os valores.
    processos.push([at, bt])
    
}


console.log("Process\tBurst Time\tArrival Time\tWaiting Time\tTurn-Around Time\tCompletion Time\n\n")

let wt = waiting_time(processos)
let tat = turn_around_time(processos)
let avg_wt = average_wt(processos)
let avg_tat = average_tat(processos)


//Utilizei o mesmo metodo pois não possui o "range()".
for (let proc = 0; proc < processos.length; proc++){

    //Utilizei a "," para identar para não confundir, pois ele realiza somatorio.
    //Usei o "parseInt" para definir que a variável é um inteiro e para realizar o somatorio delas.
    console.log(proc, "\t\t", parseInt(processos[proc][1]), "\t\t", parseInt(processos[proc][0]), "\t\t", wt[proc], "\t\t", parseInt(tat[proc]), "\t\t", parseInt(tat[proc]) + parseInt(processos[proc][0]), "\n")
}


console.log("Average Waiting Time: ", avg_wt)
console.log("Average Turn-Around Time: ", avg_tat,"\n")
