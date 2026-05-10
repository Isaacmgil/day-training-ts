//El equipo de Auditoría revisó tu código de ayer y lo aprobó, pero exigen aplicar políticas de privacidad. Además, Finanzas solicitó que cada cuenta lleve una bitácora (un historial) de todos los movimientos que hace el cliente para evitar lavado de dinero.

//Tu misión es refactorizar el motor de ayer.


class CuentaBancariaSegura {
  public titular: string; 
  private saldo: number; 
  private historial: string[]; 
  
  constructor(nombreTitular: string, saldoInicial: number){
    this.titular = nombreTitular; 
    this.saldo = saldoInicial; 
    this.historial = []; 
  }

  get saldoActual(){
    return this.saldo; 
  }

  depositarSeguro(monto: number){
    this.saldo += monto; 
    this.historial.push(`Depósito de ${monto}`); 
  }

  retirarSeguro(monto: number){
    this.saldo -= monto; 
    this.historial.push(`Retiro de ${monto}`); 
  }


}


const miCuentaSegura = new CuentaBancariaSegura('Isaac', 500); 
//miCuentaSegura.saldo = 1000000; 
miCuentaSegura.depositarSeguro(200); 
miCuentaSegura.retirarSeguro(300);
miCuentaSegura.retirarSeguro(100);
console.log(miCuentaSegura)

////////////////////////////////////////////////////////////////////////////////////////////////////////

//Vamos a armar un sistema para organizar a tu equipo de trabajo (las tareas para Jessy, Lissa y el resto del equipo de contenido). En lugar de hacer .push() de un simple texto, vamos a hacer .push() de objetos completos hacia un array privado, y usaremos tus habilidades de búsqueda para interactuar con ellos.

// El contrato de cómo luce una tarea internamente
interface Tarea {
  descripcion: string;
  estado: 'Pendiente' | 'Completada';
}

class GestorCampanas {
  public nombreCampana: string;
  private tareas: Tarea[];

  constructor(nombreCampana: string){
    this.nombreCampana = nombreCampana; 
    this.tareas = []
  }
  
  asignarTarea(nuevaDescripcion: string){
    this.tareas.push({ descripcion: nuevaDescripcion, estado: 'Pendiente' })
  }
  
  tareaCompletada(tareaExistente: string){
    const tareaEncontrada = this.tareas.find(tarea => tarea.descripcion === tareaExistente)
    if(tareaEncontrada){
        tareaEncontrada.estado = 'Completada'; 
    }
  }

  get tareasPendientes(){
    return this.tareas.filter(tarea => tarea.estado === 'Pendiente')
  }
    
  
}

const campanaVerano = new GestorCampanas('Campaña Verano');
campanaVerano.asignarTarea('Subir reels a instagram'); 
campanaVerano.asignarTarea('Redactar Correos'); 
campanaVerano.tareaCompletada('Redactar Correos'); 
console.log(campanaVerano.tareasPendientes)