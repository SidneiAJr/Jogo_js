const readline = required('require-sync')

op = Number(prompt("Insira a Opção que Gostaria de Fazer:  "))

function menu(){
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