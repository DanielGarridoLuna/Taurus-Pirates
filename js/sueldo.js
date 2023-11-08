function calcular(){

    let venta=document.getElementById('venta').value;
    let viaticos=document.getElementById('viaticos').value;
    let comida=document.getElementById('comida').value;
    let hospedaje=document.getElementById('hosp').value;
    let transporte=document.getElementById('trans').value;

    
        let sueldob=venta*.1;
        let sobrante=viaticos-comida-hospedaje-transporte;
        let sueldof=sueldob-sobrante;
    
    let resul=document.getElementById('resultado'); 

    resul.innerHTML='';
    resul.innerHTML=`
    <h1 class="text-white display-1"> Tu sueldo es de $${sueldof}</h1>
    `;
    

}