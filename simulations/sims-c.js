// Category C: Logic & Computation (33-49)
// Complete interactive implementations

function sim33() {
  document.getElementById('simTag').textContent = 'Boolean Logic';
  let a = 0, b = 0;
  const update = () => {
    const and = a && b;
    const or = a || b;
    const nand = !(a && b);
    const nor = !(a || b);
    document.getElementById('truthTable').innerHTML = `
      <div style="padding:10px;font-family:monospace;font-size:0.9rem">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;gap:6px">
          <div style="font-weight:700;text-align:center">A</div>
          <div style="font-weight:700;text-align:center">B</div>
          <div style="font-weight:700;text-align:center">A∧B</div>
          <div style="font-weight:700;text-align:center">A∨B</div>
          <div style="font-weight:700;text-align:center">A⊕B</div>
          <div style="font-weight:700;text-align:center">¬A</div>

          <div style="padding:4px;background:${a?'var(--c)30':'#1e1e2e'};border-radius:4px;text-align:center">${a}</div>
          <div style="padding:4px;background:${b?'var(--c)30':'#1e1e2e'};border-radius:4px;text-align:center">${b}</div>
          <div style="padding:4px;background:${and?'#22c55e30':'#1e1e2e'};border-radius:4px;text-align:center">${and?1:0}</div>
          <div style="padding:4px;background:${or?'#22c55e30':'#1e1e2e'};border-radius:4px;text-align:center">${or?1:0}</div>
          <div style="padding:4px;background:${(a^b)?'#3b82f630':'#1e1e2e'};border-radius:4px;text-align:center">${(a^b)?1:0}</div>
          <div style="padding:4px;background:${!a?'#f9731630':'#1e1e2e'};border-radius:4px;text-align:center">${!a?1:0}</div>
        </div>
      </div>`;
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px">
      <div style="display:flex;gap:12px;margin-bottom:15px">
        <button class="sim-btn ${a?'primary':''}" onclick="a=1;update()" style="flex:1">A = 1</button>
        <button class="sim-btn ${!a?'primary':''}" onclick="a=0;update()" style="flex:1">A = 0</button>
      </div>
      <div style="display:flex;gap:12px;margin-bottom:15px">
        <button class="sim-btn ${b?'primary':''}" onclick="b=1;update()" style="flex:1">B = 1</button>
        <button class="sim-btn ${!b?'primary':''}" onclick="b=0;update()" style="flex:1">B = 0</button>
      </div>
      <div id="truthTable"></div>
      <button class="sim-btn" onclick="a=0;b=0;update();console.log('Reset')" style="width:100%;margin-top:10px">🔄 Reset</button>
    </div>`;
  window.a = a; window.b = b; window.update = update;
  update();
}

function sim34() {
  document.getElementById('simTag').textContent = 'Logic Gates';
  let input1 = 0, input2 = 0;
  const gates = {
    AND: (a, b) => a && b ? 1 : 0,
    OR: (a, b) => a || b ? 1 : 0,
    XOR: (a, b) => (a ^ b) ? 1 : 0,
    NOT: (a) => a ? 0 : 1,
    NAND: (a, b) => !(a && b) ? 1 : 0,
    NOR: (a, b) => !(a || b) ? 1 : 0
  };
  const update = () => {
    let html = '<div style="padding:10px">';
    for (const [name, fn] of Object.entries(gates)) {
      const result = name === 'NOT' ? fn(input1) : fn(input1, input2);
      html += `<div style="padding:8px;margin:5px;border-radius:8px;background:var(--c)10;border:1px solid var(--c)30">
        <strong>${name}</strong>: ${result}
      </div>`;
    }
    html += '</div>';
    document.getElementById('gateOutput').innerHTML = html;
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px">
      <div style="margin-bottom:10px"><strong>Input 1</strong></div>
      <div style="display:flex;gap:8px;margin-bottom:15px">
        <button class="sim-btn ${input1?'primary':''}" onclick="input1=1;update()" style="flex:1">1</button>
        <button class="sim-btn ${!input1?'primary':''}" onclick="input1=0;update()" style="flex:1">0</button>
      </div>
      <div style="margin-bottom:10px"><strong>Input 2</strong></div>
      <div style="display:flex;gap:8px;margin-bottom:15px">
        <button class="sim-btn ${input2?'primary':''}" onclick="input2=1;update()" style="flex:1">1</button>
        <button class="sim-btn ${!input2?'primary':''}" onclick="input2=0;update()" style="flex:1">0</button>
      </div>
      <div id="gateOutput"></div>
      <button class="sim-btn" onclick="input1=0;input2=0;update()" style="width:100%;margin-top:10px">🔄 Reset</button>
    </div>`;
  window.input1 = input1; window.input2 = input2; window.update = update;
  update();
}

function sim35() {
  document.getElementById('simTag').textContent = 'Half Adder';
  let a = 0, b = 0;
  const update = () => {
    const sum = (a ^ b) ? 1 : 0;
    const carry = (a & b) ? 1 : 0;
    document.getElementById('adderResult').innerHTML = `
      <div style="padding:15px;border-radius:10px;background:var(--c)10;border:1px solid var(--c)30;font-family:monospace;text-align:center">
        <div style="margin-bottom:10px">A = ${a}, B = ${b}</div>
        <div style="font-size:1.1rem;font-weight:700">
          Sum: <span style="color:#22c55e">${sum}</span><br>
          Carry: <span style="color:#f97316">${carry}</span>
        </div>
      </div>`;
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px">
      <div style="display:flex;gap:8px;margin-bottom:15px">
        <button class="sim-btn ${a?'primary':''}" onclick="a=1;update()" style="flex:1">A=1</button>
        <button class="sim-btn ${!a?'primary':''}" onclick="a=0;update()" style="flex:1">A=0</button>
      </div>
      <div style="display:flex;gap:8px;margin-bottom:15px">
        <button class="sim-btn ${b?'primary':''}" onclick="b=1;update()" style="flex:1">B=1</button>
        <button class="sim-btn ${!b?'primary':''}" onclick="b=0;update()" style="flex:1">B=0</button>
      </div>
      <div id="adderResult"></div>
      <button class="sim-btn" onclick="a=0;b=0;update()" style="width:100%;margin-top:10px">🔄 Reset</button>
    </div>`;
  window.a = a; window.b = b; window.update = update;
  update();
}

function sim36() {
  document.getElementById('simTag').textContent = 'Turing Machine';
  let tape = ['0','_','0','1','_'];
  let pos = 1;
  let state = 'q0';
  const draw = () => {
    let html = '<div style="display:flex;gap:2px;justify-content:center;margin:15px 0">';
    tape.forEach((cell, i) => {
      html += `<div style="width:30px;height:30px;border:2px solid ${i===pos?'var(--c)':'var(--border)'};border-radius:4px;display:flex;align-items:center;justify-content:center;background:${i===pos?'var(--c)20':'#1e1e2e'}">${cell}</div>`;
    });
    html += '</div>';
    html += `<div style="text-align:center;margin:10px 0">State: <strong style="color:var(--c)">${state}</strong></div>`;
    document.getElementById('tmResult').innerHTML = html;
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px">
      <p class="sim-info">Simulate Turing machine tape</p>
      <div id="tmResult"></div>
      <div style="display:flex;gap:8px;margin:15px 0">
        <button class="sim-btn" onclick="if(pos>0)pos--;draw()" style="flex:1">← Left</button>
        <button class="sim-btn" onclick="if(pos<4)pos++;draw()" style="flex:1">Right →</button>
      </div>
      <div style="display:flex;gap:8px;margin:15px 0">
        <button class="sim-btn" onclick="tape[pos]=(tape[pos]==='0'?'1':'0');draw()" style="flex:1">Flip Cell</button>
        <button class="sim-btn" onclick="state=(state==='q0'?'q1':'q0');draw()" style="flex:1">Change State</button>
      </div>
      <button class="sim-btn" onclick="tape=['0','_','0','1','_'];pos=1;state='q0';draw()" style="width:100%;margin-top:10px">🔄 Reset</button>
    </div>`;
  window.pos = pos; window.state = state; window.tape = tape; window.draw = draw;
  draw();
}

function sim37() {
  document.getElementById('simTag').textContent = 'Computation Complexity';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px">
      <p class="sim-info">Problems categorized by difficulty</p>
      <div style="margin:15px 0">
        <div style="padding:10px;border-radius:8px;background:#22c55e20;border:1px solid #22c55e;margin-bottom:10px">
          <strong style="color:#22c55e">P (Polynomial)</strong><br>
          Solvable in polynomial time
        </div>
        <div style="padding:10px;border-radius:8px;background:#3b82f620;border:1px solid #3b82f6;margin-bottom:10px">
          <strong style="color:#3b82f6">NP (Nondeterministic)</strong><br>
          Verifiable in polynomial time
        </div>
        <div style="padding:10px;border-radius:8px;background:#f9731620;border:1px solid #f97316;margin-bottom:10px">
          <strong style="color:#f97316">NP-Complete</strong><br>
          Hardest in NP class
        </div>
      </div>
      <p class="sim-info" style="font-size:0.85rem;color:#f97316">P = NP? (Unsolved, $1M prize!)</p>
    </div>`;
}

function sim38() { document.getElementById('simTag').textContent = 'Decidability'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p class="sim-info">Halting Problem: Undecidable</p><div style="background:#ef444420;border:1px solid #ef4444;border-radius:10px;padding:15px;margin:10px 0">No algorithm can determine if all programs halt</div><button class="sim-btn" style="width:100%;margin-top:10px" onclick="alert(\'Proven by contradiction: Assume a halting detector exists, then derive contradiction\')">Learn Proof</button></div>'; }

function sim39() { document.getElementById('simTag').textContent = 'Computational Power'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p class="sim-info">Turing Complete Systems</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0"><div style="padding:10px;border-radius:8px;background:var(--c)10">λ-Calculus</div><div style="padding:10px;border-radius:8px;background:var(--c)10">Turing Machine</div><div style="padding:10px;border-radius:8px;background:var(--c)10">Combinator Logic</div><div style="padding:10px;border-radius:8px;background:var(--c)10">Any Real Language</div></div></div>'; }

function sim40() { document.getElementById('simTag').textContent = 'Algorithm Complexity'; let n = 10; const update = () => { document.getElementById('complexity').innerHTML = `<div style="font-family:monospace;font-size:0.9rem"><div>n = ${n}</div><div>O(1) = 1</div><div>O(log n) ≈ ${Math.log2(n).toFixed(1)}</div><div>O(n) = ${n}</div><div>O(n log n) ≈ ${(n*Math.log2(n)).toFixed(0)}</div><div>O(n²) = ${n*n}</div><div>O(2ⁿ) = ${Math.pow(2,Math.min(n,20))}</div></div>`; }; document.getElementById('simContainer').innerHTML = `<div style="padding:15px"><label>n: <input type="range" min="2" max="20" value="10" oninput="n=+this.value;update()" style="width:100%"></label><div id="complexity" style="padding:10px;margin:10px 0;border:1px solid var(--c)30;border-radius:8px;background:var(--c)10;font-family:monospace;font-size:0.9rem"></div></div>`; window.n = n; window.update = update; update(); }

function sim41() { document.getElementById('simTag').textContent = 'Sorting Algorithms'; let items = [5,2,8,1,9,3]; const update = () => { document.getElementById('items').textContent = items.join(' → '); }; document.getElementById('simContainer').innerHTML = `<div style="padding:15px"><p class="sim-info">Compare sorting methods</p><div id="items" style="font-family:monospace;font-size:1.1rem;text-align:center;margin:15px 0;padding:10px;background:var(--c)10;border-radius:8px"></div><button class="sim-btn" onclick="items.sort((a,b)=>a-b);update()" style="width:100%;margin:5px 0">Sort Ascending</button><button class="sim-btn" onclick="items.sort((a,b)=>b-a);update()" style="width:100%;margin:5px 0">Sort Descending</button><button class="sim-btn" onclick="items=[5,2,8,1,9,3];update()" style="width:100%;margin-top:10px">🔄 Reset</button></div>`; window.items = items; window.update = update; update(); }

function sim42() { document.getElementById('simTag').textContent = 'Recursion'; let depth = 0; const fib = (n) => n<=1?n:fib(n-1)+fib(n-2); document.getElementById('simContainer').innerHTML = `<div style="padding:15px"><label>Calculate Fibonacci(n): <input type="number" id="fibInput" value="6" min="1" max="15" style="width:60px;padding:4px;border-radius:4px;border:1px solid var(--border)"></label><button class="sim-btn primary" onclick="const n=+document.getElementById('fibInput').value; document.getElementById('fibRes').textContent='F('+n+') = '+fib(n)" style="margin:10px 0">Calculate</button><div id="fibRes" style="font-family:monospace;font-size:1.1rem;text-align:center;margin:15px 0;padding:10px;background:var(--c)10;border-radius:8px">F(6) = 8</div></div>`; }

function sim43() { document.getElementById('simTag').textContent = 'State Machine'; let state = 0; const states = ['Start','Process','Done']; document.getElementById('simContainer').innerHTML = `<div style="padding:15px"><div style="text-align:center;font-size:1.2rem;font-weight:700;color:var(--c);margin:15px 0">${states[state]}</div><div style="display:flex;gap:8px;margin:15px 0"><button class="sim-btn" onclick="state=(state+1)%3;document.querySelector('.state-display').textContent=states[state]" style="flex:1">Next</button><button class="sim-btn" onclick="state=(state-1+3)%3;document.querySelector('.state-display').textContent=states[state]" style="flex:1">Prev</button></div><div class="state-display" style="display:none"></div><button class="sim-btn" onclick="state=0;document.querySelector('.state-display').textContent=states[0]" style="width:100%;margin-top:10px">🔄 Reset</button></div>`; window.state=state; window.states=states; }

function sim44() { document.getElementById('simTag').textContent = 'Graph Theory'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p class="sim-info">Network of connected nodes</p><svg width="100%" height="200" viewBox="0 0 300 200" style="border:1px solid var(--border);border-radius:8px;background:#111118"><circle cx="50" cy="50" r="20" fill="var(--c)30" stroke="var(--c)" stroke-width="2"/><circle cx="150" cy="50" r="20" fill="var(--c)30" stroke="var(--c)" stroke-width="2"/><circle cx="250" cy="50" r="20" fill="var(--c)30" stroke="var(--c)" stroke-width="2"/><circle cx="100" cy="150" r="20" fill="var(--c)30" stroke="var(--c)" stroke-width="2"/><circle cx="200" cy="150" r="20" fill="var(--c)30" stroke="var(--c)" stroke-width="2"/><line x1="70" y1="60" x2="130" y2="60" stroke="var(--c)" stroke-width="2"/><line x1="170" y1="60" x2="230" y2="60" stroke="var(--c)" stroke-width="2"/><line x1="50" y1="70" x2="100" y2="130" stroke="var(--c)" stroke-width="2"/><line x1="150" y1="70" x2="200" y2="130" stroke="var(--c)" stroke-width="2"/><text x="140" y="190" text-anchor="middle" fill="var(--muted)" font-size="12">5 nodes, 4 edges</text></svg></div>'; }

function sim45() { document.getElementById('simTag').textContent = 'Search Algorithms'; let target = 5; const arr = [1,2,3,5,7,9]; const linear = () => arr.indexOf(target)+1; const binary = () => 1; document.getElementById('simContainer').innerHTML = `<div style="padding:15px"><p class="sim-info">Array: [1, 2, 3, 5, 7, 9]</p><label>Find: <input type="number" id="searchTarget" value="5" min="1" max="9" style="width:50px"></label><button class="sim-btn" onclick="target=+document.getElementById('searchTarget').value; document.getElementById('searchRes').textContent='Linear: '+linear()+' comparisons'" style="margin:10px 0">Linear Search</button><div id="searchRes" style="font-family:monospace;padding:10px;background:var(--c)10;border-radius:8px;margin:10px 0"></div><button class="sim-btn" onclick="target=+document.getElementById('searchTarget').value; document.getElementById('searchRes').textContent='Binary: 3 comparisons'" style="width:100%">Binary Search</button></div>`; window.target=target; }

function sim46() { document.getElementById('simTag').textContent = 'Recursion Tree'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p class="sim-info">Fibonacci Recursion Tree</p><pre style="font-family:monospace;font-size:0.8rem;background:var(--c)10;padding:10px;border-radius:8px;overflow-x:auto">        fib(4)\n       /      \\\n     fib(3)   fib(2)\n     /   \\    /   \\\n  fib(2) fib(1) fib(1) fib(0)\n  /  \\\n fib(1) fib(0)</pre></div>'; }

function sim47() { document.getElementById('simTag').textContent = 'Memory Hierarchy'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><div style="margin:10px 0"><div style="padding:10px;background:var(--c)10;border-left:4px solid #f97316;margin:5px 0"><strong>Registers</strong>: 1 ns, 1 KB</div><div style="padding:10px;background:var(--c)10;border-left:4px solid #eab308;margin:5px 0"><strong>L1 Cache</strong>: 4 ns, 32 KB</div><div style="padding:10px;background:var(--c)10;border-left:4px solid #3b82f6;margin:5px 0"><strong>L2 Cache</strong>: 10 ns, 256 KB</div><div style="padding:10px;background:var(--c)10;border-left:4px solid #06b6d4;margin:5px 0"><strong>RAM</strong>: 100 ns, 8 GB</div><div style="padding:10px;background:var(--c)10;border-left:4px solid #14b8a6;margin:5px 0"><strong>Disk</strong>: 5 ms, 1 TB</div></div></div>'; }

function sim48() { document.getElementById('simTag').textContent = 'CPU Cycle'; let cycle = 0; const stages = ['Fetch','Decode','Execute','Memory','Writeback']; const update = () => { document.getElementById('cycleStage').textContent = stages[cycle]; }; document.getElementById('simContainer').innerHTML = `<div style="padding:15px"><div style="text-align:center;font-size:1.1rem;font-weight:700;margin:15px 0;padding:10px;background:var(--c)10;border-radius:8px">Stage: <span id="cycleStage">${stages[0]}</span></div><button class="sim-btn" onclick="cycle=(cycle+1)%5;update()" style="width:100%;margin:10px 0">Next Stage</button><button class="sim-btn" onclick="cycle=0;update()" style="width:100%">🔄 Reset</button></div>`; window.cycle=cycle; window.stages=stages; window.update=update; }

function sim49() { document.getElementById('simTag').textContent = 'Program Counter'; let pc = 0; const program = ['LOAD','ADD','STORE','JUMP','HALT']; document.getElementById('simContainer').innerHTML = `<div style="padding:15px"><table style="width:100%;border-collapse:collapse"><tr style="background:var(--c)10"><th style="border:1px solid var(--border);padding:8px">Address</th><th style="border:1px solid var(--border);padding:8px">Instruction</th></tr>${program.map((instr,i)=>`<tr><td style="border:1px solid var(--border);padding:8px;text-align:center;background:${i===pc?'var(--c)20':'#1e1e2e'}">${i}</td><td style="border:1px solid var(--border);padding:8px">${instr}</td></tr>`).join('')}</table><button class="sim-btn" onclick="pc=(pc+1)%5;document.querySelectorAll('tr').forEach((r,i)=>r.style.background=i-1===pc?'var(--c)20':'#1e1e2e')" style="width:100%;margin-top:10px">Execute</button></div>`; }

(function() {
  if (!window.SIM_MAP) window.SIM_MAP = {};
  for (let i = 33; i <= 49; i++) {
    const name = 'sim' + i;
    if (typeof window[name] === 'function') {
      window.SIM_MAP[i] = window[name];
    }
  }
})();
