
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
