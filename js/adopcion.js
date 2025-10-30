const datosUbicacion = {
    'Amazonas': ['Chachapoyas', 'Bagua', 'Condorcanqui', 'Luya'],
    'Ancash': ['Huaraz', 'Ajia', 'Asuncion', 'Bolognesi'],
    'Apurimac': ['Abancay', 'Antabamba', 'Aymaraes', 'Grau'],
    'Arequipa': ['Arequipa', 'Camana', 'Caraveli', 'Castilla'],
    'Ayacucho': ['Cangallo', 'Huanta', 'La mar', 'Lucanas'],
    'Cajamarca': ['Cajamarca', 'Cajabamba', 'Celendin', 'Chota'],
    'Callao': ['Callao'],
    'Cusco': ['Cuzco', 'Acomayo', 'Anta', 'Canas'],
    'Huancavelica': ['Huancavelica', 'Acobamba', 'Dos de mayo', 'Tayacaja'],
    'Huánuco': ['Huanuco', 'Ambo', 'Lauricocha', 'Pachitea'],
    'Ica': ['Ica', 'Chincha', 'Nazca', 'Pisco'],
    'Junin': ['Chupaca', 'Jauja', 'Junin', 'Satipo'],
    'La libertad': ['Trujillo', 'Ascope', 'Chepen', 'Otuzco'],
    'Lambayeque': ['Chiclayo', 'Ferreñafe', 'Lambayeque'],
    'Lima': ['Barranca', 'Cajatambo', 'Cañete'],
    'Loreto': ['Maynas', 'Putumayo', 'Alto Amazonas', 'Loreto'],
    'Madre de Dios': ['Tambopata', 'Manu', 'Tahumanu', 'Tuluá'],
    'Moquegua': ['Mariscal nieto', 'Sanchez cerro', 'Ilo', 'Tuluá'],
    'Pasco': ['Pasco', 'Oxapampa', 'Daniel A. Carrion', 'Tuluá'],
    'Piura': ['Ayabaca', 'Huancabamba', 'Morropon', 'Piura'],
    'Puno': ['San Roman', 'Puno', 'Azangaro', 'Carabaya'],
    'San Martín': ['Bellavista', 'El dorado', 'Huallaga', 'Lamas'],
    'Tacna': ['Tacna', 'Candarave', 'Tarata', 'Jorge Basadre'],
    'Tumbes': ['Tumbes', 'Zarumilla', 'Contralmirante Villar'],
    'Ucayali': ['Coronel Portillo', 'Atalaya', 'Padre Abad', 'Purús'],
};

document.addEventListener('DOMContentLoaded', () => {
    const selectProvincia = document.getElementById('selectProvincia');
    const selectCiudad = document.getElementById('selectCiudad');
    const provincias = Object.keys(datosUbicacion);

    
    provincias.forEach(provincia => {
        const option = document.createElement('option');
        option.value = provincia;
        option.textContent = provincia;
        selectProvincia.appendChild(option);
    });

    
    selectProvincia.addEventListener('change', (event) => {
        const provinciaSeleccionada = event.target.value;
        
        
        selectCiudad.innerHTML = '<option value="" selected disabled>Seleccione una provincia...</option>';
        selectCiudad.disabled = true; 

        if (provinciaSeleccionada && datosUbicacion[provinciaSeleccionada]) {
            const ciudades = datosUbicacion[provinciaSeleccionada];

            
            ciudades.forEach(ciudad => {
                const option = document.createElement('option');
                option.value = ciudad;
                option.textContent = ciudad;
                selectCiudad.appendChild(option);
            });

            
            selectCiudad.disabled = false;
        }
    });

    document.getElementById('formularioUbicacion').addEventListener('submit', (e) => {
        e.preventDefault();
        const prov = selectProvincia.value;
        const city = selectCiudad.value;
        alert(`Has seleccionado: ${prov} - ${city}`);
    });
});

function validate() {
    if (document.getElementById('nombre-mascota').value.trim() === '') {
        alert('El nombre del animal es requerido');
        return false;
    }

    if (document.getElementById('nombre').value.trim() === '') {
        alert('Su nombre es requerido');
        return false;
    }

    if (document.getElementById('apellido').value.trim() === '') {
        alert('Sus apellidos son requeridos');
        return false;
    }

    if (document.getElementById('dni').value.trim() === '') {
        alert('Su DNI es requerido');
        return false;
    }

    if (document.getElementById('nacimiento').value.trim() === '') {
        alert('Su año de nacimiento es requerido');
        return false;
    }

    if (document.getElementById('direccion').value.trim() === '') {
        alert('Su direccion es requerida');
        return false;
    }

    if (document.getElementById('telefono').value.trim() === '') {
        alert('Su número de teléfono es requerido');
        return false;
    }

    if (document.getElementById('email').value.trim() === '') {
        alert('Su correo electronico es requerida');
        return false;
    }

    if (document.getElementById('terminos').checked === false) {
        alert('Acepte los términos y condiciones');
        return false;
    }
}