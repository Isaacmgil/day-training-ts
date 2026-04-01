interface Ejercicio {
    nombre: string;
    grupoMuscular: 'pecho' | 'espalda' | 'biceps' | 'triceps' | 'cuadriceps' | 'isquios';
    series: number;
    repeticiones: number;
    pesoLibras: number;
}

const rutinaSemanal: Ejercicio[] = [
    { nombre: 'Press de Banca', grupoMuscular: 'pecho', series: 4, repeticiones: 10, pesoLibras: 135 },
    { nombre: 'Sentadilla Libre', grupoMuscular: 'cuadriceps', series: 4, repeticiones: 8, pesoLibras: 225 },
    { nombre: 'Dominadas', grupoMuscular: 'espalda', series: 3, repeticiones: 10, pesoLibras: 150 }, // Asumimos peso corporal + lastre
    { nombre: 'Curl con Barra', grupoMuscular: 'biceps', series: 3, repeticiones: 12, pesoLibras: 60 },
    { nombre: 'Peso Muerto Rumano', grupoMuscular: 'isquios', series: 4, repeticiones: 10, pesoLibras: 185 },
    { nombre: 'Extensiones en Polea', grupoMuscular: 'triceps', series: 3, repeticiones: 15, pesoLibras: 40 }
];

// Lista de ayuda: estos son los grupos que consideramos "tren superior"
const gruposSuperiores = ['pecho', 'espalda', 'biceps', 'triceps'];

function calcularVolumenTrenSuperior(ejercicios: Ejercicio[]): number {
  
  // 1. EL FILTRO (El Guardia de Seguridad)
  // Tomamos la lista original (ejercicios) y le aplicamos un filtro.
  const ejerciciosSuperiores = ejercicios.filter(ejercicio => {
    // En cada vuelta, tomamos el 'grupoMuscular' del elemento actual.
    // Usamos .includes() para preguntar: "Oye lista 'gruposSuperiores', ¿tienes este músculo?"
    // Si responde true, el elemento se guarda. Si responde false, se descarta.
    return gruposSuperiores.includes(ejercicio.grupoMuscular);
  }); 
  // Resultado: ejerciciosSuperiores ahora es una lista de 4 elementos.

  // 2. LA CALCULADORA (El Reduce)
  // Tomamos la NUEVA lista (ejerciciosSuperiores) y la vamos a "reducir" a un solo número.
  const volumenTotal = ejerciciosSuperiores.reduce((alcancia, ejercicio) => {
    // En cada vuelta, agarramos la alcancía y le sumamos la matemática de ese elemento.
    // El 'return' asegura que la alcancía guarde este nuevo valor para la siguiente vuelta.
    return alcancia + (ejercicio.pesoLibras * ejercicio.repeticiones * ejercicio.series);
  }, 0); // El 0 es vital: le dice a la alcancía que empiece vacía.

  // 3. LA ENTREGA
  // Devolvemos la caja que contiene el número final hacia el exterior de la función.
  return volumenTotal;
}

//////////////////////////////////////////////////////////////////////////////////////

function calcularVolumenTrenSuperiorSenior(ejercicios: Ejercicio[]): number {
  // Retornamos directamente el resultado de toda esta operación:
  return ejercicios
    .filter(ejercicio => gruposSuperiores.includes(ejercicio.grupoMuscular))
    .reduce((total, ejercicio) => total + (ejercicio.pesoLibras * ejercicio.repeticiones * ejercicio.series), 0);
}

console.log("El volumen total del tren superior es:", calcularVolumenTrenSuperior(rutinaSemanal));
console.log("El volumen total del tren superior es:", calcularVolumenTrenSuperiorSenior(rutinaSemanal));

