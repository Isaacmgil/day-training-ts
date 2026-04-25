//El sistema de la clínica "MoneyPal Health" se volvió loco. El backend nos está mandando la lista de todas las citas del día, pero hay un problema: algunos doctores se reportaron enfermos hoy (están de licencia) y hay citas asignadas a doctores que ya ni siquiera trabajan en la clínica.

//Tu trabajo es limpiar esa lista para la pantalla de la sala de espera. Solo debemos mostrar a los pacientes que sí van a ser atendidos hoy, cruzando su cita con la base de datos de recursos humanos de los médicos.

interface Cita {
  id: string;
  paciente: string;
  idMedico: string;
  hora: string;
}

interface Medico {
  id: string;
  nombre: string;
  especialidad: string;
  deLicencia: boolean;
}

const citasDelDia: Cita[] = [
  { id: 'C-01', paciente: 'Roberto Gómez', idMedico: 'MED-03', hora: '09:00 AM' },
  { id: 'C-02', paciente: 'Lucía Fernández', idMedico: 'MED-01', hora: '09:30 AM' },
  { id: 'C-03', paciente: 'Carlos Ruiz', idMedico: 'MED-02', hora: '10:00 AM' }, // ¡Peligro!
  { id: 'C-04', paciente: 'Ana Martínez', idMedico: 'MED-03', hora: '10:30 AM' },
  { id: 'C-05', paciente: 'Diego Torres', idMedico: 'MED-99', hora: '11:00 AM' }  // ¡Peligro!
];

const directorioMedicos: Medico[] = [
  { id: 'MED-01', nombre: 'Dra. Silva', especialidad: 'Cardiología', deLicencia: false },
  { id: 'MED-02', nombre: 'Dr. House', especialidad: 'Diagnóstico', deLicencia: true }, // Reportado enfermo
  { id: 'MED-03', nombre: 'Dra. Grey', especialidad: 'Cirugía General', deLicencia: false }
];

function procesarCita(citas: Cita[], medicos: Medico[]){

    return citas 
        .filter(cita => {
            const idMedicoExiste = medicos.find(medico => medico.id === cita.idMedico) 
            return idMedicoExiste !== undefined && !idMedicoExiste.deLicencia 
        })
        .map(cita => {
            const medicoExiste = medicos.find(medico => medico.id === cita.idMedico) 
            return {
                paciente: cita.paciente, 
                medico: medicoExiste?.nombre, 
                especialidad: medicoExiste?.especialidad, 
                hora: cita.hora
                
            }
        })
}

console.log(procesarCita(citasDelDia, directorioMedicos)); 