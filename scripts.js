// Función para mostrar el modal
function mostrarModal() {
    document.getElementById("modal-overlay").style.display = "flex";
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal-overlay").style.display = "none";
}

// Función de inicio de sesión
function iniciarSesion(email, password) {
    console.log(`Iniciando sesión con: ${email} y ${password}`);
    alert("Iniciando sesión...");
}

// Manejo del envío del formulario de inicio de sesión
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    iniciarSesion(email, password);
});

// Función para recuperar cuenta
function recuperarCuenta(email) {
    console.log(`Recuperando cuenta para: ${email}`);
    alert(`Instrucciones para recuperar la cuenta han sido enviadas a ${email}`);
}

// Manejo del envío del formulario de recuperación
document.getElementById("recover-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("recovery-email").value;
    recuperarCuenta(email);
});

// Función de registro de cuenta
function registrarCuenta() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    console.log(`Registrado: ${firstName} ${lastName}, Email: ${email}, Contraseña: ${password}, Género: ${gender}`);
    alert("¡Cuenta creada con éxito!");
}

// Manejo del envío del formulario de registro
document.getElementById("signup-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    registrarCuenta();
});