// 'string'
// for (let repeticion = 0;repeticion<=100;repeticion++ ) {
// console.log (repeticion);

// alert ("repeticion")

for (let index =1; index <=3;index++) {

var cara = "1";
var cruz = "2";
var player = prompt ("Ingresar 1 o 2");
var random = Math.random ();
var vareleccion = Math.ceil (Math.random()* 2,1);

if (player == vareleccion) {
   
    alert ("ganaste");

} else {
    alert ("perdiste");
}

}