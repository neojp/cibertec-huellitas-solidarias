function validate() {
    if (document.getElementById('nombre').value.trim() === '') {
        alert('Su nombre es requerido');
        return false;
    }

    if (document.getElementById('email').value.trim() === '') {
        alert('Su correo electronico es requerida');
        return false;
    }

    if (document.getElementById('telefono').value.trim() === '') {
        alert('Su número de teléfono es requerido');
        return false;
    }

    if (document.getElementById('mensaje').value.trim() === '') {
        alert('Su mensaje es requerido');
        return false;
    }
}