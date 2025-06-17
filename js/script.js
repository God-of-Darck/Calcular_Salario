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

function calcularSalario() {
    // Obtém os valores inseridos pelo usuário
    const salarioBruto = parseFloat(document.getElementById("salarioBruto").value) || 0;
    const beneficios = parseFloat(document.getElementById("beneficios").value) || 0;
    const dependentes = parseInt(document.getElementById("dependentes").value) || 0;
    const outrosDescontos = parseFloat(document.getElementById("outrosDescontos").value) || 0;

    // === Cálculo do INSS (tabela progressiva de 2024) ===
    let salarioBaseINSS = salarioBruto;
    let descontoINSS = 0;

    if (salarioBaseINSS > 7786.02) salarioBaseINSS = 7786.02;

    if (salarioBaseINSS > 4000.03)
        descontoINSS += (salarioBaseINSS - 4000.03) * 0.14;
    if (salarioBaseINSS > 2666.68)
        descontoINSS += (Math.min(salarioBaseINSS, 4000.03) - 2666.68) * 0.12;
    if (salarioBaseINSS > 1412.00)
        descontoINSS += (Math.min(salarioBaseINSS, 2666.68) - 1412.00) * 0.09;
    descontoINSS += Math.min(salarioBaseINSS, 1412.00) * 0.075;

    // === Desconto por dependentes ===
    let descontoDependentes = dependentes * 189.59;

    // === Cálculo do IRRF (com base de cálculo) ===
    let baseIR = salarioBruto - descontoINSS - descontoDependentes;
    let descontoIR = 0;

    if (baseIR <= 2259.20) {
        descontoIR = 0;
    } else if (baseIR <= 2826.65) {
        descontoIR = baseIR * 0.075 - 169.44;
    } else if (baseIR <= 3751.05) {
        descontoIR = baseIR * 0.15 - 381.44;
    } else if (baseIR <= 4664.68) {
        descontoIR = baseIR * 0.225 - 662.77;
    } else {
        descontoIR = baseIR * 0.275 - 896.00;
    }

    if (descontoIR < 0) descontoIR = 0; // Evita valores negativos

    // === Cálculo do salário líquido ===
    let salarioLiquido = salarioBruto + descontoDependentes + beneficios - (descontoINSS + descontoIR + outrosDescontos);

    // === Atualiza os valores no HTML ===
    pSL.innerText = salarioLiquido.toFixed(2);
    pINSS.innerText = descontoINSS.toFixed(2);
    pIRRF.innerText = descontoIR.toFixed(2);
    pOTD.innerText = outrosDescontos.toFixed(2);
    dDD.innerText = descontoDependentes.toFixed(2);

    console.info("Salario Bruto: ",salarioBruto)
    console.info("Desconto INSS: ",descontoINSS)
    console.info("Desconto IR: ",descontoIR)
    console.info("Outros Descontos: ",outrosDescontos)
    console.info("Desconto Dependentes: ", descontoDependentes)
    console.info("Valor final/Salario Liquido: ",salarioLiquido)
}
