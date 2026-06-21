
function sim151(){
  document.getElementById('simTag').textContent='주성분 분석';
  const c=document.getElementById('simContainer');
  c.innerHTML='<p style="color:#3b82f6;font-weight:bold">PCA: 주성분 축 시각화</p>';
  const W=Math.min(c.offsetWidth-20,480);
  const cv=document.createElement('canvas');cv.width=W;cv.height=200;c.appendChild(cv);
  const ctx=cv.getContext('2d');
  const pts=Array.from({length:20},()=>{const t=Math.random();return{x:0.3+t*0.5+Math.random()*0.08-0.04,y:0.2+t*0.5+Math.random()*0.08-0.04};});
  let shown=false;
  const btn=document.createElement('button');btn.textContent='PCA 실행';btn.style.cssText='margin-top:8px;padding:7px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer;';
  function draw(){
    ctx.fillStyle='#111118';ctx.fillRect(0,0,W,200);
    pts.forEach(p=>{ctx.fillStyle='#3b82f6';ctx.beginPath();ctx.arc(p.x*W,p.y*200,4,0,Math.PI*2);ctx.fill();});
    if(shown){
      ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;
      ctx.beginPath();ctx.moveTo(0.15*W,0.1*200);ctx.lineTo(0.9*W,0.9*200);ctx.stroke();
      ctx.fillStyle='#f59e0b';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('PC1 (최대 분산)',W*0.55,90);
      ctx.strokeStyle='#64748b';ctx.lineWidth=1;ctx.setLineDash([4,4]);
      ctx.beginPath();ctx.moveTo(0.9*W,0.1*200);ctx.lineTo(0.15*W,0.9*200);ctx.stroke();ctx.setLineDash([]);
      ctx.fillStyle='#64748b';ctx.font='11px sans-serif';ctx.fillText('PC2',W*0.3,150);
    }
  }
  draw();
  btn.onclick=()=>{shown=!shown;draw();btn.textContent=shown?'원래 보기':'PCA 실행';};
  c.appendChild(btn);
}
