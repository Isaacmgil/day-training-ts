//La agencia digital está creciendo y llevar el control del equipo en hojas de cálculo ya no sirve. Necesitamos un motor interno para gestionar a los talentos, ver quiénes están rindiendo mejor y poder dar de baja a los que ya no colaboran con nosotros.

interface Creador {
    alias: string;
    estado: 'Activo' | 'Inactivo';
    campanasCompletadas: number;
}

class AgenciaDigital {
    public nombreAgencia: string;
    private equipo: Creador[];

    constructor(nombreAgencia: string) {
        this.nombreAgencia = nombreAgencia;
        this.equipo = [];
    }

    contratarTalento(nuevoAlias: string) {
        this.equipo.push({alias: nuevoAlias, estado: 'Activo', campanasCompletadas: 0 }); 
    }

    registrarExito(aliasCreador: string){
        const creadorEncontrado = this.equipo.find(creador => creador.alias === aliasCreador)
        if(creadorEncontrado){
         creadorEncontrado.campanasCompletadas += 1; 
        }
    }

    darDeBaja(aliasEmpleado: string){
        const empleadoEncontrado = this.equipo.find(creador => creador.alias === aliasEmpleado)
        if(empleadoEncontrado){
            empleadoEncontrado.estado = 'Inactivo'
        }
    }

    get talentosEstrella(){
        return this.equipo.filter(talentos => talentos.campanasCompletadas > 2 && talentos.estado === 'Activo');
    }

}

const miEmpresa = new AgenciaDigital('Alpha Media'); 

miEmpresa.contratarTalento('Verónica'); 
miEmpresa.contratarTalento('Frainys'); 
miEmpresa.contratarTalento('Amada'); 

miEmpresa.registrarExito('Verónica'); 
miEmpresa.registrarExito('Verónica'); 
miEmpresa.registrarExito('Verónica'); 
miEmpresa.registrarExito('Frainys'); 
miEmpresa.registrarExito('Frainys'); 
miEmpresa.registrarExito('Frainys'); 
miEmpresa.registrarExito('Frainys'); 

miEmpresa.darDeBaja('Amada'); 

console.log(miEmpresa.talentosEstrella); 
