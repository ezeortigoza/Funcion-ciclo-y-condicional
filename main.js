 
 //Desafio 1

 let cantidad =  parseInt (prompt("¿Cuantas edades quiere ingresar?"));
let acumulador = 0;
if(cantidad != 0 ) {
    
    for (let i = 1; i<=cantidad; i++){
     let edad = parseInt (prompt("Buenas voy a pedirte que ingreses tu edad"));
     acumulador += edad;

    }
    console.log (acumulador);
    alert( " Tu promedio es " + Promedio (acumulador , cantidad))  

} else{
    alert("No es valido el numero 0");
}

function Promedio (acumulador , contador){
   
    return acumulador/contador

} 
 




//Desafio 2


  let turno = parseInt (prompt("Buenas necesito que ingreses el numero de tu turno"));
 let total = parseInt (prompt("Cuantos turnos hay en total ?"));

 if (turno != 0 ){

    let cantidadTurnosFaltantes = resta (total,turno);
    alert('Usted tiene que esperar '+ promedioEspera (cantidadTurnosFaltantes) + ' minutos ');
 }

 function promedioEspera (cantidad ){
 return cantidad * 8
 }

 function resta (total, turno){
     return total - turno
 }  






//Desafio 3

 let gym = parseInt(prompt("Cuantas cuotas del gym deseas pagar?"));
let acumulado = 0;

if (gym != 0){
      
    for(let i=1; i<=gym; i++){
        
       let pago = parseInt(prompt("Buenas voy a pedir que abones el mes del gym "));
       acumulado += pago;
      
      
    } 
      alert("La cantidad de plata en total es " + acumulado);

} else{
     alert("No puedes abonar 0 ");
} 






 


















































