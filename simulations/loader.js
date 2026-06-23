// Simulation loader + registry

window.SIM_MAP = {};
window.simLoaded = false;

// Nodes with genuine, tested, verified-working interactive simulations.
// Only these show as "체험 가능"; everything else is honestly marked "준비 중".
// (6,7,10,14,17 omitted — known rendering bugs; will be rebuilt later.)
window.SIM_WHITELIST = new Set([
  1, 2, 3, 4, 5, 8, 9, 11, 12, 13, 15, 16,                          // A (verified)
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32        // B (verified)
]);

// Canvas cannot read CSS variables (var(--c)). Resolve the active
// category color at runtime so canvas drawings render correctly.
window.simColor = function () {
  return (getComputedStyle(document.documentElement).getPropertyValue('--c').trim() || '#6366f1');
};

async function loadSimulations() {
  const categories = ['a', 'b'];

  for (const cat of categories) {
    try {
      const url = `simulations/sims-${cat}.js?t=${Date.now()}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const code = await response.text();
      const script = document.createElement('script');
      script.textContent = code;
      document.head.appendChild(script);
    } catch (e) {
      console.error(`Failed to load sims-${cat}.js:`, e.message);
    }
  }

  window.simLoaded = true;
  console.log(`✓ Simulations loaded. SIM_MAP has ${Object.keys(window.SIM_MAP).length} functions`);
}

loadSimulations();
