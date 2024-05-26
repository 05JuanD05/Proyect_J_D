document.getElementById('formularioPedido').addEventListener('submit', function(evt) {
        evt.preventDefault(); // Prevenir el envío del formulario por defecto

        // Recoger los datos del formulario
        var formulario = this;
        var formData = new FormData(formulario);

        // Configurar el servicio de EmailJS
        emailjs.init('6Gc7kLFwcCmVs-VFR'); // Reemplaza TU_USER_ID con tu ID de usuario de EmailJS

        // Enviar el correo usando EmailJS
        emailjs.sendForm('service_w6drvsi', 'template_ottb6hf', formData)
            .then(function(response) {
                alert("¡Pedido realizado con éxito! Te contactaremos pronto.");
                formulario.reset(); // Limpiar el formulario después de enviar
            }, function(error) {
                console.error("Error al enviar el pedido:", error);
                alert("Hubo un error al enviar el pedido. Por favor, inténtalo de nuevo más tarde.");
            });
    });