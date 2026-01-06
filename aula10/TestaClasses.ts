import { Terrestre } from "./Terrestre"

export function main(){

    // Iniciando o Objeto da Classe Terreste
    const bike: Terrestre = new Terrestre(2, 2, 20)

    console.log("A capacidade do meio de transporte é: " + bike.capacidade)
}

main()