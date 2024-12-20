// Exibe o popup quando a página carregar
window.onload = function() {
  var popup = document.getElementById('cookiePopup');
  var acceptButton = document.querySelector('.acceptButton');
  var declineButton = document.querySelector('.declineButton');
  var startButton = document.getElementById('startButton');
  var exitButton = document.getElementById('exitButton');
  
  // Exibe o popup
  popup.style.opacity = 3; // Torna o popup visível
  popup.style.pointerEvents = 'auto'; // Permite o popup
  
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
