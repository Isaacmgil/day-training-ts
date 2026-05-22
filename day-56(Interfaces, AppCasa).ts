//Vamos a crear el controlador central de una casa. El router Wi-Fi no necesita saber si tiene conectado un televisor, un foco o una cerradura; solo necesita saber que todos cumplen el contrato de "poder encenderse y apagarse".

interface DispositivoInteligente {
    nombre: string;
    encender(): void;
    apagar(): void;
}

class FocoInteligente implements DispositivoInteligente {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    encender() {
        console.log(`💡 ${this.nombre} se ha encendido.`)
    }

    apagar() {
        console.log(`💡 ${this.nombre} se ha apagado.`)
    }

}

class CerraduraInteligente implements DispositivoInteligente {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    encender() {
        console.log(`🔒 ${this.nombre} desbloqueada/encendida.`)
    }

    apagar() {
        console.log(`🔒 ${this.nombre} bloqueada/apagada.`)
    }

}

class AppCasa {
    private dispositivos: DispositivoInteligente[] 

    constructor(){
        this.dispositivos = []
    }

    agregarDispositivo(dispositivo: DispositivoInteligente){
        this.dispositivos.push(dispositivo);
    }

    encenderTodaLaCasa(){
        this.dispositivos.forEach((dispositivo) => {
            dispositivo.encender()
        })
    }
}

//TEST//

const app = new AppCasa(); 

const foco = new FocoInteligente('Luz Cocina');
const cerradura = new CerraduraInteligente('Puerta Trasera'); 

app.agregarDispositivo(foco);
app.agregarDispositivo(cerradura);

app.encenderTodaLaCasa(); 


