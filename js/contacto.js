document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-contacto");
  const mensajeExito = document.getElementById("mensaje-exito");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!validarFormulario(nombre, email, asunto, mensaje)) {
      return;
    }

    const datos = {
      nombre: nombre,
      email: email,
      asunto: asunto,
      mensaje: mensaje,
      time: Date.now(),
    };

    enviarEmailConEmailJS();
  });

  function validarFormulario(nombre, email, asunto, mensaje) {
    if (nombre.length < 2) {
      mostrarError("El nombre debe tener al menos 2 caracteres");
      return false;
    }

    if (!validarEmail(email)) {
      mostrarError("Por favor, ingresa un email válido");
      return false;
    }

    if (asunto.length < 3) {
      mostrarError("El asunto debe tener al menos 3 caracteres");
      return false;
    }

    if (mensaje.length < 10) {
      mostrarError("El mensaje debe tener al menos 10 caracteres");
      return false;
    }

    return true;
  }

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function mostrarError(mensaje) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "contacto__mensaje-error";
    errorDiv.textContent = mensaje;
    errorDiv.style.cssText = `
            background-color: #ef4444;
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            text-align: center;
            font-weight: 500;
        `;

    formulario.insertBefore(errorDiv, formulario.firstChild);

    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }

  function enviarEmailConEmailJS() {
    const botonSubmit = formulario.querySelector('button[type="submit"]');
    const textoOriginal = botonSubmit.textContent;

    botonSubmit.textContent = "Enviando...";
    botonSubmit.disabled = true;

    emailjs
      .sendForm("service_0m5vdoq", "template_0pmzkd7", formulario)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);

        formulario.reset();
        mensajeExito.style.display = "block";

        setTimeout(() => {
          mensajeExito.style.display = "none";
        }, 5000);
      })
      .catch(function (error) {
        console.log("FAILED...", error);
        mostrarError(
          "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
        );
      })
      .finally(function () {
        botonSubmit.textContent = textoOriginal;
        botonSubmit.disabled = false;
      });
  }
});
