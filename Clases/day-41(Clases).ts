/*CLASES 

Propiedades: Son las variables que vivirán adentro del objeto (ej. saldo, nombre).

El Constructor: Es la máquina ensambladora. Es una función especial que se ejecuta una sola vez en el momento exacto en que decides fabricar un objeto nuevo. Ahí le inyectas los datos iniciales.

Métodos: Son las acciones que ese objeto en particular podrá hacer (ej. depositar()).

La palabra this: Significa literalmente "yo mismo" o "mi propio". Cuando un objeto quiere modificar su propio saldo, dice this.saldo. */

class Robot {
    // 1. Las propiedades que tendrá
    nombre: string;
    bateria: number;

    // 2. El ensamblador (recibe los datos al crearlo)
    constructor(nombreInicial: string) {
        this.nombre = nombreInicial;
        this.bateria = 100; // Todos nacen con 100
    }

    // 3. Lo que puede hacer
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

// Así fabricas uno en la vida real usando la palabra "new"
const miRobot = new Robot('Walle');
miRobot.saludar();

///////////////////////////////////////////////////////////////////////////////////////

/*El equipo de backend nos pidió empezar a estructurar la lógica de las cuentas de usuario de MoneyPal usando Clases para mantener el código seguro y escalable.

Necesitamos un "molde" para crear cuentas bancarias. */

class CuentaBancaria {
    titular: string;
    saldo: number;

    constructor(nombreTitular: string, saldoInicial: number) {
        this.titular = nombreTitular;
        this.saldo = saldoInicial;
    }

    depositar(monto: number) {
        this.saldo += monto
    }

    retirar(monto: number) {
        this.saldo -= monto
    }
}

const miCuenta = new CuentaBancaria('Isaac', 500);
miCuenta.depositar(200);
miCuenta.retirar(100); 
console.log(miCuenta)