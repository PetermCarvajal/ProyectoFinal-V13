//  Estilos
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}

//Funcion Volver

function regresar(){
    window.history.back();
}

//Funcion Copiar 

function copiarPortapapeles(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Texto copiado al portapapeles: " + text);
        })
        .catch((error) => {
            alert("Error al copiar al portapapeles: " + error);
        });
}

// Registro

document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');
    const usuarios = [];

    registroForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const usuario = {
            nombre: nombre,
            apellidos: apellidos,
            fechaNacimiento: fechaNacimiento,
            email: email,
            password: password
        };

        usuarios.push(usuario);

        localStorage.setItem('nombreUsuario', nombre);

        console.log(usuarios);

        window.location.href = 'landingpage.html';
    });
});

//Funcion Reportar

function Reportar(){
    const botonReportar = document.getElementById("Reportar")
    let Puntos=[20000];
    botonReportar.addEventListener("click", function() {
        Puntos.push(0.05);
    }
)}
function sumarPuntos(Puntos) {
    let suma = 0;
    for (const punto of Puntos) {
        suma += punto;
    }
    return suma;
}

//Adquirir Recompensas 

function Recompensas(Puntos) {
    var texto = document.querySelector(".text-center.mb-0").textContent;
    var valorNumerico = parseInt(texto.replace("/RP", "").trim());

    switch (valorNumerico) {
        case 1000:
            alert("Usted ha Elegido Una Tarjeta de Regalo A su Correo Llegara Toda la Información Correspondiente")
            Puntos-=1000;
            break;
        case 6000:
            alert("Usted ha Elegido una Consola A su Correo Llegara Toda la Información Corrrespondiente")
            Puntos-=6000;
            break;
        case 8000:
            alert("Usted ha Elegido un Computador A su Correo Llegara Toda la Información Correspondiente")
            Puntos-=8000;
            break;
        case 10000:
            alert("Usted ha Elegido una Moto a Su Correo Llegara Toda la Información Correspondiente")
            Puntos-=10000;
            break;
        
        case 12000:
            alert("Usted ha Elegido un Carro A Su Correo Llegara Toda la Información Correspondiente")
            Puntos-=12000;
            break;

        case 15000:
            alert("Usted ha Elegido un Viaje en Avión A su Correo Llegara Toda la Información Correspondiente")
            Puntos-=15000;
            break;
    }
}