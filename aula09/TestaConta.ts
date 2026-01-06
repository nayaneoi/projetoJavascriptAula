import { Conta } from "./Conta"

export function main(){

    //INTANCIA DA CLASSE CONTA // Instanciar um Objeto é a ação de criar um novo - Instanciar um objeto é o termo correto para a ação de criar um obejto
    // INSTANCIAMENTO DE UM OBJETO
    const conta1: Conta = new Conta(12156, 108, 1, "Michelle", 100000)

    console.log("Titular da conta: " + conta1.titular)

    conta1.saldo = 150

    console.log("Saldo da conta: " + conta1.saldo)
}

main()
