//El equipo de marketing de la librería Booksflea está preparando el rediseño de la página principal en Angular. Quieren mostrar estanterías virtuales divididas por categorías.
// Para incentivar las ventas, solo vamos a mostrar libros que estén en stock, y 
// les vamos a aplicar un descuento automático del 10% a sus precios originales.
// Tu misión es construir la Mega Tubería que le entregue a Angular la información perfecta y digerida.

interface LibroCrudo {
  isbn: string;
  titulo: string;
  categoria: string;
  precioOriginal: number;
  enStock: boolean;
}

const inventarioLibreria: LibroCrudo[] = [
  { isbn: 'L-01', titulo: 'TypeScript Avanzado', categoria: 'Programacion', precioOriginal: 40, enStock: true },
  { isbn: 'L-02', titulo: 'El Imperio de los Datos', categoria: 'Negocios', precioOriginal: 30, enStock: false },
  { isbn: 'L-03', titulo: 'Angular para Novatos', categoria: 'Programacion', precioOriginal: 35, enStock: true },
  { isbn: 'L-04', titulo: 'Hábitos Atómicos', categoria: 'Desarrollo Personal', precioOriginal: 20, enStock: true },
  { isbn: 'L-05', titulo: 'Clean Code', categoria: 'Programacion', precioOriginal: 50, enStock: false },
  { isbn: 'L-06', titulo: 'Padre Rico, Padre Pobre', categoria: 'Negocios', precioOriginal: 25, enStock: true }
];

function prepararEstanteriasVirtuales(inventarios: LibroCrudo[]){
    
    return inventarios
        .filter(inventario => inventario.enStock)
        .map(inventario => {
            return {
                titulo: inventario.titulo, 
                categoria: inventario.categoria, 
                precioOferta: inventario.precioOriginal * 0.90
            }
        })
        .reduce((archivero: Record<string, {titulo: string, categoria: string, precioOferta: number}[]>, libro) => {
            const categoriaLibro = libro.categoria
            if(!archivero[categoriaLibro]){
                archivero[categoriaLibro] = []
            }

            archivero[categoriaLibro].push(libro)

            return archivero


        }, {})

}

console.log(prepararEstanteriasVirtuales(inventarioLibreria))