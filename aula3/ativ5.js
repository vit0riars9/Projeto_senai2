//atividade5
let altura = prompt ("Digite a altura da sala");
let largura = prompt ("Digite a largura da sala");
 
function area (parAlt, parLarg) {
  return parAlt * parLarg;
}
function perimetro (paraAlt, paraLarg){
  return (paraAlt*2)+(paraLarg*2)
}
let areaSala = area (altura, largura);
let perimetroSala = perimetro (altura,largura);
alert (`O perímetro da sala é de: ${perimetroSala} e da area:${areaSala}`);