function mostrarMensaje(respuesta) {
    var mensaje = document.getElementById("mensaje");
    var titulo = document.getElementById("titulo");
    var para = document.getElementById("para");
    var card = document.querySelector(".card");
    var heart = document.querySelector(".heart");
    var yesBtn = document.querySelector(".btn-yes");
    var noBtn = document.querySelector(".btn-no");

    // Obtener el nombre de la URL
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get("name") ? urlParams.get("name").toLowerCase() : "default";
    // Limpiar cualquier intervalo existente
    clearInterval(window.intervalo);

    mensaje.textContent = "";
    titulo.style.visibility = "hidden";
    para.style.visibility = "hidden";
    heart.style.visibility = "hidden";

    if (respuesta === "Yes") {
        
        document.body.style.backgroundImage = "url('./Resurces/hearts.gif')";
        
                // Mantener la imagen asignada según el nombre
                var imagen = "";
                switch (name)
                {
                    case "eduardo1201 cordova":
                        imagen = "url('./Resurces/PolaroidLalo1.jpg')";
                        var textoCompleto = "¡Te amo amor mio!💕";
                        break;
                    case "oscar0201 montoya":
                        imagen = "url('./Resurces/AAA003.jpg')";
                        var textoCompleto = "¡Te amo corazón de melón!💕";
                        break;
                    default:
                        imagen = "url('./Resurces/default.gif')";
                        var textoCompleto = "👀";
                        break;
                }
        card.style.backgroundImage = imagen;
        // 🔥 Ocultar los botones con una animación suave
        yesBtn.style.transition = "opacity 0.5s ease";
        noBtn.style.transition = "opacity 0.5s ease";
        yesBtn.style.opacity = "0";
        noBtn.style.opacity = "0";

        setTimeout(() => {
            yesBtn.style.display = "none";
            noBtn.style.display = "none";
        }, 500); // Esperar a que termine la animación antes de ocultarlos

        
    } else {
        card.style.backgroundImage = "url('./Resurces/PleaseCatGif.gif')";
        document.body.style.backgroundImage = "none";
        var textoCompleto = "Ya no me amas acaso :(?";
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

// Lógica para mover el botón "No"
const noBtn = document.getElementById("no-btn");
const container = document.querySelector(".card");

noBtn.addEventListener("mouseenter", () => {
    // Obtener dimensiones del contenedor y del botón
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();

    // Calcular nuevas coordenadas dentro del contenedor
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Aplicar nuevas coordenadas
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get("name") ? urlParams.get("name").toLowerCase() : "default";
    var para = document.getElementById("para");
    var card = document.querySelector(".card");

    switch (name)
    {
        case "eduardo1201 cordova":
            para.textContent ="For: Eduardo Cordova";
            break;
        case "oscar0201 montoya":
            para.textContent ="For: Oscar Montoya ";
            break;
        default:
            para.textContent ="Que andas buscandoooo chismoso";
            break;
    }
});

