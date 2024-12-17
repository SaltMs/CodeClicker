// Example: Save progress
function saveGame() {
    localStorage.setItem('cookies', cookies);
    localStorage.setItem('cursors', cursors);
    localStorage.setItem('grandmas', grandmas);
    localStorage.setItem('ovens', ovens);
    localStorage.setItem('factories', factories);
    localStorage.setItem('cursorCost', cursorCost);
    localStorage.setItem('grandmaCost', grandmaCost);
    localStorage.setItem('ovenCost', ovenCost);
    localStorage.setItem('factoryCost', factoryCost);
    localStorage.setItem('prestigeStars', prestigeStars);
  }
  
  // Example: Load progress
  function loadGame() {
    if (localStorage.getItem('cookies')) {
      cookies = parseInt(localStorage.getItem('cookies'));
      cursors = parseInt(localStorage.getItem('cursors'));
      grandmas = parseInt(localStorage.getItem('grandmas'));
      ovens = parseInt(localStorage.getItem('ovens'));
      factories = parseInt(localStorage.getItem('factories'));
      cursorCost = parseInt(localStorage.getItem('cursorCost'));
      grandmaCost = parseInt(localStorage.getItem('grandmaCost'));
      ovenCost = parseInt(localStorage.getItem('ovenCost'));
      factoryCost = parseInt(localStorage.getItem('factoryCost'));
      prestigeStars = parseInt(localStorage.getItem('prestigeStars')) || 0;
      starsDisplay.innerText = `★ ${prestigeStars}`;
      updateCountDisplay();
      cursorCountDisplay.innerText = cursors;
      grandmaCountDisplay.innerText = grandmas;
      ovenCountDisplay.innerText = ovens;
      factoryCountDisplay.innerText = factories;
      cursorCostDisplay.innerText = cursorCost;
      grandmaCostDisplay.innerText = grandmaCost;
      ovenCostDisplay.innerText = ovenCost;
      factoryCostDisplay.innerText = factoryCost;
    }
  }
  
  // Call loadGame at the start and maybe periodically saveGame
  loadGame();
  setInterval(saveGame, 3000);