//Necesitamos un sistema que gestione saldos de usuarios estándar y usuarios corporativos, aplique comisiones diferenciadas y permita transferencias controladas.

class Usuario {
    public nombre: string;
    protected saldo: number;
    public idCuenta: string;

    constructor(nombre: string, saldo: number, idCuenta: string) {
        this.nombre = nombre;
        this.saldo = saldo;
        this.idCuenta = idCuenta;
    }

    get obtenerSaldo() {
        return this.saldo;
    }

    depositar(monto: number) {
        if (monto > 0) {
            this.saldo += monto;
        }
    }

    retirar(monto: number): boolean {
        if (monto <= this.saldo) {
            this.saldo -= monto; // 1. Haces la operación matemática
            return true;         // 2. Confirmas el éxito con un booleano real
        }
        return false;            // 3. Si no entró al IF, confirmas el fallo explícitamente
    }

}

class CuentaCorporativa extends Usuario {

    constructor(nombre: string, saldo: number, idCuenta: string) {
        super(nombre, saldo, idCuenta)
    }

    retirar(monto: number) {
        const comision = monto * 0.05;
        const total = monto + comision;
        if (total <= this.saldo) {
            this.saldo -= total;
            return true
        }
        return false
    }


}

class ProcesadorPagos {
    private listaCuentas: Usuario[]
    private gananciasComision: number;

    constructor() {
        this.listaCuentas = [];
        this.gananciasComision = 0;
    }


    registrarCuenta(cuenta: Usuario) {
        this.listaCuentas.push(cuenta)
    }

    ejecutarTransferencia(idOrigen: string, idDestino: string, monto: number) {
        const idCuentaOrigen = this.listaCuentas.find(cuenta => cuenta.idCuenta === idOrigen)
        const idCuentaDestino = this.listaCuentas.find(cuenta => cuenta.idCuenta === idDestino)
        if (idCuentaOrigen && idCuentaDestino) {
            if (idCuentaOrigen.retirar(monto)) {
                const comision = monto * 0.05
                if (idCuentaOrigen instanceof CuentaCorporativa) {
                    this.gananciasComision += comision
                }
                idCuentaDestino?.depositar(monto)

            }
        }

    }

    get totalGananciasComision() {
        return this.gananciasComision;
    }
}

const procesadorDePagos = new ProcesadorPagos()
const cuentaComun = new Usuario('Isaac', 100, 'ID-1');
const cuentaCorp = new CuentaCorporativa('IsaacPremium', 200, 'ID-2');

procesadorDePagos.registrarCuenta(cuentaComun);
procesadorDePagos.registrarCuenta(cuentaCorp);

procesadorDePagos.ejecutarTransferencia('ID-2', 'ID-1', 100);

console.log(`Saldo cuenta común: $${cuentaComun.obtenerSaldo}`);
console.log(`Saldo cuenta corporativa: $${cuentaCorp.obtenerSaldo}`);
console.log(`Ganancias por comisiones: $${procesadorDePagos.totalGananciasComision}`);

