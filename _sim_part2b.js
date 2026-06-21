
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
