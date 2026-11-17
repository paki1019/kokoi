// 여행 데이터. 내용 수정은 이 파일만 고치면 된다.

const TRIP = {
  start: '2027-01-02T00:00:00+09:00',
};

// 멤버 코드네임
const MEMBERS = ['코1', '코2', '이1'];

// 프라이빗 메모 (Notion). 민감정보·현지 메모는 사이트가 아니라 여기에
const PRIVATE_NOTE_URL = 'https://app.notion.com/p/f35cc46d5f5382e0ac62013894bae959?v=69bcc46d5f538327a88e88d7a1b4f5bc';

// 체크리스트: 그룹별 항목. id 는 체크 저장 키로 쓰이므로 바꾸지 않는다. guide 는 가이드 탭 링크 (선택)
const PACKING = [
  {
    group: '미리 할 일',
    // 시간순. 괄호 안은 권장 시점
    items: [
      { id: 'tw-card', label: '트래블월렛 카드 발급 (지금, 코1 · 배송 5영업일)', guide: '#g-wallet' },
      { id: 'insurance', label: '여행자 보험 (출발 2주 전)' },
      { id: 'esim', label: 'eSIM 구매 (출발 1주 전)' },
      { id: 'vjw', label: 'Visit Japan Web 등록 · QR 캡처 (출발 3일 전)', guide: '#g-vjw' },
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

// 목적지 지도 (구글 지도 검색)
const STAY_MAP = 'https://www.google.com/maps/search/?api=1&query=BON+Condo+Namba+Nipponbashi+1-8-17+Nipponbashi+Chuo-ku+Osaka';
const NAMBA_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%8D%97%E6%B5%B7+%E3%81%AA%E3%82%93%E3%81%B0%E9%A7%85';
const RINKU_STATION_MAP = 'https://www.google.com/maps/search/?api=1&query=%E3%82%8A%E3%82%93%E3%81%8F%E3%81%86%E3%82%BF%E3%82%A6%E3%83%B3%E9%A7%85';
const OUTLET_MAP = 'https://www.google.com/maps/search/?api=1&query=%E3%82%8A%E3%82%93%E3%81%8F%E3%81%86%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88';
const DONKI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E3%83%89%E3%83%B3%E3%83%BB%E3%82%AD%E3%83%9B%E3%83%BC%E3%83%86+%E3%82%8A%E3%82%93%E3%81%8F%E3%81%86%E5%BA%97';
const NIPPONBASHI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E6%97%A5%E6%9C%AC%E6%A9%8B%E9%A7%85+%E5%A4%A7%E9%98%AA';
const FUSHIMI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E4%BC%8F%E8%A6%8B%E7%A8%B2%E8%8D%B7%E5%A4%A7%E7%A4%BE';
const KIYOMIZU_MAP = 'https://www.google.com/maps/search/?api=1&query=%E6%B8%85%E6%B0%B4%E5%AF%BA';
const GION_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%85%AB%E5%9D%82%E7%A5%9E%E7%A4%BE';
const KUOE_MAP = 'https://www.google.com/maps/search/?api=1&query=KUOE+KYOTO+%E6%9C%AC%E5%BA%97+%E5%AF%BA%E7%94%BA%E9%80%9A%E4%B8%89%E6%9D%A1';
const NISHIKI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E9%8C%A6%E5%B8%82%E5%A0%B4';
const GIONSHIJO_MAP = 'https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%98%AA+%E7%A5%87%E5%9C%92%E5%9B%9B%E6%9D%A1%E9%A7%85';
const DOTONBORI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E9%81%93%E9%A0%93%E5%A0%80';
const KINTETSU_NIPPONBASHI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E8%BF%91%E9%89%84%E6%97%A5%E6%9C%AC%E6%A9%8B%E9%A7%85';
const NARA_PARK_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%A5%88%E8%89%AF%E5%85%AC%E5%9C%92';
const KOFUKUJI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E8%88%88%E7%A6%8F%E5%AF%BA';
const TODAIJI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E5%A4%A7%E5%AF%BA+%E5%A4%A7%E4%BB%8F%E6%AE%BF';
const KASUGA_MAP = 'https://www.google.com/maps/search/?api=1&query=%E6%98%A5%E6%97%A5%E5%A4%A7%E7%A4%BE';
const NARAMACHI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E3%81%AA%E3%82%89%E3%81%BE%E3%81%A1';
const KINTETSU_NARA_MAP = 'https://www.google.com/maps/search/?api=1&query=%E8%BF%91%E9%89%84%E5%A5%88%E8%89%AF%E9%A7%85';
const ONSEN_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E7%84%B6%E6%B8%A9%E6%B3%89+%E6%B3%89%E5%B7%9E%E3%81%AE%E6%B9%AF+%E9%96%A2%E8%A5%BF%E7%A9%BA%E6%B8%AF';

// 가이드 (Notion). 시내 이동: 간사이공항역 → 숙소
const CITY_GUIDE = 'https://app.notion.com/p/41acc46d5f5381d188bcd56444408b50';
const RINKU_GUIDE = 'https://app.notion.com/p/41bcc46d5f538186acf4fffcef387d97';
const DONKI_GUIDE = 'https://app.notion.com/p/41bcc46d5f53811694fbfaa3574284f7';
const ONSEN_GUIDE = 'https://app.notion.com/p/41bcc46d5f53813d89b5ed67cb704860';
const OUTLET_GUIDE = 'https://app.notion.com/p/41bcc46d5f538156bdedde6e4fcb4d43';
const KYOTO_GUIDE = 'https://app.notion.com/p/41bcc46d5f538124a229cff92d8259b1';
const NARA_GUIDE = 'https://app.notion.com/p/41bcc46d5f538144bfddfeae0cf71515';
const KUOE_GUIDE = 'https://app.notion.com/p/41bcc46d5f538164945adecae9bd161c';
const KYOTO_MOVE_GUIDE = 'https://app.notion.com/p/41bcc46d5f53812492dbfa38934dcff3';
const NARA_MOVE_GUIDE = 'https://app.notion.com/p/41bcc46d5f5381d4acb8de365d700dc1';
const DAY1_GUIDE = 'https://app.notion.com/p/41acc46d5f5381039c0ee89d7b7ab9a8';
const DAY4_GUIDE = 'https://app.notion.com/p/41acc46d5f5381539854d900c8421e2a';

// 일자별 계획. tab 은 탭 이름, guide 는 그날 계획 (Notion) 링크로 제목 옆 버튼이 된다. items 는 { time, title, note, who, map, guide } 배열.
// who 는 해당 멤버 (없으면 전원), map 은 지도 링크, guide 는 가이드 링크 (모두 선택)
const DAYS = [
  {
    date: '01.02 (토)',
    tab: '1.2 토',
    title: 'Day 1 · 출국 · 오사카',
    guide: DAY1_GUIDE,
    items: [
      { time: '07:30', title: '인천 출발', note: '', who: ['코1', '이1'] },
      { time: '08:00', title: '대구 출발', note: 'TW509', who: ['코2'] },
      { time: '09:15', title: '간사이 T2 도착 · 입국', note: 'Visit Japan Web QR · 입국 후 셔틀로 공항역 (7 – 9분)', who: ['코1', '이1'], guide: '#g-vjw' },
      { time: '09:30', title: '간사이 T1 도착 · 입국', note: 'Visit Japan Web QR · 입국 후 걸어서 공항역 (2층 직결)', who: ['코2'], guide: '#g-vjw' },
      { time: '10:15', title: '난카이선 개찰구 앞 집합', note: '간사이공항역 · JR 개찰구 아님', map: MEET_MAP },
      { time: '10:20', title: 'ICOCA 구매', note: '공항역 JR 매표기 (파란색) · 1인 1장 2,000엔 · 현금만', guide: '#g-icoca' },
      { time: '10:30', title: '시내 이동', note: '난카이 공항급행 → 난바 · 약 45분 · 970엔 · ICOCA 로 탑승', guide: CITY_GUIDE },
      { time: '11:30', title: '숙소 1층 짐 보관', note: '셀프 보관 · 선착순 · 캐리어 잠그기', map: STAY_MAP, guide: '#stay' },
      { time: '16:00', title: '숙소 체크인', note: 'BON 콘도 난바 니혼바시', map: STAY_MAP, guide: '#stay' },
      { time: '저녁', title: '저녁 식사', note: '미정' },
    ],
  },
  {
    date: '01.03 (일)',
    tab: '1.3 일',
    title: 'Day 2 · 교토',
    guide: KYOTO_GUIDE,
    items: [
      { time: '08:00', title: '숙소 출발', note: '' },
      { time: '08:10', title: '닛폰바시역 → 후시미이나리역', note: '사카이스지선으로 기타하마역 → 게이한 (단바바시 환승) · 약 1시간 · 670엔', map: NIPPONBASHI_MAP, guide: KYOTO_MOVE_GUIDE },
      { time: '09:15', title: '후시미이나리 신사', note: '새해 연휴라 붐빔 · 10시 전에 도착', map: FUSHIMI_MAP },
      { time: '11:00', title: '후시미이나리역 → 기요미즈고조역', note: '게이한', guide: KYOTO_MOVE_GUIDE },
      { time: '11:30', title: '점심', note: '미정' },
      { time: '12:30', title: '기요미즈데라', note: '06:00 – 18:00 · 성인 500엔', map: KIYOMIZU_MAP },
      { time: '14:00', title: '산넨자카 · 야사카 신사 · 기온', note: '도보', map: GION_MAP },
      { time: '16:00', title: 'KUOE KYOTO 본점', note: '시계 매장 · 데라마치 산조 · 11:00 – 18:00 · 연초 영업 미확인', map: KUOE_MAP, guide: KUOE_GUIDE },
      { time: '16:45', title: '가와라마치 · 니시키 시장', note: '연초 휴무 점포 많을 수 있음', map: NISHIKI_MAP },
      { time: '17:30', title: '저녁', note: '미정' },
      { time: '19:30', title: '기온시조역 → 닛폰바시역', note: '게이한으로 기타하마역 → 사카이스지선', map: GIONSHIJO_MAP, guide: KYOTO_MOVE_GUIDE },
      { time: '21:00', title: '야식 · 도톤보리', note: '미정', map: DOTONBORI_MAP },
    ],
  },
  {
    date: '01.04 (월)',
    tab: '1.4 월',
    title: 'Day 3 · 나라',
    guide: NARA_GUIDE,
    items: [
      { time: '09:00', title: '숙소 출발', note: '' },
      { time: '09:15', title: '긴테쓰닛폰바시역 → 긴테쓰나라역', note: '쾌속급행 · 급행 · 환승 없음 · 약 40분 · 680엔', map: KINTETSU_NIPPONBASHI_MAP, guide: NARA_MOVE_GUIDE },
      { time: '10:00', title: '나라공원 · 사슴', note: '', map: NARA_PARK_MAP },
      { time: '10:30', title: '고후쿠지', note: '', map: KOFUKUJI_MAP },
      { time: '11:15', title: '도다이지 대불전', note: '08:00 – 17:00 · 성인 800엔', map: TODAIJI_MAP },
      { time: '12:30', title: '점심', note: '미정' },
      { time: '13:30', title: '가스가타이샤', note: '', map: KASUGA_MAP },
      { time: '15:00', title: '나라마치 산책 · 카페', note: '', map: NARAMACHI_MAP },
      { time: '17:30', title: '저녁', note: '미정' },
      { time: '19:00', title: '긴테쓰나라역 → 긴테쓰닛폰바시역', note: '약 40분 · 680엔', map: KINTETSU_NARA_MAP, guide: NARA_MOVE_GUIDE },
      { time: '21:00', title: '야식 · 난바', note: '미정' },
    ],
  },
  {
    date: '01.05 (화)',
    tab: '1.5 화',
    title: 'Day 4 · 귀국',
    guide: DAY4_GUIDE,
    items: [
      { time: '10:00', title: '숙소 체크아웃', note: '', guide: '#stay' },
      { time: '10:30', title: '난카이 난바역 → 린쿠타운역', note: '공항급행 · 환승 없음 · 약 40분 · 820엔', map: NAMBA_MAP, guide: RINKU_GUIDE },
      { time: '11:30', title: '점심 · 린쿠 프리미엄 아울렛', note: '역에서 도보 약 6분 · 10:00 – 20:00', map: OUTLET_MAP, guide: OUTLET_GUIDE },
      { time: '13:00', title: '돈키호테 린쿠점', note: '역에서 도보 약 5분', map: DONKI_MAP, guide: DONKI_GUIDE },
      { time: '14:00', title: '센슈노유 온천', note: '수건 대여 100엔 · 목욕 수건 200엔', map: ONSEN_MAP, guide: ONSEN_GUIDE },
      { time: '16:30', title: '린쿠타운역 → 간사이공항역', note: '공항급행 · 6분 · 370엔', map: RINKU_STATION_MAP, guide: RINKU_GUIDE },
      { time: '16:40', title: '난카이선 개찰구 앞 해산', note: '코2 는 걸어서 T1 · 코1 이1 은 에어로플라자 앞 셔틀로 T2 (7 – 9분)', map: MEET_MAP },
      { time: '19:20', title: '간사이 T1 출발', note: 'TW314', who: ['코2'] },
      { time: '19:50', title: '간사이 T2 출발', note: '', who: ['코1', '이1'] },
      { time: '20:55', title: '대구 도착', note: '', who: ['코2'] },
      { time: '21:50', title: '인천 도착', note: '', who: ['코1', '이1'] },
    ],
  },
];
