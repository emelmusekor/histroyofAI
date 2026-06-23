// Category E: (노드 67-85)

function sim67() {
  document.getElementById('simTag').textContent = '배열';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">배열</p>
      <canvas id="sim67Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('배열에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim67Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('배열', c.width/2, c.height/2);
  }
}
function sim68() {
  document.getElementById('simTag').textContent = '스택';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">스택</p>
      <canvas id="sim68Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('스택에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim68Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('스택', c.width/2, c.height/2);
  }
}
function sim69() {
  document.getElementById('simTag').textContent = '큐';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">큐</p>
      <canvas id="sim69Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('큐에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim69Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('큐', c.width/2, c.height/2);
  }
}
function sim70() {
  document.getElementById('simTag').textContent = '우선순위 큐';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">우선순위 큐</p>
      <canvas id="sim70Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('우선순위 큐에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim70Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('우선순위 큐', c.width/2, c.height/2);
  }
}
function sim71() {
  document.getElementById('simTag').textContent = '해시 테이블';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">해시 테이블</p>
      <canvas id="sim71Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('해시 테이블에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim71Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('해시 테이블', c.width/2, c.height/2);
  }
}
function sim72() {
  document.getElementById('simTag').textContent = '그래프 자료구조';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">그래프 자료구조</p>
      <canvas id="sim72Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('그래프 자료구조에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim72Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('그래프 자료구조', c.width/2, c.height/2);
  }
}
function sim73() {
  document.getElementById('simTag').textContent = '정렬';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">정렬</p>
      <canvas id="sim73Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('정렬에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim73Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('정렬', c.width/2, c.height/2);
  }
}
function sim74() {
  document.getElementById('simTag').textContent = '이진 탐색';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">이진 탐색</p>
      <canvas id="sim74Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('이진 탐색에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim74Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('이진 탐색', c.width/2, c.height/2);
  }
}
function sim75() {
  document.getElementById('simTag').textContent = '깊이 우선 탐색';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">깊이 우선 탐색</p>
      <canvas id="sim75Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('깊이 우선 탐색에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim75Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('깊이 우선 탐색', c.width/2, c.height/2);
  }
}
function sim76() {
  document.getElementById('simTag').textContent = '너비 우선 탐색';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">너비 우선 탐색</p>
      <canvas id="sim76Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('너비 우선 탐색에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim76Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('너비 우선 탐색', c.width/2, c.height/2);
  }
}
function sim77() {
  document.getElementById('simTag').textContent = '다익스트라 알고리즘';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">다익스트라 알고리즘</p>
      <canvas id="sim77Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('다익스트라 알고리즘에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim77Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('다익스트라 알고리즘', c.width/2, c.height/2);
  }
}
function sim78() {
  document.getElementById('simTag').textContent = 'A* 탐색';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">A* 탐색</p>
      <canvas id="sim78Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('A* 탐색에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim78Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('A* 탐색', c.width/2, c.height/2);
  }
}
function sim79() {
  document.getElementById('simTag').textContent = '백트래킹';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">백트래킹</p>
      <canvas id="sim79Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('백트래킹에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim79Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('백트래킹', c.width/2, c.height/2);
  }
}
function sim80() {
  document.getElementById('simTag').textContent = '동적 계획법';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">동적 계획법</p>
      <canvas id="sim80Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('동적 계획법에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim80Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('동적 계획법', c.width/2, c.height/2);
  }
}
function sim81() {
  document.getElementById('simTag').textContent = '탐욕 알고리즘';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">탐욕 알고리즘</p>
      <canvas id="sim81Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('탐욕 알고리즘에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim81Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('탐욕 알고리즘', c.width/2, c.height/2);
  }
}
function sim82() {
  document.getElementById('simTag').textContent = '분할 정복';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">분할 정복</p>
      <canvas id="sim82Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('분할 정복에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim82Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('분할 정복', c.width/2, c.height/2);
  }
}
function sim83() {
  document.getElementById('simTag').textContent = '선형 계획법';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">선형 계획법</p>
      <canvas id="sim83Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('선형 계획법에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim83Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('선형 계획법', c.width/2, c.height/2);
  }
}
function sim84() {
  document.getElementById('simTag').textContent = '미니맥스';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">미니맥스</p>
      <canvas id="sim84Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('미니맥스에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim84Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('미니맥스', c.width/2, c.height/2);
  }
}
function sim85() {
  document.getElementById('simTag').textContent = '알파-베타 가지치기';
  document.getElementById('simContainer').innerHTML = `
    <div style="padding:15px;text-align:center">
      <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:10px">알파-베타 가지치기</p>
      <canvas id="sim85Canvas" width="300" height="200" style="border:1px solid var(--border);border-radius:10px;display:block;margin:0 auto;background:#111118"></canvas>
      <p class="sim-info" style="margin-top:10px">이 개념을 시각화하고 상호작용할 수 있습니다.</p>
      <button class="sim-btn primary" style="margin-top:10px" onclick="alert('알파-베타 가지치기에 대해 더 알아보세요!')">정보</button>
    </div>`;
  const c = document.getElementById('sim85Canvas');
  if(c && c.getContext) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'var(--c)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('알파-베타 가지치기', c.width/2, c.height/2);
  }
}

// Register all sim functions
for (let i = 67; i <= 85; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === 'function') {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}
