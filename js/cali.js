function calcularFor(){
    let promedio;
    let sumacali=0;
    sumacali=parseFloat(sumacali);
    let nummat = prompt("¿Cuantas materias cursaste?");

    for(x=1; x<=nummat;x++){
    let cali= prompt("¿Cual fue tu calificación en la materia " + x + "?");
    cali=parseFloat(cali);
    sumacali=sumacali+cali;
    }
    promedio=sumacali/nummat;
    alert("Tu promedio final es de " + promedio);
}

function calcularwhile(){
    let promedio;
    let sumacali=0;
    sumacali=parseFloat(sumacali);
    let nummat = prompt("¿Cuantas materias cursaste?");
    nummat=parseInt(nummat);
    let vueltas=1;
    vueltas=parseInt(vueltas);
    while(vueltas<=nummat){
        let cali= prompt("¿Cual fue tu calificación en la materia?");
        cali=parseFloat(cali);
        sumacali=sumacali+cali;
        vueltas=vueltas+1;
    }
    promedio=sumacali/nummat;
    alert("Tu promedio final es de " + promedio);
}
