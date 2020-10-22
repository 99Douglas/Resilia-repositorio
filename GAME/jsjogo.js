var fase = document.querySelector(".parte-jogo");
var descricao = document.querySelector(".descricao");
var botao1 = document.querySelector(".opcao1");
var botao2 = document.querySelector(".opcao2");

botao1.onclick = fase1;
botao2.onclick = demissao1;

function demissao1() {
    fase.textContent = "Você foi demitido!";
    descricao.textContent = "Já começou errado! Foi demitido por não ter coragem de jogar o jogo. Tentar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function fase1() {
    fase.textContent = "Fase 1"
    descricao.textContent = "O que você gostaria de fazer assim que acorda?";
    botao1.textContent = "Dormir mais 5 minutos.";
    botao2.textContent = "Se arrumar para ir ao trabalho.";
    botao1.onclick = demissao2;
    botao2.onclick = fase2;
}

function demissao2() {
    fase.textContent = "Você foi demitido!";
    descricao.textContent = "Você perdeu o horário e foi demitido! Tentar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function fase2() {
    fase.textContent = "Fase 2"
    descricao.textContent = "Você sai de casa após ouvir no noticiário que o trânsito não estaria bom na parte da cidade onde você mora. Automaticamente você descarta a possibilidade de ir de carro. O que você faz?";
    botao1.textContent = "Ir de ônibus.";
    botao2.textContent = "Ir de metrô.";
    botao1.onclick = demissao3;
    botao2.onclick = fase3;
}

function demissao3() {
    fase.textContent = "Você foi demitido!";
    descricao.textContent = "Você ficou preso no trânsito, seu chefe não entendeu legal e você foi demitido! Tentar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function fase3() {
    fase.textContent = "Fase 3"
    descricao.textContent = "Você chega no trabalho e só existem duas mesas disponíveis para você trabalhar. Onde você senta?";
    botao1.textContent = "Na mesa ao fundo, longe dos meus colegas que eu tenho mais contato.";
    botao2.textContent = "Na mesa perto dos meus colegas.";
    botao1.onclick = fase4;
    botao2.onclick = demissao4;
}

function demissao4() {
    fase.textContent = "Você foi demitido!";
    descricao.textContent = "Você ficou conversando a manhã toda, seu chefe viu que você não fez nada e você foi demitido! Tentar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function fase4() {
    fase.textContent = "Fase 4"
    descricao.textContent = "Hora do almoço! Mas você está cheio de tarefas. O que você faz?";
    botao1.textContent = "Sai para almoçar mesmo assim.";
    botao2.textContent = "Pula o almoço pra fazer as tarefas.";
    botao1.onclick = fase5;
    botao2.onclick = demissao5;
}

function demissao5() {
    fase.textContent = "Você foi demitido!";
    descricao.textContent = "Você ficou com fome, não conseguiu trabalhar e entregar as tarefas e foi demitido! Tentar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function fase5() {
    fase.textContent = "Fase 5";
    descricao.textContent = "Voltando do almoço, você percebe que tem 30 minutos para entregar as tarefas.";
    botao1.textContent = "Converso com o chefe pra aumentar o prazo.";
    botao2.textContent = "Peço ajuda.";
    botao1.onclick = demissao6;
    botao2.onclick = fase6;
}

function demissao6() {
    fase.textContent = "Você foi demitido!";
    descricao.textContent = "Seu chefe se irritou com o seu pedido e você foi demitido! Tentar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function fase6() {
    fase.textContent = "Fase 6";
    descricao.textContent = "Ufa! Você conseguiu entregar as tarefas antes do prazo. Porém seu amigo não, e ainda faltam cinco minutos. O que você faz?";
    botao1.textContent = "Deixo ele se virar.";
    botao2.textContent = "Ajudo.";
    botao1.onclick = demissao7;
    botao2.onclick = fase7;
}

function demissao7() {
    fase.textContent = "Você foi demitido!";
    descricao.textContent = "Seu chefe perguntou ao seu amigo por que ele não pediu ajuda para terminar, e seu amigo respondeu que pediu ajuda pra você e você não quis ajudar. Você foi demitido por não trabalhar em equipe! Tentar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function fase7() {
    fase.textContent = "Fase 7";
    descricao.textContent = "Hora de ir pra casa! Só que não. Seu chefe te pede pra ficar depois do horário fazendo mais algumas tarefas.";
    botao1.textContent = "Pergunto se não posso fazer outro dia.";
    botao2.textContent = "Vou ao trabalho.";
    botao1.onclick = demissao8;
    botao2.onclick = fase8;
}

function demissao8() {
    fase.textContent = "Você foi demitido!";
    descricao.textContent = "Seu chefe não está num bom dia hoje, você foi demitido por tentar prolongar o prazo! Tentar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function fase8() {
    fase.textContent = "Fase 8";
    descricao.textContent = "Depois de finalmente terminar o trabalho todo, você está livre pra ir pra casa. Ainda é terça-feira, mas te convidam pra uma festa depois do trabalho. Você vai?";
    botao1.textContent = "Vou e me divirto.";
    botao2.textContent = "Não vou.";
    botao1.onclick = fase9;
    botao2.onclick = demissao9;
}

function demissao9() {
    fase.textContent = "Você foi demitido!";
    descricao.textContent = "Você não tira um momento de lazer pra si mesmo, fica extremamente irritado no dia seguinte e acaba fazendo coisas que não devia na empresa. Você foi demitido! Tentar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function fase9() {
    fase.textContent = "Fase 9";
    descricao.textContent = "Depois da festa, você chega em casa, janta e se prepara pra dormir. Porém, aquele joguinho online que você tanto ama está praticamente lhe chamando.";
    botao1.textContent = "Vou dormir.";
    botao2.textContent = "Jogo um pouquinho.";
    botao1.onclick = vitoria;
    botao2.onclick = demissao10;
}

function demissao10() {
    fase.textContent = "Você foi demitido!";
    descricao.textContent = "Você já teve seu momento de diversão, jogar agora é procrastinar! Você não dormiu direito e foi demitido por não trabalhar corretamente no dia seguinte! Tentar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function vitoria() {
    fase.textContent = "Você ganhou!";
    descricao.textContent = "Parabéns, você não foi demitido! Ainda. :) Deseja jogar novamente?";
    botao1.textContent = "Sim.";
    botao2.textContent = "Não.";
    botao1.onclick = fase1;
    botao2.onclick = finalizacao;
}

function finalizacao() {
    fase.textContent = "Obrigado por jogar!";
    descricao.textContent = "Até a próxima.";
    botao1.remove();
    botao2.remove();
}