//Conociendo el ciclo For
function saludar() { 
 var nombre=document.getElementById("nombre").value;
var saludo="Saludos"
for(i=0;i<3;i++){//i++ --> significa que el i se va a incrementar en 1
    var mensaje=` ${saludo} ${nombre} ${i} `;
    alert(mensaje);
}
}
function saludar1(){
 var nombre=document.getElementById("nombre").value;
 var mensaje="";
var saludo=["Buenos días, ","Buenas tardes, ","Buenas noches, "]
for( var i=0;i<saludo.length;i++){//i++ --> significa que el i se va a incrementar en 1
     mensaje+=` ${saludo[i]} ${nombre} <br>`;
    document.getElementById("resultado").innerHTML=mensaje
    //alert(mensaje);
    }
}
function bucle2(){
    let number=0;
    while(number<=5){
     console.log(number);
     number=number+1;//number++; es un incremento en 1
    }
 }
function pares(){
    let numero=2
    while(numero<=100){
     document.getElementById("resultado").innerHTML+=`${numero} - `
     numero=numero+2;

    }
 }
function impares(){
    let num=1
    while(num<=51){
        document.getElementById("resultado").innerHTML+=`${num} - `
        num=num+2;
    }
}

function doce(){
    let num=1
    while(num<=12){
        document.getElementById("resultado").innerHTML+=`${num} - `
        num=num+1;//
    }
}
function países(){
   const países=['Tailandia','Suiza','Grecia'];
   let i=0;
   while(países.length>i){
        console.log(países[i])
        i=i+1;//i++
   }
}
/*let i=5; 
do {
    i=i+1;
    console.log(i);
} while(i<5);
/*while(i<5){
    i=i+1;
    console.log(i);
}*/
let dato;
const patron= /Libreta/;
const patron2=/[0-9]+/;
do{ 
 dato=prompt ('Ingrese un texto');
 } while(!patron2.test(dato));
alert("Tu expresión cumple con la condición");
      


