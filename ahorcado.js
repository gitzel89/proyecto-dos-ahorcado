
var cadenas = ['ALURA', 'CURSOS', 'PROGRAMACION' ];
var botonIniciarJuego = document.querySelector("#iniciar-juego");


var palabra;
var palabraConGiones;
var existe1=false;

function ingresarPalabras()
{
	palabra = document.getElementById("input-nueva-palabra").value;
 for(var posicion = 0; posicion < cadenas.length; posicion++)
 {//inicia for e repetido

 	if(cadenas[posicion] == palabra)
 	{
 	//	existe1 = true;
 		alert("Palabra ya existe en el arreglo: " + palabra);
 		break;
 	}
 	else
 	{
 			cadenas.push(palabra);
	
	 		 alert("BANCO DE PALABRAS: "+ cadenas);
	 		 
	 
	 	     document.querySelector('#input-nueva-palabra').value = '';
	 		 break;
 	}
 }//cierra for de comprobacion de repetdio

}	


var bandera=1;

 var recargar =1;
var lol = document.getElementById("lose").value;

function iniciarJuego(){


	String.prototype.replaceAt=function(index, character) 
	{ 
		return this.substr(0, index) + character + this.substr(index+character.length); 
	} 
	//
	palabra = cadenas[Math.floor(Math.random()*cadenas.length)];
	palabraConGiones= palabra.replace(/./g,"_ ")
	document.querySelector('#output').innerHTML = palabraConGiones;

	bandera = 0 ;
	document.querySelector("#lose").style.display = '';
	document.querySelector("#win").style.display = '';
	

}

							
function ahorcado()
{
	String.prototype.replaceAt=function(index, character) 
	{ 
		return this.substr(0, index) + character + this.substr(index+character.length); 
	} 
	
	///var falla;
	var existe = false;
	var adivina = document.getElementById("input-letra").value; 
	var cadena = palabra.match(adivina);
	
		
		if( cadena == null)
		{
			

			existe = true;
			bandera ++;
			document.querySelector('#horca').style.backgroundPosition = -(210*bandera) + 'px 0';
			
			
	
	
		}

		if(existe == false)
		{//abre if existetnte falso
			for(var i  in palabra)
			{//inicia for con el cual ire letra por letra
				if(adivina== palabra[i])
				{
					palabraConGiones = palabraConGiones.replaceAt(i*2,adivina) 
					
				}
				
			}//cierra for con el cual ire letra por letra
		
		}//cierra if existetnte falso
    document.querySelector('#output').innerHTML = palabraConGiones;	
//	alert("Intentos: " +bandera);
	if(bandera==5)
	{
		
		document.querySelector("#lose").style.display = 'flex';
		
		setTimeout(function(){
			window.location.reload(1);
		}, 1000);
		
	}

	if(palabraConGiones.indexOf('_') <0)
	{
		
		document.querySelector("#win").style.display = 'flex';
		bandera = 1;
		setTimeout(function(){
			window.location.reload(1);
		}, 2000);
	}

	document.querySelector('#input-letra').value = '';
	document.querySelector('#input-letra').focus();
	
}



function validar(e) 
{
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8)
    {
        return true;
    }
    patron = /[A-Z ]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

