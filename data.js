// 여행 데이터. 내용 수정은 이 파일만 고치면 된다.

const TRIP = {
  start: '2027-01-02T00:00:00+09:00',
};

// 멤버 코드네임
const MEMBERS = ['코1', '코2', '이1'];

// 프라이빗 메모 (Notion). 민감정보·현지 메모는 사이트가 아니라 여기에
const PRIVATE_NOTE_URL = 'https://app.notion.com/p/f35cc46d5f5382e0ac62013894bae959?v=69bcc46d5f538327a88e88d7a1b4f5bc';

// 준비물: 그룹별 항목. id 는 체크 저장 키로 쓰이므로 바꾸지 않는다.
const PACKING = [
  {
    group: '필수',
    items: [
      { id: 'passport', label: '여권 (유효기간 6개월 이상)' },
      { id: 'ticket', label: '항공권 e-ticket' },
      { id: 'hotel', label: '숙소 바우처' },
      { id: 'vjw', label: 'Visit Japan Web QR' },
      { id: 'card', label: '해외 결제 카드' },
      { id: 'yen', label: '엔화 현금' },
    ],
  },
  {
    group: '전자기기',
    items: [
      { id: 'phone', label: '휴대폰 · 충전기' },
      { id: 'battery', label: '보조배터리' },
      { id: 'esim', label: 'eSIM / 포켓 와이파이' },
      { id: 'adapter', label: '돼지코 (A타입, 110V)' },
      { id: 'earphone', label: '이어폰' },
    ],
  },
  {
    group: '의류 · 세면',
    items: [
      { id: 'outer', label: '겉옷 (1월 오사카 평균 3 ~ 10℃)' },
      { id: 'clothes', label: '속옷 · 양말 4일치' },
      { id: 'toiletry', label: '세면도구' },
      { id: 'meds', label: '상비약' },
    ],
  },
];

// 일자별 계획. items 는 { time, title, note } 배열.
const DAYS = [
  {
    date: '01.02 (토)',
    title: 'Day 1 · 출국 · 오사카',
    items: [
      { time: '07:30', title: '인천 출발', note: '코1 · 이1' },
      { time: '08:00', title: '대구 출발', note: '코2 · TW509' },
      { time: '09:15', title: '간사이 도착 · 입국', note: '코1 · 이1 · Visit Japan Web QR' },
      { time: '09:30', title: '간사이 T1 도착 · 입국', note: '코2 · 입국 후 공항에서 합류' },
      { time: '00:00', title: '시내 이동', note: '' },
      { time: '16:00', title: '숙소 체크인', note: 'BON 콘도 난바 니혼바시' },
      { time: '저녁', title: '저녁 식사', note: '미정' },
    ],
  },
  {
    date: '01.03 (일)',
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
    title: 'Day 4 · 귀국',
    items: [
      { time: '10:00', title: '숙소 체크아웃', note: '' },
      { time: '00:00', title: '공항 이동', note: '' },
      { time: '19:20', title: '간사이 T1 출발', note: '코2 · TW314' },
      { time: '19:50', title: '간사이 출발', note: '코1 · 이1' },
      { time: '20:55', title: '대구 도착', note: '코2' },
      { time: '21:50', title: '인천 도착', note: '코1 · 이1' },
    ],
  },
];
