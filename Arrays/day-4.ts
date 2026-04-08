interface Zapato {
  id: string;
  modelo: string;
  categoria: 'deportivo' | 'casual' | 'formal';
  precio: number;
  stock: number;
}

const inventario: Zapato[] = [
  { id: 'Z01', modelo: 'Nike Air Max', categoria: 'deportivo', precio: 120, stock: 10 },
  { id: 'Z02', modelo: 'Oxford Clásico', categoria: 'formal', precio: 80, stock: 5 },
  { id: 'Z03', modelo: 'Adidas Ultraboost', categoria: 'deportivo', precio: 150, stock: 8 },
  { id: 'Z04', modelo: 'Mocasín de Cuero', categoria: 'casual', precio: 60, stock: 15 },
  { id: 'Z05', modelo: 'Puma Runner', categoria: 'deportivo', precio: 100, stock: 0 } // ¡Agotado!
];

function calcularIngresosLiquidacion(zapatos: Zapato[]): number {
  return zapatos 
  .filter(zapato => zapato.categoria === 'deportivo' && zapato.stock > 0)
  .map(zapato => {return (zapato.precio * 0.80) * zapato.stock ;})
  .reduce((total, ingresoTotal) => total + ingresoTotal, 0); 
}

console.log("Ingresos esperados por liquidación:", calcularIngresosLiquidacion(inventario));