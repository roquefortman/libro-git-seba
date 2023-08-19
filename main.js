let form_registro = document.getElementById("form_registro"); //Debo obtener primero el elemento del formulario antes de pasarlo al FormData
let formData = new FormData(form_registro);

let usuario = formData.get("usuario");
let contraseña = formData.get("contraseña");
let correo_electronico = formData.get("correo_electronico");
let sexo = formData.get("sexo");
let campeonfav = formData.get("campeonfav");
let posicion = formData.get("posicion");

let btnenviar=document.querySelector("#btnenviar");
let btncomprobar=document.querySelector("#btncomprobar");
let numerocaptcha=document.querySelector("#numerocaptcha"); //Numero generado aleatoriamente
let numcomprobacion=document.querySelector("#numcomprobacion"); //Numero introducido por usuario
let captcha=document.querySelector("#captcha");
let txtcorrecto=document.querySelector("#txtcorrecto");
let txtincorrecto=document.querySelector("#txtincorrecto");


//Apartado de eventos

btnenviar.addEventListener("click",numrandom);  
btncomprobar.addEventListener("click",comprobar);


//Apartado de funciones

function numrandom() {
    
    captcha.classList.remove("oculto");     //Muestra el captcha
    let num= Math.floor(Math.random()*9+1); //Genera el numero aleatorio
    numerocaptcha.innerHTML=num;            //Muestra el numero aleatorio
    event.preventDefault();                 //Evita que se recargue la pagina al pulsar el boton "Enviar"
}

function comprobar(){ //Esta funcion comprueba si el numero introducido es igual al generado por la funcion numrandom
   
    if (numerocaptcha.innerHTML === numcomprobacion.value) {
        txtcorrecto.classList.remove("oculto"); // Si el captcha se puso bien, muestra el texto correcto
        txtincorrecto.classList.add("oculto"); // Oculta el texto incorrecto
      } else {
        txtcorrecto.classList.add("oculto"); // Oculta el texto correcto
        txtincorrecto.classList.remove("oculto"); // Si el captcha está mal, muestra el texto incorrecto
      }
    event.preventDefault(); //Evita que se recargue la pagina al pulsar el boton "Comprobar"
}

