const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let codigomatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i <  codigomatriz.length; i++){
        if (stringEncriptada.includes(codigomatriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(codigomatriz[i][0], codigomatriz[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada){
    let codigomatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i <  codigomatriz.length; i++){
        if (stringDesencriptada.includes(codigomatriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(codigomatriz[i][1], codigomatriz[i][0])
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    // Seleccionar el texto dentro del textarea
    mensaje.select();

    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Deselecciona el texto para evitar confusión visual
    window.getSelection().removeAllRanges();

    // Mostrar un mensaje de copiado en la interfaz de usuario
    const mensajeCopia = document.createElement("div");
    mensajeCopia.textContent = "¡Texto copiado!";
    mensajeCopia.style.position = "fixed";
    mensajeCopia.style.top = "20px";
    mensajeCopia.style.left = "50%";
    mensajeCopia.style.transform = "translateX(-50%)";
    mensajeCopia.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    mensajeCopia.style.color = "white";
    mensajeCopia.style.padding = "10px 20px";
    mensajeCopia.style.borderRadius = "8px";
    mensajeCopia.style.zIndex = "9999";
    document.body.appendChild(mensajeCopia);

    // Borrar el mensaje después de unos segundos
    setTimeout(function() {
        mensajeCopia.remove();
    }, 2000); // 2000 milisegundos (2 segundos)
    mensaje.style.backgroundImage = "url('img/copia.png')";
    mensaje.value = "";
}

