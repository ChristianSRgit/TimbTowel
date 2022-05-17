// valor de botones a ser generado
let rowUno1 = 0;
let rowUno2 = 0;
let rowUno3 = 0;


// selecciono los botones con queryselectors, algunos por clase otros por id
let Start = document.querySelector(".randomGen");
let r1_1 = document.querySelector("#r1_1");
let r1_2 = document.querySelector("#r1_2");
let r1_3 = document.querySelector("#r1_3");


const rowUno1Wins =  false; 
const rowUno2Wins =  false;
const rowUno3Wins =  false;

let Unode3 =  Math.round(Math.random() * 33 * Math.PI + 1) ;

//si clickeo, randomGen = true
Start.addEventListener("click",randomGen);

//Generador de numeros random resultado de un num random x pi x 20 y redondeado
function randomGen(){
    if(Start = true){
        
        rowUno1 = Math.random() * 20 * Math.PI ;
        rowUno1 = Math.round(rowUno1) ;
        rowUno2 = Math.random() * 20 * Math.PI ;
        rowUno2 = Math.round(rowUno2) ;
        rowUno3 = Math.random() * 20 * Math.PI ;
        rowUno3 = Math.round(rowUno3) ;

        console.log(rowUno1);
        console.log(rowUno2);
        console.log(rowUno3);
    
    }
    
    };

//Meter los RowUnoX en un array, crear variable targetAprove con el generador de num random
//usar  array function .reduce para dejar solo 1 valor, comparar y hay 2 opciones, sacas el mas grande con .max
//o comparas con el random generado
//creo que me estoy complicando al pedo xd
  //  r1_1.addEventListener("click",checkOk);


// console.log(Unode3);

 



/*function nextRound(){
    switch(nextRoundYes){
        case "aprove" :
            nextRoundYes = true;
            break;
        case "decline" :
            nextRoundYes = false;
            break;

    }
} */




