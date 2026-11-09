# 코코이 (kokoi)

2027.01.02 – 01.05 오사카 · 교토 · 나라 여행용 단기 사이트. 단일 페이지, 빌드 없음, GitHub Pages 로 운영.

## 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 탭 3개 (출발 계획 · 준비물 · 일자별 계획). 출발 계획 내용은 여기 직접 수정 |
| `data.js` | 준비물 목록(`PACKING`) · 일자별 계획(`DAYS`) · 출발일(`TRIP`) 데이터 |
| `app.js` | 탭 전환(해시 라우팅) · 준비물 체크(localStorage) · 일자별 렌더링 |
| `style.css` | 스타일. 라이트/다크 자동 |

## 로컬 확인

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 배포

GitHub 저장소 → Settings → Pages → Source: `main` / `/ (root)`.
