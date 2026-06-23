// Category A: 수량·기호·수학 표상 (노드 1-17)

function sim1() {
  document.getElementById('simTag').textContent = '수량 비교 체험';
  let score = [0, 0];
  const newRound = () => {
    const a = 5 + Math.floor(Math.random() * 20);
    const b = 5 + Math.floor(Math.random() * 20);
    const ans = a > b ? 'left' : 'right';
    document.getElementById('dotResult').textContent = '';
    const arena = document.getElementById('dotArena');
    arena.innerHTML = '';
    ['left', 'right'].forEach((side, si) => {
      const n = si === 0 ? a : b;
      const box = document.createElement('div');
      box.style.cssText = `width:150px;height:150px;background:#ffffff08;border-radius:12px;border:2px solid var(--border);cursor:pointer;position:relative;transition:all .2s`;
      for (let i = 0; i < n; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `position:absolute;width:10px;height:10px;border-radius:50%;background:var(--c);left:${10 + Math.random() * 120}px;top:${10 + Math.random() * 120}px`;
        box.appendChild(dot);
      }
      box.onclick = () => {
        const correct = side === ans;
        score[1]++;
        if (correct) score[0]++;
        document.getElementById('dotResult').textContent = correct ? '✅ 정답!' : '❌ 틀렸어요';
        document.getElementById('dotScore').textContent = `정답: ${score[0]} / ${score[1]}`;
      };
      arena.appendChild(box);
    });
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="text-align:center;padding:10px">
      <p class="sim-info" style="margin-bottom:16px">어느 쪽에 점이 더 많을까요?</p>
      <div id="dotArena" style="display:flex;gap:20px;justify-content:center;margin-bottom:16px"></div>
      <div id="dotResult" style="font-size:1rem;font-weight:700;min-height:32px;color:var(--c)"></div>
      <div class="sim-controls" style="justify-content:center;margin-top:12px">
        <button class="sim-btn primary" onclick="(${newRound.toString()})()">새 문제</button>
        <span class="sim-info" id="dotScore">정답: 0 / 0</span>
      </div>
    </div>`;
  newRound();
  window.dotNewRound = newRound;
}

function sim2() {
  document.getElementById('simTag').textContent = '일대일 대응 체험';
  const items = ['🍎', '🍊', '🍋', '🍌', '🍇', '🍓'];
  let selected = null;
  let matches = 0;
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:10px">
      <p class="sim-info" style="margin-bottom:10px">과일을 클릭한 후 오른쪽 상자를 클릭해 일대일 대응시키세요.</p>
      <div style="display:flex;gap:20px;margin-bottom:10px">
        <div id="itemList" style="display:flex;gap:8px;flex-wrap:wrap"></div>
        <div id="boxList" style="display:flex;gap:8px;flex-wrap:wrap"></div>
      </div>
      <div class="sim-info" id="matchLog">매칭: 0 / 6</div>
      <button class="sim-btn" onclick="location.reload()">초기화</button>
    </div>`;
  const itemDiv = document.getElementById('itemList');
  items.forEach((item, i) => {
    const el = document.createElement('div');
    el.style.cssText = `font-size:2rem;cursor:pointer;padding:10px;border-radius:8px;border:2px solid transparent;transition:all .2s;opacity:0.7`;
    el.textContent = item;
    el.onmouseover = () => el.style.opacity = '1';
    el.onmouseleave = () => el.style.opacity = selected === i ? '1' : '0.7';
    el.onclick = () => {
      document.querySelectorAll('#itemList div').forEach(e => e.style.borderColor = 'transparent');
      selected = i;
      el.style.borderColor = 'var(--c)';
    };
    itemDiv.appendChild(el);
  });
  const boxDiv = document.getElementById('boxList');
  for (let i = 0; i < 6; i++) {
    const box = document.createElement('div');
    box.style.cssText = `width:50px;height:50px;border:2px solid #1e1e2e;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.5rem`;
    box.onclick = () => {
      if (selected !== null) {
        box.textContent = items[selected];
        matches++;
        document.getElementById('matchLog').textContent = `매칭: ${matches} / 6`;
        selected = null;
        document.querySelectorAll('#itemList div').forEach(e => e.style.borderColor = 'transparent');
      }
    };
    boxDiv.appendChild(box);
  }
}

function sim3() {
  document.getElementById('simTag').textContent = '탤리 마크 체험';
  let count = 0;
  document.getElementById('simContainer').innerHTML = `
    <div style="text-align:center;padding:10px">
      <p class="sim-info" style="margin-bottom:12px">클릭해서 표식을 새기세요. 5개마다 묶음이 됩니다.</p>
      <div id="tallyDisplay" style="font-size:2.5rem;min-height:60px;letter-spacing:6px;margin:16px 0;color:var(--c)"></div>
      <div id="tallyCount" style="font-size:1rem;color:var(--muted);margin-bottom:16px">총 0개</div>
      <div class="sim-controls" style="justify-content:center">
        <button class="sim-btn primary" id="tallBtn">＋ 표식 추가</button>
        <button class="sim-btn" onclick="count=0;document.getElementById('tallyDisplay').textContent='';document.getElementById('tallyCount').textContent='총 0개'">초기화</button>
      </div>
    </div>`;
  const updateTally = () => {
    const groups = Math.floor(count / 5);
    const rem = count % 5;
    let s = '';
    for (let i = 0; i < groups; i++) s += '𝍫 ';
    for (let i = 0; i < rem; i++) s += '| ';
    document.getElementById('tallyDisplay').textContent = s || '';
    document.getElementById('tallyCount').textContent = `총 ${count}개 (${groups > 0 ? groups + '묶음' : ''}${rem > 0 ? ' ' + rem + '개' : ''})`;
  };
  document.getElementById('tallBtn').onclick = () => { count++; updateTally(); };
}

function sim4() {
  document.getElementById('simTag').textContent = '묶음 단위 시각화';
  let dots = 0;
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 200;
  canvas.style.cssText = 'border-radius:10px;border:1px solid var(--border)';
  const ctx = canvas.getContext('2d');
  const render = () => {
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const cols = 5;
    let idx = 0;
    for (let i = 0; i < Math.ceil(dots / cols); i++) {
      const y = 30 + i * 50;
      ctx.strokeStyle = 'var(--border)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.rect(20, y, 360, 40);
      ctx.stroke();
      ctx.fillStyle = 'var(--c)';
      for (let j = 0; j < cols && idx < dots; j++) {
        ctx.beginPath();
        ctx.arc(40 + j * 70, y + 20, 10, 0, Math.PI * 2);
        ctx.fill();
        idx++;
      }
    }
  };
  document.getElementById('simContainer').innerHTML = '';
  document.getElementById('simContainer').appendChild(canvas);
  document.getElementById('simContainer').innerHTML += `
    <div class="sim-controls" style="margin-top:10px">
      <button class="sim-btn primary" onclick="dots++;(${render.toString()})()">＋ 점 추가</button>
      <button class="sim-btn" onclick="dots=0;(${render.toString()})()">초기화</button>
      <span class="sim-info" id="dotCount">0개 / 0묶음</span>
    </div>`;
  window.dots = 0;
  render();
  setInterval(() => {
    if (window.dots !== dots) {
      dots = window.dots;
      render();
      document.getElementById('dotCount').textContent = `${dots}개 / ${Math.floor(dots / 5)}묶음 ${dots % 5}개`;
    }
  }, 100);
}

function sim5() {
  document.getElementById('simTag').textContent = '숫자 기호 비교';
  let num = 5;
  const render = (n) => {
    const ar = n.toString();
    const ro = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][n] || '';
    const bi = n.toString(2).padStart(4, '0');
    const ch = '零一二三四五六七八九'[n] || '';
    document.getElementById('numDisplay').innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div><div style="font-size:0.8rem;color:var(--muted)">아라비아</div><div style="font-size:2rem;font-weight:700;color:var(--c)">${ar}</div></div>
        <div><div style="font-size:0.8rem;color:var(--muted)">로마</div><div style="font-size:2rem;font-weight:700;color:var(--c)">${ro}</div></div>
        <div><div style="font-size:0.8rem;color:var(--muted)">이진</div><div style="font-size:2rem;font-weight:700;font-family:monospace;color:var(--c)">${bi}</div></div>
        <div><div style="font-size:0.8rem;color:var(--muted)">한문</div><div style="font-size:2rem;font-weight:700;color:var(--c)">${ch}</div></div>
      </div>`;
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="text-align:center;padding:10px">
      <p class="sim-info" style="margin-bottom:10px">같은 숫자를 여러 표기법으로 봅니다.</p>
      <input type="range" id="numSlider" min="0" max="9" value="5" style="width:100%;margin-bottom:10px;accent-color:var(--c)">
      <div id="numDisplay"></div>
    </div>`;
  document.getElementById('numSlider').oninput = (e) => {
    num = parseInt(e.target.value);
    render(num);
  };
  render(num);
}

function sim6() {
  document.getElementById('simTag').textContent = '자리값 체계';
  let h = 0, t = 0, o = 0;
  const render = () => {
    const total = h * 100 + t * 10 + o;
    document.getElementById('placeValue').innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px">
        <div style="border:1px solid var(--border);border-radius:8px;padding:10px;text-align:center">
          <div style="font-size:0.8rem;color:var(--muted);margin-bottom:4px">백의 자리</div>
          <div style="font-size:1.5rem;font-weight:700;color:var(--c)">${h}×100</div>
        </div>
        <div style="border:1px solid var(--border);border-radius:8px;padding:10px;text-align:center">
          <div style="font-size:0.8rem;color:var(--muted);margin-bottom:4px">십의 자리</div>
          <div style="font-size:1.5rem;font-weight:700;color:var(--c)">${t}×10</div>
        </div>
        <div style="border:1px solid var(--border);border-radius:8px;padding:10px;text-align:center">
          <div style="font-size:0.8rem;color:var(--muted);margin-bottom:4px">일의 자리</div>
          <div style="font-size:1.5rem;font-weight:700;color:var(--c)">${o}×1</div>
        </div>
      </div>
      <div style="text-align:center;font-size:1.3rem;font-weight:700;color:var(--c);padding:10px;border-radius:8px;background:var(--c)10">합계: ${total}</div>`;
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:10px">
      <p class="sim-info" style="margin-bottom:10px">각 자리수를 조절해보세요.</p>
      <div id="placeValue"></div>
      <div class="sim-controls" style="flex-direction:column;gap:8px">
        <div><label>백: <input type="range" min="0" max="9" value="0" style="width:200px;accent-color:var(--c)" oninput="h=${'{this.value}'};(${render.toString()})()"></label></div>
        <div><label>십: <input type="range" min="0" max="9" value="0" style="width:200px;accent-color:var(--c)" oninput="t=${'{this.value}'};(${render.toString()})()"></label></div>
        <div><label>일: <input type="range" min="0" max="9" value="0" style="width:200px;accent-color:var(--c)" oninput="o=${'{this.value}'};(${render.toString()})()"></label></div>
      </div>
    </div>`;
  render();
}

function sim7() {
  document.getElementById('simTag').textContent = '0의 표상 개념';
  let count = 5;
  const render = () => {
    const items = Array(count).fill('🔵').join('');
    document.getElementById('jarContent').innerHTML = `
      <div style="font-size:1.5rem;min-height:40px">${items || '<span style="color:var(--muted);font-size:1rem">비어있음 (0)</span>'}</div>`;
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="text-align:center;padding:10px">
      <p class="sim-info" style="margin-bottom:10px">항아리에서 공을 꺼내면 어떻게 될까요?</p>
      <div style="border:2px solid var(--border);border-radius:12px;padding:20px;min-height:80px;margin-bottom:10px" id="jarContent"></div>
      <div class="sim-controls">
        <button class="sim-btn" onclick="count=Math.max(0,count-1);(${render.toString()})()">⊖ 하나 빼기</button>
        <button class="sim-btn" onclick="count++;(${render.toString()})()">⊕ 하나 더하기</button>
      </div>
      <div class="sim-info" style="margin-top:10px">현재 개수: <span id="cnt" style="color:var(--c);font-weight:700">${count}</span></div>
    </div>`;
  render();
  setInterval(() => document.getElementById('cnt').textContent = count, 100);
}

function sim8() {
  document.getElementById('simTag').textContent = '진법 변환기';
  let v = 42;
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:10px">
      <p class="sim-info" style="margin-bottom:10px">같은 숫자를 다양한 진법으로 표현합니다.</p>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
        <input type="range" id="bSlider" min="0" max="255" value="42" style="flex:1;accent-color:var(--c)">
        <input type="number" id="bNum" value="42" min="0" max="255" style="width:70px;padding:6px 10px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text)">
      </div>
      <div id="baseCards" style="display:grid;grid-template-columns:1fr 1fr;gap:10px"></div>
    </div>`;
  const updateBases = (n) => {
    v = Math.max(0, Math.min(255, n));
    document.getElementById('bSlider').value = v;
    document.getElementById('bNum').value = v;
    document.getElementById('baseCards').innerHTML = [
      {name:'2진법',base:2,prefix:'0b'},
      {name:'8진법',base:8,prefix:'0o'},
      {name:'10진법',base:10,prefix:''},
      {name:'16진법',base:16,prefix:'0x'}
    ].map(b => `<div style="padding:12px;border-radius:10px;border:1px solid var(--c)30;background:var(--c)08">
      <div style="font-size:0.7rem;color:var(--muted);margin-bottom:6px">${b.name}</div>
      <div style="font-size:1.1rem;font-weight:700;font-family:monospace;color:var(--c)">${b.prefix}${v.toString(b.base).toUpperCase()}</div>
    </div>`).join('');
  };
  document.getElementById('bSlider').oninput = (e) => updateBases(+e.target.value);
  document.getElementById('bNum').oninput = (e) => updateBases(+e.target.value);
  updateBases(42);
}

function sim9() {
  document.getElementById('simTag').textContent = '좌표계 체험';
  const sc = document.getElementById('simContainer');
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'cursor:crosshair;max-width:100%;border-radius:10px';
  const W = canvas.width = Math.min(sc.offsetWidth - 40, 480);
  const H = canvas.height = 320;
  const ctx = canvas.getContext('2d');
  const pts = [];
  const draw = () => {
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, W, H);
    const ox = W / 2, oy = H / 2, s = 40;
    ctx.strokeStyle = '#1e1e2e';
    ctx.lineWidth = 1;
    for (let x = -5; x <= 5; x++) {
      ctx.beginPath();
      ctx.moveTo(ox + x * s, 0);
      ctx.lineTo(ox + x * s, H);
      ctx.stroke();
    }
    for (let y = -4; y <= 4; y++) {
      ctx.beginPath();
      ctx.moveTo(0, oy + y * s);
      ctx.lineTo(W, oy + y * s);
      ctx.stroke();
    }
    ctx.strokeStyle = 'var(--c)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, oy);
    ctx.lineTo(W, oy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ox, 0);
    ctx.lineTo(ox, H);
    ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.font = '11px monospace';
    ctx.textAlign = 'center';
    for (let x = -4; x <= 4; x += 2) {
      if (x === 0) continue;
      ctx.fillText(x, ox + x * s, oy + 14);
    }
    ctx.textAlign = 'right';
    for (let y = -3; y <= 3; y += 2) {
      if (y === 0) continue;
      ctx.fillText(-y, ox - 4, oy + y * s + 4);
    }
    pts.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.px, p.py, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'var(--c)';
      ctx.fill();
    });
  };
  canvas.onclick = function (e) {
    const r = canvas.getBoundingClientRect();
    const px = (e.clientX - r.left) * (W / r.width);
    const py = (e.clientY - r.top) * (H / r.height);
    const ox = W / 2, oy = H / 2, s = 40;
    const cx = (px - ox) / s, cy = -(py - oy) / s;
    pts.push({ px, py, cx, cy });
    document.getElementById('coordInfo').textContent = `마지막: (${cx.toFixed(2)}, ${cy.toFixed(2)}) — 총 ${pts.length}개`;
    draw();
  };
  sc.innerHTML = '';
  sc.appendChild(canvas);
  sc.innerHTML += `<div class="sim-controls" style="margin-top:8px">
    <button class="sim-btn" onclick="location.reload()">지우기</button>
  </div>
  <div class="sim-info" id="coordInfo" style="margin-top:8px">캔버스를 클릭해 점을 찍으세요</div>`;
  draw();
}

function sim10() {
  document.getElementById('simTag').textContent = '함수 개념';
  let x = 3, fn = 0;
  const funcs = [
    {name:'x²', f:x => x * x},
    {name:'2x', f:x => 2 * x},
    {name:'x+1', f:x => x + 1},
    {name:'1/x', f:x => x !== 0 ? 1 / x : 'inf'}
  ];
  const render = () => {
    const func = funcs[fn];
    const result = func.f(x);
    document.getElementById('fnDisplay').innerHTML = `
      <div style="text-align:center;padding:15px;border-radius:10px;background:var(--c)10">
        <div style="font-size:0.8rem;color:var(--muted);margin-bottom:8px">함수</div>
        <div style="font-size:1.5rem;font-weight:700;font-family:monospace;color:var(--c);margin-bottom:12px">f(x) = ${func.name}</div>
        <div style="font-size:0.9rem;color:var(--muted)">입력: x = ${x}</div>
        <div style="font-size:2rem;font-weight:700;color:var(--c);margin:8px 0">f(${x}) = ${typeof result === 'number' ? result.toFixed(2) : result}</div>
      </div>`;
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:10px">
      <p class="sim-info" style="margin-bottom:10px">함수를 선택하고 입력값을 바꿔보세요.</p>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
        ${funcs.map((f, i) => `<button class="sim-btn${i === fn ? ' primary' : ''}" onclick="fn=${i};(${render.toString()})();">${f.name}</button>`).join('')}
      </div>
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px">
        <label>x = </label>
        <input type="range" min="-5" max="5" value="3" step="0.5" style="flex:1;accent-color:var(--c)" oninput="x=${'{this.value}'};(${render.toString()})()">
        <span style="width:40px;font-weight:700;color:var(--c)">${x}</span>
      </div>
      <div id="fnDisplay"></div>
    </div>`;
  render();
}

function sim11() {
  document.getElementById('simTag').textContent = '미분 — 기울기 체험';
  const sc = document.getElementById('simContainer');
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'max-width:100%;border-radius:10px';
  const W = canvas.width = Math.min(sc.offsetWidth - 40, 480);
  const H = canvas.height = 280;
  const ctx = canvas.getContext('2d');
  let xv = 1;
  const f = x => 0.1 * x * x - 0.5;
  const df = x => 0.2 * x;
  const draw = (xval) => {
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, W, H);
    const ox = W / 2, oy = H / 2, s = 18;
    ctx.strokeStyle = '#1e1e2e';
    ctx.lineWidth = 1;
    for (let x = -15; x <= 15; x++) {
      ctx.beginPath();
      ctx.moveTo(ox + x * s, 0);
      ctx.lineTo(ox + x * s, H);
      ctx.stroke();
    }
    for (let y = -5; y <= 5; y++) {
      ctx.beginPath();
      ctx.moveTo(0, oy + y * s * 2);
      ctx.lineTo(W, oy + y * s * 2);
      ctx.stroke();
    }
    ctx.strokeStyle = '#2d2d4e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, oy);
    ctx.lineTo(W, oy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ox, 0);
    ctx.lineTo(ox, H);
    ctx.stroke();
    ctx.strokeStyle = 'var(--c)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let px = 0; px <= W; px++) {
      const x = (px - ox) / s;
      const y = f(x);
      ctx.lineTo(px, oy - y * s * 2);
    }
    ctx.stroke();
    const slope = df(xval);
    const y0 = f(xval);
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(ox - 8 * s, oy - (y0 + slope * (-8 - xval)) * s * 2);
    ctx.lineTo(ox + 8 * s, oy - (y0 + slope * (8 - xval)) * s * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(ox + xval * s, oy - y0 * s * 2, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#f97316';
    ctx.fill();
  };
  sc.innerHTML = '';
  sc.appendChild(canvas);
  sc.innerHTML += `
    <div class="sim-controls" style="margin-top:8px">
      <span class="sim-label">x 위치:</span>
      <input type="range" id="diffX" min="-30" max="30" value="10" style="flex:1;accent-color:var(--c)" oninput="xv=${'{this.value / 10}'};draw(xv);document.getElementById('diffInfo').textContent='f('+xv.toFixed(1)+') = '+((0.1*xv*xv-0.5).toFixed(2))+',  기울기 f'(x) = '+(0.2*xv).toFixed(2)">
      <span id="diffVal" style="font-family:monospace;font-size:0.8rem;color:var(--c)">x=1.0</span>
    </div>
    <div class="sim-info" id="diffInfo">기울기를 통해 극값 찾기</div>`;
  window.draw = draw;
  draw(1);
}

function sim12() {
  document.getElementById('simTag').textContent = '적분 — 넓이 계산';
  const sc = document.getElementById('simContainer');
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'max-width:100%;border-radius:10px';
  const W = canvas.width = Math.min(sc.offsetWidth - 40, 480);
  const H = canvas.height = 240;
  const ctx = canvas.getContext('2d');
  let rects = 10;
  const draw = (n) => {
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, W, H);
    const ox = 30, w = W - 60, h = H - 40;
    ctx.strokeStyle = '#1e1e2e';
    ctx.lineWidth = 1;
    ctx.strokeRect(ox, 10, w, h);
    const dx = w / n;
    let area = 0;
    for (let i = 0; i < n; i++) {
      const x = (i + 0.5) / n * Math.PI * 2;
      const y = Math.sin(x);
      const rh = y * h / 2;
      const rx = ox + i * dx;
      ctx.fillStyle = 'var(--c)40';
      ctx.fillRect(rx, 10 + h / 2 - rh, dx - 1, rh);
      ctx.strokeStyle = 'var(--c)';
      ctx.lineWidth = 1;
      ctx.strokeRect(rx, 10 + h / 2 - rh, dx - 1, rh);
      area += y * (Math.PI * 2 / n);
    }
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px monospace';
    ctx.fillText(`근사 넓이: ${area.toFixed(2)} (정확: ${(2 * Math.PI).toFixed(2)})`, ox + 4, H - 8);
  };
  sc.innerHTML = '';
  sc.appendChild(canvas);
  sc.innerHTML += `
    <div class="sim-controls" style="margin-top:8px">
      <span class="sim-label">직사각형 개수:</span>
      <input type="range" id="rectSlider" min="4" max="100" value="10" style="flex:1;accent-color:var(--c)" oninput="rects=${'{this.value}'};draw(rects);document.getElementById('rectNum').textContent=rects">
      <span id="rectNum" style="font-weight:700;color:var(--c)">10</span>
    </div>`;
  window.draw = draw;
  draw(10);
}

function sim13() {
  document.getElementById('simTag').textContent = '확률 — 주사위 실험';
  const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  const counts = [0, 0, 0, 0, 0, 0];
  let total = 0;
  const rollDice = (n) => {
    for (let i = 0; i < n; i++) counts[Math.floor(Math.random() * 6)]++;
    total += n;
    document.getElementById('diceResult').textContent = `총 ${total}번 던짐`;
    drawChart();
  };
  const drawChart = () => {
    const c = document.getElementById('diceChart');
    const ctx = c.getContext('2d'), W = c.width, H = c.height;
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, W, H);
    const bw = 50, gap = 10, sx = 20, barH = H - 40;
    for (let i = 0; i < 6; i++) {
      const x = sx + i * (bw + gap);
      const h = total > 0 ? (counts[i] / total) * barH : 0;
      ctx.fillStyle = 'var(--c)30';
      ctx.fillRect(x, H - 30 - barH, bw, barH);
      ctx.fillStyle = 'var(--c)';
      ctx.fillRect(x, H - 30 - h, bw, h);
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(faces[i], x + bw / 2, H - 12);
    }
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="text-align:center;padding:10px">
      <div id="diceDisplay" style="font-size:3rem;margin:10px 0">🎲</div>
      <div id="diceResult" style="font-size:1rem;font-weight:700;color:var(--c);margin-bottom:10px">던져보세요!</div>
      <canvas id="diceChart" width="400" height="160" style="max-width:100%;border-radius:10px;border:1px solid var(--border)"></canvas>
      <div class="sim-controls" style="justify-content:center;margin-top:10px">
        <button class="sim-btn primary" onclick="(${rollDice.toString()})(1)">1번 던지기</button>
        <button class="sim-btn" onclick="(${rollDice.toString()})(10)">10번</button>
        <button class="sim-btn" onclick="(${rollDice.toString()})(100)">100번</button>
      </div>
    </div>`;
  drawChart();
  window.rollDice = rollDice;
}

function sim14() {
  document.getElementById('simTag').textContent = '통계량 계산';
  let nums = [1, 3, 5, 7, 9];
  const calc = () => {
    const sorted = [...nums].sort((a, b) => a - b);
    const mean = nums.reduce((s, n) => s + n, 0) / nums.length;
    const median = sorted.length % 2 === 0 ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2 : sorted[Math.floor(sorted.length / 2)];
    const variance = nums.reduce((s, n) => s + (n - mean) ** 2, 0) / nums.length;
    const std = Math.sqrt(variance);
    document.getElementById('statsResult').innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="padding:10px;border-radius:8px;background:var(--c)08;border:1px solid var(--c)30">
          <div style="font-size:0.75rem;color:var(--muted)">평균</div>
          <div style="font-size:1.3rem;font-weight:700;color:var(--c)">${mean.toFixed(2)}</div>
        </div>
        <div style="padding:10px;border-radius:8px;background:var(--c)08;border:1px solid var(--c)30">
          <div style="font-size:0.75rem;color:var(--muted)">중앙값</div>
          <div style="font-size:1.3rem;font-weight:700;color:var(--c)">${median.toFixed(2)}</div>
        </div>
        <div style="padding:10px;border-radius:8px;background:var(--c)08;border:1px solid var(--c)30">
          <div style="font-size:0.75rem;color:var(--muted)">표준편차</div>
          <div style="font-size:1.3rem;font-weight:700;color:var(--c)">${std.toFixed(2)}</div>
        </div>
        <div style="padding:10px;border-radius:8px;background:var(--c)08;border:1px solid var(--c)30">
          <div style="font-size:0.75rem;color:var(--muted)">범위</div>
          <div style="font-size:1.3rem;font-weight:700;color:var(--c)">${Math.min(...nums)}-${Math.max(...nums)}</div>
        </div>
      </div>`;
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:10px">
      <p class="sim-info" style="margin-bottom:10px">숫자를 쉼표로 구분해 입력하세요.</p>
      <input type="text" id="numsInput" value="1,3,5,7,9" style="width:100%;padding:8px 10px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text);margin-bottom:10px" oninput="const vs=${'{this.value.split(',').map(x => parseFloat(x)).filter(x => !isNaN(x))}'};if(vs.length > 0) nums = vs; (${calc.toString()})()">
      <div id="statsResult"></div>
    </div>`;
  calc();
  window.nums = nums;
}

function sim15() {
  document.getElementById('simTag').textContent = '선형대수 — 벡터';
  let v1x = 2, v1y = 1, v2x = 1, v2y = 2;
  const sc = document.getElementById('simContainer');
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'border-radius:10px;max-width:100%';
  const W = canvas.width = 300;
  const H = canvas.height = 300;
  const ctx = canvas.getContext('2d');
  const draw = () => {
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2, s = 40;
    ctx.strokeStyle = '#1e1e2e';
    ctx.lineWidth = 1;
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath();
      ctx.moveTo(cx + i * s, 0);
      ctx.lineTo(cx + i * s, H);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, cy + i * s);
      ctx.lineTo(W, cy + i * s);
      ctx.stroke();
    }
    ctx.strokeStyle = 'var(--c)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(W, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, H);
    ctx.stroke();
    const drawVec = (x, y, col, label) => {
      ctx.strokeStyle = col;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + x * s, cy - y * s);
      ctx.stroke();
      ctx.fillStyle = col;
      ctx.font = '11px monospace';
      ctx.fillText(label, cx + x * s + 5, cy - y * s - 5);
    };
    drawVec(v1x, v1y, '#22c55e', `v1`);
    drawVec(v2x, v2y, '#3b82f6', `v2`);
    drawVec(v1x + v2x, v1y + v2y, '#f97316', `v1+v2`);
    const dot = v1x * v2x + v1y * v2y;
    ctx.fillStyle = '#64748b';
    ctx.font = '11px monospace';
    ctx.fillText(`점곱: ${dot}`, 10, 20);
  };
  sc.innerHTML = '';
  sc.appendChild(canvas);
  sc.innerHTML += `
    <div class="sim-controls" style="flex-direction:column;gap:8px;margin-top:10px">
      <label style="display:flex;gap:8px">v1x: <input type="range" min="-3" max="3" step="0.5" value="${v1x}" style="flex:1;accent-color:#22c55e" oninput="v1x=${'{this.value}'};(${draw.toString()})()"></label>
      <label style="display:flex;gap:8px">v1y: <input type="range" min="-3" max="3" step="0.5" value="${v1y}" style="flex:1;accent-color:#22c55e" oninput="v1y=${'{this.value}'};(${draw.toString()})()"></label>
      <label style="display:flex;gap:8px">v2x: <input type="range" min="-3" max="3" step="0.5" value="${v2x}" style="flex:1;accent-color:#3b82f6" oninput="v2x=${'{this.value}'};(${draw.toString()})()"></label>
      <label style="display:flex;gap:8px">v2y: <input type="range" min="-3" max="3" step="0.5" value="${v2y}" style="flex:1;accent-color:#3b82f6" oninput="v2y=${'{this.value}'};(${draw.toString()})()"></label>
    </div>`;
  window.v1x = v1x;
  window.v1y = v1y;
  window.v2x = v2x;
  window.v2y = v2y;
  window.draw = draw;
  draw();
}

function sim16() {
  document.getElementById('simTag').textContent = '그래프 이론';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:10px;text-align:center">
      <p class="sim-info" style="margin-bottom:10px">간단한 그래프: 노드와 간선으로 관계를 표현합니다.</p>
      <svg width="100%" height="250" viewBox="0 0 400 250" style="border:1px solid var(--border);border-radius:10px">
        <defs><marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="var(--c)" /></marker></defs>
        <line x1="80" y1="80" x2="180" y2="80" stroke="var(--c)" stroke-width="2" marker-end="url(#arrowhead)" />
        <line x1="180" y1="80" x2="280" y2="80" stroke="var(--c)" stroke-width="2" marker-end="url(#arrowhead)" />
        <line x1="180" y1="80" x2="180" y2="160" stroke="var(--c)" stroke-width="2" marker-end="url(#arrowhead)" />
        <circle cx="80" cy="80" r="20" fill="var(--c)40" stroke="var(--c)" stroke-width="2" />
        <text x="80" y="85" text-anchor="middle" fill="white" font-weight="bold">A</text>
        <circle cx="180" cy="80" r="20" fill="var(--c)40" stroke="var(--c)" stroke-width="2" />
        <text x="180" y="85" text-anchor="middle" fill="white" font-weight="bold">B</text>
        <circle cx="280" cy="80" r="20" fill="var(--c)40" stroke="var(--c)" stroke-width="2" />
        <text x="280" y="85" text-anchor="middle" fill="white" font-weight="bold">C</text>
        <circle cx="180" cy="160" r="20" fill="var(--c)40" stroke="var(--c)" stroke-width="2" />
        <text x="180" y="165" text-anchor="middle" fill="white" font-weight="bold">D</text>
      </svg>
      <div class="sim-info" style="margin-top:10px">A→B→C, B→D 경로로 정보가 흘러갑니다.</div>
    </div>`;
}

function sim17() {
  document.getElementById('simTag').textContent = '정보이론 — 엔트로피';
  let p1 = 0.5;
  const calc = (p) => {
    const q = 1 - p;
    const h = p > 0 && p < 1 ? -(p * Math.log2(p) + q * Math.log2(q)) : 0;
    document.getElementById('entropyDisplay').innerHTML = `
      <div style="padding:15px;border-radius:10px;background:var(--c)10;text-align:center">
        <div style="font-size:0.8rem;color:var(--muted);margin-bottom:8px">사건 A의 확률</div>
        <div style="font-size:2rem;font-weight:700;color:var(--c);margin:8px 0">${(p * 100).toFixed(0)}%</div>
        <div style="font-size:0.8rem;color:var(--muted);margin-bottom:12px">사건 B의 확률: ${((1 - p) * 100).toFixed(0)}%</div>
        <div style="border-top:1px solid var(--border);padding-top:10px">
          <div style="font-size:0.8rem;color:var(--muted);margin-bottom:4px">정보량 (엔트로피)</div>
          <div style="font-size:1.5rem;font-weight:700;color:var(--c)">${h.toFixed(3)} bits</div>
        </div>
      </div>`;
  };
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:10px">
      <p class="sim-info" style="margin-bottom:10px">확률이 균등할수록 불확실성(엔트로피)이 높습니다.</p>
      <input type="range" min="0" max="1" step="0.01" value="0.5" style="width:100%;margin-bottom:10px;accent-color:var(--c)" oninput="p1=${'{this.value}'};(${calc.toString()})(p1)">
      <div id="entropyDisplay"></div>
    </div>`;
  calc(0.5);
}

// Register all sim functions
for (let i = 1; i <= 17; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === 'function') {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}
