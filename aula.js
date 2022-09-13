var numeroMulheres = 0;
var numeroHomens = 0;
var totalAlturaHomens = 0;
var mediaAlturaHomens = 0;
var maiorAltura = 0;
var menorAltura = 0;


for(var i=0; i< 15; i++) {

    var pergunta = "Pessoa " + (i+1) + " - M ou F?"
    var sexo = prompt(pergunta);
    var altura = parseFloat(prompt("Qual sua altura?"));

    if (sexo.toUpperCase() == "F")
        numeroMulheres++;
    else if (sexo.toUpperCase() == "M") {
        numeroHomens++;
        totalAlturaHomens = totalAlturaHomens + altura;    
    }

    if (i == 0) {
        maiorAltura = altura;
        menorAltura = altura;
    } else {

        if (altura > maiorAltura)
            maiorAltura = altura;
        if (altura < menorAltura)
            menorAltura = altura;
    }
}

if (numeroHomens >0 )
    mediaAlturaHomens = (totalAlturaHomens/numeroHomens).toFixed(2);

console.log("A maior altura é " + maiorAltura + " e a menor altura é " + menorAltura);
console.log("A média de altura dos homens é:", mediaAlturaHomens);
console.log("O numero total de mulheres é:", numeroMulheres);