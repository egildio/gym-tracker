(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`gymTrackerData`,t={1:{name:`Push Day`,exercises:[{name:`Bench Press`,sets:4,reps:`8-10`,equipment:`barbell`},{name:`Incline Bench Press`,sets:3,reps:`8-10`,equipment:`barbell`},{name:`Overhead Press`,sets:3,reps:`8-10`,equipment:`barbell`},{name:`Lateral Raises`,sets:3,reps:`12-15`,equipment:`dumbbell`},{name:`Tricep Dips`,sets:3,reps:`10-12`,equipment:`bodyweight`},{name:`Cable Flyes`,sets:3,reps:`12-15`,equipment:`cable`}]},2:{name:`Pull Day`,exercises:[{name:`Deadlift`,sets:4,reps:`5-6`,equipment:`barbell`},{name:`Barbell Rows`,sets:4,reps:`8-10`,equipment:`barbell`},{name:`Lat Pulldown`,sets:3,reps:`10-12`,equipment:`latpulldown`},{name:`Seated Cable Row`,sets:3,reps:`10-12`,equipment:`cable`},{name:`Face Pulls`,sets:3,reps:`15-20`,equipment:`cable`},{name:`Bicep Curls`,sets:3,reps:`12-15`,equipment:`dumbbell`}]},3:{name:`Legs Day`,exercises:[{name:`Squats`,sets:4,reps:`8-10`,equipment:`barbell`},{name:`Leg Press`,sets:3,reps:`10-12`,equipment:`legpress`},{name:`Romanian Deadlift`,sets:3,reps:`10-12`,equipment:`barbell`},{name:`Leg Curls`,sets:3,reps:`12-15`,equipment:`cable`},{name:`Leg Extensions`,sets:3,reps:`12-15`,equipment:`legext`},{name:`Calf Raises`,sets:4,reps:`15-20`,equipment:`bodyweight`}]},4:{name:`Push Day 2`,exercises:[{name:`Incline Bench Press`,sets:4,reps:`8-10`,equipment:`barbell`},{name:`Bench Press`,sets:3,reps:`8-10`,equipment:`barbell`},{name:`Overhead Press`,sets:4,reps:`8-10`,equipment:`barbell`},{name:`Cable Flyes`,sets:3,reps:`12-15`,equipment:`cable`},{name:`Lateral Raises`,sets:4,reps:`12-15`,equipment:`dumbbell`},{name:`Tricep Pushdowns`,sets:3,reps:`12-15`,equipment:`cable`}]},5:{name:`Pull Day 2`,exercises:[{name:`Barbell Rows`,sets:4,reps:`8-10`,equipment:`barbell`},{name:`Deadlift`,sets:3,reps:`5-6`,equipment:`barbell`},{name:`Lat Pulldown`,sets:4,reps:`10-12`,equipment:`latpulldown`},{name:`Seated Cable Row`,sets:3,reps:`10-12`,equipment:`cable`},{name:`Bicep Curls`,sets:4,reps:`12-15`,equipment:`dumbbell`},{name:`Hammer Curls`,sets:3,reps:`12-15`,equipment:`dumbbell`}]}},n={start:[`LISTEN UP! TIME TO GET IT DONE!`,`NO EXCUSES! LET'S GO!`,`YOU CAME HERE TO WORK! NOW MOVE!`],exercise:[`DROP AND GIVE ME 10 MORE!`,`PAIN IS WEAKNESS LEAVING THE BODY!`,`THAT'S IT! FEEL THE BURN!`,`YOU'RE NOT HERE TO MAKE FRIENDS!`,`ONE MORE SET! YOU CAN DO IT!`,`NO PAIN NO GAIN!`],rest:[`REST UP! NEXT ONE'S GONNA HURT!`,`HYDRATE! THEN WE CONTINUE!`,`DON'T GET COMFORTABLE!`],finish:[`OUTSTANDING! THAT'S HOW CHAMPIONS TRAIN!`,`YOU EARNED YOUR REST!`,`SAME TIME TOMORROW!`]};function r(e){let t=e.toLowerCase();return t.includes(`bench`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <rect x="10" y="60" width="100" height="10" fill="#444"/>
      <circle cx="30" cy="55" r="8" fill="#ffcc99"/>
      <line x1="30" y1="55" x2="50" y2="40" stroke="#ffcc99" stroke-width="3"/>
      <line x1="50" y1="40" x2="70" y2="40" stroke="#888" stroke-width="4"/>
      <line x1="70" y1="40" x2="90" y2="55" stroke="#ffcc99" stroke-width="3"/>
      <line x1="50" y1="40" x2="45" y2="55" stroke="#ffcc99" stroke-width="3"/>
      <line x1="70" y1="40" x2="75" y2="55" stroke="#ffcc99" stroke-width="3"/>
    </svg>`:t.includes(`squat`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <circle cx="60" cy="15" r="10" fill="#ffcc99"/>
      <line x1="60" y1="25" x2="60" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="35" x2="40" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="35" x2="80" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="45" x2="45" y2="65" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="45" x2="75" y2="65" stroke="#ffcc99" stroke-width="3"/>
      <line x1="40" y1="45" x2="40" y2="30" stroke="#ffcc99" stroke-width="3"/>
      <line x1="40" y1="30" x2="80" y2="30" stroke="#888" stroke-width="4"/>
      <line x1="80" y1="30" x2="80" y2="45" stroke="#ffcc99" stroke-width="3"/>
    </svg>`:t.includes(`deadlift`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <line x1="20" y1="60" x2="100" y2="60" stroke="#888" stroke-width="4"/>
      <circle cx="50" cy="20" r="8" fill="#ffcc99"/>
      <line x1="50" y1="28" x2="60" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="55" y1="35" x2="40" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="55" y1="35" x2="70" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="45" x2="55" y2="60" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="45" x2="65" y2="60" stroke="#ffcc99" stroke-width="3"/>
    </svg>`:t.includes(`lat pulldown`)||t.includes(`pulldown`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <line x1="20" y1="10" x2="100" y2="10" stroke="#888" stroke-width="3"/>
      <line x1="60" y1="10" x2="60" y2="25" stroke="#888" stroke-width="2"/>
      <circle cx="60" cy="35" r="8" fill="#ffcc99"/>
      <line x1="60" y1="43" x2="60" y2="60" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="50" x2="45" y2="40" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="50" x2="75" y2="40" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="60" x2="50" y2="70" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="60" x2="70" y2="70" stroke="#ffcc99" stroke-width="3"/>
    </svg>`:t.includes(`overhead`)||t.includes(`press`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <circle cx="60" cy="25" r="8" fill="#ffcc99"/>
      <line x1="60" y1="33" x2="60" y2="55" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="40" x2="45" y2="50" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="40" x2="75" y2="50" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="33" x2="40" y2="15" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="33" x2="80" y2="15" stroke="#ffcc99" stroke-width="3"/>
      <line x1="35" y1="15" x2="85" y2="15" stroke="#888" stroke-width="4"/>
    </svg>`:t.includes(`row`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <line x1="20" y1="55" x2="100" y2="55" stroke="#888" stroke-width="4"/>
      <circle cx="75" cy="25" r="8" fill="#ffcc99"/>
      <line x1="75" y1="33" x2="65" y2="50" stroke="#ffcc99" stroke-width="3"/>
      <line x1="68" y1="42" x2="55" y2="55" stroke="#ffcc99" stroke-width="3"/>
      <line x1="68" y1="42" x2="85" y2="50" stroke="#ffcc99" stroke-width="3"/>
      <line x1="65" y1="50" x2="55" y2="65" stroke="#ffcc99" stroke-width="3"/>
      <line x1="65" y1="50" x2="75" y2="65" stroke="#ffcc99" stroke-width="3"/>
    </svg>`:t.includes(`curl`)&&t.includes(`dumbbell`)||t.includes(`hammer curl`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <circle cx="45" cy="20" r="8" fill="#ffcc99"/>
      <line x1="45" y1="28" x2="45" y2="50" stroke="#ffcc99" stroke-width="3"/>
      <line x1="45" y1="35" x2="35" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="45" y1="35" x2="55" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="45" y1="50" x2="40" y2="65" stroke="#ffcc99" stroke-width="3"/>
      <line x1="45" y1="50" x2="50" y2="65" stroke="#ffcc99" stroke-width="3"/>
      <rect x="25" y="35" width="8" height="20" fill="#666" rx="2"/>
      <rect x="57" y="35" width="8" height="20" fill="#666" rx="2"/>
    </svg>`:t.includes(`lateral`)||t.includes(`raise`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <circle cx="60" cy="20" r="8" fill="#ffcc99"/>
      <line x1="60" y1="28" x2="60" y2="55" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="35" x2="30" y2="25" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="35" x2="90" y2="25" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="55" x2="50" y2="70" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="55" x2="70" y2="70" stroke="#ffcc99" stroke-width="3"/>
      <circle cx="25" cy="25" r="5" fill="#666"/>
      <circle cx="95" cy="25" r="5" fill="#666"/>
    </svg>`:t.includes(`leg press`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <rect x="5" y="40" width="30" height="30" fill="#444" rx="3"/>
      <circle cx="85" cy="25" r="8" fill="#ffcc99"/>
      <line x1="85" y1="33" x2="85" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="85" y1="45" x2="50" y2="55" stroke="#ffcc99" stroke-width="3"/>
      <line x1="85" y1="45" x2="100" y2="55" stroke="#ffcc99" stroke-width="3"/>
      <line x1="50" y1="55" x2="25" y2="50" stroke="#ffcc99" stroke-width="3"/>
      <line x1="100" y1="55" x2="110" y2="50" stroke="#ffcc99" stroke-width="3"/>
    </svg>`:t.includes(`leg curl`)||t.includes(`leg extension`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <rect x="10" y="50" width="60" height="15" fill="#444" rx="3"/>
      <circle cx="90" cy="30" r="8" fill="#ffcc99"/>
      <line x1="90" y1="38" x2="80" y2="55" stroke="#ffcc99" stroke-width="3"/>
      <line x1="80" y1="55" x2="60" y2="55" stroke="#ffcc99" stroke-width="3"/>
      <line x1="80" y1="55" x2="80" y2="70" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="55" x2="50" y2="65" stroke="#ffcc99" stroke-width="3"/>
    </svg>`:t.includes(`dip`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <rect x="35" y="5" width="50" height="5" fill="#444"/>
      <rect x="35" y="5" width="5" height="30" fill="#444"/>
      <rect x="80" y="5" width="5" height="30" fill="#444"/>
      <circle cx="60" cy="45" r="8" fill="#ffcc99"/>
      <line x1="60" y1="53" x2="60" y2="65" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="58" x2="45" y2="65" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="58" x2="75" y2="65" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="65" x2="50" y2="75" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="65" x2="70" y2="75" stroke="#ffcc99" stroke-width="3"/>
    </svg>`:t.includes(`cable`)||t.includes(`flye`)||t.includes(`pushdown`)||t.includes(`pull`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <rect x="5" y="10" width="10" height="60" fill="#444"/>
      <line x1="10" y1="20" x2="60" y2="40" stroke="#888" stroke-width="2"/>
      <circle cx="60" cy="40" r="5" fill="#666"/>
      <circle cx="60" cy="25" r="8" fill="#ffcc99"/>
      <line x1="60" y1="33" x2="60" y2="50" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="42" x2="45" y2="50" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="42" x2="75" y2="50" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="50" x2="50" y2="65" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="50" x2="70" y2="65" stroke="#ffcc99" stroke-width="3"/>
    </svg>`:t.includes(`calf`)?`<svg viewBox="0 0 120 80" class="exercise-svg">
      <rect x="30" y="65" width="60" height="8" fill="#444"/>
      <circle cx="60" cy="20" r="8" fill="#ffcc99"/>
      <line x1="60" y1="28" x2="60" y2="50" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="35" x2="45" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="35" x2="75" y2="45" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="50" x2="55" y2="65" stroke="#ffcc99" stroke-width="3"/>
      <line x1="60" y1="50" x2="65" y2="65" stroke="#ffcc99" stroke-width="3"/>
    </svg>`:`<svg viewBox="0 0 120 80" class="exercise-svg">
    <circle cx="60" cy="20" r="10" fill="#ffcc99"/>
    <line x1="60" y1="30" x2="60" y2="55" stroke="#ffcc99" stroke-width="3"/>
    <line x1="60" y1="40" x2="40" y2="55" stroke="#ffcc99" stroke-width="3"/>
    <line x1="60" y1="40" x2="80" y2="55" stroke="#ffcc99" stroke-width="3"/>
    <line x1="60" y1="55" x2="45" y2="75" stroke="#ffcc99" stroke-width="3"/>
    <line x1="60" y1="55" x2="75" y2="75" stroke="#ffcc99" stroke-width="3"/>
  </svg>`}var i={currentDay:1,sergeantEnabled:!1,restTime:90,logs:[],currentWorkout:null},a=null;function o(){let t=localStorage.getItem(e);if(t){let e=JSON.parse(t);return{currentDay:e.currentDay||1,sergeantEnabled:e.sergeantEnabled||!1,restTime:e.restTime||90,logs:e.logs||[],currentWorkout:e.currentWorkout||null}}return{currentDay:1,sergeantEnabled:!1,restTime:90,logs:[],currentWorkout:null}}function s(){localStorage.setItem(e,JSON.stringify(i))}function c(){i=o()}function l(e){return{barbell:`🏋️`,dumbbell:`🏋️`,cable:`🔗`,latpulldown:`📊`,legpress:`🦵`,legext:`🦵`,bodyweight:`🙆`}[e]||`🏋️`}function u(){let e=t[i.currentDay],n=document.getElementById(`exercisesList`);if(!n)return;let r=document.getElementById(`workoutTitle`);r&&(r.textContent=`Day `+i.currentDay+`: `+e.name);let a=``;for(let t=0;t<e.exercises.length;t++){let n=e.exercises[t],r=i.currentWorkout?.exercises[t];a+=`<div class="exercise-card">`,a+=`<div class="exercise-header">`,a+=`<span class="equip-icon">`+l(n.equipment)+`</span>`,a+=`<span class="exercise-name">`+n.name+`</span>`,a+=`<span class="exercise-info">`+n.sets+`×`+n.reps+`</span>`,a+=`</div>`,a+=`<div class="sets-container">`;for(let e=0;e<n.sets;e++){let n=r?.sets[e],i=n?.weight||``,o=n?.reps||``;a+=`<div class="set-row">`,a+=`<span class="set-num">Set `+(e+1)+`</span>`,a+=`<input type="number" class="weight-input" placeholder="kg" `,a+=`value="`+i+`" data-ex="`+t+`" data-set="`+e+`" data-field="weight">`,a+=`<span class="x-mark">×</span>`,a+=`<input type="number" class="reps-input" placeholder="reps" `,a+=`value="`+o+`" data-ex="`+t+`" data-set="`+e+`" data-field="reps">`,a+=`</div>`}a+=`</div></div>`}n.innerHTML=a,n.querySelectorAll(`input`).forEach(function(e){e.addEventListener(`change`,d)})}function d(e){let n=e.target,r=parseInt(n.dataset.ex||`0`),a=parseInt(n.dataset.set||`0`),o=n.dataset.field,c=parseFloat(n.value)||0;i.currentWorkout||f(),i.currentWorkout.exercises[r]||(i.currentWorkout.exercises[r]={name:t[i.currentDay].exercises[r].name,sets:[]}),i.currentWorkout.exercises[r].sets[a]||(i.currentWorkout.exercises[r].sets[a]={weight:0,reps:0}),i.currentWorkout.exercises[r].sets[a][o]=c,s()}function f(){let e=t[i.currentDay];i.currentWorkout={day:i.currentDay,date:new Date().toISOString(),exercises:e.exercises.map(function(e){return{name:e.name,sets:[]}})},s()}function p(e){if(!i.sergeantEnabled)return;let t=document.getElementById(`sergeantBar`),r=document.getElementById(`sergeantMsg`);if(!t||!r)return;let a=n[e];r.textContent=a[Math.floor(Math.random()*a.length)],t.style.display=`block`,setTimeout(function(){t.style.display=`none`},4e3)}function m(e){i.currentDay=e,s(),document.querySelectorAll(`.day-btn`).forEach(function(t){t.classList.toggle(`active`,parseInt(t.getAttribute(`data-day`)||`1`)===e)}),i.currentWorkout=null,u()}function h(e){document.querySelectorAll(`.tab-btn`).forEach(function(t){t.classList.toggle(`active`,t.getAttribute(`data-tab`)===e)}),document.querySelectorAll(`.tab-content`).forEach(function(t){t.classList.toggle(`active`,t.id===e+`Tab`)}),e===`progress`&&g()}function g(){let e=document.getElementById(`progressList`);if(!e)return;if(i.logs.length===0){e.innerHTML=`<p class="empty-state">No workouts logged yet. Start training!</p>`;return}let t=i.logs.slice().reverse().slice(0,10),n=``;for(let e=0;e<t.length;e++){let r=t[e],i=0,a=0;for(let e=0;e<r.exercises.length;e++){i+=r.exercises[e].sets.length;for(let t=0;t<r.exercises[e].sets.length;t++)a+=r.exercises[e].sets[t].weight*r.exercises[e].sets[t].reps}let o=new Date(r.date).toLocaleDateString();n+=`<div class="progress-card">`,n+=`<div class="progress-header"><strong>Day `+r.day+`</strong><span>`+o+`</span></div>`,n+=`<div class="progress-stats"><span>`+i+` sets</span><span>`+a.toLocaleString()+` kg</span></div>`,n+=`</div>`}e.innerHTML=n}function _(){if(i.currentWorkout){if(!i.currentWorkout.exercises.some(function(e){return e.sets.some(function(e){return e.weight>0||e.reps>0})})){alert(`Log at least one set before completing!`);return}i.logs.push(i.currentWorkout),i.currentWorkout=null,s(),p(`finish`),alert(`🎉 Workout Complete! Great job!`)}}function v(){p(`rest`);let e=t[i.currentDay],n=i.currentWorkout?.exercises.findIndex(function(e){return e.sets.some(function(e){return e.weight===0&&e.reps===0})})||0,o=e.exercises[n]||e.exercises[0],s=e.exercises[n+1]||null,c=document.getElementById(`timerModal`),l=document.getElementById(`timerDisplay`),u=document.getElementById(`timerCurrentEx`),d=document.getElementById(`timerNextEx`),f=document.getElementById(`timerAvatar`);if(!c||!l)return;c.style.display=`flex`,l.textContent=i.restTime.toString(),u&&(u.innerHTML=`<strong>NOW:</strong> `+o.name),d&&(d.innerHTML=s?`<strong>NEXT:</strong> `+s.name:`<strong>NEXT:</strong> Workout done!`),f&&(f.innerHTML=r(o.name)),a&&clearInterval(a);let m=i.restTime;a=window.setInterval(function(){m--,l.textContent=m.toString(),m<=0&&(a&&clearInterval(a),c.style.display=`none`,p(`exercise`))},1e3)}function y(){a&&clearInterval(a);let e=document.getElementById(`timerModal`);e&&(e.style.display=`none`),p(`exercise`)}function b(){i.sergeantEnabled=!i.sergeantEnabled,s();let e=document.getElementById(`toggleSergeant`),t=document.getElementById(`sergeantToggle`);e&&(e.textContent=i.sergeantEnabled?`🎖️ Sergeant ON`:`🎖️ Sergeant OFF`,e.classList.toggle(`active`,i.sergeantEnabled)),t&&(t.textContent=i.sergeantEnabled?`🎖️ ON`:`🎖️ OFF`),i.sergeantEnabled&&p(`start`)}function x(){let e=document.getElementById(`restTime`);e&&(i.restTime=parseInt(e.value)||90,s())}function S(){confirm(`Delete all workout data? This cannot be undone.`)&&(localStorage.removeItem(e),i={currentDay:1,sergeantEnabled:!1,restTime:90,logs:[],currentWorkout:null},u(),g())}function C(){c(),document.querySelectorAll(`.day-btn`).forEach(function(e){e.addEventListener(`click`,function(){m(parseInt(e.getAttribute(`data-day`)||`1`))})}),document.querySelectorAll(`.tab-btn`).forEach(function(e){e.addEventListener(`click`,function(){h(e.getAttribute(`data-tab`)||`workout`)})});let e=document.getElementById(`startTimerBtn`);e&&e.addEventListener(`click`,v);let t=document.getElementById(`toggleSergeant`);t&&t.addEventListener(`click`,b);let n=document.getElementById(`sergeantToggle`);n&&n.addEventListener(`click`,b);let r=document.getElementById(`skipTimer`);r&&r.addEventListener(`click`,y);let a=document.getElementById(`completeWorkout`);a&&a.addEventListener(`click`,_);let o=document.getElementById(`clearData`);o&&o.addEventListener(`click`,S);let s=document.getElementById(`restTime`);s&&s.addEventListener(`change`,x);let l=document.getElementById(`toggleSergeant`);l&&(l.textContent=i.sergeantEnabled?`🎖️ Sergeant ON`:`🎖️ Sergeant OFF`,l.classList.toggle(`active`,i.sergeantEnabled));let d=document.getElementById(`restTime`);d&&(d.value=i.restTime.toString()),u()}document.addEventListener(`DOMContentLoaded`,C);