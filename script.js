// Aguarda o carregamento completo do HTML
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona o botão através do ID
    const botaoSaibaMais = document.getElementById("btnSaibaMais");

    // Adiciona o evento de clique
    botaoSaibaMais.addEventListener("click", () => {
        // Mensagem de log para o desenvolvedor
        console.log("O usuário clicou para saber mais sobre IA e Saúde.");

        // Feedback visual para o usuário
        alert("Obrigado pelo interesse! Em breve você será direcionado para nossos artigos detalhados sobre Inteligência Artificial na medicina.");
    });
});
