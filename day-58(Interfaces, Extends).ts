/*Al igual que las clases, una interface puede usar la palabra extends para heredar todas las reglas de otra interface. Esto es súper útil para crear un "contrato base" y luego "contratos VIP" que exijan más datos, sin tener que volver a escribir todo desde cero.

Nos mudamos al departamento de ciberseguridad. Vamos a construir un Sistema de Autenticación y Permisos.*/

interface UsuarioEstandar {

    readonly id: string;
    username: string;
    estaActivo: boolean;

}

interface UsuarioAdmin extends UsuarioEstandar {
    rangoSecreto: number;
    llaveSecreta?: string;

}

class ServidorSeguro {

    private baseDeDatos: UsuarioEstandar[];
    constructor() {
        this.baseDeDatos = [];
    }

    registrarUsuario(usuario: UsuarioEstandar) {
        this.baseDeDatos.push(usuario);
    }

    auditarAdmin(admin: UsuarioAdmin) {
        if (admin.llaveSecreta) {
            console.log(`Acceso total concedido a ${admin.username}. Llave utilizada: ${admin.llaveSecreta}`)
        } else {
            console.log(`Acceso parcial concedido a ${admin.username}. Rango de seguridad: ${admin.rangoSecreto}`)
        }
    }
}

const miServidor = new ServidorSeguro(); 

const usuarioEstandar: UsuarioEstandar = {
    id: 'USR-001', 
    username: 'Isaac', 
    estaActivo: true,  
}

const usuarioAdmin: UsuarioAdmin = {
    id: 'ADM-999', 
    username: 'Dennis', 
    estaActivo: true, 
    rangoSecreto: 5, 
    llaveSecreta: 'ALFA-OMEGA'
}

const usuarioAdminNovato: UsuarioAdmin = {
    id: 'ADM-002', 
    username: 'Vero', 
    estaActivo: true, 
    rangoSecreto: 1, 
}

miServidor.registrarUsuario(usuarioEstandar); 
miServidor.registrarUsuario(usuarioAdmin); 
miServidor.registrarUsuario(usuarioAdminNovato); 

miServidor.auditarAdmin(usuarioAdmin); 
miServidor.auditarAdmin(usuarioAdminNovato); 