/*
=====================================
Libs usadas :
- Nodemon 
- readline
- promptsync(bugado)
*/


import { criarPersonagem } from "./logica.js";
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
}

async function menu() {
    let rodando = true;
    
    while (rodando) {
        console.log("\n============= MENU PRINCIPAL =============");
        console.log("1 - Jogar");
        console.log("2 - Modo GM (Administrador)");
        console.log("3 - Sair");
        console.log("==========================================");
        
        // AWAIT aqui! (espera o usuário digitar)
        let op = await perguntar("Escolha uma opção: ");
        
        switch(op) { // op é STRING (vem do usuário)
            case '1':
                console.log("\n🎮 Iniciando jogo...");
                await criarPersonagem(menu); // await aqui também!
                break;
                
            case '2':
                console.log("\n🔧 Modo GM ativado!");
                console.log("Hm? Parece que quer jogar como ADM? Suspeito!");
                await perguntar("\nPressione Enter para continuar...");
                break;
                
            case '3':
                console.log("Saindo do jogo. Até mais, guerreiro!");
                rodando = false;
                rl.close();
                break;
                
            default:
                console.log("☢️ Opção inválida! Tente novamente.");
                await perguntar("\nPressione Enter para continuar...");
        }
    }
}

// Inicia o jogo
menu();