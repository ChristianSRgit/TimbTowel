//valor de botones a ser generado:
//ronda 1
let rowUno1 = 0;
let rowUno2 = 0;
let rowUno3 = 0;
//ronda 2
let rowDos1 = 0;
let rowDos2 = 0;
let rowDos3 = 0;
//ronda 3
let rowTres1 = 0;
let rowTres2 = 0;
let rowTres3 = 0;




// selecciono los botones con queryselectors, algunos por clase otros por id
let Start = document.querySelector(".randomGen");

let r1_1 = document.querySelector("#r1_1");
let r1_2 = document.querySelector("#r1_2");
let r1_3 = document.querySelector("#r1_3");



//ganadores de cada nivel

const r1_1Wins =  false; 
const r1_2Wins =  false;
const r1_3Wins =  false;

const r2_1Wins =  false; 
const r2_2Wins =  false;
const r2_3Wins =  false;

const r3_1Wins =  false; 
const r3_2Wins =  false;
const r3_3Wins =  false;

const r4_1Wins =  false; 
const r4_2Wins =  false;
const r4_3Wins =  false;

const r5_1Wins =  false; 
const r5_2Wins =  false;
const r5_3Wins =  false;

const r6_1Wins =  false; 
const r6_2Wins =  false;
const r6_3Wins =  false;

const r7_1Wins =  false; 
const r7_2Wins =  false;
const r7_3Wins =  false;

const r8_1Wins =  false; 
const r8_2Wins =  false;
const r8_3Wins =  false;

const r9_1Wins =  false; 
const r9_2Wins =  false;
const r9_3Wins =  false;

const r10_1Wins =  false; 
const r10_2Wins =  false;
const r10_3Wins =  false;


//si clickeo, randomGen = true
Start.addEventListener("click",randomGen);


r1_1.addEventListener("click",mostrarValor);
r1_2.addEventListener("click",mostrarValor);
r1_3.addEventListener("click",mostrarValor);

//Generador de numeros random resultado de un num random x pi x 20 y redondeado
function randomGen(){
    if(Start = true){
        
        r1_1 = Math.random() * 20 * Math.PI ;
        r1_1 = Math.round(r1_1);
        r1_2 = Math.random() * 20 * Math.PI ;
        r1_2 = Math.round(r1_2);
        r1_3 = Math.random() * 20 * Math.PI ;
        r1_3 = Math.round(r1_3);

    console.log(r1_1,r1_2,r1_3);
    //mete los 3 numeros en un array
        const RowA3Numbers = [r1_1,r1_2,r1_3];
    //ellige el valor mas alto del array
        const WinnerRowA= Math.max(...RowA3Numbers);

        console.log(WinnerRowA);
        
    }

    };



console.log(r1_1);
       
function mostrarValor(){
    r1_1 = 1;
    r1_2 = 2;
    r1_3 = 3;
    console.log(r1_1,r1_2,r1_3);
}




 




































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




