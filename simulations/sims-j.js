// Category J: (노드 155-174)

function sim155() {
  document.getElementById('simTag').textContent = '인공 뉴런';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">인공 뉴런</p>
      <canvas id="sim155Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('인공 뉴런에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim155Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('인공 뉴런', c.width/2, c.height/2);
  }
}
function sim156() {
  document.getElementById('simTag').textContent = '단층 퍼셉트론';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">단층 퍼셉트론</p>
      <canvas id="sim156Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('단층 퍼셉트론에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim156Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('단층 퍼셉트론', c.width/2, c.height/2);
  }
}
function sim157() {
  document.getElementById('simTag').textContent = 'XOR 문제';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">XOR 문제</p>
      <canvas id="sim157Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('XOR 문제에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim157Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('XOR 문제', c.width/2, c.height/2);
  }
}
function sim158() {
  document.getElementById('simTag').textContent = '다층 퍼셉트론';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">다층 퍼셉트론</p>
      <canvas id="sim158Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('다층 퍼셉트론에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim158Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('다층 퍼셉트론', c.width/2, c.height/2);
  }
}
function sim159() {
  document.getElementById('simTag').textContent = '오차역전파';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">오차역전파</p>
      <canvas id="sim159Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('오차역전파에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim159Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('오차역전파', c.width/2, c.height/2);
  }
}
function sim160() {
  document.getElementById('simTag').textContent = '손실 함수';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">손실 함수</p>
      <canvas id="sim160Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('손실 함수에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim160Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('손실 함수', c.width/2, c.height/2);
  }
}
function sim161() {
  document.getElementById('simTag').textContent = '확률적 경사하강법';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">확률적 경사하강법</p>
      <canvas id="sim161Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('확률적 경사하강법에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim161Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('확률적 경사하강법', c.width/2, c.height/2);
  }
}
function sim162() {
  document.getElementById('simTag').textContent = 'Adam 최적화';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">Adam 최적화</p>
      <canvas id="sim162Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('Adam 최적화에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim162Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Adam 최적화', c.width/2, c.height/2);
  }
}
function sim163() {
  document.getElementById('simTag').textContent = '드롭아웃';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">드롭아웃</p>
      <canvas id="sim163Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('드롭아웃에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim163Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('드롭아웃', c.width/2, c.height/2);
  }
}
function sim164() {
  document.getElementById('simTag').textContent = '배치정규화';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">배치정규화</p>
      <canvas id="sim164Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('배치정규화에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim164Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('배치정규화', c.width/2, c.height/2);
  }
}
function sim165() {
  document.getElementById('simTag').textContent = '잔차 연결';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">잔차 연결</p>
      <canvas id="sim165Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('잔차 연결에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim165Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('잔차 연결', c.width/2, c.height/2);
  }
}
function sim166() {
  document.getElementById('simTag').textContent = '합성곱';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">합성곱</p>
      <canvas id="sim166Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('합성곱에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim166Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('합성곱', c.width/2, c.height/2);
  }
}
function sim167() {
  document.getElementById('simTag').textContent = '풀링';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">풀링</p>
      <canvas id="sim167Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('풀링에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim167Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('풀링', c.width/2, c.height/2);
  }
}
function sim168() {
  document.getElementById('simTag').textContent = '깊은 합성곱 신경망';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">깊은 합성곱 신경망</p>
      <canvas id="sim168Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('깊은 합성곱 신경망에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim168Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('깊은 합성곱 신경망', c.width/2, c.height/2);
  }
}
function sim169() {
  document.getElementById('simTag').textContent = '순환 신경망';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">순환 신경망</p>
      <canvas id="sim169Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('순환 신경망에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim169Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('순환 신경망', c.width/2, c.height/2);
  }
}
function sim170() {
  document.getElementById('simTag').textContent = '장단기 기억망';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">장단기 기억망</p>
      <canvas id="sim170Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('장단기 기억망에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim170Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('장단기 기억망', c.width/2, c.height/2);
  }
}
function sim171() {
  document.getElementById('simTag').textContent = '오토인코더';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">오토인코더</p>
      <canvas id="sim171Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('오토인코더에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim171Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('오토인코더', c.width/2, c.height/2);
  }
}
function sim172() {
  document.getElementById('simTag').textContent = '임베딩 학습';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">임베딩 학습</p>
      <canvas id="sim172Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('임베딩 학습에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim172Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('임베딩 학습', c.width/2, c.height/2);
  }
}
function sim173() {
  document.getElementById('simTag').textContent = '자기지도학습';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">자기지도학습</p>
      <canvas id="sim173Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('자기지도학습에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim173Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('자기지도학습', c.width/2, c.height/2);
  }
}
function sim174() {
  document.getElementById('simTag').textContent = '대조학습';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">대조학습</p>
      <canvas id="sim174Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('대조학습에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim174Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('대조학습', c.width/2, c.height/2);
  }
}

// Register all sim functions
for (let i = 155; i <= 174; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === 'function') {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}
