import { Estudante } from "./Estudante";

export function main(){

    const estudante: Estudante = new Estudante('Elisangela')

    estudante.visualizar()
    estudante.escrever()
    
}

main()