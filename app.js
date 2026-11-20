// 모드·탭 전환 · 준비물 체크 · 일정 렌더링

// 탭 id → 모드 (before: 준비, trip: 여행, guide: 가이드). 날짜별 탭(day1 …)은 renderDays 가 추가한다
const TABS = {
  packing: 'before', depart: 'before', return: 'before',
  'g-wallet': 'guide', 'g-vjw': 'guide', 'g-cash': 'guide', 'g-icoca': 'guide', stay: 'guide',
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

// 일정 종류 → 아이콘 · 이름
const KINDS = {
  sight: ['🏯', '관광'], move: ['🚆', '교통'], food: ['🍽️', '식사'], shop: ['🛍️', '쇼핑'],
  stay: ['🏨', '숙소'], flight: ['✈️', '항공'], meet: ['👥', '집합'],
};

// 끼니 키 → 이름
const MEALS = { breakfast: '조식', lunch: '중식', dinner: '석식', night: '야식' };

// 강조해서 보여줄 라벨 → 클래스
const TAG_CLASS = { 확정: ' is-fixed', 재방문: ' is-strong' };

// 정보 · 식사 섹션의 장소 카드
function placeHtml(p) {
  return `
          <details class="place">
            <summary class="place__head">
              <span class="place__title">${esc(p.title)}</span>
              ${[].concat(p.tag || []).map((t) => `<span class="place__tag${TAG_CLASS[t] || ''}">${esc(t)}</span>`).join('')}
              <span class="links">
                ${p.map ? `<a href="${esc(p.map)}" target="_blank" rel="noopener" aria-label="지도" title="지도">📍</a>` : ''}
                ${p.guide ? `<a href="${esc(p.guide)}" target="_blank" rel="noopener" aria-label="가이드" title="가이드">📖</a>` : ''}
              </span>
            </summary>
            <ul class="guide">${p.lines.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>
          </details>`;
}

// ----- 일자별 -----
function renderDays() {
  const anchorTab = document.querySelector('.tab[data-phase="guide"]');
  const anchorPanel = document.getElementById('panel-stay');
  DAYS.forEach((d, idx) => {
    const id = `day${idx + 1}`;
    // 동선 지도의 핀 번호: pos 가 있는 일정에 순서대로 매긴다
    const pinNo = new Map(d.items.filter((it) => it.pos).map((it, i) => [it, i + 1]));
    TABS[id] = 'trip';
    anchorTab.insertAdjacentHTML('beforebegin',
      `<a class="tab" role="tab" href="#${id}" data-tab="${id}" data-phase="trip">${esc(d.tab)}</a>`);
    anchorPanel.insertAdjacentHTML('beforebegin', `
      <section class="panel" id="panel-${id}" role="tabpanel">
        <h2 class="day-title">${esc(d.title)}${d.guide ? `<a class="day-guide" href="${esc(d.guide)}" target="_blank" rel="noopener" aria-label="${esc(d.title)} 가이드" title="가이드">📖</a>` : ''}</h2>
        <p class="hint">${esc(d.date)}</p>
        <p class="hint legend">${Object.values(KINDS).filter(([, name]) => d.items.some((it) => KINDS[it.kind] && KINDS[it.kind][1] === name)).map(([icon, name]) => `${icon} ${name}`).join(' · ')}</p>
        ${d.items.some((it) => it.pos) ? `
        <details class="daymap" data-day="${idx}">
          <summary>🗺️ 동선 지도</summary>
          <div class="daymap__map"></div>
          <p class="hint">번호는 방문 순서 · 검은 핀은 역 · 선은 직선으로 이은 것 (실제 길 아님) <button class="daymap__all" type="button">전체 보기</button>${d.items.some((it) => it.pos && it.far) ? '<button class="daymap__far" type="button" aria-pressed="false">장거리 구간 보기</button>' : ''}</p>
        </details>` : ''}
        <ol class="timeline day">
          ${d.items.map((it) => `
            <li ${it.who ? `data-who="${esc(it.who.join(' '))}"` : ''}>
              <time>${esc(it.time)}</time>
              <div>
                <div>${KINDS[it.kind] ? `<span class="kind" title="${KINDS[it.kind][1]}">${KINDS[it.kind][0]}</span>` : ''}${pinNo.has(it) ? `<button class="pin-no${it.kind === 'move' ? ' pin-no--move' : ''}" type="button" data-day="${idx}" data-stop="${pinNo.get(it) - 1}" aria-label="지도에서 ${pinNo.get(it)}번 보기">${pinNo.get(it)}</button>` : ''}${esc(it.title)}</div>
                ${it.who || it.note ? `<small>${esc([it.who && it.who.join(' · '), it.note].filter(Boolean).join(' · '))}</small>` : ''}
                ${it.meal ? `<button class="meal-jump" type="button" data-target="${id}-${it.meal}">${d.meals[it.meal].length ? `후보 ${d.meals[it.meal].length}곳` : '후보 미정'} ↓</button>` : ''}
              </div>
              ${it.map || it.guide ? `<div class="links">
                <span class="links__items" hidden>
                  ${it.map ? `<a href="${esc(it.map)}" target="_blank" rel="noopener" aria-label="지도" title="지도">📍</a>` : ''}
                  ${it.guide ? `<a href="${esc(it.guide)}"${it.guide.startsWith('#') ? '' : ' target="_blank" rel="noopener"'} aria-label="가이드" title="가이드">📖</a>` : ''}
                </span>
                <button class="more" type="button" aria-expanded="false" aria-label="지도 · 가이드 열기">⋯</button>
              </div>` : ''}
            </li>`).join('')}
        </ol>
        ${d.meals ? `
        <h3>식사</h3>
        ${Object.entries(d.meals).map(([key, places]) => `
          <h4 class="meal" id="${id}-${key}">${MEALS[key]}</h4>
          ${places.length ? places.map(placeHtml).join('') : '<p class="hint">후보 미정</p>'}`).join('')}` : ''}
        ${d.info ? `
        <h3>정보</h3>
        ${d.info.map(placeHtml).join('')}` : ''}
      </section>`);
  });
}

// 일정 오른쪽 ⋯ 버튼: 지도 · 가이드 버튼을 그 왼쪽에 펼치거나 접는다
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.more');
  if (!btn) return;
  const items = btn.previousElementSibling;
  items.hidden = !items.hidden;
  btn.setAttribute('aria-expanded', !items.hidden);
  btn.textContent = items.hidden ? '⋯' : '×';
});

// 일정의 식사 버튼: 아래 식사 섹션의 그 끼니로 내려간다
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.meal-jump');
  if (btn) document.getElementById(btn.dataset.target).scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ----- 동선 지도 -----
// pos 가 있는 일정을 순서대로 번호 핀 + 선으로 표시 (Leaflet + OpenStreetMap). 처음 펼칠 때 한 번만 만든다
const dayMaps = new Map(); // 날짜 지도 상자 → { map, markers, stops, far }

function ensureDayMap(box) {
  if (dayMaps.has(box)) return dayMaps.get(box);
  const el = box.querySelector('.daymap__map');
  if (!window.L) {
    el.textContent = '지도를 불러오지 못했습니다. 인터넷 연결을 확인하세요.';
    return null;
  }
  const stops = DAYS[Number(box.dataset.day)].items.filter((it) => it.pos);
  const map = L.map(el, { scrollWheelZoom: false });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  // far 인 일정의 핀과 거기에 닿는 선은 far 레이어에 모아 처음에는 숨긴다
  const line = { color: '#c0392b', weight: 3, opacity: 0.8, dashArray: '6 6' };
  const far = L.layerGroup();
  const near = [];
  const markers = stops.map((it, i) => {
    if (i > 0) {
      const seg = [stops[i - 1].pos, it.pos];
      if (it.far || stops[i - 1].far) L.polyline(seg, line).addTo(far);
      else near.push(seg);
    }
    return L.marker(it.pos, { icon: L.divIcon({ className: it.kind === 'move' ? 'pin pin--move' : 'pin', html: String(i + 1), iconSize: [26, 26], iconAnchor: [13, 13] }) })
      .addTo(it.far ? far : map)
      .bindPopup(`<b>${i + 1}. ${esc(it.title)}</b><br>${esc(it.time)}`);
  });
  L.polyline(near, line).addTo(map);
  const entry = { map, markers, stops, far };
  dayMaps.set(box, entry);
  fitDayMap(entry);
  return entry;
}

// 보이는 핀이 모두 들어오게 맞춘다
function fitDayMap(entry) {
  const shown = entry.stops.filter((it) => !it.far || entry.map.hasLayer(entry.far));
  entry.map.fitBounds(shown.map((it) => it.pos), { padding: [24, 24] });
}

// 장거리 구간을 보이거나 숨기고 버튼 상태를 맞춘다
function setFar(box, entry, on) {
  if (on) entry.far.addTo(entry.map);
  else entry.far.remove();
  const btn = box.querySelector('.daymap__far');
  btn.setAttribute('aria-pressed', on);
  btn.textContent = on ? '장거리 구간 숨기기' : '장거리 구간 보기';
}

document.addEventListener('toggle', (e) => {
  const box = e.target;
  if (box.classList && box.classList.contains('daymap') && box.open) ensureDayMap(box);
}, true);

document.addEventListener('click', (e) => {
  // 일정의 번호를 누르면 지도를 펼치고 그 핀으로 확대한다
  const no = e.target.closest('.pin-no');
  if (no) {
    const box = document.querySelector(`.daymap[data-day="${no.dataset.day}"]`);
    box.open = true;
    const entry = ensureDayMap(box);
    if (!entry) return;
    const marker = entry.markers[Number(no.dataset.stop)];
    if (!entry.map.hasLayer(marker)) setFar(box, entry, true);
    entry.map.invalidateSize();
    entry.map.setView(marker.getLatLng(), 16);
    marker.openPopup();
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  // 전체 보기: 모든 핀이 보이게 되돌린다
  const all = e.target.closest('.daymap__all');
  if (all) {
    const entry = dayMaps.get(all.closest('.daymap'));
    if (entry) {
      entry.map.closePopup();
      fitDayMap(entry);
    }
  }
  // 장거리 구간 보기 · 숨기기
  const farBtn = e.target.closest('.daymap__far');
  if (farBtn) {
    const box = farBtn.closest('.daymap');
    const entry = dayMaps.get(box);
    if (!entry) return;
    entry.map.closePopup();
    setFar(box, entry, farBtn.getAttribute('aria-pressed') !== 'true');
    fitDayMap(entry);
  }
});

// ----- init -----
renderCountdown();
renderMembers();
renderPrivateNote();
renderPacking();
renderDays();
applyMember(loadMember());
activateTab(location.hash.slice(1));
