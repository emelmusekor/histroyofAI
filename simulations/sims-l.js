// L: Generative Models & Multimodal (191-206)
function sim191() { document.getElementById('simTag').textContent = 'Diffusion Model'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Gradually denoise</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Reverse process</div></div>'; }
function sim192() { document.getElementById('simTag').textContent = 'Score Matching'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Match score function</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">∇log p(x)</div></div>'; }
function sim193() { document.getElementById('simTag').textContent = 'Latent Variable'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Hidden representation</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">z → x generation</div></div>'; }
function sim194() { document.getElementById('simTag').textContent = 'Flow Model'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Invertible transformation</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Normalizing flows</div></div>'; }
function sim195() { document.getElementById('simTag').textContent = 'Vision-Language'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">CLIP, etc</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Image-text alignment</div></div>'; }
function sim196() { document.getElementById('simTag').textContent = 'Multimodal'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Multiple data types</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Image + Text + Audio</div></div>'; }
function sim197() { document.getElementById('simTag').textContent = 'Text-to-Image'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">DALL-E, Stable Diffusion</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Generate images from text</div></div>'; }
function sim198() { document.getElementById('simTag').textContent = 'Video Model'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">3D convolution</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Temporal information</div></div>'; }
function sim199() { document.getElementById('simTag').textContent = 'Audio Processing'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Speech & music</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Spectrogram | MFCC</div></div>'; }
function sim200() { document.getElementById('simTag').textContent = 'Prompt Engineering'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Design effective prompts</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">In-context learning</div></div>'; }
function sim201() { document.getElementById('simTag').textContent = 'In-Context Learning'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Few-shot via examples</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">No fine-tuning</div></div>'; }
function sim202() { document.getElementById('simTag').textContent = 'Chain-of-Thought'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Reasoning steps</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Intermediate reasoning</div></div>'; }
function sim203() { document.getElementById('simTag').textContent = 'Foundation Model'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Large pre-trained model</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Fine-tune for tasks</div></div>'; }
function sim204() { document.getElementById('simTag').textContent = 'Instruction Tuning'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Follow instructions</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Task diversity</div></div>'; }
function sim205() { document.getElementById('simTag').textContent = 'Constitutional AI'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Align to principles</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Rule-based constraints</div></div>'; }
function sim206() { document.getElementById('simTag').textContent = 'Mixture of Experts'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Sparse scaling</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Router selects experts</div></div>'; }

(function() {
  if (!window.SIM_MAP) window.SIM_MAP = {};
  for (let i = 191; i <= 206; i++) {
    const name = 'sim' + i;
    if (typeof window[name] === 'function') {
      window.SIM_MAP[i] = window[name];
    }
  }
})();




