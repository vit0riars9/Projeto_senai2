// atividade6
let Numero1 = parseFloat(prompt("Digite um número"));
 let Numero2 =parseFloat(prompt("Digite um segundo número"));
 let Numero3 = parseFloat(prompt("Digite um terceiro número"));
 let media;
 function calcularMedia(parN1, parN2, parN3){
  return (parN1+parN2+parN3)/3;
 }
 media= calcularMedia (Numero1, Numero2, Numero3);
 alert (`A media entre os números é: ${media.toFixed(2)}`);

 