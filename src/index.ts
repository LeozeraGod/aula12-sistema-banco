/**
 * Crie um programa que simule as operações de uma conta corrente,
 * onde o cliente deve poder fazer o seguinte:
 * - Consultar saldo,
 * - Fazer um depósito,
 * - Fazer um saque
 * - Imprimir um extrato.
 * Utilize estruturas de dados em memória
 * para armazenar as informações da conta e
 * das operações feitas pela conta.
 */

import Scanner from "@codeea/scanner";

let scanner: Scanner;

type Conta = {
    nomeCliente: string;
    numeroConta: number;
    agencia: number;
    saldo: number;
}

type Transacao = {
    id: string;
    valor: number;
    tipo: TipoTransacao;
    operacao: TipoOperacao;
}

type TipoTransacao = "E" |"S";

type TipoOperacao= "SAQUE" | "DEP" | "TRANSF" | "PIX";

async function main() {
let operacao = 0;

do {
    imprimeMenu();
    operacao = parseInt(await scanner.question("Informe a operação: "))

    if (operacao === 0) {
        console.log("Obrigado por utilizar nossos serviços!\nVolte Sempre!");
        break;
        }
    } while(true);
}

function imprimeMenu() {
    const menu = `
    1 - CONSULTAR SALDO
    2 - DEPOSITAR
    3 - SACAR
    4 - EXTRATO
    0 - SAIR
    `;
    console.log(menu);

}

(async () => {
    scanner = new Scanner();
    await main();
    scanner.close();
})();
