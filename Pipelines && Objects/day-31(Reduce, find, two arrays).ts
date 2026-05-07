//El equipo de MoneyPal ahora tiene una tienda oficial de mercancía (camisas, gorras, etc.). Todos los días sale un camión de despacho con los pedidos. El departamento de finanzas necesita un indicador en su panel de control que calcule automáticamente cuánto dinero nos va a cobrar la empresa de envíos por el viaje de hoy.

//Tenemos la lista de los paquetes que subieron al camión y la lista de las tarifas que nos cobra la empresa según la zona de la ciudad.

interface Paquete {
  id: string;
  zonaDestino: string;
  pesoKg: number;
  estado: 'Listo' | 'Retrasado' | 'En revision';
}

interface TarifaZona {
  codigoZona: string;
  nombreZona: string;
  costoPorKg: number;
  zonaActiva: boolean;
}

const rutaDelDia: Paquete[] = [
  { id: 'PQ-01', zonaDestino: 'Z-NORTE', pesoKg: 5, estado: 'Listo' },
  { id: 'PQ-02', zonaDestino: 'Z-SUR', pesoKg: 2, estado: 'En revision' },
  { id: 'PQ-03', zonaDestino: 'Z-ESTE', pesoKg: 10, estado: 'Listo' },
  { id: 'PQ-04', zonaDestino: 'Z-OESTE', pesoKg: 3, estado: 'Listo' } 
];

const tarifas: TarifaZona[] = [
  { codigoZona: 'Z-NORTE', nombreZona: 'Zona Norte', costoPorKg: 4, zonaActiva: true },
  { codigoZona: 'Z-SUR', nombreZona: 'Zona Sur', costoPorKg: 5, zonaActiva: true },
  { codigoZona: 'Z-ESTE', nombreZona: 'Zona Este', costoPorKg: 3, zonaActiva: true },
  { codigoZona: 'Z-OESTE', nombreZona: 'Zona Oeste', costoPorKg: 6, zonaActiva: false } // Vía cerrada por lluvias
];

function calcularCostoEnvio(paquetes: Paquete[], tarifas: TarifaZona[]){

    return paquetes
        .reduce((total, paquete) => {
            const tarifaPaquete = tarifas.find(tarifa => tarifa.codigoZona === paquete.zonaDestino)
            if(tarifaPaquete !== undefined && tarifaPaquete.zonaActiva && paquete.estado === 'Listo'){
                const costoTotal = tarifaPaquete.costoPorKg * paquete.pesoKg
                return total + costoTotal

            }else{
                return total
            }

        }, 0)

}

console.log(calcularCostoEnvio(rutaDelDia, tarifas))