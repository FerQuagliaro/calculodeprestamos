
function calculoPrestamo()
{

//Las dos variables utilizadas en la fórmula 

var importe=document.forms[0].importe.value*1;
var interest=document.forms[0].rate.value*1;

var t;

//Usamos un bucle para seleccionar las cuotas

for (i=0; i<document.forms[0].term.options.length; i++)

{

if (document.forms[0].term.options[i].selected)
t = document.forms[0].term.options[i].value*1;
}

//Esta es la fórmula para realizar el cálculo

var resultado=(importe)*((interest/100)/12) / (1-Math.pow((1+(interest/100)/12),(-t)));

resultado=Math.round(resultado*100) /100;

var resultadoTotal= importe + interest;


//Muestro el resultado

document.getElementById("cuotaMensual").innerHTML=resultado;

//Muestro el resultado total

document.getElementById("total").innerHTML=resultadoTotal;

}
