// Enhanced loader with proper registration

window.SIM_MAP = {};
window.simLoaded = false;

async function loadSimulations() {
  const categories = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
  let totalLoaded = 0;

  for (const cat of categories) {
    try {
      const url = `simulations/sims-${cat}.js?t=${Date.now()}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const code = await response.text();

      // Execute in global scope
      const script = document.createElement('script');
      script.textContent = code;
      document.head.appendChild(script);

      // Count registered functions
      console.log(`✓ Loaded sims-${cat}.js`);
    } catch (e) {
      console.error(`Failed to load sims-${cat}.js:`, e.message);
    }
  }

  window.simLoaded = true;
  const count = Object.keys(window.SIM_MAP).length;
  console.log(`✓ All simulation modules loaded. SIM_MAP has ${count} functions`);
}

loadSimulations();
