// Category B: 계산 도구·기계식·아날로그 (노드 18-32)

function sim18() {
  document.getElementById('simTag').textContent = '주판';
  const cols = 9;
  let topActive = Array(cols).fill(0), botActive = Array(cols).fill(0);
  const canvas = document.createElement('canvas');
  canvas.width = 480;
  canvas.height = 220;
  canvas.style.cssText = 'border-radius:10px;cursor:pointer;max-width:100%';
  const ctx = canvas.getContext('2d');
  const colW = canvas.width / (cols + 1), beadR = colW * 0.32;
  const draw = () => {
    ctx.fillStyle = '#1a1008';
    ctx.beginPath();
    ctx.roundRect(4, 4, canvas.width - 8, canvas.height - 8, 12);
    ctx.fill();
    ctx.strokeStyle = '#8b5e1a';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#8b5e1a';
    ctx.fillRect(0, canvas.height * 0.42, canvas.width, 6);
    for (let c = 0; c < cols; c++) {
      const x = (c + 1) * colW;
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, 10);
      ctx.lineTo(x, canvas.height - 10);
      ctx.stroke();
      const topY1 = canvas.height * 0.42 - beadR * 2.5;
      for (let b = 0; b < 2; b++) {
        const active = topActive[c] >= (2 - b);
        const y = active ? (b === 1 ? canvas.height * 0.42 - beadR * 0.5 : topY1) : (b === 0 ? 20 : 20 + beadR * 2.2);
        ctx.beginPath();
        ctx.ellipse(x, y, beadR, beadR * 0.65, 0, 0, Math.PI * 2);
        ctx.fillStyle = active ? '#f97316' : '#c8a04a';
        ctx.fill();
      }
      const botStart = canvas.height * 0.42 + beadR * 0.5;
      for (let b = 0; b < 5; b++) {
        const active = botActive[c] > b;
        const y = active ? canvas.height - beadR * (5 - b) * 2.0 : botStart + beadR * 2 * b + beadR;
        ctx.beginPath();
        ctx.ellipse(x, y, beadR, beadR * 0.65, 0, 0, Math.PI * 2);
        ctx.fillStyle = active ? '#f97316' : '#c8a04a';
        ctx.fill();
      }
      const cv = topActive[c] * 5 + botActive[c];
      ctx.font = 'bold 10px monospace';
      ctx.fillStyle = '#94a3b8';
      ctx.textAlign = 'center';
      ctx.fillText(cv, x, canvas.height - 8);
    }
    let total = 0;
    for (let c = 0; c < cols; c++) total += (topActive[c] * 5 + botActive[c]) * Math.pow(10, cols - 1 - c);
    document.getElementById('abacusVal').textContent = `값: ${total.toLocaleString()}`;
  };
  canvas.onclick = function (e) {
    const r = canvas.getBoundingClientRect();
    const mx = (e.clientX - r.left) * (canvas.width / r.width);
    for (let c = 0; c < cols; c++) {
      const x = (c + 1) * colW;
      if (Math.abs(mx - x) > beadR * 1.5) continue;
      const my = (e.clientY - r.top) * (canvas.height / r.height);
      if (my < canvas.height * 0.42) topActive[c] = (topActive[c] === 0 ? 1 : topActive[c] === 1 ? 2 : 0);
      else {
        const botStart = canvas.height * 0.42 + beadR * 0.5;
        const bIdx = Math.floor((my - botStart) / (beadR * 2));
        if (bIdx >= 0 && bIdx < 5) botActive[c] = botActive[c] === bIdx + 1 ? bIdx : bIdx + 1;
      }
    }
    draw();
  };
  document.getElementById('simContainer').innerHTML = '';
  document.getElementById('simContainer').appendChild(canvas);
  document.getElementById('simContainer').innerHTML += `<div class="sim-info" id="abacusVal" style="margin-top:8px;text-align:center">값: 0</div>`;
  draw();
}

function sim19() {
  document.getElementById('simTag').textContent = '네이피어 막대';
  let rod = 7;
  const rods = Array(10).fill(0).map((_, i) => Array(9).fill(0).map((_, j) => [Math.floor((i * (j + 1)) / 10), (i * (j + 1)) % 10]));
  const render = () => {
    document.getElementById('rodDisplay').innerHTML = `<div style="font-family:monospace;font-size:1rem;line-height:2;text-align:center">${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(j => { const [a, b] = rods[rod][j]; return `<div>${a}<span style="color:var(--muted)">/</span>${b}</div>`; }).join('')}</div>`;
  };
  document.getElementById('simContainer').innerHTML = `<div style="padding:10px;text-align:center"><p class="sim-info" style="margin-bottom:10px">곱셈 막대: ${rod} × (1~9) 결과</p><div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap;justify-content:center">${Array(10).fill(0).map((_, i) => `<button class="sim-btn${i === rod ? ' primary' : ''}" onclick="rod=${i};render();">${i}</button>`).join('')}</div><div id="rodDisplay" style="border:1px solid var(--border);border-radius:10px;padding:15px;display:inline-block"></div></div>`;
  window.rod = rod;
  window.render = render;
  render();
}

function sim20() {
  document.getElementById('simTag').textContent = '로그표';
  document.getElementById('simContainer').innerHTML = `<div style="padding:10px"><p class="sim-info" style="margin-bottom:10px">log(a) + log(b) = log(a×b) 원리</p><div style="display:flex;gap:8px;margin-bottom:10px"><label>a: <input type="number" id="logA" value="10" min="1" style="width:60px;padding:4px 6px;border-radius:6px;border:1px solid var(--border);background:var(--surface);color:var(--text)"></label><label>b: <input type="number" id="logB" value="100" min="1" style="width:60px;padding:4px 6px;border-radius:6px;border:1px solid var(--border);background:var(--surface);color:var(--text)"></label><button class="sim-btn primary" onclick="const a=+document.getElementById('logA').value;const b=+document.getElementById('logB').value;const logA=Math.log10(a);const logB=Math.log10(b);document.getElementById('logRes').innerHTML='log '+a+' = '+logA.toFixed(3)+'<br>log '+b+' = '+logB.toFixed(3)+'<br><span style=color:var(--c)>합: '+((logA+logB).toFixed(3))+' = log '+(a*b)+'</span>'">계산</button></div><div id="logRes" style="border:1px solid var(--border);border-radius:10px;padding:12px;font-family:monospace;text-align:center;min-height:60px"></div></div>`;
}

function sim21() {
  document.getElementById('simTag').textContent = '슬라이드 룰';
  document.getElementById('simContainer').innerHTML = `<div style="padding:10px"><p class="sim-info" style="margin-bottom:10px">두 눈금을 정렬하면 곱셈이 됩니다.</p><svg width="100%" height="120" viewBox="0 0 400 120" style="border:1px solid var(--border);border-radius:10px"><rect x="10" y="20" width="380" height="30" fill="none" stroke="var(--border)" stroke-width="1"/><text x="15" y="42" font-size="10" fill="var(--muted)">1</text><text x="60" y="42" font-size="10" fill="var(--muted)">2</text><text x="110" y="42" font-size="10" fill="var(--muted)">3</text><text x="160" y="42" font-size="10" fill="var(--muted)">4</text><text x="210" y="42" font-size="10" fill="var(--muted)">5</text><text x="260" y="42" font-size="10" fill="var(--muted)">6</text><text x="310" y="42" font-size="10" fill="var(--muted)">7</text><text x="360" y="42" font-size="10" fill="var(--muted)">8</text><rect x="60" y="60" width="200" height="30" fill="none" stroke="var(--c)" stroke-width="2"/><text x="65" y="82" font-size="10" fill="var(--c)">1</text><text x="110" y="82" font-size="10" fill="var(--c)">2</text><text x="155" y="82" font-size="10" fill="var(--c)">3</text><text x="200" y="82" font-size="10" fill="var(--c)">4</text><text x="245" y="82" font-size="10" fill="var(--c)">5</text><line x1="110" y1="55" x2="110" y2="95" stroke="var(--c)" stroke-width="2" stroke-dasharray="4"/><text x="110" y="110" font-size="12" fill="var(--c)" text-anchor="middle" font-weight="bold">2×3=6</text></svg><p class="sim-info" style="margin-top:10px">위 눈금의 2와 아래 눈금의 1을 맞추면, 위의 3은 아래의 6을 가리킵니다.</p></div>`;
}

function sim22() {
  document.getElementById('simTag').textContent = '파스칼 계산기';
  let a = 0, b = 0;
  const add = () => {
    const result = a + b;
    document.getElementById('addRes').innerHTML = `<div style="font-size:1.2rem;font-weight:700;font-family:monospace;text-align:right"><div>${String(a).padStart(3, '0')}</div><div>+ ${String(b).padStart(2, '0')}</div><div style="border-top:2px solid var(--c);padding-top:4px">${String(result).padStart(3, '0')}</div></div>`;
  };
  document.getElementById('simContainer').innerHTML = `<div style="padding:10px;text-align:center"><p class="sim-info" style="margin-bottom:10px">두 수를 입력하고 더하기를 누르세요.</p><div style="display:flex;gap:8px;margin-bottom:10px"><input type="number" id="addA" value="0" min="0" max="999" style="width:80px;padding:6px 10px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text)" oninput="a=+this.value"><span style="line-height:2.5">+</span><input type="number" id="addB" value="0" min="0" max="999" style="width:80px;padding:6px 10px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text)" oninput="b=+this.value"><button class="sim-btn primary" onclick="add()">= 계산</button></div><div id="addRes" style="border:1px solid var(--border);border-radius:10px;padding:12px;min-height:80px"></div></div>`;
  window.a = a;
  window.b = b;
  window.add = add;
}

function sim23() {
  document.getElementById('simTag').textContent = '라이프니츠 계산기';
  document.getElementById('simContainer').innerHTML = `<div style="padding:10px;text-align:center"><p class="sim-info" style="margin-bottom:10px">반복 덧셈으로 곱셈을 계산합니다.</p><div style="display:flex;gap:8px;margin-bottom:10px"><label>×: <input type="number" id="leibA" value="3" min="1" max="12" style="width:50px"></label><label>수: <input type="number" id="leibB" value="5" min="1" max="99" style="width:50px"></label><button class="sim-btn primary" onclick="const a=+document.getElementById('leibA').value;const b=+document.getElementById('leibB').value;let s='';for(let i=0;i<a;i++)s+=(i>0?'+':'')+b;document.getElementById('leibRes').innerHTML='<div style=font-family:monospace>'+s+'</div><div style=border-top:1px solid var(--border);padding-top:4px;margin-top:4px;font-size:1.1rem;font-weight:700;color:var(--c)>='+(a*b)+'</div>'">계산</button></div><div id="leibRes" style="border:1px solid var(--border);border-radius:10px;padding:12px;min-height:60px;font-size:0.9rem"></div></div>`;
}

function sim24() {
  document.getElementById('simTag').textContent = '자카드 직기';
  const pattern = Array(8).fill(0).map(() => Array(8).fill(0));
  const canvas = document.createElement('canvas');
  canvas.width = 240;
  canvas.height = 240;
  canvas.style.cssText = 'border-radius:10px;cursor:pointer;display:block;margin:0 auto';
  const cs = 30;
  const ctx = canvas.getContext('2d');
  const draw = () => {
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        ctx.fillStyle = pattern[i][j] ? 'var(--c)' : '#1e1e2e';
        ctx.fillRect(j * cs + 1, i * cs + 1, cs - 2, cs - 2);
        ctx.strokeStyle = 'var(--border)';
        ctx.lineWidth = 1;
        ctx.strokeRect(j * cs, i * cs, cs, cs);
      }
    }
  };
  canvas.onclick = (e) => {
    const r = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - r.left) / cs);
    const y = Math.floor((e.clientY - r.top) / cs);
    if (x >= 0 && x < 8 && y >= 0 && y < 8) pattern[y][x] = 1 - pattern[y][x];
    draw();
  };
  document.getElementById('simContainer').innerHTML = '';
  document.getElementById('simContainer').appendChild(canvas);
  draw();
}

function sim25() {
  document.getElementById('simTag').textContent = '차분기관';
  let y0 = 1, y1 = 4, y2 = 9;
  const calc = () => {
    const d1 = y1 - y0;
    const d2 = y2 - y1;
    const dd = d2 - d1;
    const y3 = y2 + d2 + dd;
    document.getElementById('diffTable').innerHTML = `<table style="margin:0 auto;font-family:monospace;border-collapse:collapse"><tr><td style="padding:4px">y₀</td><td style="padding:4px;border-left:1px solid var(--border)">${y0}</td></tr><tr><td style="padding:4px">y₁</td><td style="padding:4px;border-left:1px solid var(--border)">${y1}</td><td style="padding:4px;border-left:1px solid var(--border);color:var(--c)">Δ=${d1}</td></tr><tr><td style="padding:4px">y₂</td><td style="padding:4px;border-left:1px solid var(--border)">${y2}</td><td style="padding:4px;border-left:1px solid var(--border);color:var(--c)">Δ=${d2}</td><td style="padding:4px;border-left:1px solid var(--border);color:#f97316">ΔΔ=${dd}</td></tr><tr><td style="padding:4px;border-top:2px solid var(--c)">y₃</td><td style="padding:4px;border-left:1px solid var(--border);border-top:2px solid var(--c);font-weight:700;color:var(--c)">${y3}</td></tr></table>`;
  };
  document.getElementById('simContainer').innerHTML = `<div style="padding:10px;text-align:center"><p class="sim-info" style="margin-bottom:10px">유한 차분으로 다음 값 예측</p><div style="display:flex;gap:8px;margin-bottom:10px;flex-direction:column"><label>y₀: <input type="number" id="y0" value="1" style="width:60px" oninput="y0=+this.value;calc()"></label><label>y₁: <input type="number" id="y1" value="4" style="width:60px" oninput="y1=+this.value;calc()"></label><label>y₂: <input type="number" id="y2" value="9" style="width:60px" oninput="y2=+this.value;calc()"></label></div><div id="diffTable"></div></div>`;
  window.y0 = y0;
  window.y1 = y1;
  window.y2 = y2;
  window.calc = calc;
  calc();
}

function sim26() {
  document.getElementById('simTag').textContent = '해석기관 구상';
  document.getElementById('simContainer').innerHTML = `<div style="padding:10px;text-align:center"><p class="sim-info" style="margin-bottom:10px">프로그램 카드로 계산을 자동화</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:300px;margin:0 auto"><div style="border:1px solid var(--border);border-radius:10px;padding:10px"><div style="font-size:0.8rem;color:var(--muted);margin-bottom:6px">입력 x</div><input type="number" id="anaInput" value="5" style="width:80px;padding:4px 6px;border-radius:6px;border:1px solid var(--border);background:var(--surface);color:var(--text)"></div><div style="border:1px solid var(--border);border-radius:10px;padding:10px"><div style="font-size:0.8rem;color:var(--muted);margin-bottom:6px">프로그램</div><select id="anaProg" style="width:80px;padding:4px 6px;border-radius:6px;border:1px solid var(--border);background:var(--surface);color:var(--text)"><option>x²</option><option>2x+1</option><option>x/2</option></select></div></div><button class="sim-btn primary" style="margin-top:10px" onclick="const x=+document.getElementById('anaInput').value;const p=document.getElementById('anaProg').value;let r;if(p==='x²')r=x*x;else if(p==='2x+1')r=2*x+1;else r=x/2;document.getElementById('anaOutput').textContent='결과: '+r.toFixed(2)">실행</button><div id="anaOutput" style="margin-top:10px;font-size:1.2rem;font-weight:700;color:var(--c)"></div></div>`;
}

function sim27() {
  document.getElementById('simTag').textContent = '천공카드 집계기';
  const grid = Array(12).fill(0).map(() => Array(8).fill(false));
  const canvas = document.createElement('canvas');
  canvas.width = 240;
  canvas.height = 360;
  canvas.style.cssText = 'border-radius:10px;cursor:pointer;display:block;margin:0 auto';
  const hw = 30, hh = 30;
  const ctx = canvas.getContext('2d');
  const draw = () => {
    ctx.fillStyle = '#fffacd';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 8; j++) {
        const x = j * hw, y = i * hh;
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 2, y + 2, hw - 4, hh - 4);
        if (grid[i][j]) {
          ctx.fillStyle = '#333';
          ctx.fillRect(x + 5, y + 5, hw - 10, hh - 10);
        }
      }
    }
    let count = grid.flat().filter(x => x).length;
    document.getElementById('cardCount').textContent = `천공 수: ${count}`;
  };
  canvas.onclick = (e) => {
    const r = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - r.left) / hw);
    const y = Math.floor((e.clientY - r.top) / hh);
    if (x >= 0 && x < 8 && y >= 0 && y < 12) grid[y][x] = !grid[y][x];
    draw();
  };
  document.getElementById('simContainer').innerHTML = '';
  document.getElementById('simContainer').appendChild(canvas);
  document.getElementById('simContainer').innerHTML += `<div class="sim-info" id="cardCount" style="margin-top:10px;text-align:center">천공 수: 0</div>`;
  draw();
}

function sim28() {
  document.getElementById('simTag').textContent = '기계식 적분기';
  const canvas = document.createElement('canvas');
  canvas.width = 360;
  canvas.height = 240;
  canvas.style.cssText = 'border-radius:10px;cursor:crosshair;display:block;margin:0 auto;border:1px solid var(--border)';
  const ctx = canvas.getContext('2d');
  let points = [];
  const draw = () => {
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#1e1e2e';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    if (points.length > 1) {
      ctx.strokeStyle = 'var(--c)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.stroke();
      for (let i = 1; i < points.length; i++) {
        const x1 = points[i - 1].x, y1 = points[i - 1].y;
        const x2 = points[i].x, y2 = points[i].y;
        ctx.fillStyle = 'var(--c)20';
        ctx.fillRect(x1, Math.min(y1, canvas.height / 2), x2 - x1, Math.abs(y2 - canvas.height / 2));
      }
    }
  };
  canvas.onclick = (e) => {
    const r = canvas.getBoundingClientRect();
    const x = (e.clientX - r.left) * (canvas.width / r.width);
    const y = (e.clientY - r.top) * (canvas.height / r.height);
    points.push({x, y});
    draw();
  };
  document.getElementById('simContainer').innerHTML = '';
  document.getElementById('simContainer').appendChild(canvas);
  document.getElementById('simContainer').innerHTML += `<div class="sim-controls" style="margin-top:8px"><button class="sim-btn" onclick="points=[];draw()">초기화</button></div><p class="sim-info" style="margin-top:8px;text-align:center">곡선을 그려 적분 영역을 시각화합니다</p>`;
  window.points = points;
  window.draw = draw;
  draw();
}

function sim29() {
  document.getElementById('simTag').textContent = '미분해석기';
  const canvas = document.createElement('canvas');
  canvas.width = 360;
  canvas.height = 200;
  canvas.style.cssText = 'border-radius:10px;display:block;margin:0 auto;border:1px solid var(--border)';
  const ctx = canvas.getContext('2d');
  let k = 0.5;
  const draw = (kval) => {
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const centerY = canvas.height / 2;
    ctx.strokeStyle = '#1e1e2e';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.stroke();
    ctx.strokeStyle = 'var(--c)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    let y = 50;
    for (let x = 0; x < canvas.width; x++) {
      ctx.lineTo(x, centerY - y * 10);
      y *= (1 + kval * 0.01);
    }
    ctx.stroke();
  };
  document.getElementById('simContainer').innerHTML = '';
  document.getElementById('simContainer').appendChild(canvas);
  document.getElementById('simContainer').innerHTML += `<div style="padding:10px"><label style="display:flex;gap:8px;align-items:center">성장률 k: <input type="range" min="-1" max="1" step="0.1" value="0.5" style="flex:1;accent-color:var(--c)" oninput="k=this.value;draw(k)"><span id="kVal" style="font-family:monospace;font-weight:700;color:var(--c)">0.5</span></label></div>`;
  window.k = k;
  window.draw = draw;
  draw(k);
}

function sim30() {
  document.getElementById('simTag').textContent = '전자식 아날로그 컴퓨터';
  let v1 = 0, v2 = 0;
  const calc = () => {
    const vout = -(v1 + v2);
    document.getElementById('opampResult').innerHTML = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div style="border:1px solid var(--border);border-radius:8px;padding:10px"><div style="font-size:0.8rem;color:var(--muted)">V₁</div><div style="font-size:1.5rem;font-weight:700;color:var(--c)">${v1.toFixed(1)}V</div></div><div style="border:1px solid var(--border);border-radius:8px;padding:10px"><div style="font-size:0.8rem;color:var(--muted)">V₂</div><div style="font-size:1.5rem;font-weight:700;color:var(--c)">${v2.toFixed(1)}V</div></div><div style="border:1px solid var(--border);border-radius:8px;padding:10px;grid-column:1/-1"><div style="font-size:0.8rem;color:var(--muted)">V_out = -(V₁+V₂)</div><div style="font-size:1.5rem;font-weight:700;color:#f97316">${vout.toFixed(1)}V</div></div></div>`;
  };
  document.getElementById('simContainer').innerHTML = `<div style="padding:10px"><p class="sim-info" style="margin-bottom:10px">op-amp 합산기: 두 입력의 합에 -1을 곱함</p><div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px"><label>V₁: <input type="range" min="-5" max="5" step="0.5" value="0" style="width:100%;accent-color:var(--c)" oninput="v1=this.value;calc()"></label><label>V₂: <input type="range" min="-5" max="5" step="0.5" value="0" style="width:100%;accent-color:var(--c)" oninput="v2=this.value;calc()"></label></div><div id="opampResult"></div></div>`;
  window.v1 = v1;
  window.v2 = v2;
  window.calc = calc;
  calc();
}

function sim31() {
  document.getElementById('simTag').textContent = '릴레이식 계산기';
  let s1 = false, s2 = false, s3 = false, s4 = false;
  const update = () => {
    const and = s1 && s2;
    const or = s1 || s2;
    const nand = !(s3 && s4);
    const nor = !(s3 || s4);
    document.getElementById('relayOutput').innerHTML = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div style="padding:10px;border-radius:8px;background:${and ? '#22c55e40' : '#ffffff08'};border:1px solid ${and ? '#22c55e' : 'var(--border)'}"><div style="font-size:0.75rem;color:var(--muted)">AND (S1∧S2)</div><div style="font-size:1.3rem;font-weight:700;color:${and ? '#22c55e' : 'var(--muted)'}">${and ? '1' : '0'}</div></div><div style="padding:10px;border-radius:8px;background:${or ? '#22c55e40' : '#ffffff08'};border:1px solid ${or ? '#22c55e' : 'var(--border)'}"><div style="font-size:0.75rem;color:var(--muted)">OR (S1∨S2)</div><div style="font-size:1.3rem;font-weight:700;color:${or ? '#22c55e' : 'var(--muted)'}">${or ? '1' : '0'}</div></div><div style="padding:10px;border-radius:8px;background:${nand ? '#3b82f640' : '#ffffff08'};border:1px solid ${nand ? '#3b82f6' : 'var(--border)'}"><div style="font-size:0.75rem;color:var(--muted)">NAND (S3∧S4)ⁿ</div><div style="font-size:1.3rem;font-weight:700;color:${nand ? '#3b82f6' : 'var(--muted)'}">${nand ? '1' : '0'}</div></div><div style="padding:10px;border-radius:8px;background:${nor ? '#3b82f640' : '#ffffff08'};border:1px solid ${nor ? '#3b82f6' : 'var(--border)'}"><div style="font-size:0.75rem;color:var(--muted)">NOR (S3∨S4)ⁿ</div><div style="font-size:1.3rem;font-weight:700;color:${nor ? '#3b82f6' : 'var(--muted)'}">${nor ? '1' : '0'}</div></div></div>`;
  };
  document.getElementById('simContainer').innerHTML = `<div style="padding:10px"><p class="sim-info" style="margin-bottom:10px">4개의 릴레이 스위치로 논리 연산</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px"><label style="padding:8px;border:1px solid var(--border);border-radius:8px;cursor:pointer"><input type="checkbox" onchange="s1=this.checked;update()"> S1</label><label style="padding:8px;border:1px solid var(--border);border-radius:8px;cursor:pointer"><input type="checkbox" onchange="s2=this.checked;update()"> S2</label><label style="padding:8px;border:1px solid var(--border);border-radius:8px;cursor:pointer"><input type="checkbox" onchange="s3=this.checked;update()"> S3</label><label style="padding:8px;border:1px solid var(--border);border-radius:8px;cursor:pointer"><input type="checkbox" onchange="s4=this.checked;update()"> S4</label></div><div id="relayOutput"></div></div>`;
  window.s1 = s1;
  window.s2 = s2;
  window.s3 = s3;
  window.s4 = s4;
  window.update = update;
  update();
}

function sim32() {
  document.getElementById('simTag').textContent = '하이브리드 컴퓨터';
  const canvas = document.createElement('canvas');
  canvas.width = 360;
  canvas.height = 200;
  canvas.style.cssText = 'border-radius:10px;display:block;margin:0 auto;border:1px solid var(--border)';
  const ctx = canvas.getContext('2d');
  let sampleRate = 5;
  const draw = (sr) => {
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const cy = canvas.height / 2, w = canvas.width - 40;
    ctx.strokeStyle = 'var(--c)80';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < w; x++) {
      const y = Math.sin((x / 30) * Math.PI) * 50;
      ctx.lineTo(x + 20, cy - y);
    }
    ctx.stroke();
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < w; i += sr) {
      const y = Math.sin((i / 30) * Math.PI) * 50;
      ctx.lineTo(i + 20, cy - y);
    }
    ctx.stroke();
    ctx.fillStyle = '#f97316';
    for (let i = 0; i < w; i += sr) {
      const y = Math.sin((i / 30) * Math.PI) * 50;
      ctx.beginPath();
      ctx.arc(i + 20, cy - y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  document.getElementById('simContainer').innerHTML = '';
  document.getElementById('simContainer').appendChild(canvas);
  document.getElementById('simContainer').innerHTML += `<div style="padding:10px"><label style="display:flex;gap:8px;align-items:center">샘플링 간격: <input type="range" min="2" max="50" step="2" value="5" style="flex:1;accent-color:var(--c)" oninput="sampleRate=this.value;draw(sampleRate)"><span id="srVal" style="font-family:monospace">5</span></label><p class="sim-info" style="margin-top:8px">파란 선: 아날로그 신호 | 주황 선: 디지털 샘플</p></div>`;
  window.sampleRate = sampleRate;
  window.draw = draw;
  draw(sampleRate);
}

// Register all sim functions
for (let i = 18; i <= 32; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === 'function') {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}
