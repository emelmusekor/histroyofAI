// Category L: 생성모델·멀티모달·기초모델 (노드 191-206)

function sim191() {
  document.getElementById('simTag').textContent = '확률 생성 모델';
  const n = 191;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">확률 생성 모델</p>
      <canvas id="sim191Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim191Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('확률 생성 모델', c.width/2, c.height/2);
  }
}

function sim192() {
  document.getElementById('simTag').textContent = '변분 오토인코더';
  const n = 192;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">변분 오토인코더</p>
      <canvas id="sim192Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim192Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('변분 오토인코더', c.width/2, c.height/2);
  }
}

function sim193() {
  document.getElementById('simTag').textContent = '생성적 적대 신경망';
  const n = 193;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">생성적 적대 신경망</p>
      <canvas id="sim193Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim193Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('생성적 적대 신경망', c.width/2, c.height/2);
  }
}

function sim194() {
  document.getElementById('simTag').textContent = '확산 모델';
  const n = 194;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">확산 모델</p>
      <canvas id="sim194Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim194Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('확산 모델', c.width/2, c.height/2);
  }
}

function sim195() {
  document.getElementById('simTag').textContent = '자기회귀 생성 모델';
  const n = 195;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">자기회귀 생성 모델</p>
      <canvas id="sim195Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim195Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('자기회귀 생성 모델', c.width/2, c.height/2);
  }
}

function sim196() {
  document.getElementById('simTag').textContent = '샘플링 전략';
  const n = 196;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">샘플링 전략</p>
      <canvas id="sim196Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim196Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('샘플링 전략', c.width/2, c.height/2);
  }
}

function sim197() {
  document.getElementById('simTag').textContent = 'CLIP류 이미지-텍스트 정렬';
  const n = 197;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">CLIP류 이미지-텍스트 정렬</p>
      <canvas id="sim197Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim197Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CLIP류 이미지-텍스트 정렬', c.width/2, c.height/2);
  }
}

function sim198() {
  document.getElementById('simTag').textContent = '비전 트랜스포머';
  const n = 198;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">비전 트랜스포머</p>
      <canvas id="sim198Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim198Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('비전 트랜스포머', c.width/2, c.height/2);
  }
}

function sim199() {
  document.getElementById('simTag').textContent = '시각언어모델';
  const n = 199;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">시각언어모델</p>
      <canvas id="sim199Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim199Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('시각언어모델', c.width/2, c.height/2);
  }
}

function sim200() {
  document.getElementById('simTag').textContent = '문서 이해 모델';
  const n = 200;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">문서 이해 모델</p>
      <canvas id="sim200Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim200Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('문서 이해 모델', c.width/2, c.height/2);
  }
}

function sim201() {
  document.getElementById('simTag').textContent = '표 이해 모델';
  const n = 201;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">표 이해 모델</p>
      <canvas id="sim201Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim201Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('표 이해 모델', c.width/2, c.height/2);
  }
}

function sim202() {
  document.getElementById('simTag').textContent = '코드 생성 모델';
  const n = 202;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">코드 생성 모델</p>
      <canvas id="sim202Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim202Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('코드 생성 모델', c.width/2, c.height/2);
  }
}

function sim203() {
  document.getElementById('simTag').textContent = '음성 인식 모델';
  const n = 203;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">음성 인식 모델</p>
      <canvas id="sim203Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim203Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('음성 인식 모델', c.width/2, c.height/2);
  }
}

function sim204() {
  document.getElementById('simTag').textContent = '영상 생성 모델';
  const n = 204;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">영상 생성 모델</p>
      <canvas id="sim204Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim204Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('영상 생성 모델', c.width/2, c.height/2);
  }
}

function sim205() {
  document.getElementById('simTag').textContent = '월드 모델';
  const n = 205;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">월드 모델</p>
      <canvas id="sim205Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim205Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('월드 모델', c.width/2, c.height/2);
  }
}

function sim206() {
  document.getElementById('simTag').textContent = '기초모델';
  const n = 206;
  const node = NODES.find(x => x['번호'] === n) || {};
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:20px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">기초모델</p>
      <canvas id="sim206Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">${node['AI 관련성/다음 연결'] || '이 개념의 핵심 내용을 시각화합니다.'}</p>
    </div>`;
  const c = document.getElementById('sim206Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('기초모델', c.width/2, c.height/2);
  }
}

// Register all sim functions
for (let i = 191; i <= 206; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === 'function') {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}
