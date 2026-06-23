// F: Data & Networks (86-99)
function sim86() { document.getElementById('simTag').textContent = 'Database'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Organized data with queries</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Tables | Rows | Columns<br>ACID properties</div></div>'; }
function sim87() { document.getElementById('simTag').textContent = 'SQL'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Structured Query Language</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px;font-family:monospace">SELECT * FROM users WHERE age > 18</div></div>'; }
function sim88() { document.getElementById('simTag').textContent = 'Indexing'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Speed up queries</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">B-tree | Hash index</div></div>'; }
function sim89() { document.getElementById('simTag').textContent = 'Networking'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Computers communicate</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">TCP/IP | Packets | Routing</div></div>'; }
function sim90() { document.getElementById('simTag').textContent = 'OSI Model'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">7 layers of communication</p><button class="sim-btn" style="font-size:0.7rem">Physical</button><button class="sim-btn" style="font-size:0.7rem">Link</button><button class="sim-btn" style="font-size:0.7rem">Network</button><button class="sim-btn" style="font-size:0.7rem">Transport</button></div>'; }
function sim91() { document.getElementById('simTag').textContent = 'HTTP'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Web protocol</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">GET | POST | PUT | DELETE<br>Request-Response</div></div>'; }
function sim92() { document.getElementById('simTag').textContent = 'Encryption'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Secure communication</p><button class="sim-btn">AES</button><button class="sim-btn">RSA</button><button class="sim-btn">HTTPS</button></div>'; }
function sim93() { document.getElementById('simTag').textContent = 'Hashing'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Map data to fixed size</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">MD5 | SHA-256<br>One-way function</div></div>'; }
function sim94() { document.getElementById('simTag').textContent = 'Compression'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Reduce data size</p><button class="sim-btn">ZIP</button><button class="sim-btn">GZIP</button><button class="sim-btn">JPEG</button></div>'; }
function sim95() { document.getElementById('simTag').textContent = 'Cloud'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Computing over internet</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">IaaS | PaaS | SaaS</div></div>'; }
function sim96() { document.getElementById('simTag').textContent = 'API'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Application interface</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">RESTful endpoints<br>JSON | XML</div></div>'; }
function sim97() { document.getElementById('simTag').textContent = 'Web Search'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Index & rank pages</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Crawling | Indexing | Ranking</div></div>'; }
function sim98() { document.getElementById('simTag').textContent = 'PageRank'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Link-based ranking algorithm</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Google\'s innovation<br>Eigenvalue computation</div></div>'; }
function sim99() { document.getElementById('simTag').textContent = 'Information Retrieval'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Find relevant documents</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">TF-IDF | Vector space model</div></div>'; }

(function() {
  if (!window.SIM_MAP) window.SIM_MAP = {};
  for (let i = 86; i <= 99; i++) {
    const name = 'sim' + i;
    if (typeof window[name] === 'function') {
      window.SIM_MAP[i] = window[name];
    }
  }
})();




