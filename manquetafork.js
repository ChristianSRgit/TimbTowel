
// selecciono los botones con queryselectors, algunos por clase otros por id
let Start = document.querySelector(".randomGen");

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
    
    
};
 
/* alt+shift+a  para comentar seleccion*/

function Loss(){
    alert("Loss");
}

Start.addEventListener("click",randomGen1); 



//creo la variable desde afuera para poder asigar
let WinnerRound1 = 0;
let WinnerRound2 = 0;
let WinnerRound3 = 0;
let WinnerRound4 = 0;
let WinnerRound5 = 0;


//Generador de primeros 3 random resultado de un num random x pi x 20 y redondeado
function randomGen1(){
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
     const WinnerRowA = Math.max(...RowA3Numbers);

     WinnerRound1 = WinnerRowA;
    }
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



    Runlvl1();

    function Runlvl1(){
     //espero el click en el primer nivel
    r1_1.addEventListener("click",EligionR1_1);
    r1_2.addEventListener("click",EligionR1_2);
    r1_3.addEventListener("click",EligionR1_3);
 

function EligionR1_1(){
    if(r1_1 >= WinnerRound1){
         r1_1Wins = true;
         randomGen2();
         
} else{
         Loss();
}
}

function EligionR1_2(){
     if(r1_2 >= WinnerRound1){
         r1_2Wins = true;
         randomGen2();
} else{
         Loss();
}
}

function EligionR1_3(){
    if(r1_3 >= WinnerRound1){
         r1_3Wins = true;
         randomGen2();
} else{
        Loss();
}
}
    };
    //arrnca aca el segundo nivel
    Runlvl2();

    function Runlvl2(){
        //espero el click en el primer nivel
       r2_1.addEventListener("click",EligionR2_1);
       r2_2.addEventListener("click",EligionR2_2);
       r2_3.addEventListener("click",EligionR2_3);
    
   
   function EligionR2_1(){
       if(r2_1 >= WinnerRound2){
            r2_1Wins = true;
            randomGen3();
            
   } else{
            Loss();
   }
   }
   
   function EligionR2_2(){
        if(r2_2 >= WinnerRound2){
            r2_2Wins = true;
            randomGen3();
   } else{
            Loss();
   }
   }
   
   function EligionR2_3(){
       if(r2_3 >= WinnerRound2){
            r1_3Wins = true;
            randomGen3();
   } else{
           Loss();
   }
   }
    };
    //arrnca aca el tercer nivel
    Runlvl3();

    function Runlvl3(){
        //espero el click en el primer nivel
       r3_1.addEventListener("click",EligionR3_1);
       r3_2.addEventListener("click",EligionR3_2);
       r3_3.addEventListener("click",EligionR3_3);
    
   
   function EligionR3_1(){
       if(r3_1 >= WinnerRound3){
            r3_1Wins = true;
            randomGen4();
            
   } else{
            Loss();
   }
   }
   
   function EligionR3_2(){
        if(r3_2 >= WinnerRound3){
            r3_2Wins = true;
            randomGen4();
   } else{
            Loss();
   }
   }
   
   function EligionR3_3(){
       if(r3_3 >= WinnerRound3){
            r1_3Wins = true;
            randomGen4();
   } else{
           Loss();
   }
   }
    };

    //arrnca aca el cuarto nivel
    Runlvl4();

    function Runlvl4(){
        //espero el click en el primer nivel
       r4_1.addEventListener("click",EligionR4_1);
       r4_2.addEventListener("click",EligionR4_2);
       r4_3.addEventListener("click",EligionR4_3);
    
   
   function EligionR4_1(){
       if(r4_1 >= WinnerRound4){
            r4_1Wins = true;
            randomGen5();
            
   } else{
            Loss();
   }
   }
   
   function EligionR4_2(){
        if(r4_2 >= WinnerRound4){
            r4_2Wins = true;
            randomGen5();
   } else{
            Loss();
   }
   }
   
   function EligionR4_3(){
       if(r4_3 >= WinnerRound4){
            r4_3Wins = true;
            randomGen5();
   } else{
           Loss();
   }
   }
    };
       //aca empieza el 5/ultimo nivel :D
    Runlvl5();

    function Runlvl5(){
        //espero el click en el primer nivel
       r5_1.addEventListener("click",EligionR5_1);
       r5_2.addEventListener("click",EligionR5_2);
       r5_3.addEventListener("click",EligionR5_3);
    
   
   function EligionR5_1(){
       if(r5_1 >= WinnerRound5){
            r5_1Wins = true;
            FinalWinWin();
            
   } else{
            Loss();
   }
   }
   
   function EligionR5_2(){
        if(r5_2 >= WinnerRound5){
            r5_2Wins = true;
            FinalWinWin();
   } else{
            Loss();
   }
   }
   
   function EligionR5_3(){
       if(r5_3 >= WinnerRound5){
            r5_3Wins = true;
            FinalWinWin();
   } else{
           Loss();
   }
   }
    };

    function FinalWinWin(){
           alert("¡GANASTE XD!");
    };
   




