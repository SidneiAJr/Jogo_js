import {} from 
import {} from 

const prompt = require('prompt-sync')();

function menu(){
    let op = Number(prompt("Insira a Opção que Gostaria de Fazer|  1- Jogar 2-Lutar 3- Retorno ao Menu 4-Seila"))
    switch(op){
         case 1:
            jogar();
        break;
        case 2:
            lutar();
            break;
        case 3:
            menu();
            break;
    }
}

menu();