
export class Pausa{
	
	esperarA(callback){
		const p1 = document.createElement('p')
		document.body.appendChild(p1)
		p1.textContent = 'Pulsa ENTER para continuar'
		p1.style.position = 'absolute'
		p1.style.top = '500px'
		p1.style.left = '500px'
		p1.style.color = 'white'

		window.onkeydown = this.pulsar.bind(this, callback) 
	}
	
	pulsar(callback, evento) {
		if (evento.code != 'Enter') return

		window.onkeydown = null
		callback()
	}
}

