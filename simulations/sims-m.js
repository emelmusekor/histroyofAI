// Category M: (노드 207-226)

function sim207() {
  document.getElementById('simTag').textContent = '마르코프 결정 과정';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">마르코프 결정 과정</p>
      <canvas id="sim207Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('마르코프 결정 과정에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim207Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('마르코프 결정 과정', c.width/2, c.height/2);
  }
}
function sim208() {
  document.getElementById('simTag').textContent = '벨만 방정식';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">벨만 방정식</p>
      <canvas id="sim208Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('벨만 방정식에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim208Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('벨만 방정식', c.width/2, c.height/2);
  }
}
function sim209() {
  document.getElementById('simTag').textContent = '시간차 학습';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">시간차 학습</p>
      <canvas id="sim209Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('시간차 학습에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim209Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('시간차 학습', c.width/2, c.height/2);
  }
}
function sim210() {
  document.getElementById('simTag').textContent = 'Q-러닝';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">Q-러닝</p>
      <canvas id="sim210Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('Q-러닝에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim210Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Q-러닝', c.width/2, c.height/2);
  }
}
function sim211() {
  document.getElementById('simTag').textContent = '정책 경사';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">정책 경사</p>
      <canvas id="sim211Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('정책 경사에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim211Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('정책 경사', c.width/2, c.height/2);
  }
}
function sim212() {
  document.getElementById('simTag').textContent = '행위자-비평가';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">행위자-비평가</p>
      <canvas id="sim212Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('행위자-비평가에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim212Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('행위자-비평가', c.width/2, c.height/2);
  }
}
function sim213() {
  document.getElementById('simTag').textContent = '심층 Q 네트워크';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">심층 Q 네트워크</p>
      <canvas id="sim213Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('심층 Q 네트워크에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim213Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('심층 Q 네트워크', c.width/2, c.height/2);
  }
}
function sim214() {
  document.getElementById('simTag').textContent = '몬테카를로 나무 탐색 강화';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">몬테카를로 나무 탐색 강화</p>
      <canvas id="sim214Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('몬테카를로 나무 탐색 강화에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim214Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('몬테카를로 나무 탐색 강화', c.width/2, c.height/2);
  }
}
function sim215() {
  document.getElementById('simTag').textContent = '모방학습';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">모방학습</p>
      <canvas id="sim215Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('모방학습에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim215Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('모방학습', c.width/2, c.height/2);
  }
}
function sim216() {
  document.getElementById('simTag').textContent = '인간 피드백 강화학습';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">인간 피드백 강화학습</p>
      <canvas id="sim216Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('인간 피드백 강화학습에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim216Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('인간 피드백 강화학습', c.width/2, c.height/2);
  }
}
function sim217() {
  document.getElementById('simTag').textContent = '규칙 기반 안전장치';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">규칙 기반 안전장치</p>
      <canvas id="sim217Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('규칙 기반 안전장치에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim217Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('규칙 기반 안전장치', c.width/2, c.height/2);
  }
}
function sim218() {
  document.getElementById('simTag').textContent = '도구 사용 모델';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">도구 사용 모델</p>
      <canvas id="sim218Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('도구 사용 모델에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim218Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('도구 사용 모델', c.width/2, c.height/2);
  }
}
function sim219() {
  document.getElementById('simTag').textContent = '계획-실행-관찰 루프';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">계획-실행-관찰 루프</p>
      <canvas id="sim219Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('계획-실행-관찰 루프에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim219Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('계획-실행-관찰 루프', c.width/2, c.height/2);
  }
}
function sim220() {
  document.getElementById('simTag').textContent = '자기 점검 루프';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">자기 점검 루프</p>
      <canvas id="sim220Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('자기 점검 루프에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim220Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('자기 점검 루프', c.width/2, c.height/2);
  }
}
function sim221() {
  document.getElementById('simTag').textContent = '코드 실행 에이전트';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">코드 실행 에이전트</p>
      <canvas id="sim221Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('코드 실행 에이전트에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim221Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('코드 실행 에이전트', c.width/2, c.height/2);
  }
}
function sim222() {
  document.getElementById('simTag').textContent = '다중 에이전트 조정';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">다중 에이전트 조정</p>
      <canvas id="sim222Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('다중 에이전트 조정에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim222Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('다중 에이전트 조정', c.width/2, c.height/2);
  }
}
function sim223() {
  document.getElementById('simTag').textContent = 'MLOps';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">MLOps</p>
      <canvas id="sim223Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('MLOps에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim223Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('MLOps', c.width/2, c.height/2);
  }
}
function sim224() {
  document.getElementById('simTag').textContent = '분산 학습';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">분산 학습</p>
      <canvas id="sim224Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('분산 학습에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim224Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('분산 학습', c.width/2, c.height/2);
  }
}
function sim225() {
  document.getElementById('simTag').textContent = '설명가능 AI';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">설명가능 AI</p>
      <canvas id="sim225Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('설명가능 AI에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim225Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('설명가능 AI', c.width/2, c.height/2);
  }
}
function sim226() {
  document.getElementById('simTag').textContent = '인간 지능';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">인간 지능</p>
      <canvas id="sim226Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('인간 지능에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim226Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('인간 지능', c.width/2, c.height/2);
  }
}

// Register all sim functions
for (let i = 207; i <= 226; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === 'function') {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}
