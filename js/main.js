var i =0;
var alumna;

  var mex = [{ name:"Alejandra" , src:"img/ale.jpg"},
  			{ name:"Flor" , src:"img/flor.jpg"},
  			{ name:"Pao" , src:"img/pao.jpg"},
  			{ name:"San" , src:"img/sandra.jpg"}
  			];

var seleccion=document.getElementById("sedes");
seleccion.onchange=selectPais;
if(seleccion == "Mexico"){
  proceso (mex);
}

function proceso(pais){
  i=randomInteger(0,4);
  alumna=pais[i]; 
  var contenedor = document.getElementById('contenedor');
   var imagen=document.getElementById("imagen");
  imagen.setAttribute("src" , alumna.src);
  contenedor.appendChild(imagen);
}

function randomInteger(low, high){
  return low + Math.floor(Math.random()*(high-low))
}


function selectPais(){
	if(seleccion.value === "Mexico"){
        proceso(mex);
	} else{
       alert("Estás en Lima");
	}
           
        }

var contador=0;
var intentos=0;

var  input=document.getElementById("input");
var puntos=document.getElementById("puntos");
var respuesta=document.getElementById("respuesta");


var botonComprueba=document.getElementById("botonComprueba");



botonComprueba.onclick=darClick;



function darClick(){
	if(input.value == alumna.name){
		contador+=5;
		var contNodo=document.createTextNode(contador);
		puntos.appendChild(contNodo);
		alert("Ganaste " + contador + " puntos");
		var correcto=document.createTextNode("Correcto");
		respuesta.appendChild(correcto);
	}else{
		var incorrecto=document.createTextNode("Incorrecto");
		respuesta.appendChild(incorrecto);
		intentos++;
		alert("Has hecho " + intentos + " Intentos , recuerda que sólo tienes 5 intentos");

		if(intentos==5){
			contador--;
		var contNodo=document.createTextNode(contador);
		puntos.appendChild(contNodo);
		}
	}
	input.value="";
	
}


























