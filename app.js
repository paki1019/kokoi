// 모드·탭 전환 · 준비물 체크 · 일정 렌더링

// 탭 id → 모드 (before: 준비, trip: 여행)
const TABS = { packing: 'before', depart: 'before', return: 'before', days: 'trip', stay: 'trip' };
const STORAGE_KEY = 'kokoi.packing';

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ----- 탭 -----
const PHASE_KEY = 'kokoi.phase';
const FIRST_TAB = { before: 'packing', trip: 'days' };

// 날짜 기준 모드: 출발일 전에는 준비, 이후에는 여행
function datePhase() {
  return new Date() < new Date(TRIP.start) ? 'before' : 'trip';
}

// 해시가 없으면 토글로 고정한 모드, 없으면 날짜 기준 모드를 연다
function defaultTab() {
  let pinned = null;
  try {
    pinned = localStorage.getItem(PHASE_KEY);
  } catch {
    /* 저장 불가 환경이면 날짜 기준 */
  }
  return FIRST_TAB[pinned] || FIRST_TAB[datePhase()];
}

// 토글을 누르면 그 모드로 고정. 날짜 기준 모드와 같으면 고정을 풀어 자동 전환을 살린다
document.querySelectorAll('.phase').forEach((el) => {
  el.addEventListener('click', () => {
    const phase = el.dataset.phase;
    try {
      if (phase === datePhase()) localStorage.removeItem(PHASE_KEY);
      else localStorage.setItem(PHASE_KEY, phase);
    } catch {
      /* 저장 불가 환경이면 무시 */
    }
  });
});

function activateTab(name) {
  const tab = Object.hasOwn(TABS, name) ? name : defaultTab();
  const phase = TABS[tab];
  document.querySelectorAll('.phase').forEach((el) => {
    el.classList.toggle('is-active', el.dataset.phase === phase);
  });
  document.querySelectorAll('.tab').forEach((el) => {
    const on = el.dataset.tab === tab;
    el.hidden = el.dataset.phase !== phase;
    el.classList.toggle('is-active', on);
    el.setAttribute('aria-selected', on);
  });
  document.querySelectorAll('.panel').forEach((el) => {
    el.hidden = el.id !== `panel-${tab}`;
  });
}

window.addEventListener('hashchange', () => activateTab(location.hash.slice(1)));

// ----- 카운트다운 -----
function renderCountdown() {
  const el = document.getElementById('countdown');
  const start = new Date(TRIP.start);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.round((start - today) / 86400000);
  if (days > 0) el.textContent = `출발까지 D-${days}`;
  else if (days === 0) el.textContent = '오늘 출발!';
  else if (days >= -3) el.textContent = `여행 ${-days + 1}일차`;
  else el.textContent = '여행 끝';
}

// ----- 멤버 -----
function renderMembers() {
  document.getElementById('members').innerHTML =
    MEMBERS.map((m) => `<span class="chip">${esc(m)}</span>`).join('');
}

// ----- 프라이빗 메모 링크 -----
function renderPrivateNote() {
  const a = document.getElementById('private-note');
  if (!PRIVATE_NOTE_URL) return;
  a.href = PRIVATE_NOTE_URL;
  a.hidden = false;
}

// ----- 준비물 -----
function loadChecked() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  } catch {
    return new Set();
  }
}

function saveChecked(set) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    /* 저장 불가 환경이면 무시 */
  }
}

function renderPacking() {
  const root = document.getElementById('packing-list');
  const checked = loadChecked();
  const total = PACKING.reduce((n, g) => n + g.items.length, 0);

  root.innerHTML = PACKING.map((g) => {
    const done = g.items.filter((i) => checked.has(i.id)).length;
    return `
      <section class="pack-group">
        <h3>${esc(g.group)} <span class="pack-count">${done}/${g.items.length}</span></h3>
        <ul class="checklist">
          ${g.items.map((i) => `
            <li>
              <label class="${checked.has(i.id) ? 'is-done' : ''}">
                <input type="checkbox" data-id="${esc(i.id)}" ${checked.has(i.id) ? 'checked' : ''}>
                <span>${esc(i.label)}</span>
              </label>
            </li>`).join('')}
        </ul>
      </section>`;
  }).join('') + `<p class="pack-total">전체 ${checked.size}/${total}</p>`;

  root.querySelectorAll('input[type=checkbox]').forEach((cb) => {
    cb.addEventListener('change', () => {
      const set = loadChecked();
      cb.checked ? set.add(cb.dataset.id) : set.delete(cb.dataset.id);
      saveChecked(set);
      renderPacking();
    });
  });
}

document.getElementById('packing-reset').addEventListener('click', () => {
  saveChecked(new Set());
  renderPacking();
});

// ----- 일자별 -----
function renderDays() {
  const root = document.getElementById('days-list');
  root.innerHTML = DAYS.map((d, idx) => `
    <details class="day" ${idx === 0 ? 'open' : ''}>
      <summary><span class="day__date">${esc(d.date)}</span><span class="day__title">${esc(d.title)}</span></summary>
      <ol class="timeline">
        ${d.items.map((it) => `
          <li>
            <time>${esc(it.time)}</time>
            <div>
              <div>${esc(it.title)}</div>
              ${it.note ? `<small>${esc(it.note)}</small>` : ''}
            </div>
          </li>`).join('')}
      </ol>
    </details>`).join('');
}

// ----- init -----
renderCountdown();
renderMembers();
renderPrivateNote();
renderPacking();
renderDays();
activateTab(location.hash.slice(1));
