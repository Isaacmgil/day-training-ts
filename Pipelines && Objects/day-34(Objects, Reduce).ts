//Para practicar este concepto puro sin distracciones, vamos a hacerlo con el inventario de TI de MoneyPal. Tienen una lista plana de equipos y necesitan agruparlos por categoría para pintar tablas separadas en la pantalla.

interface Equipo {
  id: string;
  modelo: string;
  categoria: string;
}

const inventarioPlano: Equipo[] = [
  { id: 'EQ-01', modelo: 'Dell XPS 15', categoria: 'Laptops' },
  { id: 'EQ-02', modelo: 'MacBook Pro', categoria: 'Laptops' },
  { id: 'EQ-03', modelo: 'Monitor LG 27"', categoria: 'Monitores' },
  { id: 'EQ-04', modelo: 'Logitech MX Master 3', categoria: 'Perifericos' },
  { id: 'EQ-05', modelo: 'Monitor Dell 24"', categoria: 'Monitores' }
];

function agruparInventario(equipos: Equipo[]) {
  // Usamos el método acumulador. 
  // 'archivero' es nuestro objeto que empieza vacío.
  // 'equipoActual' es el elemento que viaja por el tubo.
  
  return equipos.reduce((archivero: Record<string, Equipo[]>, equipoActual) => {
      
      const categoria = equipoActual.categoria;
      if(!archivero[categoria]){
        archivero[categoria] = []
      }
      archivero[categoria].push(equipoActual)
      // 2. Haz un IF: Pregúntale al archivero si ESA categoría NO existe adentro de él.
      // PISTA DE JS: if (!archivero[nombreDeLaCategoria]) { ... }
      
          // 3. SI NO EXISTE: Crea la propiedad en el archivero y asígnale un array vacío []
      return archivero
      // 4. Fuera del IF (porque a este punto la gaveta ya existe sí o sí): 
      // Hazle un .push() del 'equipoActual' a esa gaveta específica del archivero.
      
      // 5. NUNCA OLVIDES r etornar el archivero completo para el siguiente ciclo.
      
  }, {}); // <--- ¡AQUÍ ESTÁ LA MAGIA! Empezamos con un objeto vacío en lugar de un 0.

}

console.log(agruparInventario(inventarioPlano)); 