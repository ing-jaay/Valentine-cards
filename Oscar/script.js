function mostrarMensaje(respuesta) {
    var mensaje = document.getElementById("mensaje");
    var titulo = document.getElementById("titulo");
    var para = document.getElementById("para");
    var card = document.querySelector(".card");
    var heart = document.querySelector(".heart");

    // Limpiar cualquier intervalo existente
    clearInterval(window.intervalo);

    mensaje.textContent = "";
    titulo.style.visibility = "hidden";
    para.style.visibility = "hidden";
    heart.style.visibility = "hidden";

    if (respuesta === "Yes") {
        card.style.backgroundImage = "url('./Resurces/PolaroidLalo1.jpg')";
        document.body.style.backgroundImage = "url('./Resurces/hearts.gif')"; //
        // Texto que se va a escribir poco a poco
        var textoCompleto = "¡Te quiero mucho mi amor!";
    } else {
        card.style.backgroundImage = "url('./Resurces/PleaseCatGif.gif')";
        document.body.style.backgroundImage = "none";
        var textoCompleto = "Ya no me quieres acaso :(?";
    }

    var indice = 0;

    // Función para escribir el texto poco a poco
    window.intervalo = setInterval(function() {
        if (indice < textoCompleto.length) {
            mensaje.textContent += textoCompleto.charAt(indice);
            indice++;
        } else {
            clearInterval(window.intervalo);
        }
    }, 100); // Tiempo entre cada caracter (en milisegundos)

    mensaje.style.display = "block";
}

