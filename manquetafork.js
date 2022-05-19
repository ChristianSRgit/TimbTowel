
// selecciono los botones con queryselectors, algunos por clase otros por id
let Start = document.querySelector(".randomGen");

    Start.addEventListener("click",randomGen1); 
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

//botones para dar estructuras x mientras
const vacio1 = document.querySelector("#vacio1");
const vacio2 = document.querySelector("#vacio2");
const vacio3 = document.querySelector("#vacio3");
const vacio4 = document.querySelector("#vacio4");
const vacio5 = document.querySelector("#vacio5");



//estaria bueno hacer una matriz fija  con grid para que aunque aparezcan/desaparezcan las filas no modifique la altura ya que queda horrendo


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
//inician todas las filas sin ser visibles
fila1.classList.add("notVisible");
fila2.classList.add("notVisible");
fila3.classList.add("notVisible");
fila4.classList.add("notVisible");
fila5.classList.add("notVisible");



//aca deberia empezar  
 iniciarApp();
 
function iniciarApp(){
    Start = false; 
    alert("Presiona start para iniciar TimbTowel");
     fila1.classList.add("notVisible");
     fila2.classList.add("notVisible");
     fila3.classList.add("notVisible");
     fila4.classList.add("notVisible");
     fila5.classList.add("notVisible");

     vacio1.classList.remove("notVisible");
     vacio2.classList.remove("notVisible");
     vacio3.classList.remove("notVisible");
     vacio4.classList.remove("notVisible");
     vacio5.classList.remove("notVisible");



};
 
/* alt+shift+a  para comentar seleccion*/

function Loss(){
    alert("Loss");
    allrowsNotVisible();
    iniciarApp();

}



//creo la variable desde afuera para poder asigar
let WinnerRound1 = 0;
let WinnerRound2 = 0;
let WinnerRound3 = 0;
let WinnerRound4 = 0;
let WinnerRound5 = 0;


//Generador de primeros 3 random resultado de un num random x pi x 20 y redondeado
function randomGen1(){
    if(Start = true){
        alert("elige uno de los 3, solo hay 1 correcto,si elegis bien, pasas al prox nivel")
        
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
     vacio1.classList.add("notVisible");
     
     
    }
};

function randomGen1Visible(){
    //fila1.classList.remove("notVisible");let blank1 = document.querySelector(#vacio1);
    



};

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

         
        
};

function randomGen2Visible(){
    fila2.classList.remove("notVisible");
    vacio2.classList.add("notVisible");
};

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

             
             
            
};

function randomGen3Visible(){
    fila3.classList.remove("notVisible");
    vacio3.classList.add("notVisible");
};

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
                
                 
             
                
};

function randomGen4Visible(){
    fila4.classList.remove("notVisible");
    vacio4.classList.add("notVisible");
};

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
                     
                     
                    
};

function randomGen5Visible(){
    fila5.classList.remove("notVisible");
    vacio5.classList.add("notVisible");
};

function allrowsNotVisible(){
fila2.classList.add("notVisible");
fila3.classList.add("notVisible");
fila4.classList.add("notVisible");
fila5.classList.add("notVisible");

};


function resetAll(){
    
    
};

    Runlvl1();
    function Runlvl1(){    //espero el click en el primer nivel
                r1_1.addEventListener("click",EligionR1_1);
                r1_2.addEventListener("click",EligionR1_2);
                r1_3.addEventListener("click",EligionR1_3);
 

                function EligionR1_1(){
                     if(r1_1 >= WinnerRound1){
                        r1_1Wins = true;
                        randomGen2();
                        randomGen2Visible();
         
                   } else{
                        Loss();
                        allrowsNotVisible();
                       
                   }
                }

               function EligionR1_2(){
                       if(r1_2 >= WinnerRound1){
                          r1_2Wins = true;
                          randomGen2();
                          randomGen2Visible();
                     } else{
                          Loss();
                     }
               }

               function EligionR1_3(){
                     if(r1_3 >= WinnerRound1){
                        r1_3Wins = true;    
                        randomGen2();
                        randomGen2Visible();
                     } else{
                          Loss();
                     }
               }
    };

    //arrnca aca el segundo nivel
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
                  } else{
                       Loss();
                  }
        }
   
        function EligionR2_2(){
                if(r2_2 >= WinnerRound2){
                   r2_2Wins = true;
                   randomGen3();
                   randomGen3Visible();
                 } else{
                      Loss();
                 }
        }
   
        function EligionR2_3(){
              if(r2_3 >= WinnerRound2){
                 r1_3Wins = true;
                 randomGen3();
                 randomGen3Visible();
                } else{
                     Loss();
                }
        }
    };
    //arranca aca el tercer nivel
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
           } else{
                Loss();
           }
         }
   
         function EligionR3_2(){
             if(r3_2 >= WinnerRound3){
                r3_2Wins = true;
                randomGen4();
                randomGen4Visible();  
           } else{
                Loss();
           }
         }
   
         function EligionR3_3(){
             if(r3_3 >= WinnerRound3){
                r1_3Wins = true;
                randomGen4();
                randomGen4Visible();  
           } else{
                Loss();
           }
         }
    };

    //arranca aca el cuarto nivel
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
                           
               } else{
                    Loss();
               }
            }
   
             function EligionR4_2(){
                  if(r4_2 >= WinnerRound4){
                     r4_2Wins = true;
                     randomGen5();
                     randomGen5Visible();  
                } else{
                     Loss();
                }
             }
   
             function EligionR4_3(){
                  if(r4_3 >= WinnerRound4){
                     r4_3Wins = true;
                     randomGen5();
                     randomGen5Visible();  
                } else{
                     Loss();
                }
            }
    };
       //aca empieza el 5/ultimo nivel :D
    Runlvl5();

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
    };

    function FinalWinWin(){
           alert("¡GANASTE!");
    };
   




