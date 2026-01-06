import { converte } from "./Funcoes";

export function main() {
    

    try{


        const resultado = converte(123);
        console.log(resultado);

    }catch(error){ // Captura o possível erro

        if (error instanceof TypeError){ // Verifica o tipo do erro
            console.error("TypeError: " + error.message)
            console.error("Usuário, está havendo um erro nessa função relacionado ao tipo do conteúdo. Por favor insira o valor textual")
        }

    }finally{
        console.log("Sempre irei executar");
    }
    

}

main()


