// 탭 전환 · 준비물 체크 · 일자별 계획 렌더링

const TABS = ['plan', 'packing', 'days'];
const STORAGE_KEY = 'kokoi.packing';

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ----- 탭 -----
function activateTab(name) {
  const tab = TABS.includes(name) ? name : TABS[0];
  document.querySelectorAll('.tab').forEach((el) => {
    const on = el.dataset.tab === tab;
    el.classList.toggle('is-active', on);
    el.setAttribute('aria-selected', on);
  });
  document.querySelectorAll('.panel').forEach((el) => {
    el.hidden = el.id !== tab;
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
renderPacking();
renderDays();
activateTab(location.hash.slice(1));
