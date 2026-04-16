interface Videojuego {
  id: string;
  titulo: string;
  estado: 'Instalado' | 'Desinstalado' | 'Actualizando';
  pesoGB: number;
}

const biblioteca: Videojuego[] = [
  { id: 'J01', titulo: 'Fortnite', estado: 'Instalado', pesoGB: 35 },
  { id: 'J02', titulo: 'Battlefield', estado: 'Desinstalado', pesoGB: 80 },
  { id: 'J03', titulo: 'Apex Legends', estado: 'Actualizando', pesoGB: 60 },
  { id: 'J04', titulo: 'Rocket League', estado: 'Instalado', pesoGB: 25 },
  { id: 'J05', titulo: 'Red Dead Redemption 2', estado: 'Desinstalado', pesoGB: 115 }
];

function juegosInstalados(biblioteca: Videojuego[]): string[]{
    return biblioteca 
    .filter(juego => juego.estado === 'Instalado')
    .map(juego => `🎮 ${juego.titulo} está listo para jugar y ocupa ${juego.pesoGB}GB`)
    
}

const mensajeConsola = juegosInstalados(biblioteca); 
console.log("Tus juegos instalados: ")
mensajeConsola.forEach(juego => console.log(juego))