// Category H: 고전AI·상징·탐색·계획 (노드 115-134)

function sim115() {
  document.getElementById('simTag').textContent = '인공지능 연구 프로그램';
  const n = 115;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">인공지능 연구 프로그램</p>
      <canvas id="sim115Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim115Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('인공지능 연구 프로그램', c.width/2, c.height/2);
  }
}

function sim116() {
  document.getElementById('simTag').textContent = '물리 기호 시스템 가설';
  const n = 116;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">물리 기호 시스템 가설</p>
      <canvas id="sim116Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim116Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('물리 기호 시스템 가설', c.width/2, c.height/2);
  }
}

function sim117() {
  document.getElementById('simTag').textContent = '논리 이론가';
  const n = 117;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">논리 이론가</p>
      <canvas id="sim117Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim117Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('논리 이론가', c.width/2, c.height/2);
  }
}

function sim118() {
  document.getElementById('simTag').textContent = '일반 문제 해결기';
  const n = 118;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">일반 문제 해결기</p>
      <canvas id="sim118Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim118Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('일반 문제 해결기', c.width/2, c.height/2);
  }
}

function sim119() {
  document.getElementById('simTag').textContent = '상태공간 표현';
  const n = 119;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">상태공간 표현</p>
      <canvas id="sim119Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim119Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('상태공간 표현', c.width/2, c.height/2);
  }
}

function sim120() {
  document.getElementById('simTag').textContent = '휴리스틱 탐색';
  const n = 120;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">휴리스틱 탐색</p>
      <canvas id="sim120Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim120Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('휴리스틱 탐색', c.width/2, c.height/2);
  }
}

function sim121() {
  document.getElementById('simTag').textContent = '의미망';
  const n = 121;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">의미망</p>
      <canvas id="sim121Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim121Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('의미망', c.width/2, c.height/2);
  }
}

function sim122() {
  document.getElementById('simTag').textContent = '프레임';
  const n = 122;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">프레임</p>
      <canvas id="sim122Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim122Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('프레임', c.width/2, c.height/2);
  }
}

function sim123() {
  document.getElementById('simTag').textContent = '스크립트';
  const n = 123;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">스크립트</p>
      <canvas id="sim123Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim123Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('스크립트', c.width/2, c.height/2);
  }
}

function sim124() {
  document.getElementById('simTag').textContent = '생성 규칙 시스템';
  const n = 124;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">생성 규칙 시스템</p>
      <canvas id="sim124Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim124Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('생성 규칙 시스템', c.width/2, c.height/2);
  }
}

function sim125() {
  document.getElementById('simTag').textContent = '전방 추론';
  const n = 125;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">전방 추론</p>
      <canvas id="sim125Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim125Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('전방 추론', c.width/2, c.height/2);
  }
}

function sim126() {
  document.getElementById('simTag').textContent = '후방 추론';
  const n = 126;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">후방 추론</p>
      <canvas id="sim126Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim126Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('후방 추론', c.width/2, c.height/2);
  }
}

function sim127() {
  document.getElementById('simTag').textContent = '전문가 시스템';
  const n = 127;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">전문가 시스템</p>
      <canvas id="sim127Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim127Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('전문가 시스템', c.width/2, c.height/2);
  }
}

function sim128() {
  document.getElementById('simTag').textContent = '자동 정리 증명';
  const n = 128;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">자동 정리 증명</p>
      <canvas id="sim128Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim128Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('자동 정리 증명', c.width/2, c.height/2);
  }
}

function sim129() {
  document.getElementById('simTag').textContent = 'STRIPS 계획';
  const n = 129;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">STRIPS 계획</p>
      <canvas id="sim129Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim129Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('STRIPS 계획', c.width/2, c.height/2);
  }
}

function sim130() {
  document.getElementById('simTag').textContent = '계층적 과제 계획';
  const n = 130;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">계층적 과제 계획</p>
      <canvas id="sim130Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim130Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('계층적 과제 계획', c.width/2, c.height/2);
  }
}

function sim131() {
  document.getElementById('simTag').textContent = '제약충족문제';
  const n = 131;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">제약충족문제</p>
      <canvas id="sim131Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim131Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('제약충족문제', c.width/2, c.height/2);
  }
}

function sim132() {
  document.getElementById('simTag').textContent = '사례 기반 추론';
  const n = 132;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">사례 기반 추론</p>
      <canvas id="sim132Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim132Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('사례 기반 추론', c.width/2, c.height/2);
  }
}

function sim133() {
  document.getElementById('simTag').textContent = '온톨로지';
  const n = 133;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">온톨로지</p>
      <canvas id="sim133Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim133Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('온톨로지', c.width/2, c.height/2);
  }
}

function sim134() {
  document.getElementById('simTag').textContent = '지식그래프';
  const n = 134;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">지식그래프</p>
      <canvas id="sim134Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim134Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('지식그래프', c.width/2, c.height/2);
  }
}

// Register all sim functions
for (let i = 115; i <= 134; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === 'function') {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}
