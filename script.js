// Espera o conteúdo da página carregar para executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Inicializa a biblioteca de Animação ao Rolar (AOS)
    AOS.init({
        duration: 1000, // Duração da animação em ms
        once: true,     // Animação acontece apenas uma vez
    });

    // Configuração do Efeito Máquina de Escrever (Typed.js)
    var options = {
        strings: ['soluções para a web.', 'interfaces incríveis.', 'o futuro.'],
        typeSpeed: 50,  // Velocidade de digitação
        backSpeed: 25,  // Velocidade de "backspace"
        backDelay: 1500, // Tempo de espera antes de apagar
        loop: true      // Repete a animação
    };

    var typed = new Typed('#typewriter', options);

});