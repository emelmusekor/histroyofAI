// Category D: OS & Programming (50-66)

function sim50() {
  document.getElementById('simTag').textContent = 'Batch Processing';
  let jobs = [{name:'Job A',time:3},{name:'Job B',time:2},{name:'Job C',time:4}];
  let current = 0, elapsed = 0;
  const update = () => {
    let html = '<div style="padding:10px">';
    jobs.forEach((job, i) => {
      html += '<div style="padding:8px;margin:5px;border-radius:8px;background:'+
      (i===current?'var(--c)20':'#1e1e2e')+';border:1px solid '+(i===current?'var(--c)':'var(--border)') +'">'+job.name+': '+job.time+'s</div>';
    });
    html += '<div style="margin-top:10px;padding:8px;background:var(--c)10;border-radius:8px">Time: '+elapsed+'s</div></div>';
    document.getElementById('batchOutput').innerHTML = html;
  };
  document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p class="sim-info">Execute jobs sequentially</p><div id="batchOutput"></div><button class="sim-btn" onclick="if(elapsed<jobs[current].time){elapsed++}else if(current<2){current++;elapsed=0}update()" style="width:100%;margin:10px 0">⏱ Step</button><button class="sim-btn" onclick="current=0;elapsed=0;update()" style="width:100%">Reset</button></div>';
  window.jobs=jobs; window.current=current; window.elapsed=elapsed; window.update=update;
  update();
}

function sim51() {
  document.getElementById('simTag').textContent = 'Multiprogramming';
  let proc = [{id:1,time:0},{id:2,time:0},{id:3,time:0}];
  let clock = 0;
  const update = () => {
    proc.forEach(p => p.time = Math.min(p.time+1, 5));
    let html = '<div style="padding:10px">';
    proc.forEach(p => {
      const pct = (p.time/5)*100;
      html += '<div style="margin:8px 0"><div style="font-size:0.9rem">Process '+p.id+'</div><div style="width:100%;height:20px;background:#1e1e2e;border-radius:4px;overflow:hidden;border:1px solid var(--border)"><div style="width:'+pct+'%;height:100%;background:var(--c);transition:width 0.2s"></div></div></div>';
    });
    html += '<div style="margin-top:10px">CPU Time: '+clock+'ms</div></div>';
    document.getElementById('mpOutput').innerHTML = html;
  };
  document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p class="sim-info">Multiple programs share CPU</p><div id="mpOutput"></div><button class="sim-btn" onclick="clock+=10;update()" style="width:100%;margin:10px 0">Advance</button><button class="sim-btn" onclick="proc=[{id:1,time:0},{id:2,time:0},{id:3,time:0}];clock=0;update()" style="width:100%">Reset</button></div>';
  window.proc=proc; window.clock=clock; window.update=update;
  update();
}

function sim52() { document.getElementById('simTag').textContent = 'Process States'; let state = 0; const states = ['New','Ready','Running','Waiting','Terminated']; const update = () => { document.getElementById('procState').textContent = states[state]; }; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><div style="text-align:center;font-size:1.2rem;font-weight:700;color:var(--c);margin:15px 0" id="procState"></div><button class="sim-btn" onclick="state=(state+1)%5;update()" style="width:100%;margin:5px 0">Next State</button><button class="sim-btn" onclick="state=0;update()" style="width:100%">Reset</button></div>'; window.state=state; window.states=states; window.update=update; update(); }

function sim53() { document.getElementById('simTag').textContent = 'CPU Scheduling'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p class="sim-info">FCFS, SJF, Round Robin</p><button class="sim-btn" style="width:100%;margin:5px 0">FCFS</button><button class="sim-btn" style="width:100%;margin:5px 0">SJF</button><button class="sim-btn" style="width:100%;margin:5px 0">Round Robin</button></div>'; }

function sim54() { document.getElementById('simTag').textContent = 'Virtual Memory'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p class="sim-info">Paging & Disk Swap</p><div style="padding:10px;background:var(--c)10;border-radius:8px">RAM: [Page 1][Page 2][Page 3]<br>Disk: [Page 4][Page 5][Page 6]</div></div>'; }

function sim55() { document.getElementById('simTag').textContent = 'Paging'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p class="sim-info">Virtual Address Translation</p><div style="font-family:monospace;background:var(--c)10;padding:10px;border-radius:8px">Page Table: 1→3, 2→1, 3→4</div></div>'; }

function sim56() { document.getElementById('simTag').textContent = 'Segmentation'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><div style="margin:10px 0"><div style="padding:10px;background:var(--c)10;margin:5px 0;border-radius:8px">Code: 0x0000</div><div style="padding:10px;background:var(--c)10;margin:5px 0;border-radius:8px">Data: 0x4000</div><div style="padding:10px;background:var(--c)10;margin:5px 0;border-radius:8px">Stack: 0x8000</div></div></div>'; }

function sim57() { document.getElementById('simTag').textContent = 'Mutex'; let locked = false; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><div style="text-align:center;font-size:1.5rem;font-weight:700;color:var(--c);margin:15px 0" id="lock">'+(locked?'LOCKED':'UNLOCKED')+'</div><button class="sim-btn" onclick="locked=!locked;document.getElementById(\'lock\').textContent=locked?\'LOCKED\':\'UNLOCKED\'" style="width:100%;margin:10px 0">Toggle</button><button class="sim-btn" onclick="locked=false;document.getElementById(\'lock\').textContent=\'UNLOCKED\'" style="width:100%">Reset</button></div>'; window.locked=locked; }

function sim58() { document.getElementById('simTag').textContent = 'Deadlock'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><div style="padding:10px;background:#ef444420;border:2px solid #ef4444;border-radius:8px;text-align:center"><strong style="color:#ef4444">DEADLOCK</strong><br>A→R1, B→R2<br>A waits R2, B waits R1</div></div>'; }

function sim59() { document.getElementById('simTag').textContent = 'File System'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><div style="font-family:monospace;font-size:0.9rem">/ (root)<br>├── home/<br>│  └── file.txt<br>├── bin/<br>└── etc/</div></div>'; }

function sim60() { document.getElementById('simTag').textContent = 'Machine Code'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><div style="font-family:monospace;background:var(--c)10;padding:10px;border-radius:8px">10110000 01100001<br>00000100 11000011</div></div>'; }

function sim61() { document.getElementById('simTag').textContent = 'Assembly'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><div style="font-family:monospace;background:var(--c)10;padding:10px;border-radius:8px">MOV eax, [ebx]<br>ADD eax, ecx<br>PUSH eax</div></div>'; }

function sim62() { document.getElementById('simTag').textContent = 'Compiler'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><div style="text-align:center">int x = a+b;<br>↓ Compile ↓<br>01001000 11000011</div></div>'; }

function sim63() { document.getElementById('simTag').textContent = 'Interpreter'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p class="sim-info">Read → Parse → Execute</p></div>'; }

function sim64() { document.getElementById('simTag').textContent = 'Variables'; let x=0, y=0; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><label>x = <input type="number" value="0" oninput="x=+this.value" style="width:60px"></label><div id="vres" style="margin-top:10px;padding:10px;background:var(--c)10;border-radius:8px;font-family:monospace">x=0, y=0</div></div>'; window.x=x; window.y=y; }

function sim65() { document.getElementById('simTag').textContent = 'Functions'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><p>def add(a, b):<br>&nbsp;&nbsp;return a + b</p><button class="sim-btn" onclick="alert(\'3 + 5 = 8\')" style="width:100%;margin-top:10px">Call</button></div>'; }

function sim66() { document.getElementById('simTag').textContent = 'OOP'; document.getElementById('simContainer').innerHTML = '<div style="padding:15px"><div style="padding:8px;background:var(--c)10;margin:5px;border-radius:8px">Class</div><div style="padding:8px;background:var(--c)10;margin:5px;border-radius:8px">Inheritance</div><div style="padding:8px;background:var(--c)10;margin:5px;border-radius:8px">Polymorphism</div></div>'; }

(function() { if (!window.SIM_MAP) window.SIM_MAP = {}; for (let i = 50; i <= 66; i++) { const name = 'sim'+i; if (typeof window[name] === 'function') { window.SIM_MAP[i] = window[name]; } } })();
