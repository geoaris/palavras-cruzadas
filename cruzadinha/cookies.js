// Show the popup when the page loads
window.onload = function() {
    const popup = document.getElementById('cookiePopup');
    popup.style.opacity = 1; /* Make the popup visible */
    popup.style.pointerEvents = 'auto'; /* Allow interaction with the popup */
  };
  
  // Handle cookie consent actions
  const acceptButton = document.querySelector('.acceptButton');
  const declineButton = document.querySelector('.declineButton');
  
  acceptButton.addEventListener('click', () => {
    // Store user consent (you can set a cookie or just hide the popup)
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookiePopup').style.opacity = 0;
    document.getElementById('cookiePopup').style.pointerEvents = 'none'; // Hide the popup
  });
  
  declineButton.addEventListener('click', () => {
    // Store user rejection (you can handle it accordingly)
    localStorage.setItem('cookiesAccepted', 'false');
    document.getElementById('cookiePopup').style.opacity = 0;
    document.getElementById('cookiePopup').style.pointerEvents = 'none'; // Hide the popup
  });
  