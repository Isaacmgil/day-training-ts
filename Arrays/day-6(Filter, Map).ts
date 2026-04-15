//Estamos en tu Tienda de Zapatos. El departamento de logística necesita imprimir etiquetas para los paquetes que salen hoy. Sin embargo, solo quieren las etiquetas de los pedidos que son "Prioritarios".

//Tu misión: Crear una lista de textos (strings) listos para imprimir. Cada texto debe tener un formato específico.

interface Pedido {
  id: string;
  cliente: string;
  ciudad: string;
  prioritario: boolean;
  articulos: number;
}

const pedidosHoy: Pedido[] = [
  { id: 'P01', cliente: 'Isaac Gil', ciudad: 'Madrid', prioritario: true, articulos: 2 },
  { id: 'P02', cliente: 'Elena Pérez', ciudad: 'Barcelona', prioritario: false, articulos: 1 },
  { id: 'P03', cliente: 'Juan Gomez', ciudad: 'Sevilla', prioritario: true, articulos: 5 },
  { id: 'P04', cliente: 'Lucía Fernández', ciudad: 'Valencia', prioritario: false, articulos: 3 },
  { id: 'P05', cliente: 'Marcos Ruiz', ciudad: 'Bilbao', prioritario: true, articulos: 1 }
];

function generarEtiquetas(pedidos: Pedido[]): string[] {
  
  return pedidos
  .filter(pedido => pedido.prioritario)
  .map(pedido => {return `Etiqueda con ID ${pedido.id} para Cliente: ${pedido.cliente} - Ciudad: ${pedido.ciudad} - ${pedido.articulos} articulos`})
}

const etiquetas = generarEtiquetas(pedidosHoy);
console.log("Etiquetas generadas:");
etiquetas.forEach(etiqueta => console.log(etiqueta));