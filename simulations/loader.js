// Simulations loader - dynamically loads all category files and registers functions

window.SIM_MAP = window.SIM_MAP || {};
window.simLoaded = false;

(async function loadSimulations() {
  const categories = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

  for (const cat of categories) {
    try {
      const url = `simulations/sims-${cat}.js`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const code = await response.text();
      eval(code);
    } catch (e) {
      console.error(`Failed to load sims-${cat}.js:`, e);
    }
  }

  window.simLoaded = true;
  console.log('✓ All simulation modules loaded. SIM_MAP has', Object.keys(window.SIM_MAP).length, 'functions');
})();
