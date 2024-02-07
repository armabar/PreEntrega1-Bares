
let nombre = prompt("Ingresa tu nombre");
alert("Bienvenido/a " + nombre);
let localidadDisponible = "CABA";
let localidad = false;

for (let i = 1; i >= 0; i--) {
  let localidadCliente = prompt("Ingresa tu localidad");
  if (localidadCliente === localidadDisponible){
    alert("Podemos enviar tu pedido")
    localidad = true;
    break;
  } else {
    alert("Localidad no disponible")
  }
}



if (localidad) {
  let menu = prompt("Elegí una opción: \n1- Hamburguesas. \n2 - Guarniciones. \n3 - Bebidas. \nPresioná X para finalizar.");

  while (menu !== "X") {
    if (menu == "1") {
      alert ("Tenemos disponible la hamburguesa Deniro, la onion burguer o la blue cheese");
    } else if (menu == "2") {
      alert ("Tenemos disponible papas fritas Deniro o aros de cebolla");
    } else if (menu == "3") {
      alert("Tenemos disponible cerveza tirada, gaseosas o tragos de autor");
    }
    menu = prompt("Elegí una opción: \n1- Hamburguesas. \n2 - Guarniciones. \n3 - Bebidas. \nPresioná X para finalizar.");
  }

} else {
  alert("Fuera de CABA no hay sucursales Deniro");
}


/*let numero1 = parseFloat(prompt("Ingresa el monto de la orden"));
let numero2 = parseFloat(prompt("Ingresa el monto con el que pagas"));
let operacion = "-";


function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "-":
      return numero1 - numero2;
  
    default:
      return "Operacion no valida";
  }
}*/




