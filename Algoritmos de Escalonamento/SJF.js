function waiting_time(processos){

    let tempo_servico = []
    let wt = []
    for (let i = 0; i < processos.length; i++){
       tempo_servico.push(0)
       wt.push(0)
    }
  
  
    for (let x = 1; x < processos.length; x++){
        tempo_servico[x] = parseInt(tempo_servico[x-1]) + parseInt(processos[x-1][2])
        wt[x] = parseInt(tempo_servico[x]) - parseInt(processos[x][1])
        if (wt[x] < 0){
            wt[x] = 0
        }
    }
  
    return wt
}


function turn_around_time(processos){
  
    let tat = []
    for (let i = 0; i < processos.length; i++){
       tat.push(0)
    }

  
    let wt = waiting_time(processos)
    for(let x = 0; x < processos.length; x++){
        tat[x] = parseInt(processos[x][2]) + parseInt(wt[x])
    }
  
    return tat
}


function average_tat(processos){

    let qnt_proc = processos.length
    let tat = turn_around_time(processos).reduce((a, b) => a + b, 0)
    return (tat / qnt_proc)
}


function average_wt(processos){
    let qnt_proc = processos.length
    let wt = waiting_time(processos).reduce((a, b) => a + b, 0)
    return (wt / qnt_proc)
}


function SJF(processos){
   
    for (let i = 0; i < processos.length; i++){
        for (let j = 0; j < processos.length - 1; j++){
            if (processos[j][2] > processos[j+1][2]){
                //Criei uma variável extra para armazenar o valor inicial de "processos[j]".
                //Depois utilizei o "processos[j]" para armazenar o valor de "processos[j+1]".
                //Por fim, igualei a variável criada para armazenar o valor final".
                let a = processos[j]
                processos[j] = processos[j+1]
                processos[j+1] = a
            }
        }
    }
    return processos
}


let processos = []
console.log(":::::::::::::::::::::::::::::::::::SJF:::::::::::::::::::::::::::::::::::")
let qnt_processos = parseInt(prompt("Quantidade de processos: "))

for (let x = 0; x < qnt_processos; x++){
    let pid = "P" + x
    let at = parseInt(prompt("Arrival Time: "))
    let bt = parseInt(prompt("Burst Time: "))
    processos.push([pid, at, bt])
}


let wt = waiting_time(processos)
let tat = turn_around_time(processos)
let avg_wt = average_wt(processos)
let avg_tat = average_tat(processos)


console.log("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")


for (let proc = 0; proc < processos.length; proc++){
    console.log(processos[proc][0], "\t\t\t", processos[proc][2], "\t\t\t", processos[proc][1], "\t\t\t", wt[proc], "\t\t\t", tat[proc], "\t\t\t", parseInt(tat[proc]) + parseInt(processos[proc][1]), "\n")
}


console.log("Average Waiting Time: ", avg_wt)
console.log("Average Turn-Around Time: ", avg_tat)


console.log("\n:::::::::::::::::::::::DEPOIS::::::::::::::::::::::\n")


processos = SJF(processos)
wt = waiting_time(processos)
tat = turn_around_time(processos)
avg_wt = average_wt(processos)
avg_tat = average_tat(processos)
console.log(processos)


console.log("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")


for (let proc = 0; proc < processos.length; proc++){
    console.log(processos[proc][0], "\t\t\t", processos[proc][2], "\t\t\t", processos[proc][1], "\t\t\t", wt[proc], "\t\t\t", tat[proc], "\t\t\t", parseInt(tat[proc]) + parseInt(processos[proc][1]), "\n")
}


console.log("Average Waiting Time: ", avg_wt)
console.log("Average Turn-Around Time: ", avg_tat)

