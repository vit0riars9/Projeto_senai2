//atividade1
let peso = parseFloat(prompt ("Digite seu peso:"));
let altura = parseFloat(prompt ("Digite sua altura"));
let imc;
 
function calcularImc (parPeso, parAltura){
     return parPeso/(parAltura * parAltura);
    }
imc= calcularImc (peso, altura);
alert (`O seu imc é ${imc.toFixed(2)}`);