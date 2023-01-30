/*Este es un simulador para el cálculo de la ecuación de Friedewald. Esta ecucación sirve para calcular el colesterol malo o hdl, en base al conocimiento de los valores de colesterol total, triglicéridos y colesterol bueno o hdl. Generalmente es una herramienta que utilizan los médicos, pero cualquier persona que se haya hecho estos análisis y no se hizo el colesterol malo, lo puede obtener. Se necesita haberse realizado un análisis de sangre, para tener los valores a ingresar.
Declaración de funciones */
//Función para calcular el colesterol malo en base a los otro parámetros
function ecuacionDeFriedewald (colesterolTotal, hdl, trigliceridos){
    let ldlCalculado = colesterolTotal - hdl - (trigliceridos/5);
    return ldlCalculado;
}
// Función para evaluar el resultado y devolver una valoración
function mostrarResultadoValoracion (ldl) {
    alert ("Tu valor de ldl es de " + ldl);
    if (ldl < 70 ) {
    alert ("Tus valores de ldl están óptimos. Sigue así!!!");
}
    else if (ldl >= 70 && ldl < 130) {
    alert ("Tus valores de ldl están normales. Puedes chequearte el año próximo.");
}
    else if (ldl >= 130 && ldl <= 160){
    alert ("Tus valores de ldl están levemente excedidos de lo normal. Agenda un turno con un profesional para controlarte periódicamente.");
}
    else if (ldl > 160) {
    alert ("Tus valores de ldl están extremadamente altos. Consulta urgente con un profesional!!!");
}
}

alert("Buenas, te voy a ayudar a calcular tus niveles de colesterol malo, y así poder chequear tu salud!!");
let colesterolTotal;
do {
    colesterolTotal = parseInt(prompt("Ingresá tu valor de colesterol total"));
    if (isNaN(colesterolTotal)) alert("Ingresá un valor numérico válido para colesterol total");
} while (isNaN(colesterolTotal) && colesterolTotal > 0);

let hdl;
do {
    hdl = parseInt(prompt("Ingresá tu valor de hdl"));
    if (isNaN(hdl)) alert("Ingresá un valor numérico válido para hdl");
} while (isNaN(hdl) && hdl > 0);

let trigliceridos;
do {
    trigliceridos = parseInt(prompt("Ingresá tu valor de triglicéridos"));
    if (isNaN(trigliceridos)) alert("Ingresá un valor numérico válido para triglicéridos");
} while (isNaN(trigliceridos) && trigliceridos > 0);

let ldl = ecuacionDeFriedewald(colesterolTotal, hdl, trigliceridos);
mostrarResultadoValoracion(ldl);






