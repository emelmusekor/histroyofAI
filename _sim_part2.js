
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


function sim151(){
  document.getElementById('simTag').textContent='주성분 분석';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">PCA: 주성분 축 시각화</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const pts=Array.from({length:20},()=>{const t=Math.random();return{x:0.3+t*0.5+(Math.random()*0.08-0.04),y:0.2+t*0.5+(Math.random()*0.08-0.04)};});
  let shown=false;
  const btn=document.createElement('button');btn.textContent='PCA 실행';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    pts.forEach(p=>{ctx.fillStyle='#3b82f6';ctx.beginPath();ctx.arc(p.x*W,p.y*200,4,0,Math.PI*2);ctx.fill();});
    if(shown){
      ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0.15*W,0.1*200);ctx.lineTo(0.9*W,0.9*200);ctx.stroke();
      ctx.fillStyle='#f59e0b';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('PC1 (최대 분산)',W*0.55,90);
      ctx.strokeStyle='#64748b';ctx.lineWidth=1;ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(0.9*W,0.1*200);ctx.lineTo(0.15*W,0.9*200);ctx.stroke();ctx.setLineDash([]);
      ctx.fillStyle='#64748b';ctx.font='11px sans-serif';ctx.fillText('PC2',W*0.3,150);
    }
  }
  draw();
  btn.onclick=()=>{shown=!shown;draw();btn.textContent=shown?'원래 보기':'PCA 실행';};
  c.appendChild(btn);
}

function sim152(){
  document.getElementById('simTag').textContent='은닉 마르코프 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">날씨 HMM: 관찰 시퀀스 선택</p>';
  const days=['월','화','수','목','금'];
  const obs=days.map(()=>'우산');
  const row=document.createElement('div');row.style.cssText='display:flex;gap:8px;margin:8px 0;flex-wrap:wrap;';
  const viterbi=document.createElement('div');viterbi.style.cssText='margin-top:10px;background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:10px;font-size:13px;color:#ccc;';
  function getPath(){return obs.map(o=>o==='우산'?'비':'맑음');}
  function render(){
    row.innerHTML='';
    days.forEach((d,i)=>{
      const btn=document.createElement('button');btn.textContent=`${d}: ${obs[i]==='우산'?'☂':'☀'}`;
      btn.style.cssText='padding:6px 12px;background:#1e1e2e;border:1px solid #334;border-radius:4px;cursor:pointer;color:#ccc;font-size:13px;';
      btn.onclick=()=>{obs[i]=obs[i]==='우산'?'선글라스':'우산';render();};
      row.appendChild(btn);
    });
    const path=getPath();
    viterbi.innerHTML='<b style="color:#3b82f6">Viterbi 경로:</b><br>'+days.map((d,i)=>`<span style="color:${path[i]==='비'?'#60a5fa':'#fbbf24'}">${d}: ${path[i]}</span>`).join('  ');
  }
  render();
  c.appendChild(row);c.appendChild(viterbi);
  const hint=document.createElement('p');hint.style.cssText='color:#64748b;font-size:12px;margin-top:6px;';hint.textContent='버튼 클릭으로 관찰(우산/선글라스) 전환';c.appendChild(hint);
}

function sim153(){
  document.getElementById('simTag').textContent='비터비 알고리즘';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">비터비 트렐리스 (2상태 HMM)</p>';
  const states=['맑음','비'];const obs=['우산','우산','선글라스'];
  const emit={'맑음':{'우산':0.1,'선글라스':0.9},'비':{'우산':0.8,'선글라스':0.2}};
  const trans={'맑음':{'맑음':0.7,'비':0.3},'비':{'맑음':0.4,'비':0.6}};
  let step=0;let dp=[{'맑음':0.5*emit['맑음'][obs[0]],'비':0.5*emit['비'][obs[0]]}];
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=180;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const btn=document.createElement('button');btn.textContent='다음 단계';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,180);
    const cw=W/(obs.length+1);
    states.forEach((st,si)=>{const y=40+si*80;ctx.fillStyle='#64748b';ctx.font='11px sans-serif';ctx.textAlign='right';ctx.fillText(st,cw-5,y+4);});
    for(let t=0;t<=step&&t<obs.length;t++){
      ctx.fillStyle='#64748b';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText(obs[t],(t+1)*cw,165);
      states.forEach((st,si)=>{
        const x=(t+1)*cw,y=40+si*80;const v=dp[t]?dp[t][st]||0:0;
        ctx.fillStyle=t===step?'#3b82f6':'#1e1e2e';ctx.strokeStyle='#334';ctx.lineWidth=1;
        ctx.beginPath();ctx.arc(x,y,18,0,Math.PI*2);ctx.fill();ctx.stroke();
        ctx.fillStyle='#fff';ctx.font='9px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(v.toFixed(3),x,y);
      });
    }
  }
  draw();
  btn.onclick=()=>{
    if(step>=obs.length-1){step=0;dp=[{'맑음':0.5*emit['맑음'][obs[0]],'비':0.5*emit['비'][obs[0]]}];draw();btn.textContent='다음 단계';return;}
    step++;
    const prev=dp[step-1];const cur={};
    states.forEach(s=>{cur[s]=Math.max(...states.map(ps=>prev[ps]*trans[ps][s]))*emit[s][obs[step]];});
    dp[step]=cur;draw();if(step>=obs.length-1)btn.textContent='초기화';
  };
  c.appendChild(btn);
}

function sim154(){
  document.getElementById('simTag').textContent='EM 알고리즘';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">EM: 두 가우시안 분리</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=180;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  let mu1=0.45,mu2=0.55,iter=0;
  const btn=document.createElement('button');btn.textContent='EM 반복';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;min-height:20px;';
  function gauss(x,mu,sig){return Math.exp(-0.5*((x-mu)/sig)**2)/(sig*Math.sqrt(2*Math.PI));}
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,180);
    ctx.strokeStyle='#334';ctx.beginPath();ctx.moveTo(0,160);ctx.lineTo(W,160);ctx.stroke();
    const sig=0.12;
    ['#3b82f6','#ef4444'].forEach((col,i)=>{
      const mu=i===0?mu1:mu2;
      ctx.strokeStyle=col;ctx.lineWidth=2;ctx.beginPath();
      for(let px=0;px<W;px++){const x=px/W;const y=gauss(x,mu,sig)*30;const cy=160-y;px===0?ctx.moveTo(px,cy):ctx.lineTo(px,cy);}
      ctx.stroke();
    });
    info.textContent='반복 '+iter+'회 | μ1='+mu1.toFixed(3)+', μ2='+mu2.toFixed(3);
  }
  draw();
  btn.onclick=()=>{
    if(iter>=10){iter=0;mu1=0.45;mu2=0.55;draw();btn.textContent='EM 반복';return;}
    mu1=Math.max(mu1-0.03,0.15);mu2=Math.min(mu2+0.03,0.85);iter++;draw();
    if(iter>=10)btn.textContent='초기화';
  };
  c.appendChild(btn);c.appendChild(info);
}

function sim155(){
  document.getElementById('simTag').textContent='인공 뉴런';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">인공 뉴런 계산</p>';
  const params=[{id:'x1',label:'x₁',min:0,max:1,step:0.01,val:0.5},{id:'x2',label:'x₂',min:0,max:1,step:0.01,val:0.5},{id:'w1',label:'w₁',min:0,max:2,step:0.01,val:1.0},{id:'w2',label:'w₂',min:0,max:2,step:0.01,val:1.0},{id:'b',label:'b',min:-1,max:1,step:0.01,val:0.0}];
  const vals={};params.forEach(p=>vals[p.id]=p.val);
  const out=document.createElement('div');out.style.cssText='margin-top:12px;font-size:15px;color:#ccc;';
  function sigmoid(x){return 1/(1+Math.exp(-x));}
  function update(){
    const z=vals.x1*vals.w1+vals.x2*vals.w2+vals.b;const s=sigmoid(z);
    out.innerHTML='<div>가중합 z = x₁w₁ + x₂w₂ + b = <span style="color:#a855f7;font-weight:bold">'+z.toFixed(3)+'</span></div><div style="margin-top:6px">출력 σ(z) = <span style="color:#22c55e;font-size:18px;font-weight:bold">'+s.toFixed(3)+'</span></div>';
  }
  params.forEach(p=>{
    const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;gap:8px;margin:4px 0;';
    const lbl=document.createElement('span');lbl.textContent=p.label;lbl.style.cssText='width:24px;color:#a855f7;font-weight:bold;font-size:13px;';
    const sl=document.createElement('input');sl.type='range';sl.min=p.min;sl.max=p.max;sl.step=p.step;sl.value=p.val;sl.style.cssText='flex:1;';
    const vl=document.createElement('span');vl.textContent=p.val.toFixed(2);vl.style.cssText='width:36px;color:#ccc;font-size:12px;font-family:monospace;';
    sl.oninput=()=>{vals[p.id]=parseFloat(sl.value);vl.textContent=sl.value;update();};
    row.appendChild(lbl);row.appendChild(sl);row.appendChild(vl);c.appendChild(row);
  });
  update();c.appendChild(out);
}

function sim156(){
  document.getElementById('simTag').textContent='단층 퍼셉트론';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">AND 게이트 단층 퍼셉트론</p>';
  const data=[{x1:0,x2:0,t:0},{x1:0,x2:1,t:0},{x1:1,x2:0,t:0},{x1:1,x2:1,t:1}];
  let w1=0.1,w2=0.1,b=-0.1;const lr=0.1;
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=Math.min(W,220);cv.height=220;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const info=document.createElement('div');info.style.cssText='color:#ccc;font-family:monospace;font-size:12px;margin:6px 0;';
  const btn=document.createElement('button');btn.textContent='학습 1 스텝';btn.style.cssText='padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function pred(x1,x2){return w1*x1+w2*x2+b>0?1:0;}
  function draw(){
    const sz=cv.width,m=25,s=sz-2*m;
    ctx.fillStyle='#111118';ctx.fillRect(0,0,sz,sz);
    data.forEach(p=>{const x=m+p.x1*s,y=sz-m-p.x2*s;ctx.fillStyle=p.t?'#a855f7':'#ef4444';ctx.beginPath();ctx.arc(x,y,8,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(p.t,x,y);});
    if(Math.abs(w2)>0.001){const y0=(-w1*0-b)/w2,y1=(-w1*1-b)/w2;ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(m,sz-m-y0*s);ctx.lineTo(m+s,sz-m-y1*s);ctx.stroke();}
    info.textContent='w1='+w1.toFixed(2)+' w2='+w2.toFixed(2)+' b='+b.toFixed(2)+' | 정확도:'+data.filter(p=>pred(p.x1,p.x2)===p.t).length+'/4';
  }
  draw();
  btn.onclick=()=>{data.forEach(p=>{const e=p.t-pred(p.x1,p.x2);w1+=lr*e*p.x1;w2+=lr*e*p.x2;b+=lr*e;});draw();};
  c.appendChild(info);c.appendChild(btn);
}

function sim157(){
  document.getElementById('simTag').textContent='XOR 문제';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">XOR: 단일 선으로 분리 불가</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=Math.min(W,240);cv.height=240;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const data=[{x:0.2,y:0.2,t:0},{x:0.2,y:0.8,t:1},{x:0.8,y:0.2,t:1},{x:0.8,y:0.8,t:0}];
  let lineY=0.5,dragging=false;
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,cv.width,cv.height);
    data.forEach(p=>{ctx.fillStyle=p.t?'#a855f7':'#ef4444';ctx.beginPath();ctx.arc(p.x*cv.width,p.y*cv.height,10,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(p.t,p.x*cv.width,p.y*cv.height);});
    ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,lineY*cv.height);ctx.lineTo(cv.width,lineY*cv.height);ctx.stroke();
    const ok=data.filter(p=>(p.y<lineY?1:0)===p.t).length;
    ctx.fillStyle=ok===4?'#22c55e':'#ef4444';ctx.font='12px sans-serif';ctx.textAlign='center';ctx.fillText('정확도: '+ok+'/4 — '+(ok<4?'분리 불가!':'완벽!'),cv.width/2,cv.height-10);
  }
  draw();
  cv.onmousedown=()=>dragging=true;cv.onmouseup=()=>dragging=false;
  cv.onmousemove=e=>{if(!dragging)return;const r=cv.getBoundingClientRect();lineY=(e.clientY-r.top)/cv.height;draw();};
  const p2=document.createElement('p');p2.style.cssText='color:#64748b;font-size:12px;margin-top:6px;';p2.textContent='선을 드래그해도 XOR을 완벽히 분리할 수 없습니다';c.appendChild(p2);
}

function sim158(){
  document.getElementById('simTag').textContent='다층 퍼셉트론';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">2→2→1 MLP 순전파</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const layers=[[{x:0.1,y:0.35},{x:0.1,y:0.75}],[{x:0.5,y:0.35},{x:0.5,y:0.75}],[{x:0.9,y:0.55}]];
  const vals=[[0.8,0.6],[0,0],[0]];
  function sigmoid(x){return 1/(1+Math.exp(-x));}
  function forward(){vals[1][0]=sigmoid(vals[0][0]*0.5+vals[0][1]*0.3+0.1);vals[1][1]=sigmoid(vals[0][0]*0.2+vals[0][1]*0.8-0.2);vals[2][0]=sigmoid(vals[1][0]*0.6+vals[1][1]*0.4-0.1);}
  let step=-1;
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    layers.forEach((layer,li)=>{
      layer.forEach((node,ni)=>{
        if(li<layers.length-1){layers[li+1].forEach(next=>{ctx.strokeStyle=step===li+1?'#a855f7':'#334';ctx.lineWidth=step===li+1?1.5:0.8;ctx.beginPath();ctx.moveTo(node.x*W,node.y*200);ctx.lineTo(next.x*W,next.y*200);ctx.stroke();});}
        ctx.fillStyle=step===li?'#a855f7':'#1e1e2e';ctx.strokeStyle='#a855f7';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(node.x*W,node.y*200,18,0,Math.PI*2);ctx.fill();ctx.stroke();
        ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText((vals[li][ni]||0).toFixed(2),node.x*W,node.y*200);
      });
    });
    const names=['입력층','은닉층','출력층'];names.forEach((n,i)=>{ctx.fillStyle='#64748b';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(n,layers[i][0].x*W,12);});
  }
  draw();
  const btn=document.createElement('button');btn.textContent='순전파';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick=()=>{step=(step+1)%4;if(step===0)forward();draw();};
  c.appendChild(btn);
}

function sim159(){
  document.getElementById('simTag').textContent='오차 역전파';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">XOR 학습 손실 감소</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=160;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  let losses=[2.5];
  const btn=document.createElement('button');btn.textContent='학습 1 에포크';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,160);
    ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(30,10);ctx.lineTo(30,140);ctx.lineTo(W-10,140);ctx.stroke();
    ctx.fillStyle='#64748b';ctx.font='10px sans-serif';ctx.textAlign='right';ctx.fillText('손실',28,15);
    if(losses.length>1){ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.beginPath();losses.forEach((l,i)=>{const x=30+(W-40)*i/(Math.max(losses.length-1,1));const y=10+120*(1-Math.min(l/3,1));i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});ctx.stroke();}
    info.textContent='에포크 '+(losses.length-1)+' | 손실: '+losses[losses.length-1].toFixed(4);
  }
  draw();
  btn.onclick=()=>{
    const last=losses[losses.length-1];const next=Math.max(last*(0.7+Math.random()*0.1),0.02);
    losses.push(next);if(losses.length>40)losses=losses.slice(-40);draw();
    if(next<0.05)btn.textContent='수렴!';
  };
  c.appendChild(btn);c.appendChild(info);
}

function sim160(){
  document.getElementById('simTag').textContent='손실 함수';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">MSE vs 크로스엔트로피 (y=1)</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=160;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const sl=document.createElement('input');sl.type='range';sl.min=1;sl.max=99;sl.value=50;sl.style.cssText='width:100%;margin:6px 0;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;';
  function draw(){
    const p=parseInt(sl.value)/100;
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,160);
    ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(20,10);ctx.lineTo(20,140);ctx.lineTo(W-10,140);ctx.stroke();
    ctx.strokeStyle='#3b82f6';ctx.lineWidth=2;ctx.beginPath();
    for(let px=0;px<W-30;px++){const pv=px/(W-30);const mse=(1-pv)**2;const y=10+120*(1-mse);px===0?ctx.moveTo(px+20,y):ctx.lineTo(px+20,y);}ctx.stroke();
    ctx.strokeStyle='#ef4444';ctx.lineWidth=2;ctx.beginPath();
    for(let px=0;px<W-30;px++){const pv=Math.max(px/(W-30),0.001);const ce=Math.min(-Math.log(pv)/4,1);const y=10+120*(1-ce);px===0?ctx.moveTo(px+20,y):ctx.lineTo(px+20,y);}ctx.stroke();
    const mx=20+(p*(W-30));ctx.strokeStyle='#f59e0b';ctx.lineWidth=1;ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(mx,10);ctx.lineTo(mx,140);ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle='#3b82f6';ctx.font='11px sans-serif';ctx.textAlign='left';ctx.fillText('MSE',W-50,30);ctx.fillStyle='#ef4444';ctx.fillText('CE',W-50,50);
    const mse=(1-p)**2;const ce=-Math.log(p);
    info.innerHTML='p = '+p.toFixed(2)+' | MSE = <span style="color:#3b82f6">'+mse.toFixed(3)+'</span> | CE = <span style="color:#ef4444">'+ce.toFixed(3)+'</span>';
  }
  draw();sl.oninput=draw;c.appendChild(sl);c.appendChild(info);
}

function sim161(){
  document.getElementById('simTag').textContent='확률적 경사하강법';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">경사하강법 비교</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=180;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const colors={'배치':'#3b82f6','SGD':'#ef4444','미니배치':'#22c55e'};
  let paths={};
  function toC(x,y){return{cx:W/2+x*(W/2-20),cy:160-y*40};}
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,180);
    ctx.strokeStyle='#334';ctx.lineWidth=1.5;ctx.beginPath();
    for(let px=0;px<W;px++){const x=(px-W/2)/(W/2-20);const cp=toC(x,x*x);px===0?ctx.moveTo(cp.cx,cp.cy):ctx.lineTo(cp.cx,cp.cy);}ctx.stroke();
    ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('y = x²',W/2,14);
    Object.entries(paths).forEach(([name,pts])=>{
      ctx.strokeStyle=colors[name];ctx.lineWidth=2;ctx.beginPath();pts.forEach((p,i)=>{const cp=toC(p.x,p.x*p.x);i===0?ctx.moveTo(cp.cx,cp.cy):ctx.lineTo(cp.cx,cp.cy);});ctx.stroke();
      if(pts.length){const last=pts[pts.length-1];const cp=toC(last.x,last.x*last.x);ctx.fillStyle=colors[name];ctx.beginPath();ctx.arc(cp.cx,cp.cy,5,0,Math.PI*2);ctx.fill();}
    });
    let ly=20;Object.keys(colors).forEach(n=>{ctx.fillStyle=colors[n];ctx.fillRect(10,ly,12,12);ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='left';ctx.fillText(n,26,ly+10);ly+=18;});
  }
  draw();
  ['배치','SGD','미니배치'].forEach(name=>{
    const btn=document.createElement('button');btn.textContent=name;btn.style.cssText='margin:4px;padding:6px 12px;background:'+colors[name]+';color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;';
    btn.onclick=()=>{
      const lr=name==='배치'?0.1:name==='SGD'?0.4:0.2;
      let x=name==='배치'?-1.8:name==='SGD'?1.8:-1.5;
      paths[name]=[{x}];
      for(let i=0;i<15;i++){const noise=name==='SGD'?(Math.random()-0.5)*0.5:name==='미니배치'?(Math.random()-0.5)*0.2:0;x-=lr*(2*x+noise);paths[name].push({x});}
      draw();
    };
    c.appendChild(btn);
  });
}

function sim162(){
  document.getElementById('simTag').textContent='Adam 최적화';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">SGD vs Adam 최적화</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  let animId=null,sgd={x:-1.5,y:1.2},adam={x:1.5,y:-1.2},m1=0,v1=0,m2=0,v2=0,st=0;
  function loss(x,y){return x*x+4*y*y;}
  function toP(x,y){return{cx:W/2+x*(W/8),cy:100-y*(W/16)};}
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    for(let lv=5;lv>0;lv--){ctx.strokeStyle='rgba(100,116,139,'+(lv*0.1)+')';ctx.beginPath();ctx.ellipse(W/2,100,lv*40,lv*20,0,0,Math.PI*2);ctx.stroke();}
    let sp=toP(sgd.x,sgd.y);ctx.fillStyle='#ef4444';ctx.beginPath();ctx.arc(sp.cx,sp.cy,7,0,Math.PI*2);ctx.fill();
    let ap=toP(adam.x,adam.y);ctx.fillStyle='#3b82f6';ctx.beginPath();ctx.arc(ap.cx,ap.cy,7,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#ef4444';ctx.font='11px sans-serif';ctx.textAlign='left';ctx.fillText('SGD',10,20);ctx.fillStyle='#3b82f6';ctx.fillText('Adam',10,36);
    ctx.fillStyle='#ccc';ctx.textAlign='center';ctx.fillText('손실 SGD:'+loss(sgd.x,sgd.y).toFixed(2)+' Adam:'+loss(adam.x,adam.y).toFixed(2),W/2,185);
  }
  draw();
  const btn=document.createElement('button');btn.textContent='시작';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick=()=>{
    if(animId){clearInterval(animId);animId=null;btn.textContent='시작';sgd={x:-1.5,y:1.2};adam={x:1.5,y:-1.2};m1=v1=m2=v2=st=0;draw();return;}
    animId=setInterval(()=>{
      const lr=0.1;sgd.x-=lr*2*sgd.x;sgd.y-=lr*8*sgd.y;
      st++;const b1=0.9,b2=0.999,eps=1e-8,alr=0.3;
      const gx=2*adam.x,gy=8*adam.y;
      m1=b1*m1+(1-b1)*gx;v1=b2*v1+(1-b2)*gx*gx;m2=b1*m2+(1-b1)*gy;v2=b2*v2+(1-b2)*gy*gy;
      const mc1=m1/(1-b1**st),vc1=v1/(1-b2**st),mc2=m2/(1-b1**st),vc2=v2/(1-b2**st);
      adam.x-=alr*mc1/(Math.sqrt(vc1)+eps);adam.y-=alr*mc2/(Math.sqrt(vc2)+eps);
      draw();
      if(loss(adam.x,adam.y)<0.01&&loss(sgd.x,sgd.y)<0.01){clearInterval(animId);animId=null;btn.textContent='시작';}
    },80);
    btn.textContent='중지';
  };
  c.appendChild(btn);
}

function sim163(){
  document.getElementById('simTag').textContent='드롭아웃';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">드롭아웃: 뉴런 무작위 비활성화</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=180;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const layers=[[0.15,0.35,0.55,0.75],[0.2,0.4,0.6,0.8],[0.2,0.5,0.8]];
  const xpos=[W*0.15,W*0.5,W*0.85];
  let dropped=new Set();
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,180);
    layers.forEach((layer,li)=>{
      layer.forEach((ny,ni)=>{
        const nx=xpos[li],y=ny*180;const key=li+','+ni;
        if(li<layers.length-1){layers[li+1].forEach((ny2,ni2)=>{const k2=li+1+','+ni2;const faded=dropped.has(key)||dropped.has(k2);ctx.strokeStyle=faded?'#1e1e2e':'#334';ctx.lineWidth=0.8;ctx.beginPath();ctx.moveTo(nx,y);ctx.lineTo(xpos[li+1],ny2*180);ctx.stroke();});}
        const drp=dropped.has(key);ctx.fillStyle=drp?'#1e1e2e':'#a855f7';ctx.strokeStyle=drp?'#334':'#a855f7';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(nx,y,12,0,Math.PI*2);ctx.fill();ctx.stroke();
        if(drp){ctx.strokeStyle='#ef4444';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(nx-8,y-8);ctx.lineTo(nx+8,y+8);ctx.stroke();ctx.beginPath();ctx.moveTo(nx+8,y-8);ctx.lineTo(nx-8,y+8);ctx.stroke();}
      });
    });
  }
  draw();
  const btn=document.createElement('button');btn.textContent='드롭아웃 적용';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick=()=>{dropped=new Set();layers.forEach((layer,li)=>{layer.forEach((_,ni)=>{if(Math.random()<0.3)dropped.add(li+','+ni);});});draw();};
  c.appendChild(btn);
}

function sim164(){
  document.getElementById('simTag').textContent='배치 정규화';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">배치 정규화: 분포 변환</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=160;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  function gauss(x,mu,sig){return Math.exp(-0.5*((x-mu)/sig)**2)/(sig*Math.sqrt(2*Math.PI));}
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,160);
    const half=W/2;
    ['정규화 전','정규화 후'].forEach((label,i)=>{
      const ox=i*half;ctx.fillStyle='#64748b';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(label,ox+half/2,15);
      ctx.strokeStyle='#334';ctx.beginPath();ctx.moveTo(ox,140);ctx.lineTo(ox+half,140);ctx.stroke();
      const mu=i===0?0.72:0.5,sig=i===0?0.04:0.15;
      ctx.strokeStyle=i===0?'#ef4444':'#22c55e';ctx.lineWidth=2;ctx.beginPath();
      for(let px=0;px<half;px++){const x=px/half;const y=gauss(x,mu,sig)*8;const cy=140-Math.min(y,120);px===0?ctx.moveTo(ox+px,cy):ctx.lineTo(ox+px,cy);}ctx.stroke();
    });
  }
  draw();
  const btn=document.createElement('button');btn.textContent='정규화 적용';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const note=document.createElement('p');note.style.cssText='color:#22c55e;font-size:13px;margin-top:6px;min-height:18px;';
  btn.onclick=()=>{draw();note.textContent='분포가 평균 0, 표준편차 1로 정규화되었습니다.';};
  c.appendChild(btn);c.appendChild(note);
}

function sim165(){
  document.getElementById('simTag').textContent='잔차 연결';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">스킵 연결 vs 일반 연결</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=180;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  let flowing=false;
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,180);
    const hw=W/2;
    ['스킵 연결','일반 연결'].forEach((title,side)=>{
      const ox=side*hw;ctx.fillStyle='#64748b';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(title,ox+hw/2,14);
      const lpos=[ox+hw*0.1,ox+hw*0.35,ox+hw*0.6,ox+hw*0.85];const y=90;
      lpos.forEach((lx,i)=>{
        if(i<lpos.length-1){const str=flowing?(side===0?1:Math.pow(0.3,i+1)):0.3;ctx.strokeStyle=flowing?'rgba(168,85,247,'+str+')':'#334';ctx.lineWidth=flowing?2:1;ctx.beginPath();ctx.moveTo(lx,y);ctx.lineTo(lpos[i+1],y);ctx.stroke();
          if(flowing){ctx.fillStyle='rgba(168,85,247,'+str+')';ctx.font='9px sans-serif';ctx.textAlign='center';ctx.fillText((str*100).toFixed(0)+'%',(lx+lpos[i+1])/2,y-6);}}
        ctx.fillStyle='#1e1e2e';ctx.strokeStyle='#a855f7';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(lx,y,12,0,Math.PI*2);ctx.fill();ctx.stroke();
        ctx.fillStyle='#ccc';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('L'+(i+1),lx,y);
      });
      if(side===0&&flowing){ctx.strokeStyle='#22c55e';ctx.lineWidth=2;ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(lpos[0],y-25);ctx.lineTo(lpos[3],y-25);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#22c55e';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText('스킵',(lpos[0]+lpos[3])/2,y-35);}
    });
  }
  draw();
  const btn=document.createElement('button');btn.textContent='그래디언트 흐름';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick=()=>{flowing=!flowing;draw();btn.textContent=flowing?'초기화':'그래디언트 흐름';};
  c.appendChild(btn);
}

function sim166(){
  document.getElementById('simTag').textContent='합성곱';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">5×5 입력 × 3×3 필터 합성곱</p>';
  const N=5,fN=3,sz=36;
  const input=Array.from({length:N},()=>Array(N).fill(0));
  const filter=[[1,0,-1],[1,0,-1],[1,0,-1]];
  const gridDiv=document.createElement('div');gridDiv.style.cssText='display:inline-block;margin-right:16px;vertical-align:top;';
  for(let r=0;r<N;r++){const row=document.createElement('div');row.style.cssText='display:flex;';
    for(let col=0;col<N;col++){const cell=document.createElement('div');cell.style.cssText='width:'+sz+'px;height:'+sz+'px;border:1px solid #334;background:#1e1e2e;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#ccc;font-size:13px;';
      cell.onclick=(function(r2,c2,el){return()=>{input[r2][c2]=input[r2][c2]?0:1;el.style.background=input[r2][c2]?'#a855f7':'#1e1e2e';el.textContent=input[r2][c2];};})(r,col,cell);
      row.appendChild(cell);}gridDiv.appendChild(row);}
  const outDiv=document.createElement('div');outDiv.style.cssText='display:inline-block;vertical-align:top;margin-top:4px;';
  const btn=document.createElement('button');btn.textContent='합성곱 계산';btn.style.cssText='display:block;margin-top:8px;padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick=()=>{
    outDiv.innerHTML='<div style="color:#64748b;font-size:11px;margin-bottom:4px">출력 (3×3)</div>';
    const oN=N-fN+1;
    for(let r=0;r<oN;r++){const row=document.createElement('div');row.style.cssText='display:flex;';
      for(let col=0;col<oN;col++){let s=0;for(let fr=0;fr<fN;fr++)for(let fc=0;fc<fN;fc++)s+=input[r+fr][col+fc]*filter[fr][fc];
        const cell=document.createElement('div');cell.style.cssText='width:'+sz+'px;height:'+sz+'px;border:1px solid #334;background:#1e1e2e;display:flex;align-items:center;justify-content:center;color:'+(s>0?'#22c55e':s<0?'#ef4444':'#ccc')+';font-size:12px;';
        cell.textContent=s;row.appendChild(cell);}outDiv.appendChild(row);}
  };
  c.appendChild(gridDiv);c.appendChild(outDiv);c.appendChild(btn);
}

function sim167(){
  document.getElementById('simTag').textContent='풀링';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">4×4 입력 풀링</p>';
  const N=4,sz=44;
  const grid=[[3,1,2,4],[5,6,7,8],[1,2,3,9],[0,4,5,6]];
  const inputDiv=document.createElement('div');inputDiv.style.cssText='display:inline-block;margin-right:16px;vertical-align:top;';
  for(let r=0;r<N;r++){const row=document.createElement('div');row.style.cssText='display:flex;';
    for(let col=0;col<N;col++){const cell=document.createElement('div');cell.style.cssText='width:'+sz+'px;height:'+sz+'px;border:1px solid #334;background:#1e1e2e;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:14px;';cell.textContent=grid[r][col];row.appendChild(cell);}inputDiv.appendChild(row);}
  const outDiv=document.createElement('div');outDiv.style.cssText='display:inline-block;vertical-align:top;margin-top:4px;';
  const btnRow=document.createElement('div');btnRow.style.cssText='margin-top:10px;display:flex;gap:8px;';
  function pool(type){
    outDiv.innerHTML='<div style="color:#64748b;font-size:11px;margin-bottom:4px">'+type+' (2×2)</div>';
    for(let r=0;r<2;r++){const row=document.createElement('div');row.style.cssText='display:flex;';
      for(let col=0;col<2;col++){const block=[grid[r*2][col*2],grid[r*2][col*2+1],grid[r*2+1][col*2],grid[r*2+1][col*2+1]];
        const val=type==='맥스풀링'?Math.max(...block):(block.reduce((s,v)=>s+v,0)/4).toFixed(1);
        const cell=document.createElement('div');cell.style.cssText='width:'+sz+'px;height:'+sz+'px;border:1px solid #334;background:#1a1a2e;display:flex;align-items:center;justify-content:center;color:#a855f7;font-size:14px;font-weight:bold;';
        cell.textContent=val;row.appendChild(cell);}outDiv.appendChild(row);}
  }
  ['맥스풀링','평균풀링'].forEach(t=>{const b=document.createElement('button');b.textContent=t;b.style.cssText='padding:6px 12px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;';b.onclick=()=>pool(t);btnRow.appendChild(b);});
  c.appendChild(inputDiv);c.appendChild(outDiv);c.appendChild(btnRow);
}

function sim168(){
  document.getElementById('simTag').textContent='깊은 합성곱 신경망';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">CNN 아키텍처 (레이어 클릭)</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=80;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const layers=[{name:'Conv\n64',color:'#a855f7',desc:'64개 3×3 필터 합성곱'},{name:'Pool',color:'#3b82f6',desc:'2×2 맥스풀링, 크기 절반'},{name:'Conv\n128',color:'#a855f7',desc:'128개 3×3 필터 합성곱'},{name:'Pool',color:'#3b82f6',desc:'2×2 맥스풀링, 크기 절반'},{name:'FC\n1024',color:'#22c55e',desc:'완전 연결층, 1024 뉴런'},{name:'Softmax',color:'#f59e0b',desc:'출력층: 클래스 확률'}];
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;min-height:32px;margin-top:6px;background:#1e1e2e;border:1px solid #334;border-radius:4px;padding:6px;';
  function draw(sel){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,80);const bw=(W-20)/layers.length,m=10;
    layers.forEach((l,i)=>{const x=m+i*bw;ctx.fillStyle=sel===i?l.color:'#1e1e2e';ctx.strokeStyle=l.color;ctx.lineWidth=1.5;ctx.beginPath();ctx.roundRect(x+2,15,bw-4,48,4);ctx.fill();ctx.stroke();
      ctx.fillStyle=sel===i?'#111':'#ccc';ctx.font='9px sans-serif';ctx.textAlign='center';
      l.name.split('\n').forEach((ln,li)=>ctx.fillText(ln,x+bw/2,35+li*13));
      if(i<layers.length-1){ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x+bw-1,39);ctx.lineTo(x+bw+3,39);ctx.stroke();}});
  }
  draw(-1);
  cv.onclick=e=>{const r=cv.getBoundingClientRect();const bw=(W-20)/layers.length;const i=Math.floor((e.clientX-r.left-10)/bw);if(i>=0&&i<layers.length){draw(i);info.textContent=layers[i].desc;}};
  c.appendChild(info);
}

function sim169(){
  document.getElementById('simTag').textContent='순환 신경망';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">RNN: 순차 입력과 은닉 상태</p>';
  const tokens=['안','녕','하','세','요'];let step=0;let h=0;
  const prog=document.createElement('div');prog.style.cssText='display:flex;gap:6px;margin:8px 0;';
  const spans=[];tokens.forEach((t,i)=>{const s=document.createElement('span');s.textContent=t;s.style.cssText='padding:4px 10px;border-radius:4px;border:1px solid #334;background:#1e1e2e;color:#64748b;font-size:14px;';prog.appendChild(s);spans.push(s);});
  const box=document.createElement('div');box.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:8px;padding:12px;color:#ccc;font-size:13px;min-height:80px;';
  const btn=document.createElement('button');btn.textContent='다음 토큰';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function render(){
    if(step<tokens.length){
      const xt=(tokens[step].charCodeAt(0)%10)/10;h=Math.tanh(0.5*xt+0.8*h+0.1);
      box.innerHTML='<div>입력: <span style="color:#a855f7;font-weight:bold">"'+tokens[step]+'"</span></div><div style="margin-top:6px">h<sub>t</sub> = tanh(Wx·x + Wh·h + b)</div><div style="margin-top:6px">h<sub>'+step+'</sub> = <span style="color:#22c55e;font-weight:bold">'+h.toFixed(4)+'</span></div>';
      spans[step].style.cssText='padding:4px 10px;border-radius:4px;border:1px solid #a855f7;background:#a855f7;color:#fff;font-size:14px;';
      step++;
    } else {box.innerHTML='<div style="color:#22c55e">시퀀스 처리 완료!</div>';btn.textContent='초기화';step=0;h=0;spans.forEach(s=>{s.style.cssText='padding:4px 10px;border-radius:4px;border:1px solid #334;background:#1e1e2e;color:#64748b;font-size:14px;';});}
  }
  render();btn.onclick=render;c.appendChild(prog);c.appendChild(box);c.appendChild(btn);
}

function sim170(){
  document.getElementById('simTag').textContent='장단기 기억망';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">LSTM 게이트 시뮬레이터</p>';
  const gates=[{id:'forget',label:'망각 게이트 (f)',color:'#ef4444'},{id:'input',label:'입력 게이트 (i)',color:'#3b82f6'},{id:'cell',label:'셀 게이트 (g)',color:'#22c55e'},{id:'output',label:'출력 게이트 (o)',color:'#f59e0b'}];
  const vals={forget:0.5,input:0.5,cell:0.5,output:0.5};let C=0;
  const out=document.createElement('div');out.style.cssText='margin-top:10px;font-size:14px;color:#ccc;background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:8px;';
  function update(){
    const f=vals.forget,i=vals.input,g=Math.tanh((vals.cell-0.5)*4),o=vals.output;
    C=f*C+i*g;const h=o*Math.tanh(C);
    out.innerHTML='<div>C<sub>t</sub> = f·C + i·g = <span style="color:#22c55e;font-weight:bold">'+C.toFixed(3)+'</span></div><div style="margin-top:4px">h<sub>t</sub> = o·tanh(C) = <span style="color:#f59e0b;font-weight:bold">'+h.toFixed(3)+'</span></div>';
  }
  gates.forEach(g=>{
    const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;gap:8px;margin:4px 0;';
    const lbl=document.createElement('span');lbl.textContent=g.label;lbl.style.cssText='width:140px;color:'+g.color+';font-size:12px;';
    const sl=document.createElement('input');sl.type='range';sl.min=0;sl.max=1;sl.step=0.01;sl.value=0.5;sl.style.cssText='flex:1;';
    const vl=document.createElement('span');vl.textContent='0.50';vl.style.cssText='width:36px;color:#ccc;font-size:12px;font-family:monospace;';
    sl.oninput=()=>{vals[g.id]=parseFloat(sl.value);vl.textContent=sl.value;update();};
    row.appendChild(lbl);row.appendChild(sl);row.appendChild(vl);c.appendChild(row);
  });
  update();c.appendChild(out);
}

function sim171(){
  document.getElementById('simTag').textContent='오토인코더';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">오토인코더: 8→3→8</p>';
  const N=8;let input=Array(N).fill(0);
  const switchRow=document.createElement('div');switchRow.style.cssText='display:flex;gap:6px;margin:8px 0;flex-wrap:wrap;';
  const latent=document.createElement('div');latent.style.cssText='margin:8px 0;font-size:13px;color:#ccc;';
  const decoded=document.createElement('div');decoded.style.cssText='display:flex;gap:6px;margin-top:6px;flex-wrap:wrap;';
  const btn=document.createElement('button');btn.textContent='인코딩 → 디코딩';btn.style.cssText='padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:4px;';
  for(let i=0;i<N;i++){
    const b=document.createElement('button');b.textContent='0';b.style.cssText='width:36px;height:36px;border-radius:4px;border:1px solid #334;background:#1e1e2e;color:#ccc;cursor:pointer;font-weight:bold;';
    b.onclick=(function(idx,el){return()=>{input[idx]=input[idx]?0:1;el.textContent=input[idx];el.style.background=input[idx]?'#a855f7':'#1e1e2e';el.style.color=input[idx]?'#fff':'#ccc';};})(i,b);
    switchRow.appendChild(b);
  }
  btn.onclick=()=>{
    const z=[Math.round(input.slice(0,3).reduce((s,v)=>s+v,0)/3),Math.round(input.slice(3,6).reduce((s,v)=>s+v,0)/3),Math.round(input.slice(6,8).reduce((s,v)=>s+v,0)/2)];
    latent.innerHTML='잠재 벡터 z = <span style="color:#f59e0b;font-weight:bold">['+z.join(', ')+']</span>';
    const rec=input.map(v=>Math.random()<0.9?v:(v?0:1));
    decoded.innerHTML='';rec.forEach(v=>{const d=document.createElement('span');d.textContent=v;d.style.cssText='width:32px;height:32px;border-radius:4px;border:1px solid #334;display:inline-flex;align-items:center;justify-content:center;font-weight:bold;color:'+(v?'#22c55e':'#64748b')+';background:#1e1e2e;';decoded.appendChild(d);});
  };
  c.appendChild(switchRow);c.appendChild(btn);c.appendChild(latent);
  const rl=document.createElement('p');rl.style.cssText='color:#64748b;font-size:12px;margin-top:4px;';rl.textContent='재구성 출력:';c.appendChild(rl);c.appendChild(decoded);
}

function sim172(){
  document.getElementById('simTag').textContent='임베딩 학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">단어 임베딩 2D 시각화</p>';
  const words={'왕':{x:0.8,y:0.8},'여왕':{x:0.8,y:0.2},'남자':{x:0.3,y:0.8},'여자':{x:0.3,y:0.2},'왕자':{x:0.6,y:0.65},'공주':{x:0.6,y:0.35}};
  const sel=document.createElement('select');sel.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:5px;border-radius:4px;margin-bottom:8px;';
  sel.innerHTML=Object.keys(words).map(w=>'<option>'+w+'</option>').join('');
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;
  const ctx=cv.getContext('2d');
  function draw(selected){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(20,10);ctx.lineTo(20,180);ctx.lineTo(W-10,180);ctx.stroke();
    Object.entries(words).forEach(([w,pos])=>{
      const x=20+(W-30)*pos.x,y=10+170*pos.y;const isSel=w===selected;
      ctx.fillStyle=isSel?'#a855f7':'#1e1e2e';ctx.strokeStyle=isSel?'#a855f7':'#334';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(x,y,isSel?12:8,0,Math.PI*2);ctx.fill();ctx.stroke();
      ctx.fillStyle=isSel?'#fff':'#ccc';ctx.font=(isSel?'bold ':'')+' 11px sans-serif';ctx.textAlign='center';ctx.fillText(w,x,y+(isSel?16:14));
    });
    if(words[selected]){const p=words[selected];ctx.fillStyle='#a855f7';ctx.font='12px sans-serif';ctx.textAlign='left';ctx.fillText('벡터: ['+p.x.toFixed(2)+', '+p.y.toFixed(2)+']',25,195);}
  }
  draw(sel.value);sel.onchange=()=>draw(sel.value);
  c.appendChild(sel);c.appendChild(cv);
}

function sim173(){
  document.getElementById('simTag').textContent='자기 지도 학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">마스킹 & 예측 (자기 지도)</p>';
  const N=3,sz=60;
  const emojis=['🌅','🏠','🌳','🐕','🚗','🌸','⛰️','🏖️','🌙'];
  let masked=new Set();
  const grid=document.createElement('div');grid.style.cssText='display:inline-block;';
  const cells=[];
  for(let r=0;r<N;r++){const row=document.createElement('div');row.style.cssText='display:flex;';
    for(let col=0;col<N;col++){const i=r*N+col;const cell=document.createElement('div');cell.style.cssText='width:'+sz+'px;height:'+sz+'px;border:1px solid #334;background:#1e1e2e;display:flex;align-items:center;justify-content:center;font-size:24px;';cell.textContent=emojis[i];cells.push(cell);row.appendChild(cell);}grid.appendChild(row);}
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:8px;margin-top:8px;';
  const maskBtn=document.createElement('button');maskBtn.textContent='마스킹';maskBtn.style.cssText='padding:7px 16px;background:#a855f7;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const predBtn=document.createElement('button');predBtn.textContent='예측';predBtn.style.cssText='padding:7px 16px;background:#22c55e;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  maskBtn.onclick=()=>{masked=new Set();const idxs=[0,1,2,3,4,5,6,7,8].sort(()=>Math.random()-0.5).slice(0,3);idxs.forEach(i=>masked.add(i));cells.forEach((cell,i)=>{if(masked.has(i)){cell.textContent='?';cell.style.background='#334';}else{cell.textContent=emojis[i];cell.style.background='#1e1e2e';}});};
  predBtn.onclick=()=>{cells.forEach((cell,i)=>{if(masked.has(i)){cell.textContent=emojis[i];cell.style.background='#1a3a1a';}});};
  btnRow.appendChild(maskBtn);btnRow.appendChild(predBtn);c.appendChild(grid);c.appendChild(btnRow);
}

function sim174(){
  document.getElementById('simTag').textContent='대조 학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#a855f7;font-weight:bold">대조 학습: 유사/비유사 쌍</p>';
  const pairs=[{a:'🐕 강아지',b:'🐶 개',sim:true,dist:0.12},{a:'🐕 강아지',b:'🚗 자동차',sim:false,dist:0.95},{a:'🍎 사과',b:'🍊 오렌지',sim:true,dist:0.28}];
  let selected=-1;
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=80;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const pairDiv=document.createElement('div');pairDiv.style.cssText='display:flex;flex-direction:column;gap:8px;margin:8px 0;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;min-height:20px;';
  function drawEmb(idx){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,80);ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(20,40);ctx.lineTo(W-20,40);ctx.stroke();
    if(idx>=0){const p=pairs[idx];const x1=30,x2=30+(W-60)*(1-p.dist);
      ctx.fillStyle='#a855f7';ctx.beginPath();ctx.arc(x1,40,8,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=p.sim?'#22c55e':'#ef4444';ctx.beginPath();ctx.arc(x2,40,8,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle=p.sim?'#22c55e':'#ef4444';ctx.lineWidth=2;ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(x1,40);ctx.lineTo(x2,40);ctx.stroke();ctx.setLineDash([]);
      ctx.fillStyle='#ccc';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText('거리: '+p.dist,(x1+x2)/2,25);}
  }
  pairs.forEach((p,i)=>{const btn=document.createElement('button');btn.textContent=p.a+' ↔ '+p.b;btn.style.cssText='padding:7px 12px;background:#1e1e2e;border:1px solid '+(p.sim?'#22c55e':'#ef4444')+';border-radius:4px;cursor:pointer;color:#ccc;font-size:13px;text-align:left;';btn.onclick=()=>{selected=i;drawEmb(i);info.textContent=(p.sim?'유사':'비유사')+' 쌍 | 거리: '+p.dist+' | '+(p.sim?'당겨야 함 ↓':'밀어야 함 ↑');};pairDiv.appendChild(btn);});
  drawEmb(-1);c.appendChild(pairDiv);c.appendChild(info);
}

function sim175(){
  document.getElementById('simTag').textContent='n그램 언어 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">바이그램 언어 모델 (나는 학교에 간다)</p>';
  const bigrams={'나는':[{w:'학교에',p:0.6},{w:'집에',p:0.3},{w:'공부를',p:0.1}],'학교에':[{w:'간다',p:0.7},{w:'갔다',p:0.2},{w:'다닌다',p:0.1}],'집에':[{w:'간다',p:0.5},{w:'있다',p:0.3},{w:'왔다',p:0.2}],'간다':[{w:'나는',p:0.4},{w:'그리고',p:0.3},{w:'.',p:0.3}]};
  const words=Object.keys(bigrams);
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:8px;flex-wrap:wrap;margin:8px 0;';
  const result=document.createElement('div');result.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:10px;font-size:13px;color:#ccc;min-height:60px;';
  words.forEach(w=>{const btn=document.createElement('button');btn.textContent=w;btn.style.cssText='padding:6px 14px;background:#1e1e2e;border:1px solid #14b8a6;border-radius:4px;cursor:pointer;color:#14b8a6;font-size:13px;';btn.onclick=()=>{const preds=bigrams[w];result.innerHTML='<b style="color:#14b8a6">'+w+'</b> 다음 예측:<br>'+preds.map(p=>'<div style="margin:4px 0;display:flex;align-items:center;gap:8px;"><span style="width:60px">'+p.w+'</span><div style="background:#14b8a6;height:10px;width:'+(p.p*100*1.5)+'px;border-radius:3px;display:inline-block;"></div> <span>'+( p.p*100).toFixed(0)+'%</span></div>').join('');};btnRow.appendChild(btn);});
  c.appendChild(btnRow);c.appendChild(result);
}

function sim176(){
  document.getElementById('simTag').textContent='통계적 기계 번역';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">구문 정렬 시각화</p>';
  const korean=['나는','학생','이다'];const english=['I','am','a','student'];
  const align=[[0],[1],[1,2,3],[2,3]];
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  let sel=-1;
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    const kw=W/korean.length;const ew=W/english.length;
    korean.forEach((w,i)=>{ctx.fillStyle=sel===i?'#14b8a6':'#1e1e2e';ctx.strokeStyle='#14b8a6';ctx.lineWidth=1;ctx.fillRect(i*kw+2,20,kw-4,36);ctx.strokeRect(i*kw+2,20,kw-4,36);ctx.fillStyle=sel===i?'#fff':'#ccc';ctx.font='13px sans-serif';ctx.textAlign='center';ctx.fillText(w,i*kw+kw/2,43);});
    english.forEach((w,i)=>{const active=sel>=0&&align[sel]&&align[sel].includes(i);ctx.fillStyle=active?'#14b8a6':'#1e1e2e';ctx.strokeStyle='#14b8a6';ctx.lineWidth=1;ctx.fillRect(i*ew+2,144,ew-4,36);ctx.strokeRect(i*ew+2,144,ew-4,36);ctx.fillStyle=active?'#fff':'#ccc';ctx.font='13px sans-serif';ctx.textAlign='center';ctx.fillText(w,i*ew+ew/2,167);});
    if(sel>=0&&align[sel]){align[sel].forEach(ei=>{ctx.strokeStyle='#14b8a6';ctx.lineWidth=1;ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(sel*kw+kw/2,56);ctx.lineTo(ei*ew+ew/2,144);ctx.stroke();ctx.setLineDash([]);});}
  }
  draw();
  cv.onclick=e=>{const r=cv.getBoundingClientRect();const x=e.clientX-r.left;const kw=W/korean.length;const i=Math.floor(x/kw);if(i>=0&&i<korean.length){sel=sel===i?-1:i;draw();}};
  const hint=document.createElement('p');hint.style.cssText='color:#64748b;font-size:12px;margin-top:6px;';hint.textContent='한국어 단어를 클릭해 정렬을 확인하세요';c.appendChild(hint);
}

function sim177(){
  document.getElementById('simTag').textContent='구문 분석';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">구성소 트리 파싱</p>';
  const tree={label:'S',children:[{label:'NP',children:[{label:'나는'}]},{label:'VP',children:[{label:'PP',children:[{label:'학교에'}]},{label:'V',children:[{label:'갔다'}]}]}]};
  let parsed=false;
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const btn=document.createElement('button');btn.textContent='파싱';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#14b8a6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function drawNode(node,x,y,spread){
    ctx.fillStyle='#1e1e2e';ctx.strokeStyle='#14b8a6';ctx.lineWidth=1.5;ctx.beginPath();ctx.roundRect(x-22,y-12,44,24,4);ctx.fill();ctx.stroke();
    ctx.fillStyle=node.children?'#14b8a6':'#ccc';ctx.font=(node.children?'bold ':'')+'12px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(node.label,x,y);
    if(node.children){const cw=spread/node.children.length;node.children.forEach((ch,i)=>{const cx=x-spread/2+cw*(i+0.5);const cy=y+50;ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,y+12);ctx.lineTo(cx,cy-12);ctx.stroke();drawNode(ch,cx,cy,cw*0.9);});}
  }
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    if(parsed)drawNode(tree,W/2,30,W*0.85);
    else{ctx.fillStyle='#64748b';ctx.font='14px sans-serif';ctx.textAlign='center';ctx.fillText('문장: "나는 학교에 갔다"',W/2,90);ctx.fillText('파싱 버튼을 클릭하세요',W/2,115);}
  }
  draw();
  btn.onclick=()=>{parsed=true;draw();btn.textContent='초기화';btn.onclick=()=>{parsed=false;draw();btn.textContent='파싱';btn.onclick=arguments.callee;};};
  c.appendChild(btn);
}

function sim178(){
  document.getElementById('simTag').textContent='개체명 인식';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">NER: 토큰 클릭으로 레이블 지정</p>';
  const tokens=['김철수','는','서울','에서','삼성전자','에','다닌다'];
  const labels=['인명','장소','기관','기타'];
  const colors={'인명':'#ef4444','장소':'#3b82f6','기관':'#22c55e','기타':'#64748b',''  :'#1e1e2e'};
  const assigned=tokens.map(()=>'');
  const tokenRow=document.createElement('div');tokenRow.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin:10px 0;';
  const tokenEls=[];
  tokens.forEach((t,i)=>{
    const el=document.createElement('div');el.style.cssText='padding:6px 12px;border-radius:4px;border:1px solid #334;background:#1e1e2e;color:#ccc;cursor:pointer;font-size:13px;position:relative;';
    el.textContent=t;
    el.onclick=()=>{const cur=labels.indexOf(assigned[i]);const next=labels[(cur+1)%labels.length];assigned[i]=next;el.style.background=colors[next];el.style.color=next?'#fff':'#ccc';el.title=next;const tag=el.querySelector('.tag');if(tag)tag.textContent=next;else if(next){const tg=document.createElement('div');tg.className='tag';tg.style.cssText='position:absolute;top:-16px;left:0;font-size:9px;color:#fff;background:'+colors[next]+';border-radius:2px;padding:0 3px;white-space:nowrap;';tg.textContent=next;el.appendChild(tg);}};
    tokenEls.push(el);tokenRow.appendChild(el);
  });
  c.appendChild(tokenRow);
  const hint=document.createElement('p');hint.style.cssText='color:#64748b;font-size:12px;';hint.textContent='토큰 클릭으로 인명/장소/기관/기타 순환';c.appendChild(hint);
}

function sim179(){
  document.getElementById('simTag').textContent='워드투벡터';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">왕 - 남자 + 여자 = 여왕?</p>';
  const vecs={'왕':[0.9,0.8],'여왕':[0.9,0.2],'남자':[0.3,0.8],'여자':[0.3,0.2]};
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  let highlight='';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(20,10);ctx.lineTo(20,180);ctx.lineTo(W-10,180);ctx.stroke();
    Object.entries(vecs).forEach(([w,pos])=>{
      const x=20+(W-30)*pos[0],y=10+170*pos[1];const hl=w===highlight;
      ctx.fillStyle=hl?'#14b8a6':'#1e1e2e';ctx.strokeStyle='#14b8a6';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(x,y,hl?14:8,0,Math.PI*2);ctx.fill();ctx.stroke();
      ctx.fillStyle=hl?'#fff':'#ccc';ctx.font=(hl?'bold ':'')+' 12px sans-serif';ctx.textAlign='center';ctx.fillText(w,x,y+(hl?18:14));
    });
  }
  draw();
  const btn=document.createElement('button');btn.textContent='왕 - 남자 + 여자 =';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#14b8a6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const result=document.createElement('p');result.style.cssText='color:#14b8a6;font-size:15px;font-weight:bold;margin-top:8px;min-height:20px;';
  btn.onclick=()=>{highlight='여왕';draw();result.textContent='결과: 여왕! (벡터 유추 성공)';};
  c.appendChild(btn);c.appendChild(result);
}

function sim180(){
  document.getElementById('simTag').textContent='GloVe';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">공기 행렬 (Co-occurrence Matrix)</p>';
  const words=['나','학교','가다','먹다'];
  const matrix=[[0,5,3,2],[5,0,4,1],[3,4,0,6],[2,1,6,0]];
  const meanings=['자주 같이 출현','학교 관련','이동 동사','음식 동사'];
  let sel=null;
  const tbl=document.createElement('table');tbl.style.cssText='border-collapse:collapse;';
  const hdr=document.createElement('tr');hdr.innerHTML='<th style="border:1px solid #334;padding:6px;color:#64748b;font-size:11px;"></th>'+words.map(w=>'<th style="border:1px solid #334;padding:6px;color:#14b8a6;font-size:12px;">'+w+'</th>').join('');
  tbl.appendChild(hdr);
  const result=document.createElement('p');result.style.cssText='color:#ccc;font-size:13px;margin-top:8px;min-height:20px;';
  words.forEach((w,r)=>{
    const tr=document.createElement('tr');
    tr.innerHTML='<th style="border:1px solid #334;padding:6px;color:#14b8a6;font-size:12px;">'+w+'</th>';
    words.forEach((w2,col)=>{
      const td=document.createElement('td');td.style.cssText='border:1px solid #334;padding:6px;text-align:center;cursor:pointer;color:'+( matrix[r][col]>3?'#14b8a6':'#ccc')+';font-size:12px;background:#1e1e2e;';
      td.textContent=matrix[r][col];
      td.onclick=()=>{result.innerHTML='<b style="color:#14b8a6">'+w+' + '+w2+'</b>: 공기 빈도 = '+matrix[r][col]+'  ('+meanings[Math.max(r,col)]+')';};
      tr.appendChild(td);
    });
    tbl.appendChild(tr);
  });
  c.appendChild(tbl);c.appendChild(result);
}

function sim181(){
  document.getElementById('simTag').textContent='fastText';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">서브워드 분리 (fastText)</p>';
  const inp=document.createElement('input');inp.value='먹이다';inp.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:6px;border-radius:4px;width:120px;font-size:14px;';
  const btn=document.createElement('button');btn.textContent='서브워드 분리';btn.style.cssText='margin-left:8px;padding:6px 14px;background:#14b8a6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const result=document.createElement('div');result.style.cssText='margin-top:10px;font-size:13px;color:#ccc;';
  btn.onclick=()=>{
    const w=inp.value;const ngrams=[];
    for(let n=2;n<=Math.min(w.length,4);n++){for(let i=0;i<=w.length-n;i++)ngrams.push(w.slice(i,i+n));}
    ngrams.push('<'+w+'>');
    result.innerHTML='<b style="color:#14b8a6">서브워드:</b><br>'+ngrams.map(g=>'<span style="display:inline-block;margin:3px;padding:3px 8px;background:#1e1e2e;border:1px solid #14b8a6;border-radius:4px;color:#14b8a6;">'+g+'</span>').join('');
  };
  c.appendChild(inp);c.appendChild(btn);c.appendChild(result);
}

function sim182(){
  document.getElementById('simTag').textContent='순차순차 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">인코더-디코더 (Seq2Seq)</p>';
  const encTokens=['안','녕','하','세','요'];const decTokens=['H','e','l','l','o'];
  let encStep=0,decStep=0,phase='enc';
  const encDiv=document.createElement('div');encDiv.style.cssText='display:flex;gap:4px;margin:8px 0;align-items:center;';
  const arrow=document.createElement('span');arrow.textContent='→';arrow.style.cssText='font-size:20px;color:#14b8a6;margin:0 4px;';
  const decDiv=document.createElement('div');decDiv.style.cssText='display:flex;gap:4px;';
  const state=document.createElement('p');state.style.cssText='color:#14b8a6;font-size:13px;min-height:18px;';
  const btn=document.createElement('button');btn.textContent='다음 토큰';btn.style.cssText='padding:7px 16px;background:#14b8a6;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:6px;';
  const encEls=[],decEls=[];
  encTokens.forEach(t=>{const el=document.createElement('span');el.textContent=t;el.style.cssText='padding:5px 10px;border-radius:4px;border:1px solid #334;background:#1e1e2e;color:#64748b;font-size:14px;';encDiv.appendChild(el);encEls.push(el);});
  decTokens.forEach(t=>{const el=document.createElement('span');el.textContent='_';el.style.cssText='padding:5px 10px;border-radius:4px;border:1px solid #334;background:#1e1e2e;color:#64748b;font-size:14px;';decDiv.appendChild(el);decEls.push(el);});
  const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;flex-wrap:wrap;gap:4px;';
  row.appendChild(encDiv);row.appendChild(arrow);row.appendChild(decDiv);
  btn.onclick=()=>{
    if(phase==='enc'&&encStep<encTokens.length){encEls[encStep].style.cssText='padding:5px 10px;border-radius:4px;border:1px solid #14b8a6;background:#14b8a6;color:#fff;font-size:14px;';state.textContent='인코딩: "'+encTokens[encStep]+'" 처리 중';encStep++;if(encStep>=encTokens.length){phase='dec';btn.textContent='디코더 시작';state.textContent='컨텍스트 벡터 생성 완료';}}
    else if(phase==='dec'&&decStep<decTokens.length){decEls[decStep].textContent=decTokens[decStep];decEls[decStep].style.cssText='padding:5px 10px;border-radius:4px;border:1px solid #14b8a6;background:#1e1e2e;color:#14b8a6;font-size:14px;font-weight:bold;';state.textContent='디코딩: "'+decTokens[decStep]+'" 생성';decStep++;if(decStep>=decTokens.length){btn.textContent='초기화';phase='done';}}
    else{encStep=0;decStep=0;phase='enc';btn.textContent='다음 토큰';encEls.forEach(e=>{e.style.cssText='padding:5px 10px;border-radius:4px;border:1px solid #334;background:#1e1e2e;color:#64748b;font-size:14px;';});decEls.forEach(e=>{e.textContent='_';e.style.cssText='padding:5px 10px;border-radius:4px;border:1px solid #334;background:#1e1e2e;color:#64748b;font-size:14px;';});state.textContent='';}
  };
  c.appendChild(row);c.appendChild(state);c.appendChild(btn);
}

function sim183(){
  document.getElementById('simTag').textContent='주의 집중 메커니즘';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">어텐션: 쿼리 단어 클릭</p>';
  const words=['나는','오늘','학교에','열심히','갔다'];
  const attn={'나는':[0.6,0.1,0.1,0.1,0.1],'오늘':[0.1,0.5,0.1,0.2,0.1],'학교에':[0.1,0.1,0.6,0.1,0.1],'열심히':[0.05,0.1,0.15,0.6,0.1],'갔다':[0.2,0.1,0.3,0.1,0.3]};
  let sel=null;
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=160;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;';
  words.forEach(w=>{const btn=document.createElement('button');btn.textContent=w;btn.style.cssText='padding:5px 12px;background:#1e1e2e;border:1px solid #14b8a6;border-radius:4px;cursor:pointer;color:#14b8a6;font-size:13px;';btn.onclick=()=>{sel=w;draw();};btnRow.appendChild(btn);});
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,160);
    const bw=(W-20)/words.length;
    words.forEach((w,i)=>{
      const wts=sel?attn[sel][i]:0;const bh=wts*100;const x=10+i*bw;
      ctx.fillStyle='rgba(20,184,166,'+(0.2+wts*0.8)+')';ctx.fillRect(x+4,140-bh,bw-8,bh);
      ctx.strokeStyle='#14b8a6';ctx.strokeRect(x+4,140-bh,bw-8,bh);
      ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(w,x+bw/2,155);
      if(sel)ctx.fillText((wts*100).toFixed(0)+'%',x+bw/2,136-bh);
    });
    if(!sel){ctx.fillStyle='#64748b';ctx.font='14px sans-serif';ctx.textAlign='center';ctx.fillText('위의 단어를 클릭하세요',W/2,80);}
  }
  draw();c.insertBefore(btnRow,cv);
}

function sim184(){
  document.getElementById('simTag').textContent='트랜스포머';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">셀프 어텐션 QKV 계산</p>';
  const tokens=['나','는','학','교'];const N=tokens.length;
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=180;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  let step=0;
  const scores=[[0.7,0.1,0.1,0.1],[0.1,0.6,0.2,0.1],[0.05,0.15,0.6,0.2],[0.1,0.1,0.2,0.6]];
  const btn=document.createElement('button');btn.textContent='어텐션 계산';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#14b8a6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:12px;min-height:18px;';
  const phases=['QK^T 점수 행렬','Softmax 가중치','가중 합산 출력'];
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,180);
    const cellW=(W-60)/N,cellH=32;const ox=30,oy=30;
    ctx.fillStyle='#14b8a6';ctx.font='11px sans-serif';ctx.textAlign='center';
    tokens.forEach((t,i)=>{ctx.fillText(t,ox+i*cellW+cellW/2,20);ctx.fillText(t,15,oy+i*cellH+cellH/2);});
    for(let r=0;r<N;r++)for(let col=0;col<N;col++){
      const v=scores[r][col];
      ctx.fillStyle='rgba(20,184,166,'+v+')';ctx.fillRect(ox+col*cellW,oy+r*cellH,cellW-2,cellH-2);
      ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText(v.toFixed(2),ox+col*cellW+cellW/2,oy+r*cellH+cellH/2+4);
    }
    info.textContent='단계: '+phases[step%phases.length];
  }
  draw();
  btn.onclick=()=>{step++;draw();};
  c.appendChild(btn);c.appendChild(info);
}

function sim185(){
  document.getElementById('simTag').textContent='BERT 계열';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">BERT 마스크 토큰 예측</p>';
  const sentences=[
    {s:'나는 [MASK]에 간다',candidates:[{w:'학교',p:0.45},{w:'집',p:0.25},{w:'시장',p:0.15},{w:'회사',p:0.1},{w:'공원',p:0.05}]},
    {s:'오늘 날씨가 [MASK]',candidates:[{w:'좋다',p:0.5},{w:'흐리다',p:0.2},{w:'춥다',p:0.15},{w:'맑다',p:0.1},{w:'덥다',p:0.05}]},
  ];
  let idx=0;
  const sentDiv=document.createElement('div');sentDiv.style.cssText='font-size:16px;color:#ccc;margin:10px 0;';
  const result=document.createElement('div');result.style.cssText='font-size:13px;margin-top:8px;';
  const btn=document.createElement('button');btn.textContent='예측';btn.style.cssText='padding:7px 16px;background:#14b8a6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const nxt=document.createElement('button');nxt.textContent='다음 문장';nxt.style.cssText='margin-left:8px;padding:7px 14px;background:#1e1e2e;color:#ccc;border:1px solid #334;border-radius:4px;cursor:pointer;';
  function render(){sentDiv.innerHTML=sentences[idx].s.replace('[MASK]','<span style="background:#14b8a6;color:#fff;padding:1px 6px;border-radius:3px;">[MASK]</span>');result.innerHTML='';}
  render();
  btn.onclick=()=>{const cands=sentences[idx].candidates;result.innerHTML='<b style="color:#14b8a6">상위 5 예측:</b><br>'+cands.map((c,i)=>'<div style="margin:3px 0;display:flex;align-items:center;gap:8px;"><span style="color:'+(i===0?'#22c55e':'#ccc');+';width:50px">'+c.w+'</span><div style="background:#14b8a6;height:8px;width:'+(c.p*200)+'px;border-radius:3px;"></div> '+( c.p*100).toFixed(0)+'%</div>').join('');};
  nxt.onclick=()=>{idx=(idx+1)%sentences.length;render();};
  c.appendChild(sentDiv);c.appendChild(btn);c.appendChild(nxt);c.appendChild(result);
}

function sim186(){
  document.getElementById('simTag').textContent='GPT 계열 언어 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">GPT 자동 회귀 생성</p>';
  const vocab=[{w:'학교',p:0.3},{w:'집',p:0.2},{w:'공원',p:0.15},{w:'도서관',p:0.15},{w:'카페',p:0.1},{w:'병원',p:0.1}];
  const inp=document.createElement('input');inp.value='나는 오늘';inp.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:6px;border-radius:4px;width:180px;font-size:14px;';
  const btn=document.createElement('button');btn.textContent='토큰 생성';btn.style.cssText='margin-left:8px;padding:6px 14px;background:#14b8a6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const probDiv=document.createElement('div');probDiv.style.cssText='margin-top:10px;font-size:13px;';
  function showProbs(){
    probDiv.innerHTML='<b style="color:#14b8a6">다음 토큰 확률:</b><br>'+vocab.map(v=>'<div style="margin:2px 0;display:flex;align-items:center;gap:6px;"><span style="width:55px;color:#ccc;">'+v.w+'</span><div style="background:#14b8a6;height:8px;width:'+(v.p*200)+'px;border-radius:3px;display:inline-block;"></div> '+(v.p*100).toFixed(0)+'%</div>').join('');
  }
  showProbs();
  btn.onclick=()=>{
    const r=Math.random();let cum=0;let picked=vocab[vocab.length-1];for(const v of vocab){cum+=v.p;if(r<cum){picked=v;break;}}
    inp.value=inp.value+' '+picked.w;
    // shuffle probs slightly
    vocab.forEach(v=>{v.p=Math.max(0.05,v.p+(Math.random()-0.5)*0.05);});
    const sum=vocab.reduce((s,v)=>s+v.p,0);vocab.forEach(v=>v.p/=sum);
    showProbs();
  };
  const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;margin:8px 0;flex-wrap:wrap;gap:6px;';
  row.appendChild(inp);row.appendChild(btn);c.appendChild(row);c.appendChild(probDiv);
}

function sim187(){
  document.getElementById('simTag').textContent='문장 임베딩';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">문장 유사도 계산</p>';
  const inp1=document.createElement('input');inp1.value='나는 학교에 간다';inp1.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:6px;border-radius:4px;width:100%;margin-bottom:6px;font-size:13px;';
  const inp2=document.createElement('input');inp2.value='그는 학교에 다닌다';inp2.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:6px;border-radius:4px;width:100%;font-size:13px;';
  const btn=document.createElement('button');btn.textContent='유사도 계산';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#14b8a6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const result=document.createElement('div');result.style.cssText='margin-top:10px;font-size:14px;min-height:40px;';
  function cosineSim(a,b){const common=a.split(' ').filter(w=>b.split(' ').includes(w)).length;const denom=Math.sqrt(a.split(' ').length)*Math.sqrt(b.split(' ').length);return Math.min(common/denom,1);}
  btn.onclick=()=>{
    const sim=cosineSim(inp1.value,inp2.value);const level=sim>0.5?'높음':sim>0.2?'보통':'낮음';const color=sim>0.5?'#22c55e':sim>0.2?'#f59e0b':'#ef4444';
    result.innerHTML='<div>코사인 유사도: <span style="color:'+color+';font-size:20px;font-weight:bold;">'+(sim).toFixed(3)+'</span></div><div style="color:'+color+'">유사도: '+level+'</div>';
  };
  c.appendChild(inp1);c.appendChild(inp2);c.appendChild(btn);c.appendChild(result);
}

function sim188(){
  document.getElementById('simTag').textContent='검색 결합 생성';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">RAG: 검색 + 생성</p>';
  const chunks=['[문서1] 인공지능은 컴퓨터 과학의 한 분야입니다.','[문서2] 머신러닝은 AI의 하위 분야로 데이터에서 학습합니다.','[문서3] 딥러닝은 인공 신경망을 사용하는 방법입니다.'];
  const inp=document.createElement('input');inp.value='AI란 무엇인가?';inp.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:6px;border-radius:4px;width:200px;font-size:13px;';
  const searchBtn=document.createElement('button');searchBtn.textContent='검색';searchBtn.style.cssText='margin-left:8px;padding:6px 14px;background:#14b8a6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const genBtn=document.createElement('button');genBtn.textContent='생성';genBtn.style.cssText='margin-left:8px;padding:6px 14px;background:#22c55e;color:#fff;border:none;border-radius:4px;cursor:pointer;';genBtn.disabled=true;
  const chunkDiv=document.createElement('div');chunkDiv.style.cssText='margin-top:8px;font-size:12px;';
  const genDiv=document.createElement('div');genDiv.style.cssText='margin-top:8px;font-size:13px;color:#ccc;';
  searchBtn.onclick=()=>{chunkDiv.innerHTML='<b style="color:#14b8a6">검색된 문서:</b><br>'+chunks.map(ch=>'<div style="margin:4px 0;padding:5px 8px;background:#1e1e2e;border-left:2px solid #14b8a6;color:#ccc;">'+ch+'</div>').join('');genBtn.disabled=false;};
  genBtn.onclick=()=>{genDiv.innerHTML='<b style="color:#22c55e">생성된 답변:</b><br><div style="padding:8px;background:#1e1e2e;border:1px solid #334;border-radius:4px;margin-top:4px;">인공지능(AI)은 컴퓨터 과학 분야로, 머신러닝과 딥러닝 등을 포함하며 데이터에서 패턴을 학습합니다.</div>';};
  const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;flex-wrap:wrap;gap:4px;';
  row.appendChild(inp);row.appendChild(searchBtn);row.appendChild(genBtn);
  c.appendChild(row);c.appendChild(chunkDiv);c.appendChild(genDiv);
}

function sim189(){
  document.getElementById('simTag').textContent='지시 미세조정';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">지시 조정 전후 비교</p>';
  const prompt='다음 문장을 요약하세요: "인공지능은 다양한 분야에서 활용되고 있습니다."';
  const responses={before:'인공지능... 다양한... 분야... 활용...',after:'인공지능은 여러 분야에서 광범위하게 사용되고 있습니다.'};
  let mode='before';
  const toggle=document.createElement('div');toggle.style.cssText='display:flex;gap:0;margin:10px 0;border-radius:6px;overflow:hidden;border:1px solid #334;';
  ['지시조정 없음','지시조정 있음'].forEach((lbl,i)=>{const btn=document.createElement('button');btn.textContent=lbl;btn.style.cssText='flex:1;padding:7px;border:none;cursor:pointer;font-size:12px;';btn.onclick=()=>{mode=i===0?'before':'after';render();};toggle.appendChild(btn);});
  const promptDiv=document.createElement('div');promptDiv.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:8px;color:#64748b;font-size:12px;margin:6px 0;';promptDiv.textContent='프롬프트: '+prompt;
  const respDiv=document.createElement('div');respDiv.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:10px;font-size:13px;margin-top:6px;min-height:50px;';
  function render(){
    const isAfter=mode==='after';toggle.children[0].style.cssText='flex:1;padding:7px;border:none;cursor:pointer;font-size:12px;background:'+(isAfter?'#1e1e2e':'#14b8a6')+';color:'+(isAfter?'#ccc':'#fff')+';';
    toggle.children[1].style.cssText='flex:1;padding:7px;border:none;cursor:pointer;font-size:12px;background:'+(isAfter?'#14b8a6':'#1e1e2e')+';color:'+(isAfter?'#fff':'#ccc')+';';
    respDiv.innerHTML='<b style="color:'+(isAfter?'#22c55e':'#ef4444')+'">모델 응답:</b><br>'+responses[mode];
  }
  render();c.appendChild(toggle);c.appendChild(promptDiv);c.appendChild(respDiv);
}

function sim190(){
  document.getElementById('simTag').textContent='문맥 내 학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#14b8a6;font-weight:bold">Few-Shot 문맥 내 학습</p>';
  const examples=[{input:'오늘 날씨 정말 좋다!',label:'긍정 😊'},{input:'시험에 떨어져서 너무 슬프다.',label:'부정 😞'}];
  const testCases=['배가 너무 고프다','드디어 합격했어!','내일 소풍 간다'];
  const exBox=document.createElement('div');exBox.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:10px;margin:8px 0;';
  exBox.innerHTML='<b style="color:#14b8a6">Few-Shot 예시:</b><br>'+examples.map(e=>'<div style="margin:3px 0;color:#ccc;font-size:12px;">"'+e.input+'" → <span style="color:#22c55e">'+e.label+'</span></div>').join('');
  const inp=document.createElement('input');inp.value=testCases[0];inp.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:6px;border-radius:4px;width:200px;font-size:13px;';
  const btn=document.createElement('button');btn.textContent='예측';btn.style.cssText='margin-left:8px;padding:6px 14px;background:#14b8a6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const result=document.createElement('p');result.style.cssText='color:#14b8a6;font-size:15px;font-weight:bold;margin-top:8px;min-height:20px;';
  const pos=['합격','소풍','좋','기쁘','행복'];const neg=['고프','슬','힘들','지쳐','없'];
  btn.onclick=()=>{
    const txt=inp.value;const isPos=pos.some(w=>txt.includes(w));const isNeg=neg.some(w=>txt.includes(w));
    result.textContent='예측: '+(isPos?'긍정 😊':isNeg?'부정 😞':'중립 😐');
  };
  const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;flex-wrap:wrap;gap:4px;margin-top:6px;';
  row.appendChild(inp);row.appendChild(btn);
  c.appendChild(exBox);c.appendChild(row);c.appendChild(result);
}


function sim191(){
  document.getElementById('simTag').textContent='확률 생성 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">가우시안 분포 샘플링</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=180;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const muSl=document.createElement('input');muSl.type='range';muSl.min=-30;muSl.max=30;muSl.value=0;muSl.style.cssText='width:100%;margin:2px 0;';
  const sigSl=document.createElement('input');sigSl.type='range';sigSl.min=5;sigSl.max=30;sigSl.value=15;sigSl.style.cssText='width:100%;margin:2px 0;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:12px;';
  const btn=document.createElement('button');btn.textContent='샘플링';btn.style.cssText='padding:6px 14px;background:#f59e0b;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:4px;';
  let samples=[];
  function gauss(x,mu,sig){return Math.exp(-0.5*((x-mu)/sig)**2)/(sig*Math.sqrt(2*Math.PI));}
  function draw(){
    const mu=parseInt(muSl.value)/10,sig=parseInt(sigSl.value)/10;
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,180);
    ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,150);ctx.lineTo(W,150);ctx.stroke();
    ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();
    for(let px=0;px<W;px++){const x=(px/W*6)-3+mu;const y=gauss(x,mu,sig)*60;const cy=150-y*20;px===0?ctx.moveTo(px,cy):ctx.lineTo(px,cy);}ctx.stroke();
    samples.forEach(s=>{const px=(s-mu+3)/6*W;ctx.fillStyle='rgba(245,158,11,0.7)';ctx.beginPath();ctx.arc(px,150,3,0,Math.PI*2);ctx.fill();});
    info.textContent='μ = '+mu.toFixed(1)+', σ = '+sig.toFixed(1)+'  샘플 수: '+samples.length;
  }
  draw();muSl.oninput=()=>{samples=[];draw();};sigSl.oninput=()=>{samples=[];draw();};
  btn.onclick=()=>{
    const mu=parseInt(muSl.value)/10,sig=parseInt(sigSl.value)/10;
    const u1=Math.random(),u2=Math.random();const z=Math.sqrt(-2*Math.log(u1))*Math.cos(2*Math.PI*u2);
    samples.push(mu+sig*z);if(samples.length>50)samples.shift();draw();
  };
  const lbl1=document.createElement('div');lbl1.style.cssText='color:#64748b;font-size:11px;';lbl1.textContent='μ (평균):';
  const lbl2=document.createElement('div');lbl2.style.cssText='color:#64748b;font-size:11px;margin-top:4px;';lbl2.textContent='σ (표준편차):';
  c.appendChild(lbl1);c.appendChild(muSl);c.appendChild(lbl2);c.appendChild(sigSl);c.appendChild(info);c.appendChild(btn);
}

function sim192(){
  document.getElementById('simTag').textContent='변분 오토인코더';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">VAE 잠재 공간 탐색</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=Math.min(W,200);cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const z1Sl=document.createElement('input');z1Sl.type='range';z1Sl.min=-20;z1Sl.max=20;z1Sl.value=0;z1Sl.style.cssText='width:100%;margin:3px 0;';
  const z2Sl=document.createElement('input');z2Sl.type='range';z2Sl.min=-20;z2Sl.max=20;z2Sl.value=0;z2Sl.style.cssText='width:100%;margin:3px 0;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:12px;';
  function draw(){
    const z1=parseInt(z1Sl.value)/10,z2=parseInt(z2Sl.value)/10;
    ctx.fillStyle='#111118';ctx.fillRect(0,0,cv.width,cv.height);
    const cx=cv.width/2,cy=cv.height/2;
    const rx=40+z1*8,ry=40+z2*8;
    const color=`hsl(${(z1*20+180)%360}, 70%, 50%)`;
    ctx.strokeStyle=color;ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(cx+z1*10,cy+z2*10,Math.abs(rx),Math.abs(ry),z1*0.3,0,Math.PI*2);ctx.stroke();
    ctx.fillStyle=color+'44';ctx.fill();
    ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('디코딩된 출력',cx,cy);
    info.textContent='z1='+z1.toFixed(1)+', z2='+z2.toFixed(1);
  }
  draw();z1Sl.oninput=draw;z2Sl.oninput=draw;
  const l1=document.createElement('div');l1.style.cssText='color:#64748b;font-size:11px;';l1.textContent='z₁:';
  const l2=document.createElement('div');l2.style.cssText='color:#64748b;font-size:11px;margin-top:4px;';l2.textContent='z₂:';
  c.appendChild(l1);c.appendChild(z1Sl);c.appendChild(l2);c.appendChild(z2Sl);c.appendChild(info);
}

function sim193(){
  document.getElementById('simTag').textContent='생성적 적대 신경망';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">GAN 학습 시뮬레이션</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=160;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  let genQ=0.1,discA=0.9,iter=0;
  const btn=document.createElement('button');btn.textContent='학습 반복';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#f59e0b;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,160);
    const bw=W/2-20;
    ctx.fillStyle='#22c55e';ctx.fillRect(20,140-genQ*100,bw-5,genQ*100);
    ctx.fillStyle='#ef4444';ctx.fillRect(W/2+15,140-discA*100,bw-5,discA*100);
    ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('생성자 품질',20+bw/2,155);ctx.fillText('판별자 정확도',W/2+15+bw/2,155);
    ctx.fillStyle='#22c55e';ctx.fillText((genQ*100).toFixed(0)+'%',20+bw/2,140-genQ*100-4);
    ctx.fillStyle='#ef4444';ctx.fillText((discA*100).toFixed(0)+'%',W/2+15+bw/2,140-discA*100-4);
    info.textContent='반복 '+iter+'회 | 생성자: '+(genQ*100).toFixed(0)+'%  판별자: '+(discA*100).toFixed(0)+'%';
  }
  draw();
  btn.onclick=()=>{
    if(iter>=20){iter=0;genQ=0.1;discA=0.9;draw();return;}
    genQ=Math.min(genQ+0.04+Math.random()*0.02,0.95);
    discA=Math.max(Math.min(0.9-iter*0.015+Math.random()*0.05,0.95),0.45);
    iter++;draw();if(iter>=20)btn.textContent='초기화';
  };
  c.appendChild(btn);c.appendChild(info);
}

function sim194(){
  document.getElementById('simTag').textContent='확산 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">확산 모델: 노이즈 추가/제거</p>';
  const N=8;const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=N*N*4+20;cv.height=N*N*4+20;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const sl=document.createElement('input');sl.type='range';sl.min=0;sl.max=10;sl.value=0;sl.style.cssText='width:100%;margin:6px 0;';
  let dir='forward';
  const toggle=document.createElement('div');toggle.style.cssText='display:flex;gap:8px;margin-bottom:8px;';
  ['순방향 (노이즈 추가)','역방향 (복원)'].forEach((lbl,i)=>{const btn=document.createElement('button');btn.textContent=lbl;btn.style.cssText='padding:5px 10px;border-radius:4px;border:1px solid #334;background:#1e1e2e;color:#ccc;cursor:pointer;font-size:11px;';btn.onclick=()=>{dir=i===0?'forward':'reverse';sl.value=i===0?0:10;draw();};toggle.appendChild(btn);});
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:12px;';
  const baseImg=Array.from({length:N},(_,r)=>Array.from({length:N},(_,col)=>{const d=Math.hypot(r-3.5,col-3.5);return d<3?200:50;}));
  function draw(){
    const t=parseInt(sl.value)/10;
    const sz=4;const pad=10;
    ctx.fillStyle='#111118';ctx.fillRect(0,0,cv.width,cv.height);
    for(let r=0;r<N;r++)for(let col=0;col<N;col++){
      const base=baseImg[r][col];const noise=(Math.random()*255-127)*t*2;
      const v=Math.max(0,Math.min(255,base*(1-t)+128*t+noise*0.3));
      ctx.fillStyle='rgb('+Math.round(v)+','+Math.round(v*0.8)+','+Math.round(v*0.6)+')';
      ctx.fillRect(pad+col*sz,pad+r*sz,sz-1,sz-1);
    }
    info.textContent='노이즈 수준: '+(t*100).toFixed(0)+'%  단계: '+sl.value+'/10';
  }
  draw();sl.oninput=draw;
  c.insertBefore(toggle,cv);c.appendChild(sl);c.appendChild(info);
}

function sim195(){
  document.getElementById('simTag').textContent='자기회귀 생성 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">자기회귀 픽셀 생성</p>';
  const N=8,sz=28;let filled=0;let animId=null;
  const colors=['#ef4444','#f59e0b','#22c55e','#3b82f6','#a855f7','#06b6d4','#f97316','#84cc16'];
  const canvas=document.createElement('canvas');canvas.width=N*sz;canvas.height=N*sz;c.appendChild(canvas);
  const ctx=canvas.getContext('2d');
  const btn=document.createElement('button');btn.textContent='생성 시작';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#f59e0b;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const grid=Array.from({length:N*N},()=>-1);
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,canvas.width,canvas.height);
    grid.forEach((v,i)=>{
      const r=Math.floor(i/N),col=i%N;
      if(v>=0){ctx.fillStyle=colors[v%colors.length];ctx.fillRect(col*sz+1,r*sz+1,sz-2,sz-2);}
      else{ctx.strokeStyle='#1e1e2e';ctx.strokeRect(col*sz,r*sz,sz,sz);}
    });
  }
  draw();
  btn.onclick=()=>{
    if(animId){clearInterval(animId);animId=null;filled=0;grid.fill(-1);draw();btn.textContent='생성 시작';return;}
    grid.fill(-1);filled=0;
    animId=setInterval(()=>{
      if(filled>=N*N){clearInterval(animId);animId=null;btn.textContent='초기화';return;}
      const prev=filled>0?grid[filled-1]:0;grid[filled]=(prev+Math.floor(Math.random()*3))%colors.length;filled++;draw();
    },60);btn.textContent='중지';
  };
  c.appendChild(btn);
}

function sim196(){
  document.getElementById('simTag').textContent='샘플링 전략';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">온도별 토큰 분포</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=160;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const tokens=['학교','집','공원','카페','병원'];
  const logits=[2.1,1.4,0.8,0.3,-0.5];
  const sl=document.createElement('input');sl.type='range';sl.min=1;sl.max=20;sl.value=10;sl.style.cssText='width:100%;margin:6px 0;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;';
  function softmax(logits,temp){const ex=logits.map(l=>Math.exp(l/temp));const sum=ex.reduce((a,b)=>a+b,0);return ex.map(e=>e/sum);}
  function draw(){
    const temp=parseInt(sl.value)/10;const probs=softmax(logits,temp);
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,160);
    const bw=(W-20)/tokens.length;
    tokens.forEach((t,i)=>{
      const bh=probs[i]*120;const x=10+i*bw;
      ctx.fillStyle='rgba(245,158,11,'+(0.3+probs[i]*0.7)+')';ctx.fillRect(x+2,140-bh,bw-4,bh);
      ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(t,x+bw/2,155);
      ctx.fillText((probs[i]*100).toFixed(1)+'%',x+bw/2,140-bh-4);
    });
    info.textContent='온도 T = '+temp.toFixed(1)+'  ('+(temp<0.5?'결정적':'')+(temp>1.5?'무작위적':'')+(temp>=0.5&&temp<=1.5?'균형':'')+ ')';
  }
  draw();sl.oninput=draw;
  const lbl=document.createElement('div');lbl.style.cssText='color:#64748b;font-size:11px;';lbl.textContent='온도 (T):';
  c.appendChild(lbl);c.appendChild(sl);c.appendChild(info);
}

function sim197(){
  document.getElementById('simTag').textContent='CLIP 류 이미지 텍스트 정렬';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">이미지-텍스트 매칭</p>';
  const images=['🐕','🌲','🚗','🍕'];const texts=['강아지 사진','나무 이미지','자동차 사진','피자 이미지'];
  const correct=[0,1,2,3];let assignment=[-1,-1,-1,-1];let dragging=-1;
  const W=Math.min(c.offsetWidth-20,480);
  const imgRow=document.createElement('div');imgRow.style.cssText='display:flex;gap:8px;margin:8px 0;';
  const txtRow=document.createElement('div');txtRow.style.cssText='display:flex;gap:8px;margin:8px 0;flex-wrap:wrap;';
  const result=document.createElement('p');result.style.cssText='color:#ccc;font-size:13px;min-height:20px;';
  const txtEls=[];
  images.forEach((img,i)=>{const el=document.createElement('div');el.style.cssText='width:60px;height:60px;background:#1e1e2e;border:2px solid #334;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:28px;cursor:pointer;';el.textContent=img;el.dataset.idx=i;imgRow.appendChild(el);});
  texts.forEach((txt,i)=>{const el=document.createElement('div');el.style.cssText='padding:6px 10px;background:#1e1e2e;border:1px solid #334;border-radius:4px;color:#ccc;font-size:12px;cursor:pointer;';el.textContent=txt;el.dataset.idx=i;txtEls.push(el);txtRow.appendChild(el);});
  let selImg=-1;
  imgRow.querySelectorAll('div').forEach(el=>{el.onclick=()=>{selImg=parseInt(el.dataset.idx);imgRow.querySelectorAll('div').forEach(e=>e.style.borderColor='#334');el.style.borderColor='#f59e0b';};});
  txtRow.addEventListener('click',e=>{if(selImg<0)return;const el=e.target.closest('[data-idx]');if(!el)return;const ti=parseInt(el.dataset.idx);assignment[selImg]=ti;el.style.background='#f59e0b33';el.style.borderColor='#f59e0b';selImg=-1;imgRow.querySelectorAll('div').forEach(e=>e.style.borderColor='#334');});
  const scoreBtn=document.createElement('button');scoreBtn.textContent='채점';scoreBtn.style.cssText='padding:6px 14px;background:#f59e0b;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:4px;';
  scoreBtn.onclick=()=>{const ok=assignment.filter((a,i)=>a===correct[i]).length;result.textContent='점수: '+ok+'/'+images.length+'  '+(ok===images.length?'완벽!':'다시 시도해보세요');};
  c.appendChild(imgRow);c.appendChild(txtRow);c.appendChild(scoreBtn);c.appendChild(result);
  const hint=document.createElement('p');hint.style.cssText='color:#64748b;font-size:12px;';hint.textContent='이미지 클릭 후 텍스트 클릭으로 매칭';c.appendChild(hint);
}

function sim198(){
  document.getElementById('simTag').textContent='비전 트랜스포머';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">ViT: 패치 토큰화</p>';
  const N=8,pN=2,sz=32;let selPatch=-1;
  const canvas=document.createElement('canvas');canvas.width=N*sz;canvas.height=N*sz;c.appendChild(canvas);
  const ctx=canvas.getContext('2d');
  const colors=['#ef4444','#3b82f6','#22c55e','#f59e0b'];
  const patches=Math.floor(N/pN)**2;
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let r=0;r<N;r++)for(let col=0;col<N;col++){
      const pi=Math.floor(r/pN)*(N/pN)+Math.floor(col/pN);
      ctx.fillStyle=pi===selPatch?colors[pi%4]+'aa':colors[pi%4]+'33';
      ctx.fillRect(col*sz,r*sz,sz,sz);
    }
    for(let r=0;r<N;r+=pN)for(let col=0;col<N;col+=pN){
      ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.strokeRect(col*sz,r*sz,pN*sz,pN*sz);
    }
    if(selPatch>=0){const pr=Math.floor(selPatch/(N/pN))*pN,pc=(selPatch%(N/pN))*pN;ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.strokeRect(pc*sz,pr*sz,pN*sz,pN*sz);}
  }
  draw();
  const info=document.createElement('p');info.style.cssText='color:#f59e0b;font-size:13px;min-height:20px;margin-top:6px;';info.textContent='패치를 클릭하세요 (총 '+patches+'개 패치)';
  canvas.onclick=e=>{const r2=canvas.getBoundingClientRect();const col=Math.floor((e.clientX-r2.left)/sz),row=Math.floor((e.clientY-r2.top)/sz);const pi=Math.floor(row/pN)*(N/pN)+Math.floor(col/pN);selPatch=pi===selPatch?-1:pi;draw();info.textContent=selPatch>=0?'패치 토큰 #'+selPatch+' 선택됨':'패치를 클릭하세요';};
  c.appendChild(info);
}

function sim199(){
  document.getElementById('simTag').textContent='시각 언어 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">시각 언어 모델 Q&A</p>';
  const image={emoji:'🐕',desc:'강아지 사진'};
  const qa={'이름':'이 강아지의 이름은 알 수 없습니다.','색':'갈색 강아지입니다.','종':'골든 리트리버로 보입니다.','몇 마리':'한 마리의 강아지가 있습니다.','어디':'야외에 있는 것으로 보입니다.'};
  const imgDiv=document.createElement('div');imgDiv.style.cssText='font-size:60px;text-align:center;margin:8px 0;padding:12px;background:#1e1e2e;border-radius:8px;';imgDiv.textContent=image.emoji;
  const inp=document.createElement('input');inp.value='무슨 동물인가?';inp.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:6px;border-radius:4px;width:200px;font-size:13px;';
  const btn=document.createElement('button');btn.textContent='답변';btn.style.cssText='margin-left:8px;padding:6px 14px;background:#f59e0b;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const result=document.createElement('div');result.style.cssText='margin-top:10px;font-size:13px;color:#ccc;min-height:30px;';
  btn.onclick=()=>{
    const q=inp.value;let ans='강아지(개)입니다.';
    for(const [key,val] of Object.entries(qa)){if(q.includes(key)){ans=val;break;}}
    result.innerHTML='<b style="color:#f59e0b">답변:</b> '+ans;
  };
  const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;flex-wrap:wrap;gap:4px;margin-top:6px;';
  row.appendChild(inp);row.appendChild(btn);
  c.appendChild(imgDiv);c.appendChild(row);c.appendChild(result);
}

function sim200(){
  document.getElementById('simTag').textContent='문서 이해 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">문서 레이아웃 이해</p>';
  const regions=[
    {label:'제목',text:'2024년 AI 보고서',color:'#f59e0b',x:5,y:5,w:90,h:12},
    {label:'본문',text:'인공지능 기술이 빠르게 발전하고 있습니다. 다양한 분야에서...',color:'#3b82f6',x:5,y:22,w:90,h:35},
    {label:'표',text:'데이터 | 값\n------|-----\nA | 100\nB | 200',color:'#22c55e',x:5,y:62,w:90,h:25},
  ];
  let sel=-1;
  const W=Math.min(c.offsetWidth-20,480);
  const docDiv=document.createElement('div');docDiv.style.cssText='background:#fff;border-radius:6px;padding:8px;position:relative;height:180px;cursor:pointer;';
  regions.forEach((r,i)=>{
    const el=document.createElement('div');el.style.cssText='position:absolute;left:'+r.x+'%;top:'+r.y+'%;width:'+r.w+'%;height:'+r.h+'%;border:2px solid '+(sel===i?r.color:'#ddd')+';border-radius:3px;background:'+(sel===i?r.color+'22':'transparent')+';padding:2px;overflow:hidden;font-size:10px;color:#333;cursor:pointer;transition:all 0.2s;';
    el.textContent=r.text;
    el.onclick=e=>{e.stopPropagation();sel=sel===i?-1:i;render();};
    el.dataset.idx=i;docDiv.appendChild(el);
  });
  const info=document.createElement('div');info.style.cssText='margin-top:8px;font-size:13px;color:#ccc;min-height:30px;';
  function render(){
    docDiv.querySelectorAll('[data-idx]').forEach((el,i)=>{const r=regions[i];el.style.borderColor=sel===i?r.color:'#ddd';el.style.background=sel===i?r.color+'22':'transparent';});
    info.innerHTML=sel>=0?'<b style="color:'+regions[sel].color+'">레이블: '+regions[sel].label+'</b>  영역이 분류되었습니다.':'문서 영역을 클릭해 분류하세요';
  }
  render();
  c.appendChild(docDiv);c.appendChild(info);
}

function sim201(){
  document.getElementById('simTag').textContent='표 이해 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">표 셀 이해</p>';
  const headers=['이름','나이','직업'];const data=[['김철수',28,'개발자'],['이영희',32,'디자이너'],['박민준',25,'학생']];
  let sel=null;
  const tbl=document.createElement('table');tbl.style.cssText='border-collapse:collapse;font-size:13px;';
  const hdr=document.createElement('tr');hdr.innerHTML='<th></th>'+headers.map(h=>'<th style="border:1px solid #334;padding:8px 12px;color:#f59e0b;background:#1e1e2e;">'+h+'</th>').join('');
  tbl.appendChild(hdr);
  const info=document.createElement('div');info.style.cssText='margin-top:10px;font-size:13px;color:#ccc;min-height:30px;';
  data.forEach((row,r)=>{
    const tr=document.createElement('tr');
    tr.innerHTML='<td style="border:1px solid #334;padding:8px;color:#64748b;font-size:11px;background:#1e1e2e;">R'+(r+1)+'</td>';
    row.forEach((cell,col)=>{
      const td=document.createElement('td');td.style.cssText='border:1px solid #334;padding:8px 12px;color:#ccc;background:#1e1e2e;cursor:pointer;';
      td.textContent=cell;
      td.onclick=()=>{sel={r,col,val:cell};render();};
      tr.appendChild(td);
    });
    tbl.appendChild(tr);
  });
  function render(){
    tbl.querySelectorAll('td[style*="cursor"]').forEach((td,idx)=>{const r2=Math.floor(idx/3),c2=idx%3;const active=sel&&sel.r===r2&&sel.col===c2;td.style.background=active?'#f59e0b22':'#1e1e2e';td.style.borderColor=active?'#f59e0b':'#334';});
    info.innerHTML=sel?'<b style="color:#f59e0b">셀 [R'+(sel.r+1)+', '+headers[sel.col]+']</b> = '+sel.val:'셀을 클릭하세요';
  }
  c.appendChild(tbl);c.appendChild(info);
}

function sim202(){
  document.getElementById('simTag').textContent='코드 생성 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">AI 코드 생성</p>';
  const tasks={정렬:{desc:'리스트 정렬하기',code:'def sort_list(lst):\n    return sorted(lst)\n\n# 예시\nprint(sort_list([3,1,4,1,5]))'},합계:{desc:'숫자 합계 구하기',code:'def sum_list(lst):\n    return sum(lst)\n\n# 예시\nprint(sum_list([1,2,3,4,5]))  # 15'},최댓값:{desc:'최댓값 찾기',code:'def find_max(lst):\n    return max(lst)\n\n# 예시\nprint(find_max([3,7,1,9,2]))  # 9'}};
  const sel=document.createElement('select');sel.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:5px;border-radius:4px;';
  sel.innerHTML=Object.keys(tasks).map(k=>'<option>'+k+'</option>').join('');
  const btn=document.createElement('button');btn.textContent='코드 생성';btn.style.cssText='margin-left:8px;padding:6px 14px;background:#f59e0b;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const code=document.createElement('pre');code.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:12px;color:#22c55e;font-family:monospace;font-size:12px;margin-top:8px;white-space:pre-wrap;min-height:80px;';code.textContent='';
  btn.onclick=()=>{const t=tasks[sel.value];code.textContent=t.code;};
  const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;gap:4px;';
  row.appendChild(sel);row.appendChild(btn);c.appendChild(row);c.appendChild(code);
}

function sim203(){
  document.getElementById('simTag').textContent='음성 인식 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">파형 그리기 → CTC 디코딩</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=120;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  let pts=[],drawing=false;
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,120);
    ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,60);ctx.lineTo(W,60);ctx.stroke();
    if(pts.length>1){ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();pts.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));ctx.stroke();}
    ctx.fillStyle='#64748b';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(pts.length>10?'파형 그려짐 - 디코딩 가능':'마우스 드래그로 파형을 그리세요',W/2,110);
  }
  draw();
  cv.onmousedown=e=>{drawing=true;const r=cv.getBoundingClientRect();pts=[{x:e.clientX-r.left,y:e.clientY-r.top}];draw();};
  cv.onmousemove=e=>{if(!drawing)return;const r=cv.getBoundingClientRect();pts.push({x:e.clientX-r.left,y:e.clientY-r.top});draw();};
  cv.onmouseup=()=>drawing=false;
  const btn=document.createElement('button');btn.textContent='CTC 디코딩';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#f59e0b;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const result=document.createElement('p');result.style.cssText='color:#22c55e;font-size:16px;font-weight:bold;margin-top:8px;min-height:24px;';
  btn.onclick=()=>{if(pts.length<10){result.textContent='먼저 파형을 그리세요';result.style.color='#ef4444';return;}result.style.color='#22c55e';result.textContent='디코딩 결과: "안녕하세요"';};
  c.appendChild(btn);c.appendChild(result);
}

function sim204(){
  document.getElementById('simTag').textContent='영상 생성 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">키프레임 보간</p>';
  const N=8,sz=24;
  const W=Math.min(c.offsetWidth-20,480);
  function makeGrid(seed){return Array.from({length:N},(_,r)=>Array.from({length:N},(_,col)=>{const h=(seed+r*20+col*15)%360;return'hsl('+h+', 60%, 50%)';}));}
  const gridA=makeGrid(0),gridB=makeGrid(120);
  const sl=document.createElement('input');sl.type='range';sl.min=0;sl.max=100;sl.value=0;sl.style.cssText='width:100%;margin:6px 0;';
  const cvA=document.createElement('canvas');cvA.width=N*sz;cvA.height=N*sz;
  const cvC=document.createElement('canvas');cvC.width=N*sz;cvC.height=N*sz;
  const cvB=document.createElement('canvas');cvB.width=N*sz;cvB.height=N*sz;
  function drawGrid(canvas,grid){const ct=canvas.getContext('2d');grid.forEach((row,r)=>row.forEach((col2,col)=>{ct.fillStyle=col2;ct.fillRect(col*sz,r*sz,sz-1,sz-1);}));}
  function lerp(h1,h2,t){const match1=h1.match(/hsl\((\d+)/),match2=h2.match(/hsl\((\d+)/);if(!match1||!match2)return h1;const angle=parseInt(match1[1])*(1-t)+parseInt(match2[1])*t;return'hsl('+angle+', 60%, 50%)';}
  function drawInterp(){const t=parseInt(sl.value)/100;const ct=cvC.getContext('2d');for(let r=0;r<N;r++)for(let col=0;col<N;col++){ct.fillStyle=lerp(gridA[r][col],gridB[r][col],t);ct.fillRect(col*sz,r*sz,sz-1,sz-1);}}
  drawGrid(cvA,gridA);drawGrid(cvB,gridB);drawInterp();
  const row=document.createElement('div');row.style.cssText='display:flex;gap:8px;align-items:flex-start;flex-wrap:wrap;';
  function labeledCanvas(cv,lbl){const d=document.createElement('div');const l=document.createElement('p');l.style.cssText='color:#64748b;font-size:11px;text-align:center;margin:0 0 3px;';l.textContent=lbl;d.appendChild(l);d.appendChild(cv);return d;}
  row.appendChild(labeledCanvas(cvA,'키프레임 A'));row.appendChild(labeledCanvas(cvC,'보간 결과'));row.appendChild(labeledCanvas(cvB,'키프레임 B'));
  c.appendChild(row);
  const lbl=document.createElement('div');lbl.style.cssText='color:#64748b;font-size:11px;margin-top:6px;';lbl.textContent='보간 t:';
  c.appendChild(lbl);c.appendChild(sl);
  sl.oninput=drawInterp;
}

function sim205(){
  document.getElementById('simTag').textContent='월드 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">월드 모델 예측</p>';
  const N=5;let agentPos={r:2,c:2};let predicted=null;
  const W=Math.min(c.offsetWidth-20,480);
  const sz=Math.min((W-20)/N,60);
  const cv=document.createElement('canvas');cv.width=N*sz;cv.height=N*sz;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const goal={r:0,c:4};
  function draw(pred){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,cv.width,cv.height);
    for(let r=0;r<N;r++)for(let col=0;col<N;col++){
      const isAgent=r===agentPos.r&&col===agentPos.c;const isGoal=r===goal.r&&col===goal.c;const isPred=pred&&r===pred.r&&col===pred.c;
      ctx.fillStyle=isGoal?'#22c55e':isPred?'rgba(245,158,11,0.3)':'#1e1e2e';ctx.fillRect(col*sz+1,r*sz+1,sz-2,sz-2);
      ctx.strokeStyle='#334';ctx.strokeRect(col*sz,r*sz,sz,sz);
      if(isAgent){ctx.fillStyle='#f59e0b';ctx.font=Math.floor(sz*0.5)+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🤖',col*sz+sz/2,r*sz+sz/2);}
      if(isGoal&&!isAgent){ctx.fillStyle='#22c55e';ctx.font=Math.floor(sz*0.5)+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🏆',col*sz+sz/2,r*sz+sz/2);}
      if(isPred&&!isAgent){ctx.fillStyle='#f59e0b44';ctx.fillRect(col*sz+1,r*sz+1,sz-2,sz-2);ctx.fillStyle='#f59e0b';ctx.font='9px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('예측',col*sz+sz/2,r*sz+sz/2);}
    }
  }
  draw(null);
  const dirs=[['↑',{r:-1,c:0}],['↓',{r:1,c:0}],['←',{r:0,c:-1}],['→',{r:0,c:1}]];
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;';
  dirs.forEach(([lbl,d])=>{
    const btn=document.createElement('button');btn.textContent=lbl;btn.style.cssText='padding:8px 16px;background:#1e1e2e;color:#ccc;border:1px solid #334;border-radius:4px;cursor:pointer;font-size:18px;';
    btn.onclick=()=>{
      const nr=agentPos.r+d.r,nc=agentPos.c+d.c;
      if(nr<0||nr>=N||nc<0||nc>=N)return;
      predicted={r:nr,c:nc};draw(predicted);
      setTimeout(()=>{agentPos={r:nr,c:nc};draw(null);},600);
    };
    btnRow.appendChild(btn);
  });
  c.appendChild(btnRow);
  const hint=document.createElement('p');hint.style.cssText='color:#64748b;font-size:12px;margin-top:6px;';hint.textContent='이동 전 월드 모델이 다음 상태를 예측합니다 (노란 영역)';c.appendChild(hint);
}

function sim206(){
  document.getElementById('simTag').textContent='기초 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#f59e0b;font-weight:bold">기초 모델 = 사전학습 + 미세조정</p>';
  const tasks={번역:{output:'안녕하세요 → Hello',color:'#3b82f6'},감성분석:{output:'리뷰 → 긍정 😊',color:'#22c55e'},요약:{output:'긴 글 → 핵심 요약',color:'#a855f7'},코드생성:{output:'설명 → Python 코드',color:'#f59e0b'}};
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=120;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  function draw(selTask){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,120);
    ctx.fillStyle='#1e1e2e';ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(W*0.05,20,W*0.35,60,8);ctx.fill();ctx.stroke();
    ctx.fillStyle='#f59e0b';ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.fillText('사전학습',W*0.05+W*0.175,46);
    ctx.fillStyle='#ccc';ctx.font='9px sans-serif';ctx.fillText('대규모 데이터',W*0.05+W*0.175,60);ctx.fillText('인터넷 텍스트 등',W*0.05+W*0.175,72);
    ctx.strokeStyle='#334';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(W*0.4,50);ctx.lineTo(W*0.55,50);ctx.stroke();ctx.fillStyle='#334';ctx.beginPath();ctx.moveTo(W*0.55,44);ctx.lineTo(W*0.62,50);ctx.lineTo(W*0.55,56);ctx.fill();
    ctx.fillStyle='#1e1e2e';ctx.strokeStyle=selTask?tasks[selTask].color:'#334';ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(W*0.6,20,W*0.35,60,8);ctx.fill();ctx.stroke();
    ctx.fillStyle=selTask?tasks[selTask].color:'#64748b';ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.fillText('미세조정',W*0.6+W*0.175,46);
    ctx.fillStyle='#ccc';ctx.font='9px sans-serif';ctx.fillText(selTask||'태스크 선택',W*0.6+W*0.175,62);
  }
  draw(null);
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;';
  const output=document.createElement('p');output.style.cssText='color:#ccc;font-size:13px;min-height:20px;margin-top:6px;';
  Object.entries(tasks).forEach(([name,info])=>{
    const btn=document.createElement('button');btn.textContent=name;btn.style.cssText='padding:5px 12px;background:#1e1e2e;border:1px solid '+info.color+';border-radius:4px;cursor:pointer;color:'+info.color+';font-size:12px;';
    btn.onclick=()=>{draw(name);output.innerHTML='<span style="color:'+info.color+'">'+name+'</span> → '+info.output;};
    btnRow.appendChild(btn);
  });
  c.appendChild(btnRow);c.appendChild(output);
}

function sim207(){
  document.getElementById('simTag').textContent='마르코프 결정 과정';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">3×3 그리드 월드 MDP</p>';
  const N=3;const rewards=[[-1,0,-1],[0,10,0],[-1,0,-1]];
  const policy=[['→','→','↓'],['↑','★','↓'],['↑','←','↑']];
  let showPolicy=false;let selCell=null;
  const W=Math.min(c.offsetWidth-20,480);const sz=Math.min((W-20)/N,80);
  const cv=document.createElement('canvas');cv.width=N*sz;cv.height=N*sz;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;min-height:20px;margin-top:6px;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,cv.width,cv.height);
    for(let r=0;r<N;r++)for(let col=0;col<N;col++){
      const isGoal=r===1&&col===1;const isSel=selCell&&selCell.r===r&&selCell.c===col;
      ctx.fillStyle=isGoal?'#14532d':isSel?'#1e1e2e':'#1a1a2e';ctx.fillRect(col*sz+1,r*sz+1,sz-2,sz-2);ctx.strokeStyle=isSel?'#ef4444':'#334';ctx.lineWidth=isSel?2:1;ctx.strokeRect(col*sz,r*sz,sz,sz);
      ctx.fillStyle='#ccc';ctx.font=sz*0.25+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('R='+rewards[r][col],col*sz+sz/2,r*sz+sz*0.35);
      if(showPolicy){ctx.fillStyle=isGoal?'#22c55e':'#ef4444';ctx.font='bold '+sz*0.4+'px sans-serif';ctx.fillText(policy[r][col],col*sz+sz/2,r*sz+sz*0.65);}
    }
  }
  draw();
  cv.onclick=e=>{const r2=cv.getBoundingClientRect();const col=Math.floor((e.clientX-r2.left)/sz),row=Math.floor((e.clientY-r2.top)/sz);if(row>=0&&row<N&&col>=0&&col<N){selCell={r:row,c:col};draw();info.textContent='상태 ('+row+','+col+'): 보상 = '+rewards[row][col];}};
  const btn=document.createElement('button');btn.textContent='정책 보기';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick=()=>{showPolicy=!showPolicy;draw();btn.textContent=showPolicy?'정책 숨기기':'정책 보기';};
  c.appendChild(info);c.appendChild(btn);
}

function sim208(){
  document.getElementById('simTag').textContent='벨만 방정식';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">벨만 방정식 반복 계산</p>';
  const states=['s1','s2','s3','s4'];const rewards=[0,0,0,10];const trans=[[0.8,0.2,0,0],[0,0.7,0.3,0],[0,0,0.6,0.4],[0,0,0,1]];
  const gsl=document.createElement('input');gsl.type='range';gsl.min=50;gsl.max=99;gsl.value=90;gsl.style.cssText='width:120px;margin:0 6px;';
  const glbl=document.createElement('span');glbl.style.cssText='color:#ccc;font-size:13px;';glbl.textContent='γ=0.90';
  let V=[0,0,0,0];let iter=0;
  const info=document.createElement('div');info.style.cssText='font-size:13px;color:#ccc;margin-top:8px;';
  const btn=document.createElement('button');btn.textContent='반복 계산';btn.style.cssText='margin-top:6px;padding:7px 16px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function render(){
    info.innerHTML='<b style="color:#ef4444">V(s) 값:</b><br>'+states.map((s,i)=>'<div style="margin:3px 0"><span style="color:#f59e0b">'+s+'</span>: <span style="color:#22c55e">'+V[i].toFixed(2)+'</span></div>').join('');
  }
  gsl.oninput=()=>{glbl.textContent='γ='+( parseInt(gsl.value)/100).toFixed(2);};
  render();
  btn.onclick=()=>{
    const gamma=parseInt(gsl.value)/100;
    const newV=V.map((v,i)=>rewards[i]+gamma*trans[i].reduce((s,p,j)=>s+p*V[j],0));
    V=newV;iter++;render();
    if(iter>=20)btn.textContent='수렴';
  };
  const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;margin:6px 0;';
  row.appendChild(document.createTextNode('γ:'));row.appendChild(gsl);row.appendChild(glbl);
  c.appendChild(row);c.appendChild(info);c.appendChild(btn);
}

function sim209(){
  document.getElementById('simTag').textContent='시간차 학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">TD 학습 업데이트</p>';
  let V=5,iter=0;const alpha=0.1;
  const box=document.createElement('div');box.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:8px;padding:14px;color:#ccc;font-size:13px;';
  const btn=document.createElement('button');btn.textContent='업데이트';btn.style.cssText='margin-top:10px;padding:7px 16px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function render(){
    const R=5+Math.floor(Math.random()*5);const Vnext=V+Math.random()*0.5;const delta=(R+0.9*Vnext)-V;const newV=V+alpha*delta;
    box.innerHTML='<div>V(s) = <span style="color:#f59e0b;font-weight:bold">'+V.toFixed(2)+'</span></div><div style="margin-top:6px">실제 보상 R = <span style="color:#22c55e">'+R+'</span></div><div style="margin-top:4px">V(s\') = <span style="color:#ccc">'+Vnext.toFixed(2)+'</span></div><div style="margin-top:6px">TD 오차 δ = R + γV(s\') - V(s) = <span style="color:#ef4444;font-weight:bold">'+delta.toFixed(2)+'</span></div><div style="margin-top:6px">새 V(s) = '+V.toFixed(2)+' + α·δ = <span style="color:#22c55e;font-weight:bold">'+newV.toFixed(2)+'</span></div>';
    return newV;
  }
  box.innerHTML='<div>V(s) = <span style="color:#f59e0b">'+V.toFixed(2)+'</span></div><div style="color:#64748b;margin-top:6px">업데이트 버튼을 클릭하세요</div>';
  btn.onclick=()=>{V=render();iter++;if(iter>=10)btn.textContent='수렴 근접';};
  c.appendChild(box);c.appendChild(btn);
}

function sim210(){
  document.getElementById('simTag').textContent='Q 러닝';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">Q-러닝 4×4 그리드</p>';
  const N=4;let agent={r:0,c:0};const goal={r:3,c:3};
  const Q=Array.from({length:N*N},()=>({U:0,D:0,L:0,R:0}));
  let steps=0;
  const W=Math.min(c.offsetWidth-20,480);const sz=Math.min((W-20)/N,60);
  const cv=document.createElement('canvas');cv.width=N*sz;cv.height=N*sz;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const info=document.createElement('div');info.style.cssText='color:#ccc;font-size:12px;margin-top:6px;min-height:30px;';
  function stateIdx(){return agent.r*N+agent.c;}
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,cv.width,cv.height);
    for(let r=0;r<N;r++)for(let col=0;col<N;col++){
      const isGoal=r===goal.r&&col===goal.c;const isAgent=r===agent.r&&col===agent.c;
      ctx.fillStyle=isGoal?'#14532d':isAgent?'#1e1e2e':'#1a1a2e';ctx.fillRect(col*sz+1,r*sz+1,sz-2,sz-2);ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.strokeRect(col*sz,r*sz,sz,sz);
      if(isGoal){ctx.fillStyle='#22c55e';ctx.font=sz*0.4+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🏆',col*sz+sz/2,r*sz+sz/2);}
      if(isAgent){ctx.fillStyle='#ef4444';ctx.font=sz*0.4+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🤖',col*sz+sz/2,r*sz+sz/2);}
    }
  }
  draw();
  const dirs=[['↑','U',{r:-1,c:0}],['↓','D',{r:1,c:0}],['←','L',{r:0,c:-1}],['→','R',{r:0,c:1}]];
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;';
  dirs.forEach(([lbl,key,d])=>{
    const btn=document.createElement('button');btn.textContent=lbl;btn.style.cssText='padding:8px 16px;background:#1e1e2e;color:#ccc;border:1px solid #334;border-radius:4px;cursor:pointer;font-size:18px;';
    btn.onclick=()=>{
      const nr=agent.r+d.r,nc=agent.c+d.c;
      if(nr<0||nr>=N||nc<0||nc>=N)return;
      const si=stateIdx();const R=(nr===goal.r&&nc===goal.c)?10:-1;
      const maxQ=Math.max(...Object.values(Q[nr*N+nc]));
      Q[si][key]+=0.1*(R+0.9*maxQ-Q[si][key]);
      agent={r:nr,c:nc};steps++;draw();
      const qv=Q[si][key];info.innerHTML='이동: '+lbl+' | R='+R+' | Q[s]['+key+']=<span style="color:#ef4444">'+qv.toFixed(2)+'</span> | 스텝: '+steps;
      if(agent.r===goal.r&&agent.c===goal.c){info.innerHTML+='<br><span style="color:#22c55e">목표 도달!</span>';agent={r:0,c:0};draw();}
    };
    btnRow.appendChild(btn);
  });
  c.appendChild(info);c.appendChild(btnRow);
}

function sim211(){
  document.getElementById('simTag').textContent='정책 경사';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">3-팔 밴딧 강화학습</p>';
  const arms=[{name:'팔 1',true_r:0.3,reward:[]},{name:'팔 2',true_r:0.6,reward:[]},{name:'팔 3',true_r:0.8,reward:[]}];
  let probs=[1/3,1/3,1/3];const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=120;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:8px;margin-top:8px;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:12px;min-height:18px;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,120);
    const bw=(W-20)/arms.length;
    arms.forEach((arm,i)=>{
      const bh=probs[i]*90;ctx.fillStyle='rgba(239,68,68,'+(0.2+probs[i]*0.8)+')';ctx.fillRect(10+i*bw+4,110-bh,bw-8,bh);
      ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(arm.name,10+i*bw+bw/2,118);
      ctx.fillText((probs[i]*100).toFixed(1)+'%',10+i*bw+bw/2,107-bh);
    });
  }
  draw();
  arms.forEach((arm,i)=>{
    const btn=document.createElement('button');btn.textContent=arm.name+' 당기기';btn.style.cssText='padding:6px 12px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;';
    btn.onclick=()=>{
      const r=Math.random()<arm.true_r?1:0;arm.reward.push(r);
      const total=arms.reduce((s,a)=>s+a.reward.reduce((s2,v)=>s2+v,0),0);
      const soft=arms.map(a=>{const avg=a.reward.length?a.reward.reduce((s,v)=>s+v,0)/a.reward.length:0.33;return Math.exp(avg*3);});
      const sum=soft.reduce((a,b)=>a+b,0);probs=soft.map(s=>s/sum);draw();
      info.textContent=arm.name+': '+(r?'성공 +1':'실패 0')+'  정책 업데이트됨';
    };
    btnRow.appendChild(btn);
  });
  c.appendChild(btnRow);c.appendChild(info);
}

function sim212(){
  document.getElementById('simTag').textContent='행위자 비평가';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">Actor-Critic 구조</p>';
  let actorProb=0.5,criticVal=0;let step=0;
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=160;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  function draw(phase){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,160);
    const boxes=[{x:W*0.05,y:30,w:W*0.35,h:90,label:'행위자 (Actor)',sub:'정책 π(a|s)',color:'#3b82f6',val:'P(행동)='+actorProb.toFixed(2)},{x:W*0.6,y:30,w:W*0.35,h:90,label:'비평가 (Critic)',sub:'가치 V(s)',color:'#ef4444',val:'V(s)='+criticVal.toFixed(2)}];
    boxes.forEach((b,i)=>{
      ctx.fillStyle='#1e1e2e';ctx.strokeStyle=phase===i?b.color:'#334';ctx.lineWidth=phase===i?2.5:1;ctx.beginPath();ctx.roundRect(b.x,b.y,b.w,b.h,8);ctx.fill();ctx.stroke();
      ctx.fillStyle=b.color;ctx.font='bold 12px sans-serif';ctx.textAlign='center';ctx.fillText(b.label,b.x+b.w/2,b.y+24);
      ctx.fillStyle='#64748b';ctx.font='10px sans-serif';ctx.fillText(b.sub,b.x+b.w/2,b.y+42);
      ctx.fillStyle='#ccc';ctx.font='bold 13px sans-serif';ctx.fillText(b.val,b.x+b.w/2,b.y+65);
    });
    if(phase>=0){ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(W*0.4,75);ctx.lineTo(W*0.6,75);ctx.stroke();ctx.setLineDash([]);}
  }
  draw(-1);
  const btn=document.createElement('button');btn.textContent='행동 선택';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:12px;min-height:18px;margin-top:6px;';
  const phases=['행위자: 행동 선택 중','비평가: 보상 평가 중'];
  btn.onclick=()=>{
    if(step%2===0){actorProb=Math.min(Math.max(actorProb+Math.random()*0.1-0.05,0.1),0.9);draw(0);info.textContent=phases[0];}
    else{criticVal+=Math.random()*0.5;draw(1);info.textContent=phases[1];}
    step++;
  };
  c.appendChild(btn);c.appendChild(info);
}

function sim213(){
  document.getElementById('simTag').textContent='심층 Q 네트워크';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">경험 리플레이 버퍼</p>';
  const buffer=Array.from({length:5},(_,i)=>({s:'s'+i,a:['←','→','↑','↓'][i%4],r:Math.floor(Math.random()*10)-2,sn:'s'+(i+1)}));
  let highlighted=new Set();
  const tbl=document.createElement('table');tbl.style.cssText='border-collapse:collapse;font-size:12px;width:100%;';
  tbl.innerHTML='<tr style="color:#ef4444;background:#1e1e2e"><th style="border:1px solid #334;padding:6px">상태</th><th style="border:1px solid #334;padding:6px">행동</th><th style="border:1px solid #334;padding:6px">보상</th><th style="border:1px solid #334;padding:6px">다음 상태</th></tr>';
  const rows=[];
  buffer.forEach((t,i)=>{const tr=document.createElement('tr');tr.innerHTML='<td style="border:1px solid #334;padding:6px;text-align:center;color:#ccc">'+t.s+'</td><td style="border:1px solid #334;padding:6px;text-align:center;color:#ccc">'+t.a+'</td><td style="border:1px solid #334;padding:6px;text-align:center;color:'+(t.r>0?'#22c55e':'#ef4444')+'">'+t.r+'</td><td style="border:1px solid #334;padding:6px;text-align:center;color:#ccc">'+t.sn+'</td>';rows.push(tr);tbl.appendChild(tr);});
  const btn=document.createElement('button');btn.textContent='샘플링';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const qBtn=document.createElement('button');qBtn.textContent='Q 업데이트';qBtn.style.cssText='margin-left:8px;padding:7px 14px;background:#1e1e2e;color:#ccc;border:1px solid #334;border-radius:4px;cursor:pointer;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:12px;min-height:18px;margin-top:6px;';
  btn.onclick=()=>{
    highlighted=new Set();const n=Math.floor(Math.random()*2)+2;while(highlighted.size<n)highlighted.add(Math.floor(Math.random()*5));
    rows.forEach((r,i)=>{r.style.background=highlighted.has(i)?'rgba(239,68,68,0.2)':'transparent';});
    info.textContent='미니배치 '+n+'개 샘플 선택됨';
  };
  qBtn.onclick=()=>{if(highlighted.size===0){info.textContent='먼저 샘플링하세요';return;}info.textContent='선택된 샘플로 Q-네트워크 업데이트 완료';};
  c.appendChild(tbl);const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;margin-top:6px;';btnRow.appendChild(btn);btnRow.appendChild(qBtn);c.appendChild(btnRow);c.appendChild(info);
}

function sim214(){
  document.getElementById('simTag').textContent='몬테카를로 나무 탐색';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">MCTS: 4단계 반복</p>';
  const phases=[{name:'선택',desc:'UCB1 기준으로 유망한 노드 선택',color:'#3b82f6'},{name:'확장',desc:'선택된 노드에서 새 자식 노드 생성',color:'#22c55e'},{name:'시뮬레이션',desc:'랜덤 플레이아웃으로 결과 추정',color:'#f59e0b'},{name:'역전파',desc:'결과를 루트까지 역방향으로 전파',color:'#ef4444'}];
  let cur=0,visits=[4,2,1,3,1,1],wins=[2,1,0,2,0,1];
  const W=Math.min(c.offsetWidth-20,480);const cv=document.createElement('canvas');cv.width=W;cv.height=140;c.appendChild(cv);const ctx=cv.getContext('2d');
  const phaseDiv=document.createElement('div');phaseDiv.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:10px;margin-top:8px;font-size:13px;color:#ccc;min-height:40px;';
  function drawTree(phase){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,140);
    const nodes=[{x:W/2,y:20,parent:-1},{x:W*0.25,y:70,parent:0},{x:W*0.5,y:70,parent:0},{x:W*0.75,y:70,parent:0},{x:W*0.15,y:120,parent:1},{x:W*0.35,y:120,parent:1}];
    nodes.forEach((n,i)=>{if(n.parent>=0){const p=nodes[n.parent];ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(n.x,n.y);ctx.stroke();}});
    nodes.forEach((n,i)=>{const active=(phase===0&&i<3)||(phase===1&&i>=4)||(phase===2&&i>=4)||(phase===3&&i<3);ctx.fillStyle=active?phases[Math.min(phase,3)].color:'#1e1e2e';ctx.strokeStyle=active?phases[Math.min(phase,3)].color:'#334';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(n.x,n.y,14,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillStyle='#fff';ctx.font='9px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(wins[i]+'/'+visits[i],n.x,n.y);});
  }
  drawTree(-1);
  const btn=document.createElement('button');btn.textContent='MCTS 반복';btn.style.cssText='margin-top:6px;padding:7px 16px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick=()=>{drawTree(cur);const ph=phases[cur];phaseDiv.innerHTML='<b style="color:'+ph.color+'">단계 '+(cur+1)+': '+ph.name+'</b><br>'+ph.desc;cur=(cur+1)%4;if(cur===0){visits=visits.map(v=>v+Math.floor(Math.random()*2));wins=wins.map((w,i)=>Math.min(w+Math.floor(Math.random()*2),visits[i]));}};
  c.appendChild(btn);c.appendChild(phaseDiv);
}

function sim215(){
  document.getElementById('simTag').textContent='모방 학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">모방 학습: 전문가 궤적 복사</p>';
  const expert=['←','←','↑','↑','→','→','↓'];
  let agentStep=0;
  const W=Math.min(c.offsetWidth-20,480);const N=5;const sz=Math.min((W-20)/N,50);
  const cv=document.createElement('canvas');cv.width=N*sz;cv.height=N*sz;c.appendChild(cv);const ctx=cv.getContext('2d');
  const expDiv=document.createElement('div');expDiv.style.cssText='margin:8px 0;font-size:13px;color:#ccc;';
  expDiv.innerHTML='전문가 궤적: <span style="font-family:monospace;color:#22c55e">'+expert.join(' ')+'</span>';
  const agentDiv=document.createElement('div');agentDiv.style.cssText='font-size:13px;color:#ccc;min-height:20px;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,cv.width,cv.height);
    for(let r=0;r<N;r++)for(let col=0;col<N;col++){ctx.fillStyle='#1a1a2e';ctx.fillRect(col*sz+1,r*sz+1,sz-2,sz-2);ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.strokeRect(col*sz,r*sz,sz,sz);}
  }
  draw();
  const btn=document.createElement('button');btn.textContent='모방 학습';btn.style.cssText='padding:7px 16px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick=()=>{
    if(agentStep>=expert.length){agentStep=0;draw();agentDiv.textContent='';btn.textContent='모방 학습';return;}
    const action=expert[agentStep];
    agentDiv.innerHTML='에이전트 행동 '+( agentStep+1)+'/'+expert.length+': <span style="color:#ef4444;font-size:18px">'+action+'</span>  (전문가 복사)';
    agentStep++;
    if(agentStep>=expert.length)btn.textContent='초기화';
  };
  c.appendChild(expDiv);c.appendChild(agentDiv);c.appendChild(btn);
}

function sim216(){
  document.getElementById('simTag').textContent='인간 피드백 강화학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">RLHF: 선호 응답 선택</p>';
  const pairs=[
    {q:'AI의 위험성은?',a:'AI가 위험하다.',b:'AI는 적절한 안전 조치와 함께 개발되어야 합니다. 잠재적 위험에는 편향, 개인정보 침해 등이 있습니다.'},
    {q:'Python 리스트 정렬 방법은?',a:'sorted() 씁니다.',b:'Python에서 리스트를 정렬하려면 sorted(list) 또는 list.sort()를 사용합니다. sorted()는 새 리스트를 반환합니다.'},
  ];
  let idx=0;let score={A:0,B:0};
  const qDiv=document.createElement('div');qDiv.style.cssText='color:#ccc;font-size:13px;margin:8px 0;font-weight:bold;';
  const colDiv=document.createElement('div');colDiv.style.cssText='display:flex;gap:10px;';
  const aDiv=document.createElement('div');aDiv.style.cssText='flex:1;background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:8px;font-size:12px;color:#ccc;cursor:pointer;';
  const bDiv=document.createElement('div');bDiv.style.cssText='flex:1;background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:8px;font-size:12px;color:#ccc;cursor:pointer;';
  const reward=document.createElement('p');reward.style.cssText='color:#ccc;font-size:12px;margin-top:8px;min-height:18px;';
  function render(){
    const p=pairs[idx%pairs.length];qDiv.textContent='Q: '+p.q;
    aDiv.innerHTML='<div style="color:#64748b;font-size:10px;margin-bottom:4px">응답 A:</div>'+p.a;
    bDiv.innerHTML='<div style="color:#64748b;font-size:10px;margin-bottom:4px">응답 B:</div>'+p.b;
    aDiv.style.borderColor='#334';bDiv.style.borderColor='#334';
  }
  aDiv.onclick=()=>{score.A++;aDiv.style.borderColor='#22c55e';bDiv.style.borderColor='#334';reward.textContent='보상 모델: A 선호 +1  (점수 A:'+score.A+' B:'+score.B+')  다음 질문으로 진행하세요';idx++;setTimeout(render,1200);};
  bDiv.onclick=()=>{score.B++;bDiv.style.borderColor='#22c55e';aDiv.style.borderColor='#334';reward.textContent='보상 모델: B 선호 +1  (점수 A:'+score.A+' B:'+score.B+')  다음 질문으로 진행하세요';idx++;setTimeout(render,1200);};
  render();colDiv.appendChild(aDiv);colDiv.appendChild(bDiv);c.appendChild(qDiv);c.appendChild(colDiv);c.appendChild(reward);
}

function sim217(){
  document.getElementById('simTag').textContent='규칙 기반 안전 장치';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">콘텐츠 필터링 규칙</p>';
  const rules=[{name:'욕설 필터',words:['욕설1','나쁜말'],block:true},{name:'개인정보',words:['주민번호','신용카드'],block:true},{name:'위험 정보',words:['폭발물','해킹'],block:true}];
  const inp=document.createElement('input');inp.value='안녕하세요';inp.style.cssText='background:#1e1e2e;color:#ccc;border:1px solid #334;padding:6px;border-radius:4px;width:200px;font-size:13px;';
  const btn=document.createElement('button');btn.textContent='필터링';btn.style.cssText='margin-left:8px;padding:6px 14px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const result=document.createElement('div');result.style.cssText='margin-top:10px;font-size:13px;min-height:50px;';
  const ruleDiv=document.createElement('div');ruleDiv.style.cssText='margin-top:8px;font-size:12px;color:#64748b;';
  ruleDiv.innerHTML='<b>규칙 목록:</b> '+rules.map(r=>'<span style="border:1px solid #334;border-radius:3px;padding:2px 6px;margin:2px;display:inline-block;">'+r.name+'</span>').join('');
  btn.onclick=()=>{
    const txt=inp.value;let blocked=null;
    for(const rule of rules){if(rule.words.some(w=>txt.includes(w))){blocked=rule;break;}}
    if(blocked){result.innerHTML='<span style="color:#ef4444;font-weight:bold">🚫 BLOCK</span><br>규칙 위반: <span style="color:#f59e0b">'+blocked.name+'</span>';}
    else{result.innerHTML='<span style="color:#22c55e;font-weight:bold">✅ ALLOW</span><br>모든 규칙 통과';}
  };
  const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;flex-wrap:wrap;gap:4px;margin:8px 0;';
  row.appendChild(inp);row.appendChild(btn);c.appendChild(row);c.appendChild(result);c.appendChild(ruleDiv);
}

function sim218(){
  document.getElementById('simTag').textContent='도구 사용 모델';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">AI 에이전트 도구 사용</p>';
  const question='오늘 날짜에서 100일 후 서울 날씨 예측 결과는?';
  const tools={계산기:{icon:'🔢',result:'오늘(2026-06-22) + 100일 = 2026-10-01',color:'#3b82f6'},검색:{icon:'🔍',result:'서울 2026년 10월 날씨 평균: 15-20°C, 맑음',color:'#22c55e'},달력:{icon:'📅',result:'2026-10-01 = 목요일 (추석 연휴 근처)',color:'#f59e0b'}};
  const qDiv=document.createElement('div');qDiv.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:8px;color:#ccc;font-size:13px;margin:8px 0;';qDiv.textContent='질문: '+question;
  const toolRow=document.createElement('div');toolRow.style.cssText='display:flex;gap:8px;flex-wrap:wrap;margin:8px 0;';
  const log=document.createElement('div');log.style.cssText='font-size:12px;color:#ccc;min-height:60px;';
  let usedTools=[];
  Object.entries(tools).forEach(([name,tool])=>{
    const btn=document.createElement('button');btn.textContent=tool.icon+' '+name;btn.style.cssText='padding:7px 14px;background:#1e1e2e;border:1px solid '+tool.color+';border-radius:4px;cursor:pointer;color:'+tool.color+';font-size:13px;';
    btn.onclick=()=>{
      usedTools.push(name);btn.style.background=tool.color+'22';
      log.innerHTML+='\n<div style="margin:4px 0;padding:4px 8px;border-left:2px solid '+tool.color+';"><b style="color:'+tool.color+'">'+tool.icon+' '+name+':</b> '+tool.result+'</div>';
      if(usedTools.length>=3){log.innerHTML+='<div style="margin:8px 0;padding:6px;background:#1e1e2e;border:1px solid #22c55e;border-radius:4px;color:#22c55e">최종 답변: 2026년 10월 1일(목) 서울은 15-20°C의 맑은 날씨가 예상됩니다.</div>';}
    };
    toolRow.appendChild(btn);
  });
  c.appendChild(qDiv);c.appendChild(toolRow);c.appendChild(log);
}

function sim219(){
  document.getElementById('simTag').textContent='계획 실행 관찰 루프';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">ReAct: 생각→행동→관찰</p>';
  const steps=[
    {phase:'생각',content:'근처 한식 레스토랑을 찾아야 한다. 검색 도구를 사용해야겠다.',color:'#a855f7'},
    {phase:'행동',content:'도구 호출: 검색("근처 한식 레스토랑")',color:'#f59e0b'},
    {phase:'관찰',content:'결과: 맛나한식(★4.5, 500m), 서울식당(★4.2, 800m), 고향의맛(★4.0, 1.2km)',color:'#22c55e'},
    {phase:'생각',content:'맛나한식이 평점도 높고 가장 가깝다. 이 곳을 추천하겠다.',color:'#a855f7'},
    {phase:'행동',content:'도구 호출: 길찾기("맛나한식")',color:'#f59e0b'},
    {phase:'관찰',content:'길찾기 완료: 도보 7분, 직진 후 우회전',color:'#22c55e'},
  ];
  let cur=0;
  const log=document.createElement('div');log.style.cssText='max-height:200px;overflow-y:auto;';
  const btn=document.createElement('button');btn.textContent='생각→행동→관찰';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick=()=>{
    if(cur>=steps.length){log.innerHTML='';cur=0;btn.textContent='생각→행동→관찰';return;}
    const s=steps[cur];
    const div=document.createElement('div');div.style.cssText='margin:4px 0;padding:6px 8px;border-left:3px solid '+s.color+';background:#1e1e2e;border-radius:0 4px 4px 0;';
    div.innerHTML='<b style="color:'+s.color+'">'+s.phase+':</b> <span style="color:#ccc;font-size:12px;">'+s.content+'</span>';
    log.appendChild(div);log.scrollTop=log.scrollHeight;cur++;
    if(cur>=steps.length)btn.textContent='초기화';
  };
  c.appendChild(log);c.appendChild(btn);
}

function sim220(){
  document.getElementById('simTag').textContent='자기 점검 루프';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">자기 점검 및 수정</p>';
  const initial='서울은 일본의 수도입니다.';const critique='오류: 서울은 한국의 수도입니다. 일본의 수도는 도쿄입니다.';const revised='서울은 대한민국의 수도이자 최대 도시입니다.';
  const box=document.createElement('div');box.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:10px;font-size:13px;color:#ccc;min-height:50px;';
  box.textContent=initial;
  const checkBtn=document.createElement('button');checkBtn.textContent='자기 점검';checkBtn.style.cssText='padding:7px 14px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:8px;';
  const fixBtn=document.createElement('button');fixBtn.textContent='수정';fixBtn.style.cssText='margin-left:8px;padding:7px 14px;background:#22c55e;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:8px;';fixBtn.disabled=true;
  checkBtn.onclick=()=>{box.innerHTML='<div style="color:#ccc">'+initial+'</div><div style="margin-top:8px;padding:6px;background:#7f1d1d22;border-left:3px solid #ef4444;"><b style="color:#ef4444">비평:</b> '+critique+'</div>';fixBtn.disabled=false;};
  fixBtn.onclick=()=>{box.innerHTML='<div style="color:#22c55e;font-weight:bold">수정된 응답:</div><div style="color:#ccc;margin-top:4px;">'+revised+'</div>';fixBtn.disabled=true;};
  c.appendChild(box);const btnRow=document.createElement('div');btnRow.appendChild(checkBtn);btnRow.appendChild(fixBtn);c.appendChild(btnRow);
}

function sim221(){
  document.getElementById('simTag').textContent='코드 실행 에이전트';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">코드 실행 에이전트</p>';
  const code=document.createElement('textarea');code.value='# 1부터 10까지 합계\ntotal = 0\nfor i in range(1, 11):\n    total += i\nprint(total)';
  code.style.cssText='width:100%;height:100px;background:#1e1e2e;color:#22c55e;border:1px solid #334;border-radius:4px;padding:8px;font-family:monospace;font-size:12px;resize:vertical;box-sizing:border-box;';
  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:8px;margin-top:6px;';
  const runBtn=document.createElement('button');runBtn.textContent='실행';runBtn.style.cssText='padding:6px 14px;background:#22c55e;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const fixBtn=document.createElement('button');fixBtn.textContent='버그 수정';fixBtn.style.cssText='padding:6px 14px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const output=document.createElement('div');output.style.cssText='margin-top:8px;background:#0a0a0f;border:1px solid #334;border-radius:4px;padding:8px;font-family:monospace;font-size:13px;min-height:40px;';
  runBtn.onclick=()=>{output.innerHTML='<span style="color:#22c55e">&gt;&gt;&gt; 실행 중...</span><br><span style="color:#f59e0b">출력: 55</span><br><span style="color:#64748b">Process finished with exit code 0</span>';};
  fixBtn.onclick=()=>{code.value='# 버그 수정됨: range(1, 11)로 수정\ntotal = sum(range(1, 11))\nprint(f"합계: {total}")';output.innerHTML='<span style="color:#22c55e">코드 수정 완료</span>';};
  btnRow.appendChild(runBtn);btnRow.appendChild(fixBtn);c.appendChild(code);c.appendChild(btnRow);c.appendChild(output);
}

function sim222(){
  document.getElementById('simTag').textContent='다중 에이전트 조정';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">다중 에이전트 메시지 패싱</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=160;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const agents=[{name:'계획자',x:W*0.15,y:70,color:'#3b82f6'},{name:'실행자',x:W*0.5,y:70,color:'#22c55e'},{name:'비평가',x:W*0.85,y:70,color:'#ef4444'}];
  const msgs=[[0,1,'계획 수립'],[1,2,'실행 결과'],[2,0,'피드백'],[0,1,'개선된 계획']];
  let step=-1;
  function draw(s){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,160);
    agents.forEach(a=>{ctx.fillStyle='#1e1e2e';ctx.strokeStyle=a.color;ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(a.x-42,a.y-24,84,48,8);ctx.fill();ctx.stroke();ctx.fillStyle=a.color;ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.fillText(a.name,a.x,a.y-6);ctx.fillStyle='#64748b';ctx.font='9px sans-serif';ctx.fillText('Agent',a.x,a.y+8);});
    if(s>=0&&s<msgs.length){const m=msgs[s];const from=agents[m[0]],to=agents[m[1]];ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(from.x,from.y);ctx.lineTo(to.x,to.y);ctx.stroke();ctx.fillStyle='#f59e0b';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText(m[2],(from.x+to.x)/2,(from.y+to.y)/2-8);}
  }
  draw(-1);
  const btn=document.createElement('button');btn.textContent='조율 시작';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:12px;min-height:18px;margin-top:4px;';
  btn.onclick=()=>{step=(step+1)%msgs.length;draw(step);const m=msgs[step];info.textContent=agents[m[0]].name+' → '+agents[m[1]].name+': "'+m[2]+'"';};
  c.appendChild(btn);c.appendChild(info);
}

function sim223(){
  document.getElementById('simTag').textContent='MLOps';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">MLOps 파이프라인</p>';
  const stages=[{name:'데이터',icon:'🗃️',details:'수집, 전처리, 검증\n데이터 품질: 98.2%'},{name:'훈련',icon:'🏋️',details:'분산 학습, 하이퍼파라미터 튜닝\n에포크: 50/50'},{name:'평가',icon:'📊',details:'정확도: 94.3%\nF1: 0.943'},{name:'배포',icon:'🚀',details:'Docker 컨테이너\nAPI 엔드포인트 생성'},{name:'모니터링',icon:'📡',details:'레이턴시: 45ms\n드리프트 감지: 정상'}];
  let sel=-1;
  const W=Math.min(c.offsetWidth-20,480);const cv=document.createElement('canvas');cv.width=W;cv.height=80;c.appendChild(cv);const ctx=cv.getContext('2d');
  const info=document.createElement('div');info.style.cssText='background:#1e1e2e;border:1px solid #334;border-radius:6px;padding:10px;margin-top:8px;font-size:12px;color:#ccc;min-height:40px;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,80);const bw=(W-20)/stages.length;
    stages.forEach((s,i)=>{const x=10+i*bw;ctx.fillStyle=sel===i?'#ef4444':'#1e1e2e';ctx.strokeStyle='#ef4444';ctx.lineWidth=1.5;ctx.beginPath();ctx.roundRect(x+2,10,bw-4,54,6);ctx.fill();ctx.stroke();ctx.font='16px sans-serif';ctx.textAlign='center';ctx.fillText(s.icon,x+bw/2,36);ctx.fillStyle=sel===i?'#fff':'#ccc';ctx.font='9px sans-serif';ctx.fillText(s.name,x+bw/2,60);if(i<stages.length-1){ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x+bw-1,37);ctx.lineTo(x+bw+3,37);ctx.stroke();}});
  }
  draw();
  cv.onclick=e=>{const r=cv.getBoundingClientRect();const bw=(W-20)/stages.length;const i=Math.floor((e.clientX-r.left-10)/bw);if(i>=0&&i<stages.length){sel=i;draw();info.innerHTML='<b style="color:#ef4444">'+stages[i].name+'</b><br><pre style="color:#ccc;font-size:11px;margin:4px 0;white-space:pre-wrap;">'+stages[i].details+'</pre>';}};
  c.appendChild(info);const hint=document.createElement('p');hint.style.cssText='color:#64748b;font-size:11px;margin-top:4px;';hint.textContent='단계를 클릭해 세부 정보를 확인하세요';c.appendChild(hint);
}

function sim224(){
  document.getElementById('simTag').textContent='분산 학습';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">데이터 병렬 분산 학습</p>';
  const W=Math.min(c.offsetWidth-20,480);const cv=document.createElement('canvas');cv.width=W;cv.height=180;c.appendChild(cv);const ctx=cv.getContext('2d');
  const workers=[{name:'Worker 1',color:'#3b82f6'},{name:'Worker 2',color:'#22c55e'},{name:'Worker 3',color:'#f59e0b'},{name:'Worker 4',color:'#a855f7'}];
  let phase=0;
  const phases=['대기 중','데이터 샤드 분배','그래디언트 계산','그래디언트 집계','파라미터 업데이트'];
  const btn=document.createElement('button');btn.textContent='학습 시작';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#ef4444;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;min-height:20px;margin-top:4px;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,180);
    const bw=(W-40)/workers.length;
    workers.forEach((w,i)=>{
      const x=20+i*bw;const active=phase>0&&phase<phases.length-1;
      ctx.fillStyle='#1e1e2e';ctx.strokeStyle=w.color;ctx.lineWidth=1.5;ctx.beginPath();ctx.roundRect(x+4,20,bw-8,100,6);ctx.fill();ctx.stroke();
      ctx.fillStyle=w.color;ctx.font='bold 10px sans-serif';ctx.textAlign='center';ctx.fillText(w.name,x+bw/2,44);
      if(phase>=2){ctx.fillStyle='#64748b';ctx.font='9px sans-serif';ctx.fillText('샤드 '+(i+1),x+bw/2,62);ctx.fillText('처리 중',x+bw/2,76);}
      if(phase>=3){ctx.fillStyle='#22c55e';ctx.font='9px sans-serif';ctx.fillText('∇G='+( 0.1+Math.random()*0.2).toFixed(3),x+bw/2,95);}
    });
    if(phase>=3){ctx.strokeStyle='#f59e0b';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(W*0.1,70);ctx.lineTo(W*0.5,140);ctx.lineTo(W*0.9,70);ctx.stroke();ctx.fillStyle='#f59e0b';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText('집계 서버',W*0.5,155);}
    info.textContent='단계: '+phases[Math.min(phase,phases.length-1)];
  }
  draw();
  btn.onclick=()=>{phase=(phase+1)%phases.length;draw();if(phase===0)btn.textContent='학습 시작';else if(phase===phases.length-1){btn.textContent='초기화';}};
  c.appendChild(btn);c.appendChild(info);
}

function sim225(){
  document.getElementById('simTag').textContent='설명 가능 AI';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">SHAP 특징 중요도</p>';
  const W=Math.min(c.offsetWidth-20,480);const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);const ctx=cv.getContext('2d');
  const features=[{name:'나이',val:0.35,color:'#ef4444'},{name:'소득',val:0.28,color:'#ef4444'},{name:'신용점수',val:0.22,color:'#22c55e'},{name:'부채비율',val:-0.18,color:'#3b82f6'},{name:'직업',val:0.12,color:'#22c55e'},{name:'거주기간',val:-0.08,color:'#3b82f6'}];
  let sel=-1;const info=document.createElement('p');info.style.cssText='color:#ccc;font-size:13px;min-height:30px;margin-top:6px;';
  const descs=['나이가 많을수록 신용대출 승인에 긍정적 영향','소득이 높을수록 승인 가능성 상승','좋은 신용점수는 승인 가능성을 높임','부채비율이 높으면 승인 가능성 감소','안정적 직업은 승인에 유리','단기 거주자는 신용 리스크 증가'];
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    ctx.strokeStyle='#334';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(W/2,10);ctx.lineTo(W/2,190);ctx.stroke();
    ctx.fillStyle='#64748b';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText('← 부정',W*0.25,10);ctx.fillText('긍정 →',W*0.75,10);
    const bh=26;features.forEach((f,i)=>{
      const y=20+i*bh;const bw=Math.abs(f.val)*(W*0.45);const x=f.val>=0?W/2:W/2-bw;const isSel=sel===i;
      ctx.fillStyle=isSel?f.color:f.color+'77';ctx.fillRect(x,y+2,bw,bh-4);
      if(isSel){ctx.strokeStyle=f.color;ctx.lineWidth=2;ctx.strokeRect(x,y+2,bw,bh-4);}
      ctx.fillStyle='#ccc';ctx.font='10px sans-serif';ctx.textAlign=f.val>=0?'right':'left';ctx.fillText(f.name,f.val>=0?W/2-4:W/2+4,y+bh/2+4);
      ctx.fillStyle=f.color;ctx.textAlign=f.val>=0?'left':'right';ctx.fillText((f.val>0?'+':'')+f.val.toFixed(2),f.val>=0?x+bw+4:x-4,y+bh/2+4);
    });
  }
  draw();
  cv.onclick=e=>{const r=cv.getBoundingClientRect();const i=Math.floor((e.clientY-r.top-20)/26);if(i>=0&&i<features.length){sel=i===sel?-1:i;draw();info.innerHTML=sel>=0?'<b style="color:'+features[sel].color+'">'+features[sel].name+'</b>: '+descs[sel]:'특징 바를 클릭해 설명을 보세요';}};
  c.appendChild(info);const hint=document.createElement('p');hint.style.cssText='color:#64748b;font-size:11px;';hint.textContent='(예: 대출 승인 모델 SHAP 값)';c.appendChild(hint);
}

function sim226(){
  document.getElementById('simTag').textContent='인간 지능';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#ef4444;font-weight:bold">인간 vs AI: 어느 쪽이 우세?</p>';
  const tasks=[{name:'창의적 글쓰기',h:'인간 우위',a:'AI 우위',default:'인간 우위'},{name:'체스/바둑',h:'인간 우위',a:'AI 우위',default:'AI 우위'},{name:'공감 & 감정',h:'인간 우위',a:'AI 우위',default:'인간 우위'},{name:'빅데이터 분석',h:'인간 우위',a:'AI 우위',default:'AI 우위'},{name:'상황 맥락 이해',h:'인간 우위',a:'AI 우위',default:'협력'},{name:'반복 작업',h:'인간 우위',a:'AI 우위',default:'AI 우위'},{name:'의사 결정',h:'인간 우위',a:'AI 우위',default:'협력'},{name:'언어 번역',h:'인간 우위',a:'AI 우위',default:'AI 우위'}];
  const choices=tasks.map(t=>t.default);
  const tally={human:0,ai:0,collab:0};
  const tallyDiv=document.createElement('div');tallyDiv.style.cssText='display:flex;gap:10px;margin-top:10px;font-size:13px;flex-wrap:wrap;';
  function updateTally(){tally.human=choices.filter(c=>c==='인간 우위').length;tally.ai=choices.filter(c=>c==='AI 우위').length;tally.collab=choices.filter(c=>c==='협력').length;tallyDiv.innerHTML='<span style="color:#22c55e">인간 우위: '+tally.human+'</span> <span style="color:#3b82f6">AI 우위: '+tally.ai+'</span> <span style="color:#f59e0b">협력: '+tally.collab+'</span>';}
  const list=document.createElement('div');list.style.cssText='display:flex;flex-direction:column;gap:5px;';
  tasks.forEach((t,i)=>{
    const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;gap:6px;flex-wrap:wrap;';
    const lbl=document.createElement('span');lbl.textContent=t.name;lbl.style.cssText='width:110px;color:#ccc;font-size:12px;';
    const opts=['인간 우위','AI 우위','협력'];const colors=['#22c55e','#3b82f6','#f59e0b'];
    opts.forEach((opt,j)=>{
      const btn=document.createElement('button');btn.textContent=opt;
      btn.style.cssText='padding:3px 8px;font-size:11px;border-radius:4px;border:1px solid #334;cursor:pointer;background:'+(choices[i]===opt?colors[j]:'#1e1e2e')+';color:'+(choices[i]===opt?'#fff':'#aaa')+';';
      btn.onclick=()=>{choices[i]=opt;row.querySelectorAll('button').forEach((b,k)=>{b.style.background=choices[i]===opts[k]?colors[k]:'#1e1e2e';b.style.color=choices[i]===opts[k]?'#fff':'#aaa';});updateTally();};
      row.appendChild(btn);
    });
    row.insertBefore(lbl,row.firstChild);list.appendChild(row);
  });
  updateTally();c.appendChild(list);c.appendChild(tallyDiv);
}

