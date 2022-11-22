let r1 = 1;
let r2 = 2;
let r3 = 3;


function tresRandom(a,b,c){
    a = Math.round(Math.random() * 20 * Math.PI)
    b = Math.round(Math.random() * 20 * Math.PI)
    c = Math.round(Math.random() * 20 * Math.PI)

   let  array = [a,b,c]

   
   
   let WinnerRowA = Math.max(...array);
    return WinnerRowA
   
};
console.log(tresRandom(1,2,3));


function winLossRow(){
if(Start = true && userStashObj.$ >=1){
    tresRandom(r1,r2,r3);
}
}