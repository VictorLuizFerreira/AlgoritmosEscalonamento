function round_robin(processos, quantum, qnt_processos){
    let bt_restante = lista2
    let wt = lista3
    
    for (let i = 0; i < qnt_processos; i++){
        bt_restante[i] = processos[i][2]
    }
  
    let tempo = 0 
    let overhead = 1 
    let b = true
  
    while (b){
        let finalizados = true 
        for (let i = 0; i < qnt_processos; i++){
            tempo += overhead 

           
            if (bt_restante[i] > 0){
                let finalizados = false
            
                if (bt_restante[i] > quantum){
                    
                    tempo += quantum
                    
                  
                    bt_restante[i] -= quantum
                }
                else{
                    tempo += bt_restante[i]
                    
                    wt[i] = tempo - processos[i][2]
                    
                    bt_restante[i] = 0
                }
            }
        }
        if (finalizados == true){
            break
        }
    }
    return wt 
    
}

function turn_around_time(processos, wt, qnt_processos){
    let tat = lista1
    for (let x = 0; x < qnt_processos; x++){
        tat[x] = parseInt(processos[x][2]) + parseInt(wt[x])
    }
    return tat
}

function average_tat(tat, qnt_processos){
    let turnaround_time = tat.reduce((a, b) => a + b, 0)
    return (turnaround_time/qnt_processos)
}

function average_wt(wt, qnt_processos){
    let waiting_time = wt.reduce((a, b) => a + b, 0)
    return (waiting_time/qnt_processos)
}


let processos = []
console.log("Algoritmo Round Robin")
let qnt_processos = parseInt(prompt("Quantidade de processos: "))
for (let x = 0; x < qnt_processos; x++){
    let pid = "P" + x
    let at = parseInt(prompt("Arrival Time: "))
    let bt = parseInt(prompt("Burst Time: "))
    processos.push([pid, at, bt])
}
let quantum = parseInt(prompt("Informe o Quantum: "))

let lista1 = []
let lista2 = []
let lista3 = []
for (let i = 0; i < processos.length; i++){
    lista1.push(0)
    lista2.push(0)
    lista3.push(0)
}


let wt = round_robin(processos, quantum, qnt_processos)

let tat = turn_around_time(processos, wt, qnt_processos)

let avg_tat = average_tat(tat, qnt_processos)

let avg_wt = average_wt(wt, qnt_processos)
console.log("WT = ", wt, "\nTAT = ", tat, "\nAVG_TAT = ", avg_tat, "\nAVG_WT = ", avg_wt)


console.log("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t\n\n")
for (let proc = 0; proc < processos.length; proc++){
    console.log(processos[proc][0], "\t\t\t", processos[proc][2], "\t\t\t", processos
[proc][1], "\t\t\t", wt[proc], "\t\t\t" ,tat[proc], "\t\t\t\n")
}
console.log("Average Waiting Time: ", avg_wt)
console.log("Average Turn-Around Time: ", avg_tat)

