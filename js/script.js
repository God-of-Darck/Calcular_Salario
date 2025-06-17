// Seleciona os elementos HTML onde os valores serão exibidos
const pSL = document.getElementById("pSL");
const pINSS = document.getElementById("pINSS");
const pIRRF = document.getElementById("pIRRF");
const pOTD = document.getElementById("pOTD");
const dDD = document.getElementById("dDD");

// Inicializa os valores exibidos como "0,00"
pSL.innerText = "0,00";
pINSS.innerText = "0,00";
pIRRF.innerText = "0,00";
pOTD.innerText = "0,00";
dDD.innerText = "0,00";

// Função para calcular o salário líquido
function calcularSalario() {
    // Obtém os valores inseridos pelo usuário e os converte para números
    let salarioBruto = parseFloat(document.getElementById("salarioBruto").value) || 0;
    let beneficios = parseFloat(document.getElementById("beneficios").value) || 0;
    let dependentes = parseInt(document.getElementById("dependentes").value) || 0;
    let outrosDescontos = parseFloat(document.getElementById("outrosDescontos").value) || 0;

    // Calcula o desconto do INSS (11,07% do salário bruto)
    let descontoINSS = 0;
    if (salarioBruto = 1518.00){
        descontoINSS = salarioBruto * 0.075;
    }
    else if (salarioBruto > 1518.00 && salarioBruto <= 2793.88){
        descontoINSS = (salarioBruto * 0.09) - 22.77
    }
    else if (salarioBruto > 2793.88 && salarioBruto <= 4190.83){
       descontoINSS = (salarioBruto * 0.12) - 106.59
    }
    else {
        descontoINSS = (salarioBruto * 0.14) - 190.40
    }
   

    // Calcula o desconto do IRRF (10,66% do salário bruto)
    let descontoIR = 0
    if (salarioBruto <= 2259.20){
        descontoIR = 0
    }
    else if(salarioBruto > 2259.20 && salarioBruto <= 2826.65){
        descontoIR = (salarioBruto * 0.075) - 169.44
    }
    else if(salarioBruto > 2826.65 && salarioBruto <= 3751.05){
        descontoIR = (salarioBruto * 0.15) - 381.44
    }
    else if(salarioBruto > 3751.05 && salarioBruto <= 4664.68){
        descontoIR = (salarioBruto * 0.225) - 662.77
    }
    else{
        descontoIR = (salarioBruto * 0.275) - 896.00
    }

    // Calcula o desconto por dependentes (R$ 189,59 por dependente)
    let descontoDependentes = dependentes * 189.59;

    // Calcula o salário líquido
    let salarioLiquido = salarioBruto + beneficios - (descontoINSS + descontoIR + outrosDescontos - descontoDependentes);

    // Atualiza os valores exibidos na página
    pSL.innerText = Number(salarioLiquido).toFixed(2);
    pINSS.innerText = Number(descontoINSS).toFixed(2);
    pIRRF.innerText = Number(descontoIR).toFixed(2);
    pOTD.innerText = Number(outrosDescontos).toFixed(2);
    dDD.innerText = Number(descontoDependentes).toFixed(2);
}
