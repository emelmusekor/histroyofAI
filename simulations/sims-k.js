// Category K: (노드 175-190)

function sim175() {
  document.getElementById('simTag').textContent = 'n-그램 언어모델';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">n-그램 언어모델</p>
      <canvas id="sim175Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('n-그램 언어모델에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim175Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('n-그램 언어모델', c.width/2, c.height/2);
  }
}
function sim176() {
  document.getElementById('simTag').textContent = '통계적 기계번역';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">통계적 기계번역</p>
      <canvas id="sim176Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('통계적 기계번역에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim176Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('통계적 기계번역', c.width/2, c.height/2);
  }
}
function sim177() {
  document.getElementById('simTag').textContent = '구문 분석';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">구문 분석</p>
      <canvas id="sim177Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('구문 분석에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim177Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('구문 분석', c.width/2, c.height/2);
  }
}
function sim178() {
  document.getElementById('simTag').textContent = '개체명 인식';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">개체명 인식</p>
      <canvas id="sim178Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('개체명 인식에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim178Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('개체명 인식', c.width/2, c.height/2);
  }
}
function sim179() {
  document.getElementById('simTag').textContent = '워드투벡터';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">워드투벡터</p>
      <canvas id="sim179Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('워드투벡터에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim179Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('워드투벡터', c.width/2, c.height/2);
  }
}
function sim180() {
  document.getElementById('simTag').textContent = 'GloVe';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">GloVe</p>
      <canvas id="sim180Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('GloVe에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim180Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GloVe', c.width/2, c.height/2);
  }
}
function sim181() {
  document.getElementById('simTag').textContent = 'fastText';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">fastText</p>
      <canvas id="sim181Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('fastText에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim181Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('fastText', c.width/2, c.height/2);
  }
}
function sim182() {
  document.getElementById('simTag').textContent = '순차-순차 모델';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">순차-순차 모델</p>
      <canvas id="sim182Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('순차-순차 모델에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim182Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('순차-순차 모델', c.width/2, c.height/2);
  }
}
function sim183() {
  document.getElementById('simTag').textContent = '주의집중 메커니즘';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">주의집중 메커니즘</p>
      <canvas id="sim183Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('주의집중 메커니즘에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim183Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('주의집중 메커니즘', c.width/2, c.height/2);
  }
}
function sim184() {
  document.getElementById('simTag').textContent = '트랜스포머';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">트랜스포머</p>
      <canvas id="sim184Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('트랜스포머에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim184Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('트랜스포머', c.width/2, c.height/2);
  }
}
function sim185() {
  document.getElementById('simTag').textContent = 'BERT 계열';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">BERT 계열</p>
      <canvas id="sim185Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('BERT 계열에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim185Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('BERT 계열', c.width/2, c.height/2);
  }
}
function sim186() {
  document.getElementById('simTag').textContent = 'GPT 계열 언어모델';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">GPT 계열 언어모델</p>
      <canvas id="sim186Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('GPT 계열 언어모델에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim186Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GPT 계열 언어모델', c.width/2, c.height/2);
  }
}
function sim187() {
  document.getElementById('simTag').textContent = '문장 임베딩';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">문장 임베딩</p>
      <canvas id="sim187Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('문장 임베딩에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim187Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('문장 임베딩', c.width/2, c.height/2);
  }
}
function sim188() {
  document.getElementById('simTag').textContent = '검색 결합 생성';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">검색 결합 생성</p>
      <canvas id="sim188Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('검색 결합 생성에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim188Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('검색 결합 생성', c.width/2, c.height/2);
  }
}
function sim189() {
  document.getElementById('simTag').textContent = '지시 미세조정';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">지시 미세조정</p>
      <canvas id="sim189Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('지시 미세조정에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim189Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('지시 미세조정', c.width/2, c.height/2);
  }
}
function sim190() {
  document.getElementById('simTag').textContent = '문맥 내 학습';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">문맥 내 학습</p>
      <canvas id="sim190Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('문맥 내 학습에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim190Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('문맥 내 학습', c.width/2, c.height/2);
  }
}

// Register all sim functions
for (let i = 175; i <= 190; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === 'function') {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}
