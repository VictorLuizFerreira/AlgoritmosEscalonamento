let processos = []
let qnt_processos = prompt("Qnt de Processos: ");



for (let i = 0; i < qnt_processos; i++){
    at = prompt("Arrival Time: ")
    bt =  prompt("Burst Time: ")
    processos.push([at, bt])
    
}



let lista1 = []
let lista2 = []
let lista3 = []
for (let i = 0; i < processos.length; i++){
    lista1.push(0)
    lista2.push(0)
    lista3.push(0)
}



function waiting_time(processos){

    let tempo_servico = lista1
    
    tempo_servico[0] = 0
    
    let wt = lista2
  
    for (let x = 1; x < processos.length; x++){
        tempo_servico[x] = parseInt(tempo_servico[x-1]) + parseInt(processos[x-1][1])
        wt[x] = parseInt(tempo_servico[x]) - parseInt(processos[x][0])
        if (wt[x] < 0){
            wt[x] = 0
        }
    }
    return wt
}




function turn_around_time(processos){
    let tat = lista3
    let wt = waiting_time(processos)
    for(let x = 0; x < processos.length; x++){
        tat[x] = parseInt(processos[x][1]) + parseInt(wt[x])
    }
    return tat
}



function average_wt(processos){
    let qnt_proc = processos.length
    let wt = waiting_time(processos).reduce((a, b) => a + b, 0)
    return (wt / qnt_proc)
}





function average_tat(processos){

    let qnt_proc = processos.length
    let tat = turn_around_time(processos).reduce((a, b) => a + b, 0)
    return (tat / qnt_proc)
}



console.log("Process\tBurst Time\tArrival Time\tWaiting Time\tTurn-Around Time\tCompletion Time\n\n")
let wt = waiting_time(processos)
let tat = turn_around_time(processos)
let avg_wt = average_wt(processos)
let avg_tat = average_tat(processos)


for (let proc = 0; proc < processos.length; proc++){
    console.log(proc, "\t\t", parseInt(processos[proc][1]), "\t\t", parseInt(processos[proc][0]), "\t\t", wt[proc], "\t\t", parseInt(tat[proc]), "\t\t", parseInt(tat[proc]) + parseInt(processos[proc][0]), "\n")
}

console.log("Average Waiting Time: ", avg_wt)
console.log("Average Turn-Around Time: ", avg_tat,"\n")
