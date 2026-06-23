// Category F: 데이터·네트워크·정보검색 (노드 86-99)

function sim86() {
  document.getElementById('simTag').textContent = '관계형 데이터베이스';
  const n = 86;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">관계형 데이터베이스</p>
      <canvas id="sim86Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim86Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('관계형 데이터베이스', c.width/2, c.height/2);
  }
}

function sim87() {
  document.getElementById('simTag').textContent = '인덱스 구조';
  const n = 87;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">인덱스 구조</p>
      <canvas id="sim87Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim87Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('인덱스 구조', c.width/2, c.height/2);
  }
}

function sim88() {
  document.getElementById('simTag').textContent = '트랜잭션 처리';
  const n = 88;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">트랜잭션 처리</p>
      <canvas id="sim88Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim88Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('트랜잭션 처리', c.width/2, c.height/2);
  }
}

function sim89() {
  document.getElementById('simTag').textContent = '데이터웨어하우스';
  const n = 89;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">데이터웨어하우스</p>
      <canvas id="sim89Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim89Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('데이터웨어하우스', c.width/2, c.height/2);
  }
}

function sim90() {
  document.getElementById('simTag').textContent = '데이터마이닝';
  const n = 90;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">데이터마이닝</p>
      <canvas id="sim90Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim90Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('데이터마이닝', c.width/2, c.height/2);
  }
}

function sim91() {
  document.getElementById('simTag').textContent = '패킷 교환';
  const n = 91;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">패킷 교환</p>
      <canvas id="sim91Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim91Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('패킷 교환', c.width/2, c.height/2);
  }
}

function sim92() {
  document.getElementById('simTag').textContent = 'TCP/IP';
  const n = 92;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">TCP/IP</p>
      <canvas id="sim92Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim92Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TCP/IP', c.width/2, c.height/2);
  }
}

function sim93() {
  document.getElementById('simTag').textContent = '웹';
  const n = 93;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">웹</p>
      <canvas id="sim93Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim93Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('웹', c.width/2, c.height/2);
  }
}

function sim94() {
  document.getElementById('simTag').textContent = '역색인';
  const n = 94;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">역색인</p>
      <canvas id="sim94Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim94Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('역색인', c.width/2, c.height/2);
  }
}

function sim95() {
  document.getElementById('simTag').textContent = 'TF-IDF';
  const n = 95;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">TF-IDF</p>
      <canvas id="sim95Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim95Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TF-IDF', c.width/2, c.height/2);
  }
}

function sim96() {
  document.getElementById('simTag').textContent = 'PageRank';
  const n = 96;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">PageRank</p>
      <canvas id="sim96Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim96Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PageRank', c.width/2, c.height/2);
  }
}

function sim97() {
  document.getElementById('simTag').textContent = '추천 시스템';
  const n = 97;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">추천 시스템</p>
      <canvas id="sim97Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim97Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('추천 시스템', c.width/2, c.height/2);
  }
}

function sim98() {
  document.getElementById('simTag').textContent = '맵리듀스';
  const n = 98;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">맵리듀스</p>
      <canvas id="sim98Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim98Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('맵리듀스', c.width/2, c.height/2);
  }
}

function sim99() {
  document.getElementById('simTag').textContent = '벡터 검색';
  const n = 99;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">벡터 검색</p>
      <canvas id="sim99Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim99Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('벡터 검색', c.width/2, c.height/2);
  }
}

// Register all sim functions
for (let i = 86; i <= 99; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === 'function') {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}
