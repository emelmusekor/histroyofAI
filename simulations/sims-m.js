// Category M: 강화학습·에이전트·정렬 (노드 207-226)

function sim207() {
  document.getElementById("simTag").textContent = "마르코프 결정 과정";
  document.getElementById("simContainer").innerHTML = `
    <div style="padding:20px;text-align:center">
      <canvas id="mdpCanvas" width="300" height="300" style="border-radius:10px;cursor:pointer;border:1px solid var(--border);display:block;margin:0 auto"></canvas>
      <p class="sim-info" style="margin-top:10px">상태를 클릭하여 MDP 전이를 체험합니다</p>
    </div>`;
  const c = document.getElementById("mdpCanvas");
  const ctx = c.getContext("2d");
  let state = 0;
  const draw = () => {
    ctx.fillStyle = "#111118";
    ctx.fillRect(0, 0, c.width, c.height);
    for(let i=0;i<4;i++) {
      const r = Math.floor(i/2), col = i%2;
      const x = col*150+10, y = r*150+10;
      ctx.fillStyle = state===i ? "var(--c)30" : "#1e1e2e";
      ctx.fillRect(x, y, 130, 130);
      ctx.strokeStyle = state===i ? "var(--c)" : "var(--border)";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, 130, 130);
      ctx.fillStyle = "var(--text)";
      ctx.font = "bold 18px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("S"+i, x+65, y+70);
    }
  };
  c.onclick = (e) => {
    const r = c.getBoundingClientRect();
    const x = Math.floor((e.clientX-r.left)/150);
    const y = Math.floor((e.clientY-r.top)/150);
    state = y*2+x;
    draw();
  };
  draw();
}

function sim208() {
  document.getElementById("simTag").textContent = "벨만 방정식";
  let v = 10, gamma = 0.9, r = 5;
  const calc = () => {
    const result = r + gamma*v;
    document.getElementById("bellmanRes").innerHTML = `
      <div style="padding:12px;border-radius:8px;background:var(--c)10;border:1px solid var(--c)30;font-family:monospace">
        V(s) = ${r} + ${gamma.toFixed(2)} × ${v} = <span style="color:var(--c);font-weight:700;font-size:1.1rem">${result.toFixed(2)}</span>
      </div>`;
  };
  document.getElementById("simContainer").innerHTML = `
    <div style="padding:10px">
      <label style="display:flex;gap:8px;margin:6px 0">V(s): <input type="range" min="1" max="20" value="10" style="flex:1" oninput="v=+this.value;calc()"></label>
      <label style="display:flex;gap:8px;margin:6px 0">γ: <input type="range" min="0" max="1" step="0.1" value="0.9" style="flex:1" oninput="gamma=+this.value;calc()"></label>
      <label style="display:flex;gap:8px;margin:6px 0">R: <input type="range" min="-10" max="20" value="5" style="flex:1" oninput="r=+this.value;calc()"></label>
      <div id="bellmanRes" style="margin-top:10px"></div>
    </div>`;
  window.v=v; window.gamma=gamma; window.r=r; window.calc=calc;
  calc();
}

function sim209() { document.getElementById("simTag").textContent = "시간차 학습"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">TD(0): 즉시 보상으로 예측 수정</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0;font-family:monospace\">V(s) ← V(s) + α[r + γV(s') - V(s)]</div></div>"; }

function sim210() { document.getElementById("simTag").textContent = "Q-러닝"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">그리드월드에서 Q값 학습</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0;font-family:monospace\">Q(s,a) ← Q(s,a) + α[r + γmax Q(s',a') - Q(s,a)]</div></div>"; }

function sim211() { document.getElementById("simTag").textContent = "정책 경사"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">정책 π를 직접 학습하여 보상 최대화</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">θ ← θ + α∇log π(a|s)·G_t</div></div>"; }

function sim212() { document.getElementById("simTag").textContent = "행위자-비평가"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">액터와 크리틱이 협력</p><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0\"><div style=\"border:1px solid var(--c)30;padding:15px;border-radius:8px;background:var(--c)10\"><strong>액터</strong><br>정책 개선</div><div style=\"border:1px solid var(--c)30;padding:15px;border-radius:8px;background:var(--c)10\"><strong>크리틱</strong><br>가치 추정</div></div></div>"; }

function sim213() { document.getElementById("simTag").textContent = "심층 Q 네트워크"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">신경망으로 Q값 근사</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">Q(s,a) ≈ NN(s)</div><p class=\"sim-info\">경험 재생 + 대상 네트워크</p></div>"; }

function sim214() { document.getElementById("simTag").textContent = "몬테카를로 나무 탐색"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">MCTS: 보상을 최대화하는 경로 탐색</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">선택 → 전개 → 시뮬레이션 → 역전파</div></div>"; }

function sim215() { document.getElementById("simTag").textContent = "모방 학습"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">전문가 행동 데이터로 정책 학습</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">행동 복제: π_learned ≈ π_expert</div></div>"; }

function sim216() { document.getElementById("simTag").textContent = "인간 피드백 강화학습"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">RLHF: 인간의 선호도로 보상 모델 학습</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">반응 A vs 반응 B → 선호도 학습</div></div>"; }

function sim217() { document.getElementById("simTag").textContent = "규칙 기반 안전장치"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">정책 규칙으로 출력 필터링</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">IF 유해 THEN 차단</div></div>"; }

function sim218() { document.getElementById("simTag").textContent = "도구 사용 모델"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">에이전트가 도구를 선택하여 사용</p><div style=\"display:flex;gap:8px;margin:10px 0;justify-content:center;flex-wrap:wrap\"><button class=\"sim-btn\">🔧 계산기</button><button class=\"sim-btn\">🔍 검색</button><button class=\"sim-btn\">📅 일정</button></div></div>"; }

function sim219() { document.getElementById("simTag").textContent = "계획-실행-관찰 루프"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">ReAct: Thought → Action → Observation</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">1. 생각 2. 행동 3. 관찰 → 반복</div></div>"; }

function sim220() { document.getElementById("simTag").textContent = "자기 점검 루프"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">모델이 자신의 출력을 평가하고 수정</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">생성 → 비판 → 수정</div></div>"; }

function sim221() { document.getElementById("simTag").textContent = "코드 실행 에이전트"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">에이전트가 코드를 작성하고 실행</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">문제 → 코드 생성 → 실행 → 수정</div></div>"; }

function sim222() { document.getElementById("simTag").textContent = "다중 에이전트 조정"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">여러 에이전트가 협력하여 작업 해결</p><div style=\"display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:10px 0\"><div style=\"border:1px solid var(--c)30;padding:10px;border-radius:8px;background:var(--c)10\">🧠 계획</div><div style=\"border:1px solid var(--c)30;padding:10px;border-radius:8px;background:var(--c)10\">⚙️ 실행</div><div style=\"border:1px solid var(--c)30;padding:10px;border-radius:8px;background:var(--c)10\">🔍 감시</div></div></div>"; }

function sim223() { document.getElementById("simTag").textContent = "MLOps"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">머신러닝 시스템의 운영 파이프라인</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">데이터 → 학습 → 배포 → 모니터링 → 재학습</div></div>"; }

function sim224() { document.getElementById("simTag").textContent = "분산 학습"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">여러 GPU/머신에서 병렬 학습</p><div style=\"display:flex;gap:8px;margin:10px 0;justify-content:center\"><div style=\"border:1px solid var(--c)30;padding:10px;border-radius:8px;background:var(--c)10;flex:1\">GPU 1</div><div style=\"border:1px solid var(--c)30;padding:10px;border-radius:8px;background:var(--c)10;flex:1\">GPU 2</div><div style=\"border:1px solid var(--c)30;padding:10px;border-radius:8px;background:var(--c)10;flex:1\">GPU 3</div></div></div>"; }

function sim225() { document.getElementById("simTag").textContent = "설명가능 AI"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p class=\"sim-info\">모델의 결정 이유를 설명</p><div style=\"border:1px solid var(--border);border-radius:10px;padding:15px;margin:10px 0\">특징 중요도 | SHAP | LIME | 주의 시각화</div></div>"; }

function sim226() { document.getElementById("simTag").textContent = "인간 지능"; document.getElementById("simContainer").innerHTML = "<div style=\"padding:20px;text-align:center\"><p style=\"font-size:1.2rem;font-weight:700;margin-bottom:10px\">인간의 지능이 기준</p><div style=\"border:1px solid var(--c)30;border-radius:10px;padding:20px;background:var(--c)10\"><strong>적응력 | 창의성 | 감정지능 | 도덕</strong></div><p class=\"sim-info\" style=\"margin-top:10px\">AI의 궁극의 목표</p></div>"; }

for (let i = 207; i <= 226; i++) {
  const name = `sim${i}`;
  if (typeof window[name] === "function") {
    window.SIM_MAP = window.SIM_MAP || {};
    window.SIM_MAP[i] = window[name];
  }
}

