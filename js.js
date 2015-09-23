/*
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var Usuario=prompt("¿Qué eliges?\npiedra\npapel\ntijera");
var Maquina = piedra;

if(Usuario == Maquina)
{
    alert("¡Empate!");
}
else if(Usuario == papel)
{
    alert("¡Ganaste!");
}
else if(Usuario == tijera)
{
    alert("¡Perdiste!");
}
else{
  alert("¡solo es piedra, papel o tijera!");
}
*/

//Genera un número aleatorio entre un rango de enteros
function Sergio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = Sergio(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Perdiste :( ");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste!");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Perdiste!");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        alert("Perdiste!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Empate!");
    }
}
else
{
    alert("UNDEFINED");
}
