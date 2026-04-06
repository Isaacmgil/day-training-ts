interface CampanaDM {
  id: string;
  modelo: 'Jessy' | 'Lussy' | 'Lissa' | 'Jassie';
  estado: 'Enviado' | 'Borrador' | 'Cancelado';
  conversiones: number;      // Cuántos suscriptores pagaron
  pagoPorConversion: number; // Cuánto pagó cada uno en dólares
}

const campañasAbril: CampanaDM[] = [
  { id: 'C-001', modelo: 'Jessy', estado: 'Enviado', conversiones: 12, pagoPorConversion: 15 },
  { id: 'C-002', modelo: 'Lussy', estado: 'Borrador', conversiones: 0, pagoPorConversion: 20 },
  { id: 'C-003', modelo: 'Lissa', estado: 'Enviado', conversiones: 5, pagoPorConversion: 50 },
  // 🚨 Ojo con esta: se envió, pero nadie pagó.
  { id: 'C-004', modelo: 'Jassie', estado: 'Enviado', conversiones: 0, pagoPorConversion: 25 }, 
  // 🚨 Ojo con esta: hubo gente interesada, pero se canceló el envío.
  { id: 'C-005', modelo: 'Jessy', estado: 'Cancelado', conversiones: 3, pagoPorConversion: 15 }, 
  { id: 'C-006', modelo: 'Lussy', estado: 'Enviado', conversiones: 8, pagoPorConversion: 20 }
];

function calculandoIngresos(campanas: CampanaDM[]): string {
    const ingresosValidos = campanas.filter(ingreso => ingreso.estado === 'Enviado' && ingreso.conversiones > 0)

    const dineroGenerado = ingresosValidos.reduce((total, ingreso ) => total + (ingreso.conversiones * ingreso.pagoPorConversion), 0)

    return `💸 Liquidación completada: El total generado por las campañas exitosas es de ${dineroGenerado} dólares.`
}

const mensajeConsola = calculandoIngresos(campañasAbril); 
console.log(mensajeConsola); 