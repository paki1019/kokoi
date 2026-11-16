// 여행 데이터. 내용 수정은 이 파일만 고치면 된다.

const TRIP = {
  start: '2027-01-02T00:00:00+09:00',
};

// 멤버 코드네임
const MEMBERS = ['코1', '코2', '이1'];

// 프라이빗 메모 (Notion). 민감정보·현지 메모는 사이트가 아니라 여기에
const PRIVATE_NOTE_URL = 'https://app.notion.com/p/f35cc46d5f5382e0ac62013894bae959?v=69bcc46d5f538327a88e88d7a1b4f5bc';

// 체크리스트: 그룹별 항목. id 는 체크 저장 키로 쓰이므로 바꾸지 않는다.
const PACKING = [
  {
    group: '미리 할 일',
    // 시간순. 괄호 안은 권장 시점
    items: [
      { id: 'baggage', label: '위탁 수하물 포함 여부 확인 (지금, 코2)' },
      { id: 'tw-card', label: '트래블월렛 카드 발급 (지금, 배송 5영업일)' },
      { id: 'insurance', label: '여행자 보험 (출발 2주 전)' },
      { id: 'esim', label: 'eSIM 구매 (출발 1주 전)' },
      { id: 'vjw', label: 'Visit Japan Web 등록 · QR 캡처 (출발 3일 전)' },
      { id: 'stay-mail', label: '숙소 출입문 비밀번호 수신 확인 (출발 2일 전, 예약자)' },
      { id: 'checkin', label: '온라인 체크인 (출발 하루 전, 항공사 앱)' },
    ],
  },
  {
    group: '챙길 것',
    items: [
      { id: 'passport', label: '여권 (유효기간 6개월 이상)' },
      { id: 'card', label: '트래블월렛 카드' },
      { id: 'phone', label: '휴대폰 · 충전기 · 보조배터리' },
      { id: 'adapter', label: '돼지코 (A타입, 110V)' },
      { id: 'outer', label: '겉옷 (1월 오사카 평균 3 ~ 10℃)' },
      { id: 'meds', label: '상비약' },
    ],
  },
];

// 집합 · 해산 장소: 간사이공항역 난카이선 개찰구
const MEET_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%8D%97%E6%B5%B7+%E9%96%A2%E8%A5%BF%E7%A9%BA%E6%B8%AF%E9%A7%85+%E6%94%B9%E6%9C%AD';

// 시내 이동 가이드 (Notion): 간사이공항역 → 숙소
const CITY_GUIDE = 'https://app.notion.com/p/41acc46d5f5381d188bcd56444408b50';

// 일자별 계획. tab 은 탭 이름. items 는 { time, title, note, who, map, guide } 배열.
// who 는 해당 멤버 (없으면 전원), map 은 지도 링크, guide 는 가이드 링크 (모두 선택)
const DAYS = [
  {
    date: '01.02 (토)',
    tab: '1.2 토',
    title: 'Day 1 · 출국 · 오사카',
    items: [
      { time: '07:30', title: '인천 출발', note: '', who: ['코1', '이1'] },
      { time: '08:00', title: '대구 출발', note: 'TW509', who: ['코2'] },
      { time: '09:15', title: '간사이 T2 도착 · 입국', note: 'Visit Japan Web QR · 입국 후 셔틀로 공항역 (7 – 9분)', who: ['코1', '이1'] },
      { time: '09:30', title: '간사이 T1 도착 · 입국', note: '입국 후 걸어서 공항역 (2층 직결)', who: ['코2'] },
      { time: '10:15', title: '난카이선 개찰구 앞 집합', note: '간사이공항역 · JR 개찰구 아님', map: MEET_MAP },
      { time: '10:20', title: 'ICOCA 구매', note: '공항역 JR 매표기 (파란색) · 1인 1장 2,000엔 · 현금만' },
      { time: '10:30', title: '시내 이동', note: '난카이 공항급행 → 난바 · 약 45분 · 970엔 · ICOCA 로 탑승', guide: CITY_GUIDE },
      { time: '11:30', title: '숙소 1층 짐 보관', note: '셀프 보관 · 선착순 · 캐리어 잠그기' },
      { time: '16:00', title: '숙소 체크인', note: 'BON 콘도 난바 니혼바시' },
      { time: '저녁', title: '저녁 식사', note: '미정' },
    ],
  },
  {
    date: '01.03 (일)',
    tab: '1.3 일',
    title: 'Day 2 · 교토',
    items: [
      { time: '오전', title: '미정', note: '' },
      { time: '점심', title: '미정', note: '' },
      { time: '오후', title: '미정', note: '' },
      { time: '저녁', title: '미정', note: '' },
    ],
  },
  {
    date: '01.04 (월)',
    tab: '1.4 월',
    title: 'Day 3 · 나라',
    items: [
      { time: '오전', title: '미정', note: '' },
      { time: '점심', title: '미정', note: '' },
      { time: '오후', title: '미정', note: '' },
      { time: '저녁', title: '미정', note: '' },
    ],
  },
  {
    date: '01.05 (화)',
    tab: '1.5 화',
    title: 'Day 4 · 귀국',
    items: [
      { time: '10:00', title: '숙소 체크아웃', note: '' },
      { time: '00:00', title: '공항 이동', note: '' },
      { time: '00:00', title: '난카이선 개찰구 앞 해산', note: '코2 는 걸어서 T1 · 코1 이1 은 에어로플라자 앞 셔틀로 T2 (7 – 9분)', map: MEET_MAP },
      { time: '19:20', title: '간사이 T1 출발', note: 'TW314', who: ['코2'] },
      { time: '19:50', title: '간사이 T2 출발', note: '', who: ['코1', '이1'] },
      { time: '20:55', title: '대구 도착', note: '', who: ['코2'] },
      { time: '21:50', title: '인천 도착', note: '', who: ['코1', '이1'] },
    ],
  },
];
