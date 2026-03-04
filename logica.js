import { Personagem } from "./Personagem.js";
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

// Variáveis do jogo
let heroi = null;
let nomePersonagem = "";
let classe = 0;

// =============================================
// CRIAÇÃO DO PERSONAGEM
// =============================================
export async function criarPersonagem(menuCallback) {
    console.log("\n=== CRIAÇÃO DE PERSONAGEM ===");
    
    nomePersonagem = await perguntar("Digite o nome do Personagem: ");
    classe = Number(await perguntar("Selecione a Classe (1-7) \n 1 Guerreiro \n 2 Feiticeiro \n 3 Mago \n 4 Clérigo \n 5 Espadachim \n 6 Assassino \n 7 Arqueiro"));
    
    if (!jogar()) {
        console.log("❌ Classe inválida. Voltando ao menu...");
        await perguntar("\nPressione Enter para continuar...");
        menuCallback();
        return;
    }
    
    // Cria o herói com valores iniciais
    heroi = new Personagem(nomePersonagem, classe, 1, 100, 20);
    
    console.log(`\n✅ Personagem ${heroi.nomePersonagem} criado com sucesso!`);
    await perguntar("\nPressione Enter para entrar na masmorra...");
    await masmorra(menuCallback);
}

function jogar() {
    const classes = {
        1: "Guerreiro",
        2: "Feiticeiro",
        3: "Mago",
        4: "Clérigo",
        5: "Espadachim",
        6: "Assassino",
        7: "Arqueiro"
    };
    
    if (classes[classe]) {
        console.log(`\n⚔️ Você selecionou a Classe: ${classes[classe]}`);
        return true;
    } else {
        console.log("Classe inválida! Tente novamente.");
        return false;
    }
}

async function masmorra(menuCallback) {
    if (!heroi) {
        console.log("Nenhum personagem criado!");
        menuCallback();
        return;
    }
    
    console.log(`\n🏰 Entrando na Masmorra - Level ${heroi.Level} 🏰`);
    
    const level = heroi.Level;
    
    // Define inimigos baseado no level
    if (level >= 1 && level <= 10) {
        console.log("Goblins Dourados e Cavaleiros Sanguinários aparecem!");
        await lutar(5, 8, menuCallback);
    } 
    else if (level >= 11 && level <= 20) {
        console.log("Orcs Brutais e Magos das Trevas aparecem!");
        await lutar(10, 12, menuCallback);
    } 
    // ... (continua igual, sempre passando menuCallback)
    else {
        console.log("Masmorra Encerrada - Level Máximo Atingido! ");
        console.log("Parabéns! Você zerou o jogo!");
        await perguntar("\nPressione Enter para continuar...");
        menuCallback();
    }
}

async function lutar(dano1, dano2, menuCallback) {
    console.log("\n COMBATE INICIADO ");

    
    // Primeiro inimigo ataca
    console.log("\n Primeiro inimigo ataca!");
    aplicarDano(heroi, dano1);
    
    if (heroi.Vida <= 0) {
        await gameOver(menuCallback);
        return;
    }
    
    // Segundo inimigo ataca
    if (dano2 > 0) {
        console.log("\n Segundo inimigo ataca!");
        aplicarDano(heroi, dano2);
        
        if (heroi.Vida <= 0) {
            await gameOver(menuCallback);
            return;
        }
    }
    
    // Vitória
    console.log(`\n VITÓRIA! ${heroi.nomePersonagem} sobreviveu!`);
    heroi.Level++;
    console.log(`⬆ Level up! Agora você é level ${heroi.Level}`);
    
    // Recupera vida
    heroi.Vida = Math.min(100, heroi.Vida + 20);
    heroi.Defesa = 20;
    
    console.log(`❤️ Vida recuperada: ${heroi.Vida}`);
    
    // Pergunta se quer continuar
    const continuar = await perguntar("\nContinuar para próxima masmorra? (s/n): ");
    if (continuar.toLowerCase() === 's') {
        await masmorra(menuCallback);
    } else {
        console.log("Voltando ao menu...");
        await perguntar("\nPressione Enter para continuar...");
        menuCallback();
    }
}

function aplicarDano(alvo, dano) {
    console.log(`💥 Dano recebido: ${dano}`);
    
    if (alvo.Defesa > 0) {
        alvo.Defesa -= dano;
        
        if (alvo.Defesa < 0) {
            alvo.Vida += alvo.Defesa;
            alvo.Defesa = 0;
        }
        
        console.log(`🛡️ Defesa restante: ${alvo.Defesa}`);
    } else {
        alvo.Vida -= dano;
    }
    
    console.log(`❤️ Vida restante: ${Math.max(0, alvo.Vida)}`);
}

async function gameOver(menuCallback) {
    console.log("\n══════════════════════════════");
    console.log("💀 GAME OVER 💀");
    console.log("══════════════════════════════");
    
    const jogarNovamente = await perguntar("Deseja jogar novamente? (s/n): ");
    if (jogarNovamente.toLowerCase() === 's') {
        menuCallback();
    } else {
        console.log("Até mais, guerreiro!");
        rl.close();
        process.exit(0);
    }
}