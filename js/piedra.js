function patito(minimo, maximo){
	var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo );
	return numero;
}

var piedra  = 0;
var papel   = 1;
var tijera  = 2;
var diosito = 3;

var opciones = ["Piedra", "Papel", "Tijera", "Diosito"];

var opcionUsuario;
var opcionMaquina = patito(0,3);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nDiosito: 3", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra){
	if(opcionMaquina == piedra)
	{
		alert( "¡Empate!");
	}
	else if(opcionMaquina == papel)
	{
		alert( "¡Perdiste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert( "¡Ganaste!");
	}
	else if(opcionMaquina == diosito)
	{
		alert( "¡Perdiste por goleada!");
	}
}
else if(opcionUsuario == papel){
	if(opcionMaquina == piedra){
		alert( "¡Ganaste!")
	}
	else if(opcionMaquina == papel){
		alert( "¡Empate!")
	}
	else if(opcionMaquina == tijera){
		alert( "¡Perdiste!")
	}
	else if(opcionMaquina == diosito){
		alert( "¡Perdiste por goleada!")
	}
}
else if(opcionUsuario == tijera){
	if(opcionMaquina == piedra){
		alert( "¡Perdiste!")
	}
	else if(opcionMaquina == papel){
		alert( "¡Ganaste!")
	}
	else if(opcionMaquina == tijera){
		alert( "¡Empate!")
	}
	else if(opcionMaquina == diosito){
		alert( "¡Perdiste por goleada!")
	}
}
else if(opcionUsuario == diosito){
	if(opcionMaquina == piedra){
		alert( "¡Ganaste por goleada!")
	}
	else if(opcionMaquina == papel){
		alert( "¡Ganaste por goleada!")
	}
	else if(opcionMaquina == tijera){
		alert( "¡Ganaste por goleada!")
	}
	else if(opcionMaquina == diosito){
		alert( "¡FIN DEL MUNDO D: !")
	}
}
else{
	alert("Opción erronea, ¡Pendejo!");
} 
