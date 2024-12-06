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
import { randomUUID } from "node:crypto"; // importa a biblioteca de identificadores
import Scanner from "@codeea/scanner";

let scanner: Scanner;

type Conta = {
    nomeCliente: string;
    numero: number;
    agencia: number;
    saldo: number;
}

type Transacao = {
    id: string;
    valor: number;
    numeroConta: number;
    agencia: number;
    tipo: TipoTransacao;
    operacao: TipoOperacao;
}

type TipoTransacao = "E" |"S";

type TipoOperacao= "SAQUE" | "DEP" | "TRANSF" | "PIX";

const contas: Conta[] = [];
const transacoes: Transacao[] = [];

async function main() {
let operacao = 0;

const agencia = parseInt(await scanner.question("Informe o Número da agencia: "));
const numeroConta = parseInt(await scanner.question("Informe o Número da conta: "));

let Conta = localizaConta(agencia, numeroConta);

if(!Conta){
    console.log("Conta não encontrada!");
}

do {
    imprimeMenu();
    operacao = parseInt(await scanner.question("Informe a operação: "))

    if (operacao === 0) {
        console.log("Obrigado por utilizar nossos serviços!\nVolte Sempre!");
        break;
        }


    //Operações

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

function inicializarBanco() {
    const conta: Conta = {
        nomeCliente: "Leonardo de Souza",
        numero: 1234,
        agencia: 1,
        saldo: 100,
    };

    contas.push(conta);
    const trasacao: Transacao = {
        id: randomUUID(), //Gera um identificador único para cada transação
        valor: 100, // Valor da transação
        numeroConta: conta.numero, //Numero da CONTA
        agencia: conta.agencia,
        tipo: "E",
        operacao: "DEP"
    };
    transacoes.push(trasacao)
}

function localizaConta(agencia: number, numeroConta: number) {
    for (let conta of contas) {
        if (conta.agencia === agencia && conta.numero === numeroConta) {
            return conta;
        }
    }
}

(async () => {
    scanner = new Scanner();

    inicializarBanco();

    await main();
    scanner.close();
})();


