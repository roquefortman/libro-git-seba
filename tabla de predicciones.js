let form_input_tabla = document.getElementById("form_input_tabla"); //Debo obtener primero el elemento del formulario antes de pasarlo al FormData
let formData = new FormData(form_input_tabla);

let btn_agregar=document.querySelector("#btn_agregar");
let btn_agregar_3=document.querySelector("#btn_agregar_3");
let equipo1_input = document.querySelector('input[name="equipo1"]');
let equipo2_input = document.querySelector('input[name="equipo2"]');
let resultado_input = document.querySelector('input[name="resultado"]');
let tabla=document.querySelector("tbody");                  //algún valor en los campos de entrada, y dara un valor vacio
let prediccion=[]; //arreglo donde pondre los objetos
let btn_borrar=document.querySelector("#btn_borrar");

btn_agregar.addEventListener("click",agregar_prediccion);
btn_agregar_3.addEventListener("click",agregar_prediccion3);
btn_borrar.addEventListener("click",borrar_tabla);

function agregar_prediccion3(){

    agregar_prediccion();
    agregar_prediccion();
    agregar_prediccion();

    event.preventDefault;
}

function agregar_prediccion() {
        
    let equipo1 = equipo1_input.value;
    let equipo2 = equipo2_input.value;
    let resultado = resultado_input.value;

    let nueva_prediccion = {
        equipo1: equipo1,
        equipo2: equipo2,
        resultado: resultado,
    };

        prediccion.push(nueva_prediccion); //agrego los objetos al arreglo

        

             //agrega la fila a la tabla
            tabla.innerHTML+=
            "<tr>" +
            "<td>" + equipo1 + "</td>" +
            "<td>" + resultado + "</td>" +
            "<td>" + equipo2 + "</td>" +
            "</tr>";

        event.preventDefault();     //Evita que la pagina recargue al presionar el boton agregar

        console.log(prediccion);
    }

 function borrar_tabla(){
        tabla.innerHTML="";
        prediccion=[];  //Vacio el arreglo
        console.log(prediccion);
        event.preventDefault(); //Evita que la pagina recargue al presionar el boton borrar
  }