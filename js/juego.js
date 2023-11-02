/** juego.js
 *  Controlador Principal de la Aplicación.
 *  Controla la aplicación.
 **/

console.log('Cargado')
import {Vista1} from './vistas/vista1.js'

window.onload = () =>{new Juego()}

class Juego{

	constructor(){
		this.vista1 = new Vista1(this)

		this.iniciar()
	}
	iniciar(){
		this.vista1.play()
	}
	irAVista2(){
		console.log('asdfasdf')
	}

}
