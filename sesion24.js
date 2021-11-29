/*for (var i = 1 ; i<= 10 ; i++){
    console.log(i)
}
let text = "";
for(let i = 1; i <= 10; i++){
    text += i + "<br>";
}
document.getElementById("demo").innerHTML = text;
*/

const vehiculos = ["bmw", "toyota", "volvo", "nissan", "fiat", "audi"];

let text ="";
for (let i = vehiculos.length -1 ; i >=0; i--){
    text += vehiculos [i] + "<br>";
}
document.getElementById("demo").innerHTML =text; 
