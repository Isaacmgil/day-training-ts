// --- CAJA NEGRA: DB DE BOOKSFLEA ---
function buscarLibroPorID(id: string) {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if (id === "LIB-001") {
                resolve("✅ Libro 'Clean Architecture' encontrado. Stock: 5 unidades.");
            } else if (id === "LIB-002") {
                reject("❌ Error: 'El Señor de los Anillos' está agotado temporalmente.");
            } else {
                reject("⚠️ Error 404: El ID ingresado no existe en el catálogo.");
            }
        }, 1500);
    });
}
// -----------------------------------

async function consultarInventario(id: string) {
    try {
        console.log("Buscando en la base de datos de BooksFlea..."); 
        const resultado = await buscarLibroPorID(id); 
        console.log(resultado); 
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Consulta finalizada. Volviendo al menú principal.")
    }
}

consultarInventario("LIB-001"); // El camino feliz
consultarInventario("LIB-002"); // El libro sin stock
consultarInventario("HACKER-99"); // El ID inventado