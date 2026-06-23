// G: Control & Robotics (100-114)
function sim100() { document.getElementById('simTag').textContent = 'Feedback Control'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Error → Adjustment</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Setpoint - Measured = Error<br>Correct to reduce error</div></div>'; }
function sim101() { document.getElementById('simTag').textContent = 'PID'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Proportional-Integral-Derivative</p><button class="sim-btn">P</button><button class="sim-btn">I</button><button class="sim-btn">D</button></div>'; }
function sim102() { document.getElementById('simTag').textContent = 'Stability'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">System doesn\'t oscillate</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Poles in left half-plane</div></div>'; }
function sim103() { document.getElementById('simTag').textContent = 'Bode Plot'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Frequency response</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Magnitude & Phase</div></div>'; }
function sim104() { document.getElementById('simTag').textContent = 'Sensor'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Measures physical quantity</p><button class="sim-btn">Temperature</button><button class="sim-btn">Pressure</button><button class="sim-btn">Position</button></div>'; }
function sim105() { document.getElementById('simTag').textContent = 'Actuator'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Produces physical action</p><button class="sim-btn">Motor</button><button class="sim-btn">Valve</button><button class="sim-btn">Pump</button></div>'; }
function sim106() { document.getElementById('simTag').textContent = 'Robotics'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Automated mechanical systems</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Perception → Planning → Control</div></div>'; }
function sim107() { document.getElementById('simTag').textContent = 'Kinematics'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Joint angles → End effector position</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Forward kinematics</div></div>'; }
function sim108() { document.getElementById('simTag').textContent = 'Path Planning'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Robot navigates safely</p><button class="sim-btn">RRT</button><button class="sim-btn">A*</button><button class="sim-btn">Potential Field</button></div>'; }
function sim109() { document.getElementById('simTag').textContent = 'Vision'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Robot sees environment</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Cameras | Object detection</div></div>'; }
function sim110() { document.getElementById('simTag').textContent = 'Grasping'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Robot picks up objects</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Force closure | Grasp planning</div></div>'; }
function sim111() { document.getElementById('simTag').textContent = 'Localization'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Robot knows its position</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">SLAM | GPS | IMU</div></div>'; }
function sim112() { document.getElementById('simTag').textContent = 'SLAM'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Simultaneous Localization & Mapping</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Build map while localizing</div></div>'; }
function sim113() { document.getElementById('simTag').textContent = 'Multi-Robot'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Coordinated robot teams</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">Communication | Cooperation</div></div>'; }
function sim114() { document.getElementById('simTag').textContent = 'Cyber-Physical'; document.getElementById('simContainer').innerHTML = '<div style="padding:20px"><p class="sim-info">Physical + Computational integration</p><div style="background:var(--c)10;border:1px solid var(--c)30;border-radius:10px;padding:15px">IoT | Embedded systems</div></div>'; }

(function() {
  if (!window.SIM_MAP) window.SIM_MAP = {};
  for (let i = 100; i <= 114; i++) {
    const name = 'sim' + i;
    if (typeof window[name] === 'function') {
      window.SIM_MAP[i] = window[name];
    }
  }
})();




