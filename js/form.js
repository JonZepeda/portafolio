// ===== Validación del Formulario =====
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-contacto");
    const mensajeExito = document.getElementById("mensaje-exito");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (!nombre || !email || !mensaje) {
            alert("Por favor completa todos los campos antes de enviar.");
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailValido) {
            alert("Por favor ingresa un correo electrónico válido.");
            return;
        }

        try {
            const respuesta = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });

            if (respuesta.ok) {
                form.reset();
                mensajeExito.style.display = "block";
                setTimeout(() => (mensajeExito.style.display = "none"), 4000);
            } else {
                alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
            }
        } catch (error) {
            alert("Error de conexión. Inténtalo más tarde.");
        }
    });
});
