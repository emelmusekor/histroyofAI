// Category C: (노드 33-49)

function sim33() {
  document.getElementById('simTag').textContent = '부울 대수';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">부울 대수</p>
      <canvas id="sim33Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('부울 대수에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim33Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('부울 대수', c.width/2, c.height/2);
  }
}
function sim34() {
  document.getElementById('simTag').textContent = '술어논리';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">술어논리</p>
      <canvas id="sim34Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('술어논리에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim34Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('술어논리', c.width/2, c.height/2);
  }
}
function sim35() {
  document.getElementById('simTag').textContent = '람다 계산';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">람다 계산</p>
      <canvas id="sim35Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('람다 계산에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim35Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('람다 계산', c.width/2, c.height/2);
  }
}
function sim36() {
  document.getElementById('simTag').textContent = '튜링 기계';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">튜링 기계</p>
      <canvas id="sim36Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('튜링 기계에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim36Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('튜링 기계', c.width/2, c.height/2);
  }
}
function sim37() {
  document.getElementById('simTag').textContent = '정지 문제';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">정지 문제</p>
      <canvas id="sim37Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('정지 문제에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim37Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('정지 문제', c.width/2, c.height/2);
  }
}
function sim38() {
  document.getElementById('simTag').textContent = '유한 오토마타';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">유한 오토마타</p>
      <canvas id="sim38Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('유한 오토마타에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim38Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('유한 오토마타', c.width/2, c.height/2);
  }
}
function sim39() {
  document.getElementById('simTag').textContent = '논리 게이트';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">논리 게이트</p>
      <canvas id="sim39Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('논리 게이트에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim39Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('논리 게이트', c.width/2, c.height/2);
  }
}
function sim40() {
  document.getElementById('simTag').textContent = '플립플롭';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">플립플롭</p>
      <canvas id="sim40Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('플립플롭에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim40Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('플립플롭', c.width/2, c.height/2);
  }
}
function sim41() {
  document.getElementById('simTag').textContent = '조합논리 회로';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">조합논리 회로</p>
      <canvas id="sim41Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('조합논리 회로에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim41Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('조합논리 회로', c.width/2, c.height/2);
  }
}
function sim42() {
  document.getElementById('simTag').textContent = '순차논리 회로';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">순차논리 회로</p>
      <canvas id="sim42Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('순차논리 회로에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim42Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('순차논리 회로', c.width/2, c.height/2);
  }
}
function sim43() {
  document.getElementById('simTag').textContent = '진공관 컴퓨터';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">진공관 컴퓨터</p>
      <canvas id="sim43Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('진공관 컴퓨터에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim43Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('진공관 컴퓨터', c.width/2, c.height/2);
  }
}
function sim44() {
  document.getElementById('simTag').textContent = '트랜지스터 컴퓨터';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">트랜지스터 컴퓨터</p>
      <canvas id="sim44Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('트랜지스터 컴퓨터에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim44Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('트랜지스터 컴퓨터', c.width/2, c.height/2);
  }
}
function sim45() {
  document.getElementById('simTag').textContent = '집적회로';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">집적회로</p>
      <canvas id="sim45Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('집적회로에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim45Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('집적회로', c.width/2, c.height/2);
  }
}
function sim46() {
  document.getElementById('simTag').textContent = '마이크로프로세서';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">마이크로프로세서</p>
      <canvas id="sim46Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('마이크로프로세서에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim46Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('마이크로프로세서', c.width/2, c.height/2);
  }
}
function sim47() {
  document.getElementById('simTag').textContent = '저장 프로그램 구조';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">저장 프로그램 구조</p>
      <canvas id="sim47Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('저장 프로그램 구조에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim47Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('저장 프로그램 구조', c.width/2, c.height/2);
  }
}
function sim48() {
  document.getElementById('simTag').textContent = 'GPU 병렬 연산';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">GPU 병렬 연산</p>
      <canvas id="sim48Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('GPU 병렬 연산에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim48Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GPU 병렬 연산', c.width/2, c.height/2);
  }
}
function sim49() {
  document.getElementById('simTag').textContent = 'TPU·AI 가속기';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">TPU·AI 가속기</p>
      <canvas id="sim49Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('TPU·AI 가속기에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim49Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TPU·AI 가속기', c.width/2, c.height/2);
  }
}

// Register all sim functions
for (let i = 33; i <= 49; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === 'function') {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}
