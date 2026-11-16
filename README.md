# 코코이 (kokoi)

2027.01.02 – 01.05 오사카 · 교토 · 나라 여행용 단기 사이트. 단일 페이지, 빌드 없음, GitHub Pages 로 운영.

- 사이트: https://paki1019.github.io/kokoi/
- 멤버 3명, 코드네임 `코1` · `코2` · `이1` (`data.js` 의 `MEMBERS`)
- 예약번호·주소 등 민감정보와 현지 메모는 사이트에 두지 않고 프라이빗 Notion 페이지에 둔다. 링크는 `data.js` 의 `PRIVATE_NOTE_URL`

## 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 우측 상단 토글로 모드 2개 전환 — 준비 (체크리스트 · 출국 · 귀국 · 가이드) / 여행 (날짜별 탭 · 숙소). 출국 · 귀국 · 가이드 · 숙소 내용은 여기 직접 수정 |
| `data.js` | 체크리스트(`PACKING`) · 일자별 계획(`DAYS`) · 출발일(`TRIP`) 데이터 |
| `app.js` | 모드 · 탭 전환(해시 라우팅, 출발일부터는 여행 모드가 기본, 토글 선택은 localStorage 에 고정) · 체크리스트 체크(localStorage) · 일자별 렌더링 · 멤버 칩 필터 |
| `style.css` | 스타일. 라이트/다크 자동 |

## 로컬 확인

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 배포

`style.css` · `data.js` · `app.js` 를 고쳤으면 `index.html` 의 `?v=` 값을 올린다 (브라우저 캐시 방지).

GitHub 저장소 → Settings → Pages → Source: `main` / `/ (root)`.
