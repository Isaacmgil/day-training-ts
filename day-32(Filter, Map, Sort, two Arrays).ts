//MoneyPal tiene una sección social donde los usuarios pueden ver quiénes son los mejores traders de la semana. Queremos armar el "Top 3" de los traders, pero con una condición: solo queremos mostrar a los especialistas en Oro.

//El backend nos manda la lista de usuarios registrados por un lado, y el estado de sus cuentas de trading por el otro.

interface Trader {
  idTrader: string;
  alias: string;
}

interface CuentaTrading {
  idPropietario: string;
  instrumentoFavorito: string;
  balanceActual: number;
}

const comunidadTraders: Trader[] = [
  { idTrader: 'TR-01', alias: 'SniperWolf' },
  { idTrader: 'TR-02', alias: 'GoldenBoy' },
  { idTrader: 'TR-03', alias: 'PipMaster' },
  { idTrader: 'TR-04', alias: 'BearHunter' }
];

const estadoCuentas: CuentaTrading[] = [
  { idPropietario: 'TR-02', instrumentoFavorito: 'XAU/USD', balanceActual: 5200 },
  { idPropietario: 'TR-01', instrumentoFavorito: 'EUR/USD', balanceActual: 1500 }, // No opera oro
  { idPropietario: 'TR-04', instrumentoFavorito: 'XAU/USD', balanceActual: 4800 },
  { idPropietario: 'TR-03', instrumentoFavorito: 'XAU/USD', balanceActual: 1200 }
];

function topTradersOro(traders: Trader[], cuentas: CuentaTrading[]): {alias: string, balanceActual: number}[] {

    return cuentas 
        .filter(cuenta => {
            const traderExiste = traders.find(trader => trader.idTrader === cuenta.idPropietario)
            return traderExiste !== undefined && cuenta.instrumentoFavorito === 'XAU/USD'
        })
        .map(cuenta => {
            const oroTraders = traders.find(trader => trader.idTrader === cuenta.idPropietario)
            return {
                alias: oroTraders!.alias, 
                balanceActual: cuenta.balanceActual
            }
        })
        .sort((a, b) => a.balanceActual - b.balanceActual)
}

console.log(topTradersOro(comunidadTraders, estadoCuentas)); 