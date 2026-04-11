//Imagina que estás viendo el resumen de tu sesión nocturna de Fortnite o Battlefield. Quieres saber cuánta experiencia (XP) total ganaste hoy, pero el juego tiene reglas claras para el cálculo.

interface Partida {
  id: string;
  resultado: 'Victoria' | 'Derrota';
  puntosBase: number;
}

const sesionDeJuego: Partida[] = [
  { id: 'P01', resultado: 'Victoria', puntosBase: 100 },
  { id: 'P02', resultado: 'Derrota', puntosBase: 50 },  // 🚨 Las derrotas no dan XP
  { id: 'P03', resultado: 'Victoria', puntosBase: 200 },
  { id: 'P04', resultado: 'Victoria', puntosBase: 150 }
];

// ⚔️ A PARTIR DE AQUÍ CONSTRUYES TÚ ⚔️
function calcularXPTotal(partidas: Partida[]): string {
    const victorias = partidas.filter(victoria => victoria.resultado === 'Victoria')
    const puntos = victorias.map(victoria => victoria.puntosBase + 50)
    const totalXP = puntos.reduce((total, victoria) => total + victoria, 0)
    return `🎮 GG! Has ganado un total de ${totalXP} puntos de experiencia hoy.`
}

console.log(calcularXPTotal(sesionDeJuego));