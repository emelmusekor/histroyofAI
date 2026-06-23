// K: NLP & Transformers (175-190)
function sim175() { document.getElementById('simTag').textContent = 'Tokenization'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Split text into tokens</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">"Hello world" → ["Hello", "world"]</div></div>'; }
function sim176() { document.getElementById('simTag').textContent = 'Word Embedding'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Words as vectors</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15pt">Word2Vec | GloVe | FastText</div></div>'; }
function sim177() { document.getElementById('simTag').textContent = 'Language Model'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Predict next token</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">P(word | context)</div></div>'; }
function sim178() { document.getElementById('simTag').textContent = 'N-gram'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Contiguous sequences</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Bigram | Trigram | N-gram</div></div>'; }
function sim179() { document.getElementById('simTag').textContent = 'Bag of Words'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Word frequency count</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Loses word order</div></div>'; }
function sim180() { document.getElementById('simTag').textContent = 'TF-IDF'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Term importance</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Frequency × Inverse Doc Frequency</div></div>'; }
function sim181() { document.getElementById('simTag').textContent = 'Seq2Seq'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Sequence to Sequence</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Encoder-Decoder | Attention</div></div>'; }
function sim182() { document.getElementById('simTag').textContent = 'Transformer'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Self-attention architecture</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">"Attention is All You Need"</div></div>'; }
function sim183() { document.getElementById('simTag').textContent = 'Self-Attention'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Relate tokens to each other</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Multi-head attention</div></div>'; }
function sim184() { document.getElementById('simTag').textContent = 'BERT'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Bidirectional Encoder</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Masked language modeling</div></div>'; }
function sim185() { document.getElementById('simTag').textContent = 'GPT'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Generative Pre-trained</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Autoregressive generation</div></div>'; }
function sim186() { document.getElementById('simTag').textContent = 'Named Entity Recognition'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Identify entities (person, org, etc)</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Sequence labeling</div></div>'; }
function sim187() { document.getElementById('simTag').textContent = 'Sentiment Analysis'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Classify sentiment</p><button class="sim-btn" style="font-size:0.75rem">Positive</button><button class="sim-btn" style="font-size:0.75rem">Neutral</button><button class="sim-btn" style="font-size:0.75rem">Negative</button></div>'; }
function sim188() { document.getElementById('simTag').textContent = 'Machine Translation'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Translate between languages</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Seq2Seq with attention</div></div>'; }
function sim189() { document.getElementById('simTag').textContent = 'Question Answering'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Extract answer from text</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Reading comprehension</div></div>'; }
function sim190() { document.getElementById('simTag').textContent = 'Parsing'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Syntax tree extraction</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Dependency | Constituency</div></div>'; }

(function() {
  if (!window.SIM_MAP) window.SIM_MAP = {};
  for (let i = 175; i <= 190; i++) {
    const name = 'sim' + i;
    if (typeof window[name] === 'function') {
      window.SIM_MAP[i] = window[name];
    }
  }
})();




