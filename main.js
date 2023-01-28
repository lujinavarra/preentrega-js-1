function ecuacionDeFriedewald (colesterolTotal, hdl, trigliceridos){
    let ldlCalculado = colesterolTotal - hdl - (trigliceridos/5);
    return ldlCalculado;
}

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


let colesterolTotal;
do {
    colesterolTotal = parseInt(prompt("Ingresá tu valor de colesterol total"));
    if (isNaN(colesterolTotal)) alert("Ingresá un valor numérico válido para colesterol total");
} while (isNaN(colesterolTotal));

let hdl;
do {
    hdl = parseInt(prompt("Ingresá tu valor de hdl"));
    if (isNaN(hdl)) alert("Ingresá un valor numérico válido para hdl");
} while (isNaN(hdl));

let trigliceridos;
do {
    trigliceridos = parseInt(prompt("Ingresá tu valor de triglicéridos"));
    if (isNaN(trigliceridos)) alert("Ingresá un valor numérico válido para triglicéridos");
} while (isNaN(trigliceridos));

let ldl = ecuacionDeFriedewald(colesterolTotal, hdl, trigliceridos);
mostrarResultadoValoracion(ldl);






