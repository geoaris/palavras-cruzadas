// Exibe o popup quando a página carregar
window.onload = function() {
  const popup = document.getElementById('cookiePopup');
  const acceptButton = document.querySelector('.acceptButton');
  const declineButton = document.querySelector('.declineButton');
  const startButton = document.getElementById('startButton');
  const exitButton = document.getElementById('exitButton');
  
  // Exibe o popup
  popup.style.opacity = 3; // Torna o popup visível
  popup.style.pointerEvents = 'auto'; // Permite o popup
  
  // Função de iniciar o jogo
  startButton.onclick = function() {
    popup.style.display = 'none';
  alert(`Jogo iniciado! 
Agora você pode começar a jogar.`);
  };
  
  // Ação ao aceitar os cookies
  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    popup.style.opacity = 0;
    popup.style.pointerEvents = 'none'; // Desabilita o popup
  });
  
  // Ação ao recusar os cookies
  declineButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false');
    popup.style.opacity = 0;
    popup.style.pointerEvents = 'none';
  });
};
