function validarForm(event) {
    event.preventDefault();
    limpiarErrores();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const genero = document.getElementById('genero');
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    let esValido = true;
    function mostrarError(id, mensaje) {
        esValido = false;
        const resultado = document.getElementById('resultado');
        const divError = document.createElement('div');
        divError.className = "error";
        divError.innerHTML = id + " - " + mensaje;
        resultado.appendChild(divError);
    }
    function limpiarErrores() {
        const contenedor = document.getElementById('resultado');
        contenedor.innerHTML = "";
    }

    const ExpreRegNombre = /^[A-Za-z\s]{10,30}$/;

    if (nombre.length === 0) {
        mostrarError('nombre', "El Nombre y Apellido es obligatorio");
    } else if (nombre.length < 10 || nombre.length > 40) {
        mostrarError('nombre', "El Nombre y Apellido debe tener entre 10 y 40 caracteres.");
    } else if (!ExpreRegNombre.test(nombre)) {
        mostrarError('nombre', "El Nombre y Apellido no puede contener numeros o caracteres especiales.");
    }

    const ExpreRegEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0) {
        mostrarError('email', "El Email es obligatorio");
    } else if (!ExpreRegEmail.test(email)) {
        mostrarError('email', "El formato del email no es valido");
    }

    if (genero.value === "") {
        mostrarError('genero', "Debe elegir una opcion");
    }

    if (password.length === 0) {
        mostrarError('password', "La contraseña es obligatoria");
    } else if (password.length < 10 || password.length > 30) {
        mostrarError('password', "La contraseña debe tener entre 10 y 30 caracteres");
    } else if (password !== confirmPassword) {
        mostrarError('password', "Las contraseñas no coinciden");
    }

    if (mensaje.length > 250) {
        mostrarError('mensaje', "El mensaje no debe tener mas de 250 caracteres");
    }

    const contenedorErrores = document.getElementById("resultado");

    // Si hay errores, bajamos hasta el contenedor
    if (contenedorErrores.children.length > 0) {
        contenedorErrores.scrollIntoView({ behavior: "smooth" });
    }

    if (esValido) {
        const resultado = document.getElementById('resultado');
        const divExito = document.createElement('div');
        divExito.className = "exito";
        divExito.innerHTML = "Señor/a " + nombre + ", su formulario se ha enviado correctamente.";
        resultado.appendChild(divExito);
    }

}