//Dejamos las finanzas y los videojuegos para diseñar un Sistema de Gestión de Flota de Envíos (Logística y Distribución).

class VehiculoBase {
    public codigoVehiculo: string;
    public choferAsignado: string;
    protected capacidadCombustible: number;

    constructor(codigoVehiculo: string, choferAsignado: string, capacidadCombustible: number) {
        this.codigoVehiculo = codigoVehiculo;
        this.choferAsignado = choferAsignado;
        this.capacidadCombustible = capacidadCombustible;
    }

    get combustibleActual() {
        return this.capacidadCombustible;
    }

    consumirCombustible(litrosCombustible: number) {
        this.capacidadCombustible -= litrosCombustible;
        if (this.capacidadCombustible <= 0) {
            this.capacidadCombustible = 0
        }
    }

}

class VehiculoCargaPesada extends VehiculoBase {
    public cargaActual: number;

    constructor(codigoVehiculo: string, choferAsignado: string, capacidadCombustible: number, cargaActual: number) {
        super(codigoVehiculo, choferAsignado, capacidadCombustible)
        this.cargaActual = cargaActual;
    }

    consumirCombustible(litrosCombustible: number) {
        const combustibleExtra = this.cargaActual * 0.10;
        const combustibleTotal = combustibleExtra + litrosCombustible
        super.consumirCombustible(combustibleTotal)
    }

}

class CentroDistribucion {
    private listaTransportes: VehiculoBase[];

    constructor() {
        this.listaTransportes = []
    }

    registrarVehiculo(vehiculo: VehiculoBase) {
        this.listaTransportes.push(vehiculo)
    }

    despacharRutaAlta(gastoCombustibleFijo: number = 30) {
        this.listaTransportes.forEach((transporte) => {
            if (!(transporte instanceof VehiculoCargaPesada)) {
                transporte.consumirCombustible(gastoCombustibleFijo + 15)
            }else{
                transporte.consumirCombustible(gastoCombustibleFijo)
            }
        })

    }
}

const centroDistribucion = new CentroDistribucion; 

const vehiculoComun = new VehiculoBase('CATACU07', 'Isaac', 80); 
const vehiculoCargaPesada = new VehiculoCargaPesada('PIZZAC77', 'Isaac', 100, 50); 

centroDistribucion.registrarVehiculo(vehiculoComun); 
centroDistribucion.registrarVehiculo(vehiculoCargaPesada); 

vehiculoCargaPesada.consumirCombustible(20);
centroDistribucion.despacharRutaAlta(); 

console.log(`Combustible restante para Vehiculo Base: ${vehiculoComun.combustibleActual}`); 
console.log(`Combustible restante para Vehiculo de Carga Pesada: ${vehiculoCargaPesada.combustibleActual}`); 
