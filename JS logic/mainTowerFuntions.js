


// selecciono los botones con queryselectors, algunos por clase otros por id
let Start = document.querySelector(".randomGen");
let userStash = document.querySelector("#personalPool");
let universalPool = document.querySelector("#universalPool");

//filas
const fila1 = document.querySelector("#fila1");
const fila2 = document.querySelector("#fila2");
const fila3 = document.querySelector("#fila3");
const fila4 = document.querySelector("#fila4");
const fila5 = document.querySelector("#fila5");

//botones
 let r1_1 = document.querySelector("#r1_1");
let r1_2 = document.querySelector("#r1_2");
let r1_3 = document.querySelector("#r1_3");

let r2_1 = document.querySelector("#r2_1");
let r2_2 = document.querySelector("#r2_2");
let r2_3 = document.querySelector("#r2_3");

let r3_1 = document.querySelector("#r3_1");
let r3_2 = document.querySelector("#r3_2");
let r3_3 = document.querySelector("#r3_3");

let r4_1 = document.querySelector("#r4_1");
let r4_2 = document.querySelector("#r4_2");
let r4_3 = document.querySelector("#r4_3");

let r5_1 = document.querySelector("#r5_1");
let r5_2 = document.querySelector("#r5_2");
let r5_3 = document.querySelector("#r5_3");


const UniversalPoolObj = {
     $: 999,
     userWon: true,     //if user won value can be change
     isVerified: true,
}

const userStashObj = {
     $: 2,
     user: 'Roberto',
     isVerified: true,
}

Start.addEventListener("click",randomGen1); 

userStash.innerHTML = `$${userStashObj.$}`;
universalPool.innerHTML = `$${UniversalPoolObj.$}`



//ganadores de cada nivel
function DeclareWiners(){
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
}


 iniciarApp();
 
function iniciarApp(){
     allrowsNotVisible();

     document.addEventListener("DOMContentLoaded", function() {
          // Este código se ejecutará una vez que el DOM haya cargado completamente.
        
          swal({
               title: "Todo en orden!",
               text: "Presiona START para empezar",
               icon: "success",
             });

          
        });
     resetAll();
}



function Loss(){
    alert("Loss");
    allrowsNotVisible();
    iniciarApp();
      userStashObj.$ -= 1;
      UniversalPoolObj.$ += 1;
     userStash.innerHTML = `$${userStashObj.$}`;
     universalPool.innerHTML = `$${UniversalPoolObj.$}`

     





    
}

//creo la variable desde afuera para poder asignar
let WinnerRound1 = 0;
let WinnerRound2 = 0;
let WinnerRound3 = 0;
let WinnerRound4 = 0;
let WinnerRound5 = 0;


//it generate 3 random numbers
function randomGen1(){
    if(Start = true && userStashObj.$ >=1){
        
        swal({
          title: "Elige una de las tres opciones. ¡Solo una es correcta!",
          text: "Si aciertas, avanzarás al siguiente nivel. Si llegas al último nivel, ¡ganarás el 50% del premio total!",
          icon: "info",
          button: "OK",
        });

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
     const WinnerRowA = Math.max(...RowA3Numbers);

     WinnerRound1 = WinnerRowA;
     fila1.classList.remove("notVisible");//botones no visibles para estructura
     randomGen1Visible();
     
     
    }else{
          alert("Parece que te quedaste sin creditos, deberias recargar para seguir jugando!")
    }
    
}


function randomGen2(){
     
     
     r2_1 = Math.random() * 20 * Math.PI ;
     r2_1 = Math.round(r2_1);
     r2_2 = Math.random() * 20 * Math.PI ;
     r2_2 = Math.round(r2_2);
     r2_3 = Math.random() * 20 * Math.PI ;
     r2_3 = Math.round(r2_3);
     
     
     console.log(r2_1,r2_2,r2_3);    
     //mete los 3 numeros en un array
     const RowB3Numbers = [r2_1,r2_2,r2_3];
     //ellige el valor mas alto del array
     const WinnerRowB = Math.max(...RowB3Numbers);
     
     WinnerRound2 = WinnerRowB;
     
     
     
}

function randomGen1Visible(){
     let Start = document.querySelector(".randomGen");
     Start.classList.add("disabled")
}
     
function randomGen2Visible(){
     fila2.classList.remove("notVisible");
}

function randomGen3Visible(){
     fila3.classList.remove("notVisible");
}

function randomGen4Visible(){
     fila4.classList.remove("notVisible");
}

function randomGen5Visible(){
     fila5.classList.remove("notVisible");
}

function disableRow1(){
     fila1.classList.add("disabled");
    
}
function disableRow2(){
     fila2.classList.add("disabled");
    
}

function disableRow3(){
     fila3.classList.add("disabled");
    
}
function disableRow4(){
     fila4.classList.add("disabled");
    
}

function randomGen3(){

                r3_1 = Math.random() * 20 * Math.PI ;
                r3_1 = Math.round(r3_1);
                r3_2 = Math.random() * 20 * Math.PI ;
                r3_2 = Math.round(r3_2);
                r3_3 = Math.random() * 20 * Math.PI ;
                r3_3 = Math.round(r3_3);
           
        
                console.log(r3_1,r3_2,r3_3);    
                //mete los 3 numeros en un array
             const RowC3Numbers = [r3_1,r3_2,r3_3];
             //ellige el valor mas alto del array
             const WinnerRowC = Math.max(...RowC3Numbers);
        
             WinnerRound3 = WinnerRowC;

}

function randomGen4(){
                    
                    r4_1 = Math.random() * 20 * Math.PI ;
                    r4_1 = Math.round(r4_1);
                    r4_2 = Math.random() * 20 * Math.PI ;
                    r4_2 = Math.round(r4_2);
                    r4_3 = Math.random() * 20 * Math.PI ;
                    r4_3 = Math.round(r4_3);
               
                    console.log(r4_1,r4_2,r4_3);    
                    //mete los 3 numeros en un array
                 const RowD3Numbers = [r4_1,r4_2,r4_3];
                 //ellige el valor mas alto del array
                 const WinnerRowD = Math.max(...RowD3Numbers);
            
                 WinnerRound4 = WinnerRowD;
                  
}

function randomGen5(){
                        
                        r5_1 = Math.random() * 20 * Math.PI ;
                        r5_1 = Math.round(r5_1);
                        r5_2 = Math.random() * 20 * Math.PI ;
                        r5_2 = Math.round(r5_2);
                        r5_3 = Math.random() * 20 * Math.PI ;
                        r5_3 = Math.round(r5_3);
                   
                        console.log(r5_1,r5_2,r5_3);    
                    //mete los 3 numeros en un array
                     const RowE3Numbers = [r5_1,r5_2,r5_3];
                    //ellige el valor mas alto del array
                     const WinnerRowE = Math.max(...RowE3Numbers);
                
                     WinnerRound5 = WinnerRowE;            
                    
}


function allrowsNotVisible(){
fila2.classList.add("notVisible");
fila3.classList.add("notVisible");
fila4.classList.add("notVisible");
fila5.classList.add("notVisible");
}


function resetAll(){     
     fila1.classList.add("notVisible");
     fila2.classList.add("notVisible");
     fila3.classList.add("notVisible");
     fila4.classList.add("notVisible");
     fila5.classList.add("notVisible");

     fila1.classList.remove("disabled");
     fila2.classList.remove("disabled");
     fila3.classList.remove("disabled");
     fila4.classList.remove("disabled");
     fila5.classList.remove("disabled");

     let Start = document.querySelector(".randomGen");
     Start.classList.remove("disabled");

     let r1_1 = document.querySelector("#r1_1");
     let r1_2 = document.querySelector("#r1_2");
     let r1_3 = document.querySelector("#r1_3");

     let r2_1 = document.querySelector("#r2_1");
     let r2_2 = document.querySelector("#r2_2");
     let r2_3 = document.querySelector("#r2_3");

     let r3_1 = document.querySelector("#r3_1");
     let r3_2 = document.querySelector("#r3_2");
     let r3_3 = document.querySelector("#r3_3");

     let r4_1 = document.querySelector("#r4_1");
     let r4_2 = document.querySelector("#r4_2");
     let r4_3 = document.querySelector("#r4_3");

     let r5_1 = document.querySelector("#r5_1");
     let r5_2 = document.querySelector("#r5_2");
     let r5_3 = document.querySelector("#r5_3");

     r1_1.classList.remove("rojo","verde");
     r1_2.classList.remove("rojo","verde");
     r1_3.classList.remove("rojo","verde");

     r2_1.classList.remove("rojo","verde");
     r2_2.classList.remove("rojo","verde");
     r2_3.classList.remove("rojo","verde");

     r3_1.classList.remove("rojo","verde");
     r3_2.classList.remove("rojo","verde");
     r3_3.classList.remove("rojo","verde");

     r4_1.classList.remove("rojo","verde");
     r4_2.classList.remove("rojo","verde");
     r4_3.classList.remove("rojo","verde");

     r5_1.classList.remove("rojo","verde");
     r5_2.classList.remove("rojo","verde");
     r5_3.classList.remove("rojo","verde");
    
}

    Runlvl1();
    function Runlvl1(){    //firts level click listener
                r1_1.addEventListener("click",EligionR1_1);
                r1_2.addEventListener("click",EligionR1_2);
                r1_3.addEventListener("click",EligionR1_3);

                function EligionR1_1(){
                     if(r1_1 >= WinnerRound1){
                        r1_1Wins = true;
                        randomGen2();
                        randomGen2Visible();
                        disableRow1();
                              let r1_1 = document.querySelector("#r1_1");
                              let r1_2 = document.querySelector("#r1_2");
                              let r1_3 = document.querySelector("#r1_3");
                              r1_1.classList.add("verde");
                              r1_2.classList.add("rojo");
                              r1_3.classList.add("rojo");
                   } else{
                        Loss();
                       
                   }
                }

               function EligionR1_2(){
                       if(r1_2 >= WinnerRound1){
                          r1_2Wins = true;
                          randomGen2();
                          randomGen2Visible();
                          disableRow1();
                                   let r1_2 = document.querySelector("#r1_2");
                                   let r1_1 = document.querySelector("#r1_1");
                                   let r1_3 = document.querySelector("#r1_3");
                                   r1_2.classList.add("verde");
                                   r1_1.classList.add("rojo");
                                   r1_3.classList.add("rojo");
                     } else{
                          Loss();
                     }
               }

               function EligionR1_3(){
                     if(r1_3 >= WinnerRound1){
                        r1_3Wins = true;    
                        randomGen2();
                        randomGen2Visible();
                        disableRow1();
                              let r1_3 = document.querySelector("#r1_3");
                              let r1_2 = document.querySelector("#r1_2");
                              let r1_1 = document.querySelector("#r1_1");
                              r1_3.classList.add("verde");
                              r1_1.classList.add("rojo");
                              r1_2.classList.add("rojo");
                     } else{
                          Loss();
                     }
               }
    }

    Runlvl2();

    function Runlvl2(){
        //espero el click en el segundo nivel
       r2_1.addEventListener("click",EligionR2_1);
       r2_2.addEventListener("click",EligionR2_2);
       r2_3.addEventListener("click",EligionR2_3);
    
   
         function EligionR2_1(){
               if(r2_1 >= WinnerRound2){
                  r2_1Wins = true;
                  randomGen3();
                  randomGen3Visible();
                  disableRow2();
                        let r2_1 = document.querySelector("#r2_1");
                        let r2_2 = document.querySelector("#r2_2");
                        let r2_3 = document.querySelector("#r2_3");
                        r2_1.classList.add("verde");
                        r2_2.classList.add("rojo");
                        r2_3.classList.add("rojo");
                  } else{
                       Loss();
                  }
        }
   
        function EligionR2_2(){
                if(r2_2 >= WinnerRound2){
                   r2_2Wins = true;
                   randomGen3();
                   randomGen3Visible();
                   disableRow2();
                         let r2_2 = document.querySelector("#r2_2");
                         let r2_1 = document.querySelector("#r2_1");
                         let r2_3 = document.querySelector("#r2_3");
                         r2_2.classList.add("verde");
                         r2_1.classList.add("rojo");
                         r2_3.classList.add("rojo");
                 } else{
                      Loss();
                 }
        }
   
        function EligionR2_3(){
              if(r2_3 >= WinnerRound2){
                 r1_3Wins = true;
                 randomGen3();
                 randomGen3Visible();
                 disableRow2();
                         let r2_3 = document.querySelector("#r2_3");
                         let r2_2 = document.querySelector("#r2_2");
                         let r2_1 = document.querySelector("#r2_1");
                         r2_3.classList.add("verde");
                         r2_1.classList.add("rojo");
                         r2_2.classList.add("rojo");
                } else{
                     Loss();
                }
        }
    }
    Runlvl3();

    function Runlvl3(){
        //espero el click en el tercer nivel
       r3_1.addEventListener("click",EligionR3_1);
       r3_2.addEventListener("click",EligionR3_2);
       r3_3.addEventListener("click",EligionR3_3);
    
   
         function EligionR3_1(){
             if(r3_1 >= WinnerRound3){
                r3_1Wins = true;
                randomGen4();   
                randomGen4Visible();
                disableRow3(); 
                        let r3_1 = document.querySelector("#r3_1");
                        let r3_2 = document.querySelector("#r3_2");
                        let r3_3 = document.querySelector("#r3_3");
                        r3_1.classList.add("verde");
                        r3_2.classList.add("rojo");
                        r3_3.classList.add("rojo");    
           } else{
                Loss();
           }
         }
   
         function EligionR3_2(){
             if(r3_2 >= WinnerRound3){
                r3_2Wins = true;
                randomGen4();
                randomGen4Visible();
                disableRow3();  
                         let r3_2 = document.querySelector("#r3_2");
                         let r3_1 = document.querySelector("#r3_1");
                         let r3_3 = document.querySelector("#r3_3");
                         r3_2.classList.add("verde");
                         r3_1.classList.add("rojo");
                         r3_3.classList.add("rojo");
           } else{
                Loss();
           }
         }
   
         function EligionR3_3(){
             if(r3_3 >= WinnerRound3){
                r1_3Wins = true;
                randomGen4();
                randomGen4Visible();
                disableRow3();
                         let r3_3 = document.querySelector("#r3_3");
                         let r3_2 = document.querySelector("#r3_2");
                         let r3_1 = document.querySelector("#r3_1");
                         r3_3.classList.add("verde");
                         r3_1.classList.add("rojo");
                         r3_2.classList.add("rojo");  
           } else{
                Loss();
           }
         }
    }

    Runlvl4();

    function Runlvl4(){
        //espero el click en el cuarto nivel
           r4_1.addEventListener("click",EligionR4_1);
           r4_2.addEventListener("click",EligionR4_2);
           r4_3.addEventListener("click",EligionR4_3);
    
   
            function EligionR4_1(){
                 if(r4_1 >= WinnerRound4){
                    r4_1Wins = true;
                    randomGen5(); 
                    randomGen5Visible();
                    disableRow4();
                         let r4_1 = document.querySelector("#r4_1");
                         let r4_2 = document.querySelector("#r4_2");
                         let r4_3 = document.querySelector("#r4_3");
                         r4_1.classList.add("verde");
                         r4_2.classList.add("rojo");
                         r4_3.classList.add("rojo");
               } else{
                    Loss();
               }
            }
   
             function EligionR4_2(){
                  if(r4_2 >= WinnerRound4){
                     r4_2Wins = true;
                     randomGen5();
                     randomGen5Visible();
                     disableRow4();
                         let r4_2 = document.querySelector("#r4_2");
                         let r4_1 = document.querySelector("#r4_1");
                         let r4_3 = document.querySelector("#r4_3");
                         r4_2.classList.add("verde");
                         r4_1.classList.add("rojo");
                         r4_3.classList.add("rojo");  
                } else{
                     Loss();
                }
             }
   
             function EligionR4_3(){
                  if(r4_3 >= WinnerRound4){
                     r4_3Wins = true;
                     randomGen5();
                     randomGen5Visible();
                     disableRow4();
                         let r4_3 = document.querySelector("#r4_3");
                         let r4_2 = document.querySelector("#r4_2");
                         let r4_1 = document.querySelector("#r4_1");
                         r4_3.classList.add("verde");
                         r4_1.classList.add("rojo");
                         r4_2.classList.add("rojo");
                } else{
                     Loss();
                }
            }
    };
       //start last level
    Runlvl5()

    function Runlvl5(){
              //espero el click en el ultimo nivel
                 r5_1.addEventListener("click",EligionR5_1);
                 r5_2.addEventListener("click",EligionR5_2);
                 r5_3.addEventListener("click",EligionR5_3);
    
   
                function EligionR5_1(){
                     if(r5_1 >= WinnerRound5){
                        r5_1Wins = true;
                        FinalWinWin();       
                        allrowsNotVisible();
                        iniciarApp();
                   } else{
                        Loss();
                   }
                }
   
                function EligionR5_2(){
                     if(r5_2 >= WinnerRound5){
                        r5_2Wins = true;
                        FinalWinWin();
                        allrowsNotVisible();
                        iniciarApp();
                   } else{
                        Loss();
                   }
                }
   
                function EligionR5_3(){
                     if(r5_3 >= WinnerRound5){
                        r5_3Wins = true;
                        FinalWinWin();
                        allrowsNotVisible();
                        iniciarApp();
                   } else{
                        Loss();
                   }
                }
    }

    function FinalWinWin(){
           alert("¡GANASTE!");
           let reward = UniversalPoolObj.$ / 2;
           userStashObj.$ += reward;
           UniversalPoolObj.$ -= reward;
           userStash.innerHTML = `$${userStashObj.$}`;
           universalPool.innerHTML = `$${UniversalPoolObj.$}`

    }



