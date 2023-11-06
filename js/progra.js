function saludar(momento){
    if(momento==1){
        alert("Hola buenos dias");
    }
    else{
        if(momento==2){
            alert("Hola buenas tardes");
        }
        else{
            alert("Hola buenas noches");
        }
    }
}

function sumar(){
    let num1=document.getElementById('val1').value;
    let num2=document.getElementById('val2').value;
    let resultado;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    resultado=num1+num2;
    alert("El resultado de "+ num1+"+"+num2+"="+resultado);
}