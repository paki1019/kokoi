// 모드·탭 전환 · 준비물 체크 · 일정 렌더링

// 탭 id → 모드 (before: 준비, trip: 여행, guide: 가이드). 날짜별 탭(day1 …)은 renderDays 가 추가한다
const TABS = {
  packing: 'before', depart: 'before', return: 'before', stay: 'trip',
  'g-wallet': 'guide', 'g-vjw': 'guide', 'g-cash': 'guide', 'g-icoca': 'guide',
};
const STORAGE_KEY = 'kokoi.packing';

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ----- 탭 -----
const PHASE_KEY = 'kokoi.phase';

// 모드의 첫 탭. 여행 모드는 여행 중이면 오늘 날짜 탭, 아니면 첫날
function firstTab(phase) {
  if (phase === 'guide') return 'g-wallet';
  if (phase !== 'trip') return 'packing';
  const idx = Math.floor((new Date() - new Date(TRIP.start)) / 86400000);
  return `day${idx >= 0 && idx < DAYS.length ? idx + 1 : 1}`;
}

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
  return firstTab(pinned === 'before' || pinned === 'trip' ? pinned : datePhase());
}

// 준비 · 여행 토글을 누르면 그 모드로 고정. 날짜 기준 모드와 같으면 고정을 풀어 자동 전환을 살린다. 가이드는 고정하지 않는다
document.querySelectorAll('.phase').forEach((el) => {
  el.addEventListener('click', () => {
    const phase = el.dataset.phase;
    if (phase === 'guide') return;
    try {
      if (phase === datePhase()) localStorage.removeItem(PHASE_KEY);
      else localStorage.setItem(PHASE_KEY, phase);
    } catch {
      /* 저장 불가 환경이면 무시 */
    }
  });
});

function activateTab(name) {
  // 해시가 모드 이름(#trip)이면 그 모드의 첫 탭
  const tab = Object.hasOwn(TABS, name) ? name : name === 'trip' || name === 'before' || name === 'guide' ? firstTab(name) : defaultTab();
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

// ----- 멤버 필터 -----
// 멤버 칩을 누르면 그 멤버의 일정만 보인다. 다시 누르면 해제. 선택은 이 브라우저에 저장
const MEMBER_KEY = 'kokoi.member';

function loadMember() {
  try {
    const m = localStorage.getItem(MEMBER_KEY);
    return MEMBERS.includes(m) ? m : null;
  } catch {
    return null;
  }
}

function saveMember(m) {
  try {
    if (m) localStorage.setItem(MEMBER_KEY, m);
    else localStorage.removeItem(MEMBER_KEY);
  } catch {
    /* 저장 불가 환경이면 무시 */
  }
}

function applyMember(member) {
  document.querySelectorAll('#members .chip').forEach((el) => {
    const on = el.dataset.member === member;
    el.classList.toggle('is-active', on);
    el.setAttribute('aria-pressed', on);
  });
  // data-who 가 있는 요소는 해당 멤버가 아니면 숨긴다
  document.querySelectorAll('[data-who]').forEach((el) => {
    el.hidden = Boolean(member) && !el.dataset.who.split(' ').includes(member);
  });
}

function renderMembers() {
  const root = document.getElementById('members');
  root.innerHTML = MEMBERS.map((m) =>
    `<button class="chip" type="button" data-member="${esc(m)}">${esc(m)}</button>`).join('');
  root.querySelectorAll('.chip').forEach((el) => {
    el.addEventListener('click', () => {
      const next = loadMember() === el.dataset.member ? null : el.dataset.member;
      saveMember(next);
      applyMember(next);
    });
  });
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
              ${i.guide ? `<a class="check-guide" href="${esc(i.guide)}">📖 가이드</a>` : ''}
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
  const stayTab = document.querySelector('.tab[data-tab="stay"]');
  const stayPanel = document.getElementById('panel-stay');
  DAYS.forEach((d, idx) => {
    const id = `day${idx + 1}`;
    TABS[id] = 'trip';
    stayTab.insertAdjacentHTML('beforebegin',
      `<a class="tab" role="tab" href="#${id}" data-tab="${id}" data-phase="trip">${esc(d.tab)}</a>`);
    stayPanel.insertAdjacentHTML('beforebegin', `
      <section class="panel" id="panel-${id}" role="tabpanel">
        <h2>${esc(d.title)}</h2>
        <p class="hint">${esc(d.date)}</p>
        <ol class="timeline day">
          ${d.items.map((it) => `
            <li ${it.who ? `data-who="${esc(it.who.join(' '))}"` : ''}>
              <time>${esc(it.time)}</time>
              <div>
                <div>${esc(it.title)}</div>
                ${it.who || it.note ? `<small>${esc([it.who && it.who.join(' · '), it.note].filter(Boolean).join(' · '))}</small>` : ''}
                ${it.map ? `<small><a href="${esc(it.map)}" target="_blank" rel="noopener">📍 지도</a></small>` : ''}
                ${it.guide ? `<small><a href="${esc(it.guide)}"${it.guide.startsWith('#') ? '' : ' target="_blank" rel="noopener"'}>📖 가이드</a></small>` : ''}
              </div>
            </li>`).join('')}
        </ol>
      </section>`);
  });
}

// ----- init -----
renderCountdown();
renderMembers();
renderPrivateNote();
renderPacking();
renderDays();
applyMember(loadMember());
activateTab(location.hash.slice(1));
