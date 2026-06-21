
function sim114(){
  document.getElementById('simTag').textContent='자율주행 파이프라인';
  const c=document.getElementById('simContainer');
  c.innerHTML='';
  const stages=['Sense','Perceive','Plan','Act','Monitor'];
  const labels=['감지','인지','계획','행동','모니터'];
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');
  cv.width=W;cv.height=160;c.appendChild(cv);
  const btn=document.createElement('button');
  btn.textContent='시뮬레이션 시작';
  btn.style.cssText='margin-top:10px;padding:8px 18px;background:#22c55e;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:14px;';
  c.appendChild(btn);
  const ctx=cv.getContext('2d');
  let pos=-1,anim=null;
  function draw(active){
    ctx.clearRect(0,0,W,160);
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,160);
    const bw=W/6,bh=60,by=50;
    stages.forEach((s,i)=>{
      const x=20+i*(bw+4);
      ctx.fillStyle=active===i?'#22c55e':'#1e1e2e';
      ctx.strokeStyle='#22c55e';ctx.lineWidth=1.5;
      ctx.beginPath();ctx.roundRect(x,by,bw,bh,6);ctx.fill();ctx.stroke();
      ctx.fillStyle=active===i?'#111':'#ccc';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
      ctx.fillText(s,x+bw/2,by+22);
      ctx.fillStyle=active===i?'#111':'#aaa';ctx.font='10px sans-serif';
      ctx.fillText(labels[i],x+bw/2,by+38);
      if(i<stages.length-1){
        ctx.strokeStyle='#22c55e';ctx.lineWidth=1.5;
        ctx.beginPath();ctx.moveTo(x+bw+1,by+bh/2);ctx.lineTo(x+bw+5,by+bh/2);ctx.stroke();
        ctx.beginPath();ctx.moveTo(x+bw+3,by+bh/2-4);ctx.lineTo(x+bw+7,by+bh/2);ctx.lineTo(x+bw+3,by+bh/2+4);ctx.fill();
      }
    });
    if(active>=0){
      const px=20+active*(bw+4)+bw/2;
      ctx.fillStyle='#fff';ctx.font='12px sans-serif';ctx.textAlign='center';
      ctx.fillText('● 패킷 처리 중',px,by+bh+20);
    }
  }
  draw(-1);
  btn.onclick=()=>{
    if(anim)clearInterval(anim);
    pos=0;draw(pos);
    anim=setInterval(()=>{pos++;if(pos>=stages.length){clearInterval(anim);draw(-1);btn.textContent='다시 시작';}else draw(pos);},700);
    btn.textContent='시뮬레이션 시작';
  };
}

function sim115(){
  document.getElementById('simTag').textContent='인공지능 연구 프로그램';
  const c=document.getElementById('simContainer');
  c.innerHTML='';
  const events=[
    {e:'다트머스 회의',y:1956},{e:'엑스퍼트 시스템 등장',y:1970},{e:'딥러닝 르네상스',y:2006},
    {e:'AlphaGo 승리',y:2016},{e:'ChatGPT 출시',y:2022}
  ];
  const years=[1956,1970,2006,2016,2022].sort(()=>Math.random()-0.5);
  let score=0,matched={};
  const div=document.createElement('div');
  div.style.cssText='color:#ccc;font-size:13px;';
  div.innerHTML='<p style="color:#06b6d4;font-weight:bold;margin-bottom:8px">사건을 올바른 연도에 매칭하세요</p>';
  events.forEach((ev,i)=>{
    const row=document.createElement('div');
    row.style.cssText='display:flex;align-items:center;gap:8px;margin:6px 0;';
    const lbl=document.createElement('span');
    lbl.textContent=ev.e;lbl.style.cssText='width:180px;background:#1e1e2e;padding:5px 8px;border-radius:4px;border:1px solid #334;';
    const sel=document.createElement('select');
    sel.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:4px;border-radius:4px;';
    sel.innerHTML='<option value="">연도 선택</option>'+years.map(y=>`<option value="${y}">${y}</option>`).join('');
    const st=document.createElement('span');st.style.width='20px';
    sel.onchange=()=>{
      if(parseInt(sel.value)===ev.y){st.textContent='✓';st.style.color='#22c55e';matched[i]=true;}
      else{st.textContent='✗';st.style.color='#ef4444';delete matched[i];}
      score=Object.keys(matched).length;
      result.textContent=`점수: ${score}/${events.length}`;
    };
    row.appendChild(lbl);row.appendChild(sel);row.appendChild(st);
    div.appendChild(row);
  });
  const result=document.createElement('p');
  result.style.cssText='color:#06b6d4;font-weight:bold;margin-top:10px;';
  result.textContent='점수: 0/5';
  div.appendChild(result);
  c.appendChild(div);
}

function sim116(){
  document.getElementById('simTag').textContent='물리 기호 시스템 가설';
  const c=document.getElementById('simContainer');
  c.innerHTML='';
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">문자열 재작성 규칙: A→AB, B→A</p>';
  const inp=document.createElement('input');
  inp.value='A';inp.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:6px;border-radius:4px;width:120px;font-size:14px;';
  const btn=document.createElement('button');
  btn.textContent='스텝 실행';btn.style.cssText='margin-left:8px;padding:6px 14px;background:#06b6d4;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const hist=document.createElement('div');
  hist.style.cssText='margin-top:12px;color:#ccc;font-family:monospace;font-size:13px;max-height:200px;overflow-y:auto;';
  let steps=[];
  btn.onclick=()=>{
    const cur=inp.value;
    let next='';
    for(const ch of cur){if(ch==='A')next+='AB';else if(ch==='B')next+='A';else next+=ch;}
    inp.value=next;
    steps.push(next);
    if(steps.length>10){steps=[steps[steps.length-1]];}
    hist.innerHTML=steps.map((s,i)=>`<div style="margin:3px 0"><span style="color:#64748b">스텝 ${i+1}:</span> <span style="color:#06b6d4">${s.length>60?s.slice(0,60)+'…':s}</span></div>`).join('');
  };
  c.appendChild(inp);c.appendChild(btn);c.appendChild(hist);
}

function sim117(){
  document.getElementById('simTag').textContent='논리 이론가';
  const c=document.getElementById('simContainer');
  c.innerHTML='';
  c.innerHTML=`<p style="color:#06b6d4;font-weight:bold">전제: P→Q, P &nbsp;|&nbsp; 결론: Q</p>
  <p style="color:#aaa;font-size:13px">진리표로 타당성 검증</p>`;
  const table=document.createElement('table');
  table.style.cssText='border-collapse:collapse;color:#ccc;font-size:13px;margin-top:8px;';
  table.innerHTML=`<tr style="color:#06b6d4"><th style="border:1px solid #334;padding:6px">P</th><th style="border:1px solid #334;padding:6px">Q</th><th style="border:1px solid #334;padding:6px">P→Q</th><th style="border:1px solid #334;padding:6px">P∧(P→Q)</th><th style="border:1px solid #334;padding:6px">결론 Q</th><th style="border:1px solid #334;padding:6px">유효?</th></tr>`;
  [[1,1],[1,0],[0,1],[0,0]].forEach(([p,q])=>{
    const imp=(!p||q)?1:0;
    const prem=p&&imp;
    const valid=!prem||(prem&&q);
    const tr=document.createElement('tr');
    tr.innerHTML=`<td style="border:1px solid #334;padding:6px;text-align:center">${p}</td><td style="border:1px solid #334;padding:6px;text-align:center">${q}</td><td style="border:1px solid #334;padding:6px;text-align:center">${imp}</td><td style="border:1px solid #334;padding:6px;text-align:center">${prem}</td><td style="border:1px solid #334;padding:6px;text-align:center">${q}</td><td style="border:1px solid #334;padding:6px;text-align:center;color:${valid?'#22c55e':'#ef4444'}">${valid?'✓':'✗'}</td>`;
    table.appendChild(tr);
  });
  c.appendChild(table);
  const p2=document.createElement('p');p2.style.cssText='color:#22c55e;margin-top:10px;font-weight:bold;';p2.textContent='결론: 논증은 타당합니다 (전건 긍정)';c.appendChild(p2);
}

function sim118(){
  document.getElementById('simTag').textContent='일반 문제 해결기';
  const c=document.getElementById('simContainer');
  c.innerHTML='';
  const states=[
    {cur:'원숭이가 문 앞에 있다',goal:'원숭이가 바나나를 먹는다',op:'상자 밀기',diff:'위치 차이'},
    {cur:'원숭이가 상자 옆에 있다',goal:'원숭이가 바나나를 먹는다',op:'상자 위에 오르기',diff:'높이 차이'},
    {cur:'원숭이가 상자 위에 있다',goal:'원숭이가 바나나를 먹는다',op:'바나나 잡기',diff:'거리 차이'},
    {cur:'원숭이가 바나나를 먹는다',goal:'원숭이가 바나나를 먹는다',op:'완료!',diff:'없음'},
  ];
  let step=0;
  const box=document.createElement('div');box.style.cssText='color:#ccc;font-size:13px;';
  const btn=document.createElement('button');
  btn.textContent='다음 단계';btn.style.cssText='margin-top:10px;padding:7px 16px;background:#06b6d4;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function render(){
    const s=states[step];
    box.innerHTML=`<div style="margin:6px 0"><span style="color:#06b6d4">현재 상태:</span> ${s.cur}</div>
    <div style="margin:6px 0"><span style="color:#22c55e">목표 상태:</span> ${s.goal}</div>
    <div style="margin:6px 0"><span style="color:#f59e0b">차이:</span> ${s.diff}</div>
    <div style="margin:6px 0"><span style="color:#a855f7">연산자:</span> ${s.op}</div>
    <div style="color:#64748b;margin-top:4px">단계 ${step+1}/${states.length}</div>`;
    if(step>=states.length-1)btn.disabled=true;
  }
  render();
  btn.onclick=()=>{if(step<states.length-1){step++;render();}};
  c.appendChild(box);c.appendChild(btn);
}

function sim119(){
  document.getElementById('simTag').textContent='상태 공간 표현';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">8-퍼즐: 방향 버튼으로 빈칸 이동</p>';
  let tiles=[1,2,3,4,5,6,7,8,0];
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');
  cv.width=Math.min(W,240);cv.height=Math.min(W,240);c.appendChild(cv);
  const ctx=cv.getContext('2d');
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,cv.width,cv.height);
    const sz=cv.width/3;
    tiles.forEach((t,i)=>{
      const x=(i%3)*sz,y=Math.floor(i/3)*sz;
      ctx.fillStyle=t===0?'#1e1e2e':'#06b6d4';
      ctx.strokeStyle='#111118';ctx.lineWidth=2;
      ctx.fillRect(x+2,y+2,sz-4,sz-4);ctx.strokeRect(x+2,y+2,sz-4,sz-4);
      if(t!==0){ctx.fillStyle='#fff';ctx.font=`bold ${sz*0.4}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(t,x+sz/2,y+sz/2);}
    });
  }
  draw();
  const dirs=[['↑',-3],['↓',3],['←',-1],['→',1]];
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;';
  dirs.forEach(([label,delta])=>{
    const b=document.createElement('button');
    b.textContent=label;b.style.cssText='padding:7px 16px;background:#1e1e2e;color:#ccc;border:1px solid #334;border-radius:4px;cursor:pointer;font-size:18px;';
    b.onclick=()=>{
      const z=tiles.indexOf(0);const nz=z+delta;
      if(nz<0||nz>8)return;
      if(delta===1&&z%3===2)return;
      if(delta===-1&&z%3===0)return;
      [tiles[z],tiles[nz]]=[tiles[nz],tiles[z]];
      draw();
    };
    btnRow.appendChild(b);
  });
  c.appendChild(btnRow);
}

function sim120(){
  document.getElementById('simTag').textContent='휴리스틱 탐색';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">맨해튼 거리 휴리스틱 h(n)</p>';
  const goal=[0,1,2,3,4,5,6,7,8];
  let tiles=[1,2,5,3,4,0,6,7,8];
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=Math.min(W,210);cv.height=Math.min(W,210);c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const hdisp=document.createElement('p');hdisp.style.cssText='color:#f59e0b;font-size:15px;font-weight:bold;margin-top:8px;';
  function manhattan(){
    let h=0;
    tiles.forEach((t,i)=>{if(t!==0){const gi=goal.indexOf(t);h+=Math.abs(i%3-gi%3)+Math.abs(Math.floor(i/3)-Math.floor(gi/3));}});
    return h;
  }
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,cv.width,cv.height);
    const sz=cv.width/3;
    tiles.forEach((t,i)=>{
      const x=(i%3)*sz,y=Math.floor(i/3)*sz;
      ctx.fillStyle=t===0?'#1e1e2e':'#3b82f6';ctx.strokeStyle='#111118';ctx.lineWidth=2;
      ctx.fillRect(x+2,y+2,sz-4,sz-4);ctx.strokeRect(x+2,y+2,sz-4,sz-4);
      if(t!==0){ctx.fillStyle='#fff';ctx.font=`bold ${sz*0.38}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(t,x+sz/2,y+sz/2);}
    });
    hdisp.textContent=`h(n) = ${manhattan()} (맨해튼 거리)`;
  }
  draw();
  const dirs=[['↑',-3],['↓',3],['←',-1],['→',1]];
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:8px;margin-top:8px;';
  dirs.forEach(([label,delta])=>{
    const b=document.createElement('button');b.textContent=label;b.style.cssText='padding:6px 14px;background:#1e1e2e;color:#ccc;border:1px solid #334;border-radius:4px;cursor:pointer;font-size:16px;';
    b.onclick=()=>{
      const z=tiles.indexOf(0);const nz=z+delta;
      if(nz<0||nz>8)return;
      if(delta===1&&z%3===2)return;if(delta===-1&&z%3===0)return;
      [tiles[z],tiles[nz]]=[tiles[nz],tiles[z]];draw();
    };
    btnRow.appendChild(b);
  });
  c.appendChild(btnRow);c.appendChild(hdisp);
}

function sim121(){
  document.getElementById('simTag').textContent='의미망';
  const c=document.getElementById('simContainer');
  c.innerHTML='';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=220;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const nodes=[
    {id:'개',x:W*0.5,y:40},{id:'포유류',x:W*0.5,y:110},{id:'동물',x:W*0.5,y:180},
    {id:'털',x:W*0.18,y:110},{id:'발',x:W*0.82,y:110}
  ];
  const edges=[['개','포유류','is-a'],['포유류','동물','is-a'],['개','털','has'],['개','발','has']];
  let sel=null;
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,220);
    edges.forEach(([a,b,lbl])=>{
      const na=nodes.find(n=>n.id===a),nb=nodes.find(n=>n.id===b);
      const active=sel===a||sel===b;
      ctx.strokeStyle=active?'#06b6d4':'#334';ctx.lineWidth=active?2:1;
      ctx.beginPath();ctx.moveTo(na.x,na.y);ctx.lineTo(nb.x,nb.y);ctx.stroke();
      ctx.fillStyle=active?'#06b6d4':'#64748b';ctx.font='10px sans-serif';ctx.textAlign='center';
      ctx.fillText(lbl,(na.x+nb.x)/2,(na.y+nb.y)/2-4);
    });
    nodes.forEach(n=>{
      const active=sel===n.id||edges.some(([a,b])=>(sel===a&&b===n.id)||(sel===b&&a===n.id));
      ctx.fillStyle=active?'#06b6d4':'#1e1e2e';ctx.strokeStyle='#06b6d4';ctx.lineWidth=1.5;
      ctx.beginPath();ctx.arc(n.x,n.y,18,0,Math.PI*2);ctx.fill();ctx.stroke();
      ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(n.id,n.x,n.y);
    });
  }
  draw();
  cv.onclick=e=>{
    const r=cv.getBoundingClientRect();const mx=e.clientX-r.left,my=e.clientY-r.top;
    const hit=nodes.find(n=>Math.hypot(n.x-mx,n.y-my)<20);
    sel=hit?hit.id:null;draw();
  };
  const p=document.createElement('p');p.style.cssText='color:#64748b;font-size:12px;margin-top:6px;';p.textContent='노드를 클릭하면 연결이 강조됩니다';c.appendChild(p);
}

function sim122(){
  document.getElementById('simTag').textContent='프레임';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">자동차 프레임</p>';
  const slots=[
    {name:'색상',opts:['빨강','파랑','흰색','검정','은색']},
    {name:'속도',opts:['100km/h','150km/h','200km/h','250km/h']},
    {name:'연료',opts:['가솔린','디젤','전기','하이브리드']},
    {name:'바퀴수',opts:['2','3','4','6']},
  ];
  const tbl=document.createElement('div');tbl.style.cssText='color:#ccc;font-size:13px;';
  const values={};
  slots.forEach(sl=>{
    const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;gap:10px;margin:6px 0;';
    const lbl=document.createElement('span');lbl.textContent=sl.name;lbl.style.cssText='width:60px;color:#06b6d4;font-weight:bold;';
    const sel=document.createElement('select');sel.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:5px;border-radius:4px;';
    sel.innerHTML='<option value="">선택</option>'+sl.opts.map(o=>`<option>${o}</option>`).join('');
    sel.onchange=()=>{values[sl.name]=sel.value;updateSummary();};
    row.appendChild(lbl);row.appendChild(sel);tbl.appendChild(row);
  });
  const summary=document.createElement('div');summary.style.cssText='margin-top:12px;background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:10px;color:#aaa;font-size:13px;';
  function updateSummary(){
    summary.innerHTML='<span style="color:#06b6d4;font-weight:bold">프레임 값:</span><br>'+
      Object.entries(values).map(([k,v])=>`<span style="color:#ccc">${k}: <span style="color:#22c55e">${v}</span></span>`).join('<br>');
  }
  updateSummary();
  c.appendChild(tbl);c.appendChild(summary);
}

function sim123(){
  document.getElementById('simTag').textContent='스크립트';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">식당 가기 스크립트</p>';
  const steps=['입장','주문','식사','계산','퇴장'];
  const descs=['식당에 들어가 자리를 잡습니다.','메뉴를 보고 음식을 주문합니다.','음식이 나오면 식사를 합니다.','계산서를 받아 결제합니다.','식당을 나갑니다.'];
  let cur=0;
  const progress=document.createElement('div');progress.style.cssText='background:#1e1e2e;border-radius:8px;height:8px;margin:10px 0;overflow:hidden;';
  const bar=document.createElement('div');bar.style.cssText='height:100%;background:#06b6d4;transition:width 0.4s;width:0%;';
  progress.appendChild(bar);
  const desc=document.createElement('p');desc.style.cssText='color:#ccc;font-size:13px;min-height:36px;';
  const stepRow=document.createElement('div');stepRow.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;';
  steps.forEach((s,i)=>{
    const b=document.createElement('button');
    b.textContent=s;b.dataset.i=i;
    b.style.cssText='padding:6px 12px;border-radius:4px;border:1px solid #334;background:#1e1e2e;color:#aaa;cursor:pointer;font-size:13px;';
    b.onclick=()=>{cur=i;render();};
    stepRow.appendChild(b);
  });
  function render(){
    bar.style.width=`${((cur+1)/steps.length)*100}%`;
    desc.innerHTML=`<span style="color:#06b6d4;font-weight:bold">[${steps[cur]}]</span> ${descs[cur]}`;
    stepRow.querySelectorAll('button').forEach((b,i)=>{
      b.style.background=i===cur?'#06b6d4':'#1e1e2e';
      b.style.color=i===cur?'#fff':'#aaa';
    });
  }
  render();
  c.appendChild(stepRow);c.appendChild(progress);c.appendChild(desc);
}

function sim124(){
  document.getElementById('simTag').textContent='생성 규칙 시스템';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">IF-THEN 규칙 기반 추론</p>';
  const rules=[
    {cond:'불이 난다',action:'경보가 울린다'},
    {cond:'경보가 울린다',action:'사람들이 대피한다'},
    {cond:'연기가 난다',action:'불이 난다'},
  ];
  let wm=['연기가 난다'];
  const wmDiv=document.createElement('div');wmDiv.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:8px;margin:8px 0;color:#ccc;font-size:13px;';
  const ruleDiv=document.createElement('div');ruleDiv.style.cssText='font-size:13px;margin:6px 0;';
  const btn=document.createElement('button');btn.textContent='추론 실행';btn.style.cssText='padding:7px 16px;background:#06b6d4;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:8px;';
  let fired=[];
  function render(){
    wmDiv.innerHTML='<b style="color:#06b6d4">작업 메모리:</b><br>'+wm.map(f=>`<span style="color:#22c55e">• ${f}</span>`).join('<br>');
    ruleDiv.innerHTML='<b style="color:#06b6d4">규칙:</b><br>'+rules.map((r,i)=>`<span style="color:${fired.includes(i)?'#f59e0b':'#aaa'}">IF ${r.cond} THEN ${r.action}</span>`).join('<br>');
  }
  render();
  btn.onclick=()=>{
    fired=[];let changed=true;
    while(changed){changed=false;rules.forEach((r,i)=>{if(wm.includes(r.cond)&&!wm.includes(r.action)){wm.push(r.action);fired.push(i);changed=true;}});}
    render();btn.textContent='추론 완료';
  };
  c.appendChild(wmDiv);c.appendChild(ruleDiv);c.appendChild(btn);
}

function sim125(){
  document.getElementById('simTag').textContent='전방 추론';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">전방 추론 (Forward Chaining)</p>';
  const rules=[
    {conds:['A','B'],conc:'C'},{conds:['C','D'],conc:'E'},{conds:['E'],conc:'F'}
  ];
  let facts=new Set(['A','B','D']);let derived=[];let step=0;
  const factDiv=document.createElement('div');factDiv.style.cssText='color:#ccc;font-size:13px;margin:6px 0;';
  const btn=document.createElement('button');btn.textContent='전방 추론 스텝';btn.style.cssText='padding:7px 16px;background:#06b6d4;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function render(){
    factDiv.innerHTML='<b style="color:#06b6d4">사실:</b> '+[...facts].map(f=>`<span style="color:${derived.includes(f)?'#f59e0b':'#22c55e'}">${f}</span>`).join(', ')+'<br>'+'<b style="color:#a855f7">도출됨:</b> '+derived.join(' → ');
  }
  render();
  btn.onclick=()=>{
    let fired=false;
    for(const r of rules){
      if(r.conds.every(c=>facts.has(c))&&!facts.has(r.conc)){
        facts.add(r.conc);derived.push(r.conc);fired=true;break;
      }
    }
    if(!fired)btn.textContent='추론 완료';
    render();
  };
  c.appendChild(factDiv);c.appendChild(btn);
}

function sim126(){
  document.getElementById('simTag').textContent='후방 추론';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">후방 추론 (Backward Chaining)</p>';
  const rules=[
    {conc:'F',conds:['E']},{conc:'E',conds:['C','D']},{conc:'C',conds:['A','B']}
  ];
  const baseFacts=['A','B','D'];
  const goalSel=document.createElement('select');goalSel.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:5px;border-radius:4px;';
  goalSel.innerHTML=['F','E','C'].map(g=>`<option>${g}</option>`).join('');
  const btn=document.createElement('button');btn.textContent='후방 추론';btn.style.cssText='margin-left:8px;padding:7px 14px;background:#06b6d4;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const result=document.createElement('div');result.style.cssText='margin-top:10px;color:#ccc;font-size:13px;';
  function prove(goal,depth=0){
    if(baseFacts.includes(goal))return[{goal,status:'기본 사실',depth}];
    const rule=rules.find(r=>r.conc===goal);
    if(!rule)return[{goal,status:'증명 실패',depth}];
    let chain=[{goal,status:`규칙: ${rule.conds.join('∧')}→${goal}`,depth}];
    rule.conds.forEach(c=>{chain=[...chain,...prove(c,depth+1)];});
    return chain;
  }
  btn.onclick=()=>{
    const g=goalSel.value;const chain=prove(g);
    result.innerHTML='<b style="color:#06b6d4">추론 체인:</b><br>'+chain.map(s=>`<div style="padding-left:${s.depth*16}px;color:${s.status.includes('실패')?'#ef4444':'#22c55e'}">• ${s.goal}: ${s.status}</div>`).join('');
  };
  const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;';
  const lbl=document.createElement('span');lbl.textContent='목표: ';lbl.style.cssText='color:#aaa;font-size:13px;margin-right:6px;';
  row.appendChild(lbl);row.appendChild(goalSel);row.appendChild(btn);
  c.appendChild(row);c.appendChild(result);
}

function sim127(){
  document.getElementById('simTag').textContent='전문가 시스템';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">의료 증상 진단기</p>';
  const symptoms=['두통','발열','기침','피로','구역질'];
  const checked=new Set();
  const rules=[
    {syms:['발열','기침'],diag:'감기 의심'},
    {syms:['두통','발열'],diag:'독감 의심'},
    {syms:['피로','구역질'],diag:'소화 장애 의심'},
    {syms:['두통','피로'],diag:'수면 부족 의심'},
  ];
  const chks=document.createElement('div');chks.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;';
  symptoms.forEach(s=>{
    const lbl=document.createElement('label');lbl.style.cssText='display:flex;align-items:center;gap:4px;color:#ccc;font-size:13px;cursor:pointer;background:#1e1e2e;border:1px solid #334;border-radius:4px;padding:5px 10px;';
    const inp=document.createElement('input');inp.type='checkbox';
    inp.onchange=()=>{inp.checked?checked.add(s):checked.delete(s);};
    lbl.appendChild(inp);lbl.append(s);chks.appendChild(lbl);
  });
  const btn=document.createElement('button');btn.textContent='진단';btn.style.cssText='padding:7px 18px;background:#06b6d4;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:6px;';
  const result=document.createElement('div');result.style.cssText='margin-top:10px;font-size:13px;';
  btn.onclick=()=>{
    const matches=rules.filter(r=>r.syms.every(s=>checked.has(s)));
    result.innerHTML=matches.length?matches.map(m=>`<div style="color:#22c55e;margin:4px 0">✓ ${m.diag}</div>`).join(''):'<div style="color:#64748b">해당되는 진단이 없습니다. 증상을 선택하세요.</div>';
  };
  c.appendChild(chks);c.appendChild(btn);c.appendChild(result);
}

function sim128(){
  document.getElementById('simTag').textContent='자동 정리 증명';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">분해 원리 (Resolution)</p>';
  const pairs=[
    {c1:'P∨Q',c2:'¬P∨R',res:'Q∨R'},
    {c1:'A∨B',c2:'¬B∨C',res:'A∨C'},
    {c1:'¬Q∨R',c2:'Q',res:'R'},
  ];
  let idx=0;
  const box=document.createElement('div');box.style.cssText='color:#ccc;font-size:14px;margin:10px 0;';
  const btn=document.createElement('button');btn.textContent='분해';btn.style.cssText='padding:7px 16px;background:#06b6d4;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const nxt=document.createElement('button');nxt.textContent='다음 예시';nxt.style.cssText='margin-left:8px;padding:7px 14px;background:#1e1e2e;color:#ccc;border:1px solid #334;border-radius:4px;cursor:pointer;';
  let shown=false;
  function render(){
    const p=pairs[idx];
    box.innerHTML=`<div style="margin:6px 0">절 1: <span style="color:#06b6d4">${p.c1}</span></div><div style="margin:6px 0">절 2: <span style="color:#06b6d4">${p.c2}</span></div>`;
    if(shown)box.innerHTML+=`<div style="margin:8px 0;color:#22c55e;font-weight:bold">⊢ 분해 결과: ${p.res}</div>`;
    shown=false;
  }
  render();
  btn.onclick=()=>{shown=true;render();};
  nxt.onclick=()=>{idx=(idx+1)%pairs.length;shown=false;render();};
  c.appendChild(box);c.appendChild(btn);c.appendChild(nxt);
}

function sim129(){
  document.getElementById('simTag').textContent='STRIPS 계획';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">블록 세계: 목표 = B 위에 A 올리기</p>';
  // state: table has blocks, we track stack
  let state={table:['A','B'],onA:null,onB:null};
  const log=document.createElement('div');log.style.cssText='color:#ccc;font-size:13px;min-height:60px;margin:8px 0;background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:8px;';
  const stateDiv=document.createElement('div');stateDiv.style.cssText='color:#ccc;font-size:13px;margin:8px 0;';
  function render(){
    stateDiv.innerHTML=`상태: 테이블 위 → [${state.table.join(', ')}]  B 위 → ${state.onB||'없음'}  A 위 → ${state.onA||'없음'}`;
    const goal=state.onB==='A';
    if(goal)stateDiv.innerHTML+='<span style="color:#22c55e;margin-left:10px;font-weight:bold">✓ 목표 달성!</span>';
  }
  render();
  const ops=[
    {name:'A를 집기',action:()=>{if(state.table.includes('A')&&!state.onA){state.table=state.table.filter(x=>x!=='A');log.innerHTML+='<div>A를 집었습니다.</div>';}else log.innerHTML+='<div style="color:#ef4444">A를 집을 수 없습니다.</div>';}},
    {name:'A를 B 위에 놓기',action:()=>{if(!state.table.includes('A')&&!state.onB){state.onB='A';log.innerHTML+='<div>A를 B 위에 놓았습니다.</div>';}else log.innerHTML+='<div style="color:#ef4444">놓을 수 없습니다.</div>';}},
    {name:'초기화',action:()=>{state={table:['A','B'],onA:null,onB:null};log.innerHTML='<div style="color:#64748b">초기화되었습니다.</div>';}}
  ];
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;';
  ops.forEach(op=>{
    const b=document.createElement('button');b.textContent=op.name;b.style.cssText='padding:6px 12px;background:#1e1e2e;color:#ccc;border:1px solid #334;border-radius:4px;cursor:pointer;font-size:12px;';
    b.onclick=()=>{op.action();render();};
    btnRow.appendChild(b);
  });
  c.appendChild(stateDiv);c.appendChild(log);c.appendChild(btnRow);
}

function sim130(){
  document.getElementById('simTag').textContent='계층적 과제 계획';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">샌드위치 만들기 태스크 트리</p>';
  const tree={
    name:'샌드위치 만들기',children:[
      {name:'빵 준비',children:[{name:'빵 꺼내기'},{name:'빵 자르기'}]},
      {name:'재료 준비',children:[{name:'야채 씻기'},{name:'치즈 꺼내기'},{name:'햄 자르기'}]},
      {name:'조립',children:[{name:'빵에 재료 올리기'},{name:'소스 바르기'}]},
      {name:'서빙',children:[{name:'접시에 담기'},{name:'제공하기'}]},
    ]
  };
  const expanded=new Set();
  function renderTree(node,depth=0){
    const div=document.createElement('div');div.style.cssText=`padding-left:${depth*16}px;margin:3px 0;`;
    const btn=document.createElement('span');
    const hasChildren=node.children&&node.children.length;
    btn.textContent=(hasChildren?(expanded.has(node.name)?'▼ ':'▶ '):' • ')+node.name;
    btn.style.cssText=`cursor:${hasChildren?'pointer':'default'};color:${depth===0?'#06b6d4':depth===1?'#a855f7':'#ccc'};font-size:${14-depth}px;`;
    if(hasChildren)btn.onclick=()=>{expanded.has(node.name)?expanded.delete(node.name):expanded.add(node.name);refresh();};
    div.appendChild(btn);
    if(hasChildren&&expanded.has(node.name)){node.children.forEach(ch=>{div.appendChild(renderTree(ch,depth+1));});}
    return div;
  }
  const container=document.createElement('div');
  function refresh(){container.innerHTML='';container.appendChild(renderTree(tree));}
  refresh();
  c.appendChild(container);
  const hint=document.createElement('p');hint.style.cssText='color:#64748b;font-size:12px;margin-top:6px;';hint.textContent='항목을 클릭해 펼치거나 접으세요';c.appendChild(hint);
}

function sim131(){
  document.getElementById('simTag').textContent='제약 충족 문제';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">4-퀸 문제: 셀을 클릭해 퀸(Q) 배치</p>';
  const N=4;let board=Array(N).fill(null).map(()=>Array(N).fill(false));
  const W=Math.min(c.offsetWidth-20,480);
  const sz=Math.min(W/N,60);
  const cv=document.createElement('canvas');cv.width=sz*N;cv.height=sz*N;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const status=document.createElement('p');status.style.cssText='color:#ccc;font-size:13px;margin-top:6px;';
  function conflicts(){
    const qs=[];
    board.forEach((row,r)=>row.forEach((v,col)=>{if(v)qs.push([r,col]);}));
    const bad=new Set();
    for(let i=0;i<qs.length;i++)for(let j=i+1;j<qs.length;j++){
      const [r1,c1]=qs[i],[r2,c2]=qs[j];
      if(r1===r2||c1===c2||Math.abs(r1-r2)===Math.abs(c1-c2)){bad.add(`${r1},${c1}`);bad.add(`${r2},${c2}`);}
    }
    return bad;
  }
  function draw(){
    const bad=conflicts();
    ctx.clearRect(0,0,cv.width,cv.height);
    for(let r=0;r<N;r++)for(let col=0;col<N;col++){
      const key=`${r},${col}`;
      ctx.fillStyle=(r+col)%2===0?'#1e1e2e':'#2a2a3e';
      if(board[r][col]&&bad.has(key))ctx.fillStyle='#7f1d1d';
      ctx.fillRect(col*sz,r*sz,sz,sz);
      ctx.strokeStyle='#334';ctx.strokeRect(col*sz,r*sz,sz,sz);
      if(board[r][col]){ctx.fillStyle=bad.has(key)?'#fca5a5':'#ffd700';ctx.font=`${sz*0.55}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('♛',col*sz+sz/2,r*sz+sz/2);}
    }
    const qs=board.flat().filter(Boolean).length;
    const bc=bad.size;
    status.textContent=`퀸 수: ${qs}/4  충돌: ${bc/2|0}개${bc===0&&qs===4?' ✓ 해결!'':''}`;
    status.style.color=bc===0&&qs===4?'#22c55e':'#ccc';
  }
  draw();
  cv.onclick=e=>{
    const r2=cv.getBoundingClientRect();
    const col=Math.floor((e.clientX-r2.left)/sz),row=Math.floor((e.clientY-r2.top)/sz);
    if(row>=0&&row<N&&col>=0&&col<N){board[row][col]=!board[row][col];draw();}
  };
  c.appendChild(status);
}

function sim132(){
  document.getElementById('simTag').textContent='사례 기반 추론';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">유사 사례 찾기</p>';
  const cases=[
    {name:'감기',s:[1,1,0,1,0]},{name:'독감',s:[1,1,1,1,0]},{name:'알레르기',s:[0,0,1,0,1]},
    {name:'위장염',s:[0,1,0,1,1]},{name:'편두통',s:[1,0,0,0,0]}
  ];
  const symptoms=['두통','발열','기침','피로','구역질'];
  const checks=symptoms.map(()=>false);
  const chkDiv=document.createElement('div');chkDiv.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;';
  symptoms.forEach((s,i)=>{
    const lbl=document.createElement('label');lbl.style.cssText='display:flex;align-items:center;gap:4px;color:#ccc;font-size:13px;cursor:pointer;background:#1e1e2e;border:1px solid #334;border-radius:4px;padding:5px 10px;';
    const inp=document.createElement('input');inp.type='checkbox';
    inp.onchange=()=>{checks[i]=inp.checked;};
    lbl.appendChild(inp);lbl.append(s);chkDiv.appendChild(lbl);
  });
  const btn=document.createElement('button');btn.textContent='유사 사례 찾기';btn.style.cssText='padding:7px 16px;background:#06b6d4;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:6px;';
  const result=document.createElement('div');result.style.cssText='margin-top:10px;font-size:13px;';
  btn.onclick=()=>{
    const scores=cases.map(cs=>({name:cs.name,sim:cs.s.reduce((acc,v,i)=>acc+(v===1&&checks[i]?1:0),0)}));
    scores.sort((a,b)=>b.sim-a.sim);
    result.innerHTML='<b style="color:#06b6d4">유사도 순위:</b><br>'+scores.map((s,i)=>`<div style="color:${i===0?'#22c55e':'#aaa'};margin:3px 0">${i+1}. ${s.name} (일치: ${s.sim}개)</div>`).join('');
  };
  c.appendChild(chkDiv);c.appendChild(btn);c.appendChild(result);
}

function sim133(){
  document.getElementById('simTag').textContent='온톨로지';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#06b6d4;font-weight:bold">동물 분류 온톨로지</p>';
  const tree={name:'생물',children:[
    {name:'동물',children:[
      {name:'포유류',children:[{name:'개'},{name:'고양이'},{name:'고래'}]},
      {name:'조류',children:[{name:'참새'},{name:'독수리'}]},
    ]},
    {name:'식물',children:[{name:'장미'},{name:'소나무'}]},
  ]};
  const expanded=new Set(['생물']);
  const container=document.createElement('div');
  function renderNode(node,depth=0){
    const wrap=document.createElement('div');wrap.style.cssText=`padding-left:${depth*14}px;margin:2px 0;`;
    const span=document.createElement('span');
    const hasC=node.children&&node.children.length;
    span.textContent=(hasC?(expanded.has(node.name)?'▼ ':'▶ '):'• ')+node.name;
    span.style.cssText=`cursor:${hasC?'pointer':'default'};color:${depth===0?'#06b6d4':depth===1?'#22c55e':depth===2?'#a855f7':'#ccc'};font-size:${14-depth}px;`;
    if(hasC)span.onclick=()=>{expanded.has(node.name)?expanded.delete(node.name):expanded.add(node.name);refresh();};
    wrap.appendChild(span);
    if(hasC&&expanded.has(node.name))node.children.forEach(ch=>wrap.appendChild(renderNode(ch,depth+1)));
    return wrap;
  }
  function refresh(){container.innerHTML='';container.appendChild(renderNode(tree));}
  refresh();
  c.appendChild(container);
}

function sim134(){
  document.getElementById('simTag').textContent='지식 그래프';
  const c=document.getElementById('simContainer');
  c.innerHTML='';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const nodes=[{id:'서울',x:W*0.5,y:50},{id:'한국',x:W*0.5,y:140},{id:'도시',x:W*0.2,y:100},{id:'아시아',x:W*0.8,y:100}];
  const edges=[['서울','한국','속한다'],['서울','도시','유형이다'],['한국','아시아','속한다']];
  const triples={'서울':['서울 → 속한다 → 한국','서울 → 유형이다 → 도시'],'한국':['한국 → 속한다 → 아시아'],'도시':['도시 ← 유형이다 ← 서울'],'아시아':['아시아 ← 속한다 ← 한국']};
  let sel=null;
  const info=document.createElement('div');info.style.cssText='margin-top:10px;color:#ccc;font-size:13px;min-height:36px;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    edges.forEach(([a,b,lbl])=>{
      const na=nodes.find(n=>n.id===a),nb=nodes.find(n=>n.id===b);
      ctx.strokeStyle='#334';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(na.x,na.y);ctx.lineTo(nb.x,nb.y);ctx.stroke();
      ctx.fillStyle='#64748b';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText(lbl,(na.x+nb.x)/2,(na.y+nb.y)/2-4);
    });
    nodes.forEach(n=>{
      ctx.fillStyle=sel===n.id?'#06b6d4':'#1e1e2e';ctx.strokeStyle='#06b6d4';ctx.lineWidth=1.5;
      ctx.beginPath();ctx.arc(n.x,n.y,18,0,Math.PI*2);ctx.fill();ctx.stroke();
      ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(n.id,n.x,n.y);
    });
  }
  draw();
  cv.onclick=e=>{
    const r=cv.getBoundingClientRect();const mx=e.clientX-r.left,my=e.clientY-r.top;
    const hit=nodes.find(n=>Math.hypot(n.x-mx,n.y-my)<20);
    if(hit){sel=hit.id;info.innerHTML=(triples[hit.id]||[]).map(t=>`<div style="color:#06b6d4">• ${t}</div>`).join('');} else{sel=null;info.innerHTML='';}
    draw();
  };
  c.appendChild(info);
  const hint=document.createElement('p');hint.style.cssText='color:#64748b;font-size:12px;';hint.textContent='노드를 클릭해 트리플을 확인하세요';c.appendChild(hint);
}

function sim135(){
  document.getElementById('simTag').textContent='지도 학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">결정 경계 슬라이더</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const pts0=Array.from({length:10},()=>({x:Math.random()*0.45+0.02,y:Math.random()*0.8+0.1,cls:0}));
  const pts1=Array.from({length:10},()=>({x:Math.random()*0.45+0.53,y:Math.random()*0.8+0.1,cls:1}));
  const pts=[...pts0,...pts1];
  const slider=document.createElement('input');slider.type='range';slider.min=0;slider.max=100;slider.value=50;slider.style.cssText='width:100%;margin-top:8px;';
  const acc=document.createElement('p');acc.style.cssText='color:#3b82f6;font-size:14px;font-weight:bold;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    const bx=slider.value/100;
    const px=bx*W;
    ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.setLineDash([6,3]);
    ctx.beginPath();ctx.moveTo(px,0);ctx.lineTo(px,200);ctx.stroke();ctx.setLineDash([]);
    pts.forEach(p=>{
      ctx.fillStyle=p.cls===0?'#3b82f6':'#ef4444';
      ctx.beginPath();ctx.arc(p.x*W,p.y*200,5,0,Math.PI*2);ctx.fill();
    });
    const correct=pts.filter(p=>(p.x<bx&&p.cls===0)||(p.x>=bx&&p.cls===1)).length;
    acc.textContent=`정확도: ${correct}/20 = ${(correct/20*100).toFixed(0)}%`;
  }
  draw();slider.oninput=draw;
  c.appendChild(slider);c.appendChild(acc);
}

function sim136(){
  document.getElementById('simTag').textContent='비지도 학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">K-평균 군집화 개념</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const pts=Array.from({length:20},()=>({x:Math.random()*(W-20)+10,y:Math.random()*180+10,cls:-1}));
  const btn=document.createElement('button');btn.textContent='K=2 군집화';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const colors=['#3b82f6','#ef4444'];
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    pts.forEach(p=>{
      ctx.fillStyle=p.cls===-1?'#64748b':colors[p.cls];
      ctx.beginPath();ctx.arc(p.x,p.y,5,0,Math.PI*2);ctx.fill();
    });
  }
  draw();
  btn.onclick=()=>{
    // simple k-means one pass
    let centroids=[{x:W*0.3,y:100},{x:W*0.7,y:100}];
    for(let iter=0;iter<5;iter++){
      pts.forEach(p=>{p.cls=p.x<centroids[0].x+(centroids[1].x-centroids[0].x)/2?0:1;});
      centroids=[0,1].map(k=>{const g=pts.filter(p=>p.cls===k);return g.length?{x:g.reduce((s,p)=>s+p.x,0)/g.length,y:g.reduce((s,p)=>s+p.y,0)/g.length}:centroids[k];});
    }
    draw();
    centroids.forEach((ct,i)=>{ctx.strokeStyle=colors[i];ctx.lineWidth=2;ctx.beginPath();ctx.arc(ct.x,ct.y,10,0,Math.PI*2);ctx.stroke();});
    btn.textContent='다시 군집화';
  };
  c.appendChild(btn);
}

function sim137(){
  document.getElementById('simTag').textContent='특징 공학';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">텍스트 특징 추출 파이프라인</p>';
  const steps=[
    {name:'원본 텍스트',content:'"안녕하세요 AI세계"',color:'#ccc'},
    {name:'토큰화',content:'["안녕하세요", "AI세계"]',color:'#3b82f6'},
    {name:'소문자화 / 정규화',content:'["안녕하세요", "ai세계"]',color:'#a855f7'},
    {name:'숫자화',content:'[1024, 5678]',color:'#f59e0b'},
    {name:'정규화 (0~1)',content:'[0.15, 0.82]',color:'#22c55e'},
  ];
  let cur=0;
  const box=document.createElement('div');box.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:8px;padding:12px;min-height:60px;font-family:monospace;font-size:14px;margin:10px 0;';
  const btn=document.createElement('button');btn.textContent='다음 단계';btn.style.cssText='padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function render(){
    const s=steps[cur];
    box.innerHTML=`<div style="color:#64748b;font-size:11px;margin-bottom:4px">단계 ${cur+1}/${steps.length}: ${s.name}</div><div style="color:${s.color}">${s.content}</div>`;
    btn.textContent=cur>=steps.length-1?'처음으로':'다음 단계';
  }
  render();
  btn.onclick=()=>{cur=(cur+1)%steps.length;render();};
  c.appendChild(box);c.appendChild(btn);
}

function sim138(){
  document.getElementById('simTag').textContent='나이브 베이즈';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">스팸 분류기 (나이브 베이즈)</p>';
  const words=[
    {w:'무료',ps:0.9},{w:'당첨',ps:0.85},{w:'클릭',ps:0.7},{w:'안녕',ps:0.1},{w:'회의',ps:0.05},{w:'보고서',ps:0.08}
  ];
  let logP=Math.log(0.5);// log P(spam) prior
  let selected=new Set();
  const chips=document.createElement('div');chips.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;';
  const result=document.createElement('div');result.style.cssText='margin-top:10px;font-size:14px;';
  function updateResult(){
    let lp=Math.log(0.5);
    words.forEach(w=>{if(selected.has(w.w))lp+=Math.log(w.ps)-Math.log(1-w.ps);});
    const p=1/(1+Math.exp(-lp+Math.log(0.5)));// approx
    const spam=Math.min(Math.max(0.5+[...selected].reduce((s,w)=>{const ww=words.find(x=>x.w===w);return s+(ww?(ww.ps-0.5):0);},0),0.01),0.99);
    result.innerHTML=`<div>P(스팸) ≈ <span style="color:${spam>0.5?'#ef4444':'#22c55e'};font-size:18px;font-weight:bold">${(spam*100).toFixed(0)}%</span></div><div style="color:#64748b;font-size:12px">판정: ${spam>0.5?'🚫 스팸':'✅ 정상'}</div>`;
  }
  words.forEach(w=>{
    const btn=document.createElement('button');btn.textContent=w.w;
    btn.style.cssText='padding:6px 14px;border-radius:20px;border:1px solid #334;background:#1e1e2e;color:#ccc;cursor:pointer;font-size:13px;';
    btn.onclick=()=>{
      if(selected.has(w.w)){selected.delete(w.w);btn.style.background='#1e1e2e';btn.style.color='#ccc';}
      else{selected.add(w.w);btn.style.background='#3b82f6';btn.style.color='#fff';}
      updateResult();
    };
    chips.appendChild(btn);
  });
  updateResult();
  c.appendChild(chips);c.appendChild(result);
}

function sim139(){
  document.getElementById('simTag').textContent='k 최근접 이웃';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">캔버스 클릭으로 테스트 포인트 배치</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const trainPts=[
    {x:0.15,y:0.3,cls:0},{x:0.2,y:0.6,cls:0},{x:0.1,y:0.7,cls:0},{x:0.3,y:0.4,cls:0},{x:0.25,y:0.2,cls:0},
    {x:0.7,y:0.4,cls:1},{x:0.8,y:0.6,cls:1},{x:0.75,y:0.2,cls:1},{x:0.6,y:0.7,cls:1},{x:0.85,y:0.3,cls:1}
  ];
  let testPt=null;
  const kSlider=document.createElement('input');kSlider.type='range';kSlider.min=1;kSlider.max=5;kSlider.value=3;kSlider.style.cssText='width:100%;margin:6px 0;';
  const kLabel=document.createElement('p');kLabel.style.cssText='color:#ccc;font-size:13px;';
  const result=document.createElement('p');result.style.cssText='color:#3b82f6;font-size:14px;font-weight:bold;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    trainPts.forEach(p=>{
      ctx.fillStyle=p.cls===0?'#3b82f6':'#ef4444';
      ctx.beginPath();ctx.arc(p.x*W,p.y*200,6,0,Math.PI*2);ctx.fill();
    });
    if(testPt){
      const k=parseInt(kSlider.value);
      const dists=trainPts.map(p=>({...p,d:Math.hypot(p.x-testPt.x,p.y-testPt.y)})).sort((a,b)=>a.d-b.d).slice(0,k);
      dists.forEach(p=>{
        ctx.strokeStyle='#f59e0b';ctx.lineWidth=1;ctx.setLineDash([3,3]);
        ctx.beginPath();ctx.moveTo(testPt.x*W,testPt.y*200);ctx.lineTo(p.x*W,p.y*200);ctx.stroke();ctx.setLineDash([]);
      });
      const votes=dists.reduce((s,p)=>s+p.cls,0);const pred=votes>k/2?1:0;
      ctx.fillStyle='#fff';ctx.strokeStyle=pred===0?'#3b82f6':'#ef4444';ctx.lineWidth=2;
      ctx.font='20px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('★',testPt.x*W,testPt.y*200);
      result.textContent=`예측: ${pred===0?'파랑 (클래스 0)':'빨강 (클래스 1)'}  (k=${k})`;
    }
  }
  draw();
  kSlider.oninput=()=>{kLabel.textContent=`k = ${kSlider.value}`;draw();};kLabel.textContent='k = 3';
  cv.onclick=e=>{const r=cv.getBoundingClientRect();testPt={x:(e.clientX-r.left)/W,y:(e.clientY-r.top)/200};draw();};
  c.appendChild(kSlider);c.appendChild(kLabel);c.appendChild(result);
  const hint=document.createElement('p');hint.style.cssText='color:#64748b;font-size:12px;';hint.textContent='캔버스를 클릭해 테스트 포인트(★)를 놓으세요';c.appendChild(hint);
}

function sim140(){
  document.getElementById('simTag').textContent='선형 회귀';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">캔버스 클릭으로 데이터 추가 (최대 10개)</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  let pts=[];
  const eq=document.createElement('p');eq.style.cssText='color:#3b82f6;font-size:14px;font-weight:bold;min-height:20px;';
  function linReg(){
    if(pts.length<2)return null;
    const n=pts.length,sx=pts.reduce((s,p)=>s+p.x,0),sy=pts.reduce((s,p)=>s+p.y,0);
    const sxy=pts.reduce((s,p)=>s+p.x*p.y,0),sxx=pts.reduce((s,p)=>s+p.x*p.x,0);
    const m=(n*sxy-sx*sy)/(n*sxx-sx*sx);const b=(sy-m*sx)/n;
    return{m,b};
  }
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    // axes
    ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,100);ctx.lineTo(W,100);ctx.stroke();
    pts.forEach(p=>{ctx.fillStyle='#3b82f6';ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);ctx.fill();});
    const reg=linReg();
    if(reg){
      const y0=reg.m*0+reg.b,y1=reg.m*W+reg.b;
      ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,y0);ctx.lineTo(W,y1);ctx.stroke();
      const mx=reg.m*(200/W)*(-1);const bx=reg.b/200*2-1;// normalized display
      eq.textContent=`y = ${reg.m.toFixed(3)}x + ${reg.b.toFixed(1)}`;
    }else eq.textContent='';
  }
  draw();
  cv.onclick=e=>{
    if(pts.length>=10)return;
    const r=cv.getBoundingClientRect();pts.push({x:e.clientX-r.left,y:e.clientY-r.top});draw();
  };
  const rst=document.createElement('button');rst.textContent='초기화';rst.style.cssText='margin-top:8px;padding:6px 14px;background:#1e1e2e;color:#ccc;border:1px solid #334;border-radius:4px;cursor:pointer;';
  rst.onclick=()=>{pts=[];draw();eq.textContent='';};
  c.appendChild(eq);c.appendChild(rst);
}

function sim141(){
  document.getElementById('simTag').textContent='로지스틱 회귀';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">시그모이드 함수 시각화</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=180;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const slider=document.createElement('input');slider.type='range';slider.min=-50;slider.max=50;slider.value=0;slider.style.cssText='width:100%;margin:6px 0;';
  const label=document.createElement('p');label.style.cssText='color:#3b82f6;font-size:14px;font-weight:bold;';
  function sigmoid(x){return 1/(1+Math.exp(-x));}
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,180);
    ctx.strokeStyle='#334';ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(0,90);ctx.lineTo(W,90);ctx.stroke();
    ctx.beginPath();ctx.moveTo(W/2,0);ctx.lineTo(W/2,180);ctx.stroke();
    ctx.strokeStyle='#3b82f6';ctx.lineWidth=2;ctx.beginPath();
    for(let px=0;px<W;px++){
      const xv=(px/W-0.5)*10;const y=(1-sigmoid(xv))*180;
      px===0?ctx.moveTo(px,y):ctx.lineTo(px,y);
    }
    ctx.stroke();
    const xv=slider.value/10;
    const sv=sigmoid(xv);
    const px=(xv/10+0.5)*W;const py=(1-sv)*180;
    ctx.fillStyle='#f59e0b';ctx.beginPath();ctx.arc(px,py,6,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#f59e0b';ctx.setLineDash([4,4]);
    ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(px,180);ctx.stroke();
    ctx.beginPath();ctx.moveTo(0,py);ctx.lineTo(px,py);ctx.stroke();ctx.setLineDash([]);
    label.textContent=`x = ${xv.toFixed(1)}  →  P(y=1) = σ(x) = ${sv.toFixed(3)}`;
  }
  draw();slider.oninput=draw;
  c.appendChild(slider);c.appendChild(label);
}

function sim142(){
  document.getElementById('simTag').textContent='퍼셉트론 학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">AND 게이트 퍼셉트론 학습</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=Math.min(W,220);cv.height=220;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const data=[{x:0,y:0,t:0},{x:0,y:1,t:0},{x:1,y:0,t:0},{x:1,y:1,t:1}];
  let w1=Math.random()-0.5,w2=Math.random()-0.5,b=Math.random()-0.5;
  const lr=0.1;
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:12px;font-family:monospace;min-height:40px;';
  function predict(x,y){return w1*x+w2*y+b>0?1:0;}
  function draw(){
    const sz=cv.width;
    ctx.fillStyle='#111118';ctx.fillRect(0,0,sz,sz);
    const m=30,s=sz-2*m;
    data.forEach(p=>{
      const px=m+p.x*s,py=sz-m-p.y*s;
      ctx.fillStyle=p.t===1?'#3b82f6':'#ef4444';
      ctx.beginPath();ctx.arc(px,py,8,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(p.t,px,py);
    });
    if(Math.abs(w2)>0.001){
      // w1*x+w2*y+b=0 => y=-(w1*x+b)/w2
      const x0=0,x1=1;
      const y0=-(w1*x0+b)/w2,y1=-(w1*x1+b)/w2;
      ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;
      ctx.beginPath();ctx.moveTo(m+x0*s,sz-m-y0*s);ctx.lineTo(m+x1*s,sz-m-y1*s);ctx.stroke();
    }
    info.textContent=`w1=${w1.toFixed(2)} w2=${w2.toFixed(2)} b=${b.toFixed(2)}`;
  }
  draw();
  const btn=document.createElement('button');btn.textContent='학습 1 스텝';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick=()=>{
    data.forEach(p=>{const out=predict(p.x,p.y);const err=p.t-out;w1+=lr*err*p.x;w2+=lr*err*p.y;b+=lr*err;});
    draw();
    const acc=data.filter(p=>predict(p.x,p.y)===p.t).length;
    if(acc===4)btn.textContent='학습 완료!';
  };
  c.appendChild(info);c.appendChild(btn);
}

function sim143(){
  document.getElementById('simTag').textContent='선형 판별 분석';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">LDA 투영 시뮬레이션</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const pts0=Array.from({length:10},()=>({x:0.25+Math.random()*0.2,y:0.3+Math.random()*0.4,cls:0}));
  const pts1=Array.from({length:10},()=>({x:0.55+Math.random()*0.2,y:0.3+Math.random()*0.4,cls:1}));
  const pts=[...pts0,...pts1];
  let projected=false;
  const btn=document.createElement('button');btn.textContent='LDA 투영';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    if(!projected){
      pts.forEach(p=>{ctx.fillStyle=p.cls===0?'#3b82f6':'#ef4444';ctx.beginPath();ctx.arc(p.x*W,p.y*200,5,0,Math.PI*2);ctx.fill();});
    } else {
      // show projected on x-axis
      ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,150);ctx.lineTo(W,150);ctx.stroke();
      ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('LDA 투영축',W/2,170);
      pts.forEach(p=>{
        ctx.fillStyle=p.cls===0?'#3b82f6':'#ef4444';
        ctx.beginPath();ctx.arc(p.x*W,150,5,0,Math.PI*2);ctx.fill();
      });
    }
  }
  draw();
  btn.onclick=()=>{projected=!projected;draw();btn.textContent=projected?'원래 보기':'LDA 투영';};
  c.appendChild(btn);
}

function sim144(){
  document.getElementById('simTag').textContent='서포트 벡터 기계';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">SVM 마진과 서포트 벡터</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const pts=[
    {x:0.2,y:0.4,cls:0},{x:0.25,y:0.7,cls:0},{x:0.15,y:0.3,cls:0},
    {x:0.7,y:0.4,cls:1},{x:0.75,y:0.6,cls:1},{x:0.8,y:0.3,cls:1},
  ];
  const svIdx=[1,3];// support vectors
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    // decision boundary at x=0.5
    ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(W*0.5,0);ctx.lineTo(W*0.5,200);ctx.stroke();
    ctx.strokeStyle='rgba(245,158,11,0.3)';ctx.lineWidth=1;ctx.setLineDash([4,4]);
    ctx.beginPath();ctx.moveTo(W*0.35,0);ctx.lineTo(W*0.35,200);ctx.stroke();
    ctx.beginPath();ctx.moveTo(W*0.65,0);ctx.lineTo(W*0.65,200);ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle='rgba(245,158,11,0.05)';ctx.fillRect(W*0.35,0,W*0.3,200);
    pts.forEach((p,i)=>{
      const isSV=svIdx.includes(i);
      ctx.fillStyle=p.cls===0?'#3b82f6':'#ef4444';
      ctx.beginPath();ctx.arc(p.x*W,p.y*200,isSV?10:5,0,Math.PI*2);ctx.fill();
      if(isSV){ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();}
    });
    ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('마진',W*0.5,16);
  }
  draw();
  const p=document.createElement('p');p.style.cssText='color:#64748b;font-size:12px;margin-top:6px;';p.textContent='테두리 원 = 서포트 벡터, 노란 영역 = 마진';c.appendChild(p);
}

function sim145(){
  document.getElementById('simTag').textContent='커널 기법';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">커널 변환: 1D → 2D</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const pts1d=[
    {x:0.1,cls:1},{x:0.2,cls:1},{x:0.4,cls:0},{x:0.5,cls:0},{x:0.6,cls:0},{x:0.8,cls:1},{x:0.9,cls:1}
  ];
  let transformed=false;
  const btn=document.createElement('button');btn.textContent='커널 변환 (φ: x → (x, x²))';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    if(!transformed){
      ctx.strokeStyle='#334';ctx.beginPath();ctx.moveTo(0,100);ctx.lineTo(W,100);ctx.stroke();
      ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('1D 입력 공간',W/2,20);
      pts1d.forEach(p=>{ctx.fillStyle=p.cls===1?'#3b82f6':'#ef4444';ctx.beginPath();ctx.arc(p.x*W,100,7,0,Math.PI*2);ctx.fill();});
      ctx.fillStyle='#ef4444';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('선형 분리 불가',W/2,170);
    } else {
      ctx.strokeStyle='#334';ctx.beginPath();ctx.moveTo(20,180);ctx.lineTo(W-20,180);ctx.stroke();
      ctx.beginPath();ctx.moveTo(20,180);ctx.lineTo(20,10);ctx.stroke();
      ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('2D 특징 공간 (x, x²)',W/2,10);
      // draw separating line
      ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(20,100);ctx.lineTo(W-20,100);ctx.stroke();
      pts1d.forEach(p=>{
        const px=20+(W-40)*p.x;const py=180-(170)*p.x*p.x;
        ctx.fillStyle=p.cls===1?'#3b82f6':'#ef4444';ctx.beginPath();ctx.arc(px,py,6,0,Math.PI*2);ctx.fill();
      });
      ctx.fillStyle='#22c55e';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('선형 분리 가능!',W/2,195);
    }
  }
  draw();
  btn.onclick=()=>{transformed=!transformed;draw();btn.textContent=transformed?'원래 보기':'커널 변환 (φ: x → (x, x²))';};
  c.appendChild(btn);
}

function sim146(){
  document.getElementById('simTag').textContent='결정 나무';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">결정 나무 탐색</p>';
  const tree={q:'나이 < 30?',yes:{q:'소득 높음?',yes:{label:'구매 가능성 높음',color:'#22c55e'},no:{label:'구매 가능성 낮음',color:'#ef4444'}},no:{q:'직업 있음?',yes:{label:'구매 가능성 보통',color:'#f59e0b'},no:{label:'구매 가능성 낮음',color:'#ef4444'}}};
  let cur=tree;let path=[];
  const box=document.createElement('div');box.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:8px;padding:14px;color:#ccc;font-size:14px;min-height:60px;';
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:8px;margin-top:10px;';
  function render(){
    if(cur.label){
      box.innerHTML=`<div style="color:${cur.color};font-size:16px;font-weight:bold">결과: ${cur.label}</div><div style="color:#64748b;font-size:12px;margin-top:6px">경로: ${path.join(' → ')}</div>`;
      btnRow.innerHTML='';
      const rst=document.createElement('button');rst.textContent='처음으로';rst.style.cssText='padding:6px 14px;background:#1e1e2e;color:#ccc;border:1px solid #334;border-radius:4px;cursor:pointer;';
      rst.onclick=()=>{cur=tree;path=[];render();};btnRow.appendChild(rst);
    } else {
      box.innerHTML=`<div style="color:#3b82f6;font-size:15px;font-weight:bold">${cur.q}</div><div style="color:#64748b;font-size:12px;margin-top:4px">경로: ${path.join(' → ')||'시작'}</div>`;
      btnRow.innerHTML='';
      ['예','아니오'].forEach((lbl,i)=>{
        const b=document.createElement('button');b.textContent=lbl;b.style.cssText='padding:7px 18px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
        b.onclick=()=>{path.push(lbl);cur=i===0?cur.yes:cur.no;render();};
        btnRow.appendChild(b);
      });
    }
  }
  render();
  c.appendChild(box);c.appendChild(btnRow);
}

function sim147(){
  document.getElementById('simTag').textContent='무작위 숲';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">무작위 숲 앙상블 투표</p>';
  const trees=3;let preds=[];
  const treeDiv=document.createElement('div');treeDiv.style.cssText='display:flex;gap:10px;flex-wrap:wrap;margin:8px 0;';
  const result=document.createElement('p');result.style.cssText='color:#3b82f6;font-size:15px;font-weight:bold;min-height:24px;';
  const btn=document.createElement('button');btn.textContent='다시 예측';btn.style.cssText='padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:8px;';
  function render(){
    preds=Array.from({length:trees},()=>Math.random()>0.5?1:0);
    treeDiv.innerHTML='';
    preds.forEach((p,i)=>{
      const div=document.createElement('div');div.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:8px;padding:10px;text-align:center;min-width:80px;';
      div.innerHTML=`<div style="color:#64748b;font-size:11px">트리 ${i+1}</div><div style="color:${p?'#22c55e':'#ef4444'};font-size:20px;font-weight:bold">${p}</div>`;
      treeDiv.appendChild(div);
    });
    const vote=preds.reduce((s,p)=>s+p,0);
    const final=vote>trees/2?1:0;
    result.textContent=`다수결 투표: ${preds.join(' + ')} → 최종 예측: ${final}`;
  }
  render();
  btn.onclick=render;
  c.appendChild(treeDiv);c.appendChild(result);c.appendChild(btn);
}

function sim148(){
  document.getElementById('simTag').textContent='부스팅';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">약한 학습기 순차적 추가</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=150;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const weakAcc=[0.55,0.62,0.70];let count=0;
  const btn=document.createElement('button');btn.textContent='학습기 추가';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;min-height:20px;';
  function combinedAcc(n){return Math.min(0.5+weakAcc.slice(0,n).reduce((s,a)=>s+(a-0.5),0),0.99);}
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,150);
    const bw=(W-40)/(weakAcc.length);
    for(let i=0;i<count;i++){
      const x=20+i*bw;const acc=combinedAcc(i+1);const bh=(acc-0.4)*200;
      ctx.fillStyle=i===count-1?'#3b82f6':'#1e3a5f';
      ctx.fillRect(x+4,130-bh,bw-8,bh);
      ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';
      ctx.fillText(`${(acc*100).toFixed(0)}%`,x+bw/2,128-bh);
      ctx.fillText(`L${i+1}`,x+bw/2,145);
    }
  }
  draw();
  btn.onclick=()=>{
    if(count>=weakAcc.length){count=0;draw();info.textContent='';btn.textContent='학습기 추가';return;}
    count++;draw();
    info.textContent=`앙상블 정확도: ${(combinedAcc(count)*100).toFixed(0)}%`;
    if(count>=weakAcc.length)btn.textContent='초기화';
  };
  c.appendChild(btn);c.appendChild(info);
}

function sim149(){
  document.getElementById('simTag').textContent='그래디언트 부스팅';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">잔차 감소 시뮬레이션</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=180;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const base=Array.from({length:10},(_,i)=>({x:i/9,y:Math.sin(i/3)*0.4+0.5}));
  let nTrees=0;let preds=base.map(()=>0.5);
  const btn=document.createElement('button');btn.textContent='트리 추가';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;';
  function mse(){return base.reduce((s,p,i)=>s+(p.y-preds[i])**2,0)/base.length;}
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,180);
    const m=15,s=W-2*m;
    base.forEach(p=>{ctx.fillStyle='#ccc';ctx.beginPath();ctx.arc(m+p.x*s,180-20-p.y*140,4,0,Math.PI*2);ctx.fill();});
    ctx.strokeStyle='#3b82f6';ctx.lineWidth=2;ctx.beginPath();
    preds.forEach((p,i)=>{const x=m+base[i].x*s;const y=180-20-p*140;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
    ctx.stroke();
    info.textContent=`트리 ${nTrees}개 | MSE = ${mse().toFixed(4)}`;
  }
  draw();
  btn.onclick=()=>{
    if(nTrees>=5){nTrees=0;preds=base.map(()=>0.5);draw();return;}
    const lr=0.3;
    preds=preds.map((p,i)=>p+lr*(base[i].y-p));
    nTrees++;draw();
    if(nTrees>=5)btn.textContent='초기화';
  };
  c.appendChild(btn);c.appendChild(info);
}

function sim150(){
  document.getElementById('simTag').textContent='K-평균 군집';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">K-평균 군집화 반복</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const kSlider=document.createElement('input');kSlider.type='range';kSlider.min=2;kSlider.max=4;kSlider.value=2;kSlider.style.cssText='width:120px;margin:6px 4px;';
  const kLbl=document.createElement('span');kLbl.style.cssText='color:#ccc;font-size:13px;';kLbl.textContent='k=2';
  const btn=document.createElement('button');btn.textContent='반복 실행';btn.style.cssText='margin-left:8px;padding:7px 14px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const pts=Array.from({length:15},()=>({x:Math.random()*(W-20)+10,y:Math.random()*180+10,cls:0}));
  const colors=['#3b82f6','#ef4444','#22c55e','#f59e0b'];
  let centroids=[];let iter=0;
  function initCentroids(k){centroids=Array.from({length:k},()=>({x:Math.random()*(W-20)+10,y:Math.random()*180+10}));iter=0;}
  function step(k){
    pts.forEach(p=>{let best=0,bd=Infinity;centroids.forEach((ct,i)=>{const d=Math.hypot(p.x-ct.x,p.y-ct.y);if(d<bd){bd=d;best=i;}});p.cls=best;});
    centroids=centroids.map((ct,i)=>{const g=pts.filter(p=>p.cls===i);return g.length?{x:g.reduce((s,p)=>s+p.x,0)/g.length,y:g.reduce((s,p)=>s+p.y,0)/g.length}:ct;});
    iter++;
  }
  function draw(k){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    pts.forEach(p=>{ctx.fillStyle=colors[p.cls]||'#ccc';ctx.beginPath();ctx.arc(p.x,p.y,5,0,Math.PI*2);ctx.fill();});
    centroids.forEach((ct,i)=>{ctx.strokeStyle=colors[i];ctx.lineWidth=2;ctx.beginPath();ctx.arc(ct.x,ct.y,10,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('C',ct.x,ct.y);});
  }
  kSlider.oninput=()=>{const k=parseInt(kSlider.value);kLbl.textContent=`k=${k}`;initCentroids(k);draw(k);};
  initCentroids(2);draw(2);
  btn.onclick=()=>{const k=parseInt(kSlider.value);if(iter===0)initCentroids(k);step(k);draw(k);};
  const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;margin-top:6px;flex-wrap:wrap;';
  row.appendChild(kSlider);row.appendChild(kLbl);row.appendChild(btn);c.appendChild(row);
}
