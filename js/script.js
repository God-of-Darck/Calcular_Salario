// script.js

const pSL = document.getElementById("pSL");
const pINSS = document.getElementById("pINSS");
const pIRRF = document.getElementById("pIRRF");
const pOTD = document.getElementById("pOTD");
const dDD = document.getElementById("dDD");

pSL.innerText = "0,00";
pINSS.innerText = "0,00";
pIRRF.innerText = "0,00";
pOTD.innerText = "0,00";
dDD.innerText = "0,00";

function calcularSalario() {
    let salarioBruto = parseFloat(document.getElementById("salarioBruto").value) || 0;
    let beneficios = parseFloat(document.getElementById("beneficios").value) || 0;
    let dependentes = parseInt(document.getElementById("dependentes").value) || 0;
    let outrosDescontos = parseFloat(document.getElementById("outrosDescontos").value) || 0;
    
    let descontoINSS = salarioBruto * 0.1107;
    let descontoIR = salarioBruto * 0.1066;
    let descontoDependentes = dependentes * 189.59;
    
    let salarioLiquido = salarioBruto + beneficios - (descontoINSS + descontoIR + outrosDescontos - descontoDependentes);


    pSL.innerText = Number(salarioLiquido).toFixed(2);
    pINSS.innerText = Number(descontoINSS).toFixed(2);
    pIRRF.innerText = Number(descontoIR).toFixed(2);
    pOTD.innerText = Number(outrosDescontos).toFixed(2);
    dDD.innerText = Number(descontoDependentes).toFixed(2);
   // alert("Seu salário líquido é: R$ " + salarioLiquido.toFixed(2));
}
