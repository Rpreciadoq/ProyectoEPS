//Campos comunes en formularios
const nombres = document.getElementById("Nombre")
const apellidos = document.getElementById("Apellido")
const cedula = document.getElementById("CC")
const telefono = document.getElementById("Telefono")
const especialidad = document.getElementById("Especialidad")
//formulario medicos
const consultorio = document.getElementById("NumConsultorio")
const correo = document.getElementById("Correo")
//formulario pacientes
const edad = document.getElementById("Edad")

//llamado a formularios
const formulariopacientes = document.getElementById("FormRegistroPacientes")
const formulariomedicos = document.getElementById("FormRegistroMedicos")

class usuario {
    constructor(nombres, apellidos, cedula, telefono, especialidad) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.cedula = cedula
        this.telefono = telefono
        this.especialidad = especialidad
    }
}

//Seccion de codigo para presentar los medicos registrados
const mostrarMedicos = function () {
    let medicos = []
    let cuerpoTabla = document.getElementById("tablaMedicos")
    let localmedicos = localStorage.getItem("medicoslocal")
    if (localmedicos) {
        medicos = JSON.parse(localmedicos)
    }

    medicos.forEach(medico => {
        let fila = document.createElement("tr")

        // Crear celda - metodo InsertCell()

        let celdaNombres = fila.insertCell()
        let celdaApellidos = fila.insertCell()
        let celdaCedula = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaPaciente = fila.insertCell()

        celdaNombres.textContent = medico.nombres
        celdaApellidos.textContent = medico.apellidos
        celdaCedula.textContent = medico.cedula
        celdaConsultorio.textContent = medico.consultorio
        celdaTelefono.textContent = medico.telefono
        celdaCorreo.textContent = medico.correo
        celdaEspecialidad.textContent = medico.especialidad
        celdaPaciente.textContent = "Sin Asignar"

        cuerpoTabla.appendChild(fila)
    });
}

if (window.location.href.endsWith("listado-medicos.html")) {
    mostrarMedicos()
}

//seccion de codigo para registro de medicos

if (window.location.href.endsWith("registro-medicos.html")) {

//Evento formulario medico para enviar
formulariomedicos.addEventListener("submit", function (event) {
    //Previene que la pagina se recargue sin antes ejecutar la logica
    event.preventDefault()
    let campoNombres = nombres.value
    let campoApellidos = apellidos.value
    let campoCedula = cedula.value
    let campoConsultorio = consultorio.value
    let campoTelefono = telefono.value
    let campoCorreo = correo.value
    let campoEspecialidad = especialidad.value

    const medico = new usuario(campoNombres, campoApellidos, campoCedula, campoTelefono, campoEspecialidad)
    medico.consultorio = campoConsultorio
    medico.correo = campoCorreo

    let medicos = []

    let localmedicos = localStorage.getItem("medicoslocal")
    // 
    if (localmedicos) {
        medicos = JSON.parse(localmedicos)
    }

    medicos.push(medico)
    localStorage.setItem("medicoslocal", JSON.stringify(medicos))


    console.log(medico)
    alert("Medico registrado con exito")

})
}


//Seccion de codigo para presentar los medicos registrados
const mostrarPacientes = function () {
    let pacientes = []
    let cuerpoTabla = document.getElementById("tablaPacientes")
    let localpacientes = localStorage.getItem("pacienteslocal")
    if (localpacientes) {
        pacientes = JSON.parse(localpacientes)
    }

    pacientes.forEach(paciente => {
        let fila = document.createElement("tr")

        // Crear celda - metodo InsertCell()

        let celdaNombres = fila.insertCell()
        let celdaApellidos = fila.insertCell()
        let celdaCedula = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        
        celdaNombres.textContent = paciente.nombres
        celdaApellidos.textContent = paciente.apellidos
        celdaCedula.textContent = paciente.cedula
        celdaEdad.textContent = paciente.edad
        celdaTelefono.textContent = paciente.telefono
        celdaEspecialidad.textContent = paciente.especialidad
        

        cuerpoTabla.appendChild(fila)
    });
}

if (window.location.href.endsWith("listado-pacientes.html")) {
    mostrarPacientes()
}




if (window.location.href.endsWith("registro-pacientes.html")) {
    formulariopacientes.addEventListener("submit", function (event) {
        let campoNombres = nombres.value
        let campoApellidos = apellidos.value
        let campoCedula = cedula.value
        let campoTelefono = telefono.value
        let campoEspecialidad = especialidad.value
        let campoEdad = edad.value

        const paciente = new usuario(campoNombres, campoApellidos, campoCedula, campoTelefono, campoEspecialidad)
        paciente.edad = campoEdad

        let pacientes = []

        let localpacientes = localStorage.getItem("pacienteslocal")

        if (localpacientes) {
            pacientes = JSON.parse(localpacientes)
        }

        pacientes.push(paciente)
        localStorage.setItem("pacienteslocal", JSON.stringify(pacientes))

        console.log(paciente)
        alert("Paciente registrado con Exito")

    })
}

