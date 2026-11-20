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
const KAIYUKAN_MAP = 'https://www.google.com/maps/search/?api=1&query=%E6%B5%B7%E9%81%8A%E9%A4%A8';
const OSAKAKO_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E6%B8%AF%E9%A7%85';
const TEMPOZAN_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E4%BF%9D%E5%B1%B1%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%83%E3%83%88%E3%83%97%E3%83%AC%E3%83%BC%E3%82%B9';
const FERRIS_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E4%BF%9D%E5%B1%B1%E5%A4%A7%E8%A6%B3%E8%A6%A7%E8%BB%8A';
const KUROFUNE_MAP = 'https://maps.app.goo.gl/PuFcE52hLrw4FQUUA';
const LEMON_MAP = 'https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%AE%BF%E7%84%BC%E8%82%89+%E7%89%9B%E3%81%9F%E3%82%93%E3%81%AE%E6%AA%B8%E6%AA%AC+%E5%A4%A7%E9%98%AA%E6%9C%AC%E5%BA%97';
const TAKASHIMAYA_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E3%82%BF%E3%82%AB%E3%82%B7%E3%83%9E%E3%83%A4';
const TATEDACHI_MAP = 'https://www.google.com/maps/place/%EC%95%BC%ED%82%A4%ED%86%A0%EB%A6%AC+%EB%8B%A4%ED%85%8C%EB%8B%A4%EC%B9%98/data=!4m6!3m5!1s0x6000e783e98e0b29:0x6edb7e5f493ab96f!8m2!3d34.6663319!4d135.5049399!16s%2Fg%2F11s4rp39kw';
const BEATCAFE_MAP = 'https://www.google.com/maps/place/BEAT+CAFE+MIXX/data=!4m6!3m5!1s0x6000e714bb2c4c11:0xbdabc7e616939ec0!8m2!3d34.6675741!4d135.502213!16s%2Fg%2F12qg6pp_y';
const TAYUTAYU_MAP = 'https://www.google.com/maps/place/%EA%BC%AC%EC%B9%98%EA%B5%AC%EC%9D%B4+%EC%95%BC%ED%82%A4%EB%8F%88%EC%95%BC%ED%83%80%EC%9C%A0%ED%83%80%EC%9C%A0/data=!4m6!3m5!1s0x6000e76addf2768d:0x1c9d06f1f4b008ef!8m2!3d34.6668229!4d135.5043365!16s%2Fg%2F1tghd0lz';
const ARATA_MAP = 'https://www.google.com/maps/place/%EB%8F%88%EC%B9%B4%EC%B8%A0+%EC%83%A4%EB%B8%8C%EC%83%A4%EB%B8%8C+%EC%95%84%EB%9D%BC%ED%83%80/data=!4m6!3m5!1s0x6000e7c6e506136d:0x46728fde210c9dc0!8m2!3d34.6662898!4d135.5056251!16s%2Fg%2F11mdgh0326';
const SASHISU_MAP = 'https://www.google.com/maps/place/%EC%8A%A4%EC%8B%9C+%EC%82%AC%EC%B9%B4%EB%B0%94+%EC%82%AC%EC%8B%9C%EC%8A%A4+%EB%82%9C%EB%B0%94%EC%A0%90/data=!4m6!3m5!1s0x6000e791ae3ef6d5:0xf11e06ef59ef7ffe!8m2!3d34.6670162!4d135.5051444!16s%2Fg%2F11t582pdt2';
const AJINOYA_MAP = 'https://www.google.com/maps/place/%EC%95%84%EC%A7%80%EB%85%B8%EC%95%BC+%EC%98%A4%EC%BD%94%EB%85%B8%EB%AF%B8%EC%95%BC%EB%81%BC/data=!4m6!3m5!1s0x6000e71370f515bd:0xbc2902b4000717ce!8m2!3d34.668065!4d135.500976!16s%2Fg%2F1w2ytsk3';
const TOYOTEI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E3%82%B0%E3%83%AA%E3%83%AB%E3%82%AD%E3%83%A3%E3%83%94%E3%82%BF%E3%83%AB%E6%9D%B1%E6%B4%8B%E4%BA%AD%20%E3%81%AA%E3%82%93%E3%81%B0%E5%BA%97';
const MIZUNO_MAP = 'https://www.google.com/maps/search/?api=1&query=%E3%81%8A%E5%A5%BD%E3%81%BF%E7%84%BC%20%E7%BE%8E%E6%B4%A5%E3%81%AE%20%E9%81%93%E9%A0%93%E5%A0%80';
const DARUMA_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%A5%96%E4%B8%B2%E3%81%8B%E3%81%A4%20%E3%81%A0%E3%82%8B%E3%81%BE%20%E9%81%93%E9%A0%93%E5%A0%80%E5%BA%97';
const JUHACHIBAN_MAP = 'https://www.google.com/maps/search/?api=1&query=%E3%81%9F%E3%81%93%E7%84%BC%E5%8D%81%E5%85%AB%E7%95%AA%20%E9%81%93%E9%A0%93%E5%A0%80%E5%BA%97';
const TSURUTONTAN_MAP = 'https://www.google.com/maps/search/?api=1&query=%E3%81%A4%E3%82%8B%E3%81%A8%E3%82%93%E3%81%9F%E3%82%93%20%E5%AE%97%E5%8F%B3%E8%A1%9B%E9%96%80%E7%94%BA%E5%BA%97';
const UNOTAKE_MAP = 'https://www.google.com/maps/search/?api=1&query=%E3%81%8B%E3%81%99%E3%81%86%E3%81%A9%E3%82%93%20%E3%81%86%E3%81%AE%E3%81%9F%E3%81%91%20%E8%A5%BF%E5%BF%83%E6%96%8E%E6%A9%8B';

// 여러 끼니에 후보로 들어가는 가게
const SASHISU = {
  title: '스시 · 스시 사카바 사시스 난바점',
  lines: [
    '대중 스시 술집 · 우라난바 · 닛폰바시역 근처',
    '영업시간 · 예약 · 연초 영업 미확인',
  ],
  map: SASHISU_MAP,
};
const TOGETSU_MAP = 'https://www.google.com/maps/search/?api=1&query=%E6%B8%A1%E6%9C%88%E6%A9%8B+%E5%B5%90%E5%B1%B1';
const TENRYUJI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E9%BE%8D%E5%AF%BA+%E6%9B%B9%E6%BA%90%E6%B1%A0%E5%BA%AD%E5%9C%92';
const CHIKURIN_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%B5%90%E5%B1%B1+%E7%AB%B9%E6%9E%97%E3%81%AE%E5%B0%8F%E5%BE%84';
const HANKYU_ARASHIYAMA_MAP = 'https://www.google.com/maps/search/?api=1&query=%E9%98%AA%E6%80%A5+%E5%B5%90%E5%B1%B1%E9%A7%85';
const KAWARAMACHI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%E6%B2%B3%E5%8E%9F%E7%94%BA%E9%A7%85';
const KIYOMIZUGOJO_MAP = 'https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%98%AA+%E6%B8%85%E6%B0%B4%E4%BA%94%E6%9D%A1%E9%A7%85';
const SANNENZAKA_MAP = 'https://www.google.com/maps/search/?api=1&query=%E7%94%A3%E5%AF%A7%E5%9D%82+%E4%BA%8C%E5%B9%B4%E5%9D%82';
const HANAMIKOJI_MAP = 'https://www.google.com/maps/search/?api=1&query=%E7%A5%87%E5%9C%92+%E8%8A%B1%E8%A6%8B%E5%B0%8F%E8%B7%AF%E9%80%9A';
const MUGI_MAP = 'https://maps.app.goo.gl/4pXemKu3wT1LHmdU9';
const IKKYU_MAP = 'https://maps.app.goo.gl/LWf8UqkQnHZgzcox8';
const MUGE_MAP = 'https://maps.app.goo.gl/7Ebjk4hMobuUaQ2G8';
const KUCHIBASHI_MAP = 'https://maps.app.goo.gl/y3uqXU2gqjtJRiHbA';
const ONSEN_MAP = 'https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E7%84%B6%E6%B8%A9%E6%B3%89+%E6%B3%89%E5%B7%9E%E3%81%AE%E6%B9%AF+%E9%96%A2%E8%A5%BF%E7%A9%BA%E6%B8%AF';

// 가이드 (Notion). 시내 이동: 간사이공항역 → 숙소
const CITY_GUIDE = 'https://app.notion.com/p/41acc46d5f5381d188bcd56444408b50';
const RINKU_GUIDE = 'https://app.notion.com/p/41bcc46d5f538186acf4fffcef387d97';
const DONKI_GUIDE = 'https://app.notion.com/p/41bcc46d5f53811694fbfaa3574284f7';
const ONSEN_GUIDE = 'https://app.notion.com/p/41bcc46d5f53813d89b5ed67cb704860';
const OUTLET_GUIDE = 'https://app.notion.com/p/41bcc46d5f538156bdedde6e4fcb4d43';
const KYOTO_GUIDE = 'https://app.notion.com/p/41bcc46d5f538124a229cff92d8259b1';
const NARA_GUIDE = 'https://app.notion.com/p/41bcc46d5f538144bfddfeae0cf71515';
const KYOTO_MOVE_GUIDE = 'https://app.notion.com/p/41bcc46d5f53812492dbfa38934dcff3';
const NARA_MOVE_GUIDE = 'https://app.notion.com/p/41bcc46d5f5381d4acb8de365d700dc1';
const KAIYUKAN_GUIDE = 'https://app.notion.com/p/41dcc46d5f5381daaf06efe12ec73f6e';
const KAIYUKAN_MOVE_GUIDE = 'https://app.notion.com/p/41dcc46d5f53814c9918d3c59d8ec552';
const OSAKAKO_GUIDE = 'https://app.notion.com/p/41dcc46d5f538174a61ad94e3560285e';
const KUROFUNE_GUIDE = 'https://app.notion.com/p/41dcc46d5f5381729e78d65cbda8605e';
const LEMON_GUIDE = 'https://app.notion.com/p/41dcc46d5f5381c78c1ae061d5d9103a';
const KYOTO_FOOD_GUIDE = 'https://app.notion.com/p/41dcc46d5f538193a9cac11c56cc0b2a';
const KUOE_GUIDE = 'https://app.notion.com/p/41bcc46d5f538164945adecae9bd161c';
const DAY1_GUIDE = 'https://app.notion.com/p/41acc46d5f5381039c0ee89d7b7ab9a8';
const DAY4_GUIDE = 'https://app.notion.com/p/41acc46d5f5381539854d900c8421e2a';

// 일자별 계획. tab 은 탭 이름, guide 는 그날 계획 (Notion) 링크로 제목 옆 버튼이 된다.
// items 의 kind 는 종류: sight 관광 · move 교통 · food 식사 · shop 쇼핑 · stay 숙소 · flight 항공 · meet 집합. 제목 앞 아이콘이 된다.
// items 의 pos 는 [위도, 경도] (선택). pos 가 있는 항목은 그날 동선 지도에 번호 핀으로 찍힌다. 교통은 출발 칸과 도착 칸을 따로 둔다. far: true 를 붙인 핀과 거기에 닿는 선은 지도에서 처음에 숨기고 '장거리 구간 보기' 버튼으로 켠다 (멀리 떨어진 역 때문에 배율이 무너지지 않게). 도착 시각은 출발 + 소요 시간으로 계산한 어림값.
// info 는 그날 방문할 곳 정보 { title, tag, lines, map, guide } 배열 (선택, tag 는 문자열 또는 배열). 일정 아래 '정보' 섹션이 된다. items 는 { time, title, note, who, map, guide } 배열.
// meals 는 끼니별 식당 후보 { breakfast 조식, lunch 중식, dinner 석식, night 야식: [{ title, lines, map, guide }] } (선택). 일정 아래 '식사' 섹션이 된다. 빈 배열이면 후보 미정.
// items 의 meal 은 끼니 키 (선택). 일정에 그 끼니 후보로 내려가는 버튼이 붙는다.
// who 는 해당 멤버 (없으면 전원), map 은 지도 링크, guide 는 가이드 링크 (모두 선택)
const DAYS = [
  {
    date: '01.02 (토)',
    tab: '1.2 토',
    title: 'Day 1 · 출국 · 오사카',
    guide: DAY1_GUIDE,
    items: [
      { time: '07:30', title: '인천 출발', kind: 'flight', note: '', who: ['코1', '이1'] },
      { time: '08:00', title: '대구 출발', kind: 'flight', note: 'TW509', who: ['코2'] },
      { time: '09:15', title: '간사이 T2 도착 · 입국', kind: 'flight', note: 'Visit Japan Web QR · 입국 후 셔틀로 공항역 (7 – 9분)', who: ['코1', '이1'], guide: '#g-vjw' },
      { time: '09:30', title: '간사이 T1 도착 · 입국', kind: 'flight', note: 'Visit Japan Web QR · 입국 후 걸어서 공항역 (2층 직결)', who: ['코2'], guide: '#g-vjw' },
      { time: '10:15', title: '난카이선 개찰구 앞 집합', kind: 'meet', note: '간사이공항역 · JR 개찰구 아님', map: MEET_MAP },
      { time: '10:20', title: 'ICOCA 구매', kind: 'move', note: '공항역 JR 매표기 (파란색) · 1인 1장 2,000엔 · 현금만', guide: '#g-icoca' },
      { time: '10:30', title: '간사이공항역 출발', kind: 'move', note: '난카이 공항급행 난바행 · 약 45분 · 970엔 · ICOCA 로 탑승', map: MEET_MAP, guide: CITY_GUIDE, pos: [34.4358, 135.24354], far: true },
      { time: '11:15', title: '난카이 난바역 도착', kind: 'move', note: '숙소까지 도보 10 – 15분', map: NAMBA_MAP, guide: CITY_GUIDE, pos: [34.6634, 135.502] },
      { time: '11:30', title: '숙소 1층 짐 보관', kind: 'stay', note: '셀프 보관 · 선착순 · 캐리어 잠그기', map: STAY_MAP, guide: '#stay', pos: [34.66802, 135.50714] },
      { time: '12:00', title: '중식', kind: 'food', note: '', meal: 'lunch' },
      { time: '13:20', title: '닛폰바시역 출발', kind: 'move', note: '사카이스지선 → 주오선 (사카이스지혼마치 환승) · 약 25분 · 290엔', map: NIPPONBASHI_MAP, guide: KAIYUKAN_MOVE_GUIDE, pos: [34.6669, 135.5064] },
      { time: '13:45', title: '오사카코역 도착', kind: 'move', note: '가이유칸까지 도보 약 5분', map: OSAKAKO_MAP, guide: KAIYUKAN_MOVE_GUIDE, pos: [34.65348, 135.43379] },
      { time: '14:00', title: '가이유칸 (오사카 수족관)', kind: 'sight', note: '10:00 – 20:00 · 성인 2,700엔 안팎 · 연초 영업 미확인', map: KAIYUKAN_MAP, guide: KAIYUKAN_GUIDE, pos: [34.65516, 135.42939] },
      { time: '16:30', title: '오사카코역 출발', kind: 'move', note: '주오선 → 사카이스지선 · 약 25분 · 290엔', map: OSAKAKO_MAP, guide: KAIYUKAN_MOVE_GUIDE, pos: [34.6537, 135.4341] },
      { time: '16:55', title: '닛폰바시역 도착', kind: 'move', note: '', map: NIPPONBASHI_MAP, guide: KAIYUKAN_MOVE_GUIDE, pos: [34.66712, 135.50668] },
      { time: '17:15', title: '숙소 체크인', kind: 'stay', note: 'BON 콘도 난바 니혼바시', map: STAY_MAP, guide: '#stay', pos: [34.66824, 135.5074] },
      { time: '17:45', title: '오사카 다카시마야 백화점', kind: 'shop', note: '후보 · 난바역 · 숙소에서 도보 약 10분 · 01.02 영업시간 미확인', map: TAKASHIMAYA_MAP, pos: [34.6646, 135.50206] },
      { time: '18:30', title: '근처 거리 구경', kind: 'sight', note: '후보' },
      { time: '저녁', title: '석식', kind: 'food', note: '', meal: 'dinner' },
      { time: '20:00', title: '도톤보리 · 거리 구경', kind: 'sight', note: '', map: DOTONBORI_MAP, pos: [34.66903, 135.50157] },
      { time: '21:00', title: '야식', kind: 'food', note: '', meal: 'night' },
    ],
    meals: {
      lunch: [
        {
          title: '장어 덮밥 · Dotonbori Kurofune',
          tag: '1순위',
          lines: [
            '센니치마에 1-8-18 2층',
            '점심만 영업 · 11:00 – 14:00 또는 15:00 (표기 두 가지)',
            '주문 마감 13:45 또는 14:30 · 13:30 전에 입장',
            '장어 덮밥 2,700 – 3,700엔 · 국 · 디저트 포함',
            '정기 휴무 없음 · 01.02 영업은 확인 필요',
            '예약은 TableCheck · 전화 080-4150-2113',
          ],
          map: KUROFUNE_MAP,
          guide: KUROFUNE_GUIDE,
        },
        {
          title: '돈카츠 샤브샤브 · 아라타',
          lines: [
            '닛폰바시역 근처 · 우라난바',
            '영업시간 · 연초 영업 미확인',
          ],
          map: ARATA_MAP,
        },
        SASHISU,
      ],
      dinner: [
        {
          title: '우설 · 규탄노 레몬 오사카 본점',
          tag: '1순위',
          lines: [
            '긴테쓰닛폰바시역 5번 출구 도보 1분',
            '점심 11:00 – 15:00 · 저녁 17:00 – 21:30',
            '두꺼운 우설 구이 정식 3,280엔 (2024년 말 기준)',
            '예약 필요 · TableCheck 또는 전화 06-6964-8265',
            '01.02 영업 · 예약 가능 여부 확인 필요',
          ],
          map: LEMON_MAP,
          guide: LEMON_GUIDE,
        },
        {
          title: '비후카츠 · 그릴 캐피탈 토요테이 난바점',
          lines: [
            '난바 다이닝 메종 7층 · 다카시마야 건물',
            '11:00 – 23:00 · 주문 마감 22:00',
            '연초 영업 미확인',
          ],
          map: TOYOTEI_MAP,
        },
        {
          title: '오코노미야키 · 아지노야 본점',
          lines: [
            '난바 1-7-16 2층 · 다카시마야와 도톤보리 사이',
            '11:00 – 22:00 · 월요일 휴무',
            '줄 서는 가게',
            '연초 영업 미확인',
          ],
          map: AJINOYA_MAP,
        },
        {
          title: '오코노미야키 · 미즈노',
          lines: [
            '도톤보리',
            '11:00 – 22:00 · 주문 마감 21:00',
            '목요일 휴무 표기 있음 · 01.01 휴무',
            '연초 영업 미확인',
          ],
          map: MIZUNO_MAP,
        },
      ],
      night: [
        {
          title: '꼬치구이 · 야키돈야 타유타유',
          tag: ['1순위', '재방문'],
          lines: [
            '센니치마에 2-6-10 · 닛폰바시역 근처',
            '토일 16:00 – 24:00 · 주문 마감 23:00',
            '예약 가능 · 06-6643-8108',
            '부정기 휴무 · 01.02 영업은 12월 말 인스타그램 공지 확인',
          ],
          map: TAYUTAYU_MAP,
        },
        {
          title: '야키토리 · 다테다치',
          lines: [
            '센니치마에 2-4-12 · 긴테쓰닛폰바시역 앞 · 서서 먹는 가게',
            '15:00 – 23:30 · 주문 마감 23:00 (표기 여러 가지)',
            '예약 불가 · 현금만 · 줄 서는 가게',
            '부정기 휴무 · 01.02 영업 확인 필요 · 06-6626-9188',
          ],
          map: TATEDACHI_MAP,
        },
        SASHISU,
      ],
    },
    info: [
      {
        title: '가이유칸 (오사카 수족관)',
        tag: '확정',
        lines: [
          '오사카코역에서 도보 약 5분',
          '10:00 – 20:00 · 입장은 폐관 1시간 전까지',
          '성인 2,700엔 안팎 · 날짜별 변동 요금',
          '관람 2 – 3시간',
          '01.02 영업 · 요금은 공식 사이트에서 확인 필요',
        ],
        map: KAIYUKAN_MAP,
        guide: KAIYUKAN_GUIDE,
      },
      {
        title: '나니와 구이신보 요코초',
        tag: '선택',
        lines: [
          '덴포잔 마켓플레이스 안 · 가이유칸 바로 옆',
          '옛 오사카 골목을 재현한 먹거리 거리 · 오코노미야키 · 양식',
          '11:00 – 20:00',
        ],
        map: TEMPOZAN_MAP,
        guide: OSAKAKO_GUIDE,
      },
      {
        title: '덴포잔 대관람차',
        tag: '선택',
        lines: [
          '한 바퀴 약 15분',
          '10:00 – 21:00 · 토일 공휴일 22:00 까지',
          '900엔 또는 1,000엔 (자료마다 다름)',
        ],
        map: FERRIS_MAP,
        guide: OSAKAKO_GUIDE,
      },
    ],
  },
  {
    date: '01.03 (일)',
    tab: '1.3 일',
    title: 'Day 2 · 교토',
    guide: KYOTO_GUIDE,
    items: [
      { time: '08:00', title: '숙소 출발', kind: 'stay', note: '' },
      { time: '08:10', title: '닛폰바시역 출발', kind: 'move', note: '사카이스지선 → 한큐 (환승 2회) · 약 1시간 5분 · 630엔', map: NIPPONBASHI_MAP, guide: KYOTO_MOVE_GUIDE, pos: [34.6669, 135.5064], far: true },
      { time: '09:15', title: '한큐 아라시야마역 도착', kind: 'move', note: '', map: HANKYU_ARASHIYAMA_MAP, guide: KYOTO_MOVE_GUIDE, pos: [35.0102, 135.6820] },
      { time: '09:20', title: '도게츠교', kind: 'sight', note: '아라시야마', map: TOGETSU_MAP, pos: [35.01287, 135.67776] },
      { time: '09:50', title: '텐류지 소겐치 정원', kind: 'sight', note: '08:30 – 17:00 · 정원 500엔', map: TENRYUJI_MAP, pos: [35.01622, 135.67294] },
      { time: '10:50', title: '대나무숲 (치쿠린)', kind: 'sight', note: '', map: CHIKURIN_MAP, pos: [35.0170, 135.6717] },
      { time: '12:00', title: '중식 · 아라시야마', kind: 'food', note: '', meal: 'lunch' },
      { time: '13:00', title: '한큐 아라시야마역 출발', kind: 'move', note: '가쓰라 환승 · 약 20분 · 240엔', map: HANKYU_ARASHIYAMA_MAP, guide: KYOTO_MOVE_GUIDE },
      { time: '13:20', title: '교토가와라마치역 도착', kind: 'move', note: '', map: KAWARAMACHI_MAP, guide: KYOTO_MOVE_GUIDE, pos: [35.00376, 135.76961] },
      { time: '13:30', title: '가와라마치에서 시버스 탑승', kind: 'move', note: '기요미즈데라 방향 · 207 · 84 · 46 · 205 등', map: KAWARAMACHI_MAP, guide: KYOTO_MOVE_GUIDE },
      { time: '14:00', title: '기요미즈데라', kind: 'sight', note: '06:00 – 18:00 · 성인 500엔', map: KIYOMIZU_MAP, pos: [34.99430, 135.78444] },
      { time: '15:15', title: '산넨자카 · 니넨자카', kind: 'sight', note: '내리막 도보', map: SANNENZAKA_MAP, pos: [34.99753, 135.78106] },
      { time: '16:00', title: '야사카 신사', kind: 'sight', note: '', map: GION_MAP, pos: [35.00360, 135.77826] },
      { time: '16:30', title: '기온 하나미코지', kind: 'sight', note: '메인 거리만 · 옆 골목은 출입 · 촬영 금지', map: HANAMIKOJI_MAP, pos: [35.0022, 135.7752] },
      { time: '17:00', title: 'KUOE KYOTO 본점', kind: 'shop', note: '시계 매장 · 데라마치 산조 · 17:30 폐점일 수 있음 · 연초 영업 미확인', map: KUOE_MAP, guide: KUOE_GUIDE, pos: [35.0083, 135.7672] },
      { time: '17:30', title: '가와라마치 · 니시키 시장 · 석식', kind: 'food', note: '연초 휴무 점포 많을 수 있음', meal: 'dinner', map: NISHIKI_MAP, pos: [35.00502, 135.76557] },
      { time: '19:24', title: '교토가와라마치역 출발', kind: 'move', note: '한큐 → 사카이스지선 · 약 1시간', map: KAWARAMACHI_MAP, guide: KYOTO_MOVE_GUIDE, pos: [35.00400, 135.76935] },
      { time: '20:30', title: '닛폰바시역 도착', kind: 'move', note: '', map: NIPPONBASHI_MAP, guide: KYOTO_MOVE_GUIDE, pos: [34.66712, 135.50668], far: true },
      { time: '21:00', title: '야식 · 도톤보리', kind: 'food', note: '', meal: 'night', map: DOTONBORI_MAP },
    ],
    meals: {
      breakfast: [],
      lunch: [
        {
          title: '라멘 · 무기노 요아케',
          lines: [
            '가리비 · 산초 라멘 · 미슐랭 빕 구르망',
            '한큐 니시쿄고쿠역 근처 · 아라시야마에서 가와라마치 가는 길',
            '일요일 10:30 – 14:00 · 좌석 8석',
          ],
          map: MUGI_MAP,
          guide: KYOTO_FOOD_GUIDE,
        },
      ],
      dinner: [
        {
          title: '야키토리 · 구치바시 모단',
          lines: [
            '야키토리 코스 6,000엔',
            '18:00 – 24:00 · 최종 입점 22:00 · 수 목 휴무',
            '예약이 어려움 · 한 달 전 전화 예약 075-352-0633',
            '코스를 먹으면 19:24 복귀는 못 맞춤',
          ],
          map: KUCHIBASHI_MAP,
          guide: KYOTO_FOOD_GUIDE,
        },
      ],
      night: [
        {
          title: '쿠시카츠 · 다루마 도톤보리점',
          lines: [
            '쿠시카츠 · 도테야키 · 도톤보리',
            '토일 10:30 – 22:30 · 주문 마감 22:00',
            '연초 영업 미확인',
          ],
          map: DARUMA_MAP,
        },
        {
          title: '타코야키 · 주하치반 도톤보리점',
          lines: [
            '도톤보리 · 걸으며 간식',
            '11:00 – 22:00',
            '연초 영업 미확인',
          ],
          map: JUHACHIBAN_MAP,
        },
        {
          title: '우동 · 츠루톤탄 소에몬초점',
          lines: [
            '소에몬초 · 도톤보리 강 북쪽',
            '11:00 – 익일 06:00 · 금토는 08:00 까지',
            '연초 영업 미확인',
          ],
          map: TSURUTONTAN_MAP,
        },
      ],
    },
    info: [
      {
        title: '도게츠교 · 대나무숲',
        tag: '초안',
        lines: [
          '아라시야마 산책 코스 · 무료',
          '토롯코 열차 · 호즈강 뱃놀이는 01.03 운휴',
        ],
        map: TOGETSU_MAP,
        guide: KYOTO_GUIDE,
      },
      {
        title: '텐류지 소겐치 정원',
        tag: '초안',
        lines: [
          '08:30 – 17:00 · 접수 16:50 까지',
          '정원 500엔 · 제당 포함 +300엔',
          '정원만 약 30분',
        ],
        map: TENRYUJI_MAP,
        guide: KYOTO_GUIDE,
      },
      {
        title: '기요미즈데라',
        tag: '초안',
        lines: [
          '가와라마치에서 시버스 · 걷기엔 멂',
          '06:00 – 18:00',
          '성인 500엔',
        ],
        map: KIYOMIZU_MAP,
        guide: KYOTO_GUIDE,
      },
      {
        title: '산넨자카 · 니넨자카',
        tag: '초안',
        lines: [
          '기요미즈데라에서 야사카 신사 쪽으로 내려가는 돌길',
        ],
        map: SANNENZAKA_MAP,
        guide: KYOTO_GUIDE,
      },
      {
        title: '야사카 신사 · 기온 하나미코지',
        tag: '초안',
        lines: [
          '하나미코지 메인 거리는 통행 · 촬영 가능',
          '옆 골목 돌길은 사도 · 출입 · 촬영 금지 (벌금 1만엔 표지)',
        ],
        map: HANAMIKOJI_MAP,
        guide: KYOTO_GUIDE,
      },
      {
        title: 'KUOE KYOTO 본점',
        tag: '초안',
        lines: [
          '시계 매장 · 데라마치 산조',
          '11:00 – 18:00 (17:30 표기도 있음) · 화요일 휴무',
          '예약 불필요',
          '01.03 영업 여부 확인 필요',
        ],
        map: KUOE_MAP,
        guide: KUOE_GUIDE,
      },
      {
        title: '니시키 시장 · 상점가',
        tag: '초안',
        lines: [
          '니시키 시장 · 신쿄고쿠 · 데라마치 상점가가 붙어 있음',
          '01.01 – 01.03 은 쉬는 점포 많음',
        ],
        map: NISHIKI_MAP,
        guide: KYOTO_GUIDE,
      },
      {
        title: '당고 · 잇큐안',
        tag: '선택',
        lines: [
          '미니 당고 7종 + 말차 세트',
          '마루야마 공원 · 고다이지 쪽 · 니넨자카에서 야사카 신사 가는 길',
          '10:00 – 17:00 · 부정기 휴무',
        ],
        map: IKKYU_MAP,
        guide: KYOTO_FOOD_GUIDE,
      },
      {
        title: '말차 파르페 · 살롱 드 무게',
        tag: '선택',
        lines: [
          '기쿠노이의 찻집 (無碍山房) · 고다이지 근처',
          '찻집 11:30 – 17:00 주문 마감 · 예약석 없음',
          '화요일 휴무 · 연말연시 휴무 있음',
        ],
        map: MUGE_MAP,
        guide: KYOTO_FOOD_GUIDE,
      },
      {
        title: '후시미이나리 신사',
        tag: '선택',
        lines: [
          '새해 연휴라 연중 가장 붐빔 · 피크 10:00 – 16:00',
          '게이한 후시미이나리역에서 바로',
        ],
        map: FUSHIMI_MAP,
        guide: KYOTO_GUIDE,
      },
    ],
  },
  {
    date: '01.04 (월)',
    tab: '1.4 월',
    title: 'Day 3 · 나라',
    guide: NARA_GUIDE,
    items: [
      { time: '09:00', title: '숙소 출발', kind: 'stay', note: '' },
      { time: '09:15', title: '긴테쓰닛폰바시역 출발', kind: 'move', note: '쾌속급행 · 급행 · 환승 없음 · 약 40분 · 680엔', map: KINTETSU_NIPPONBASHI_MAP, guide: NARA_MOVE_GUIDE, pos: [34.66691, 135.50570], far: true },
      { time: '09:55', title: '긴테쓰나라역 도착', kind: 'move', note: '', map: KINTETSU_NARA_MAP, guide: NARA_MOVE_GUIDE, pos: [34.68435, 135.82690] },
      { time: '10:00', title: '나라공원 · 사슴', kind: 'sight', note: '', map: NARA_PARK_MAP, pos: [34.68380, 135.83650] },
      { time: '10:30', title: '고후쿠지', kind: 'sight', note: '', map: KOFUKUJI_MAP, pos: [34.68297, 135.83187] },
      { time: '11:15', title: '도다이지 대불전', kind: 'sight', note: '08:00 – 17:00 · 성인 800엔', map: TODAIJI_MAP, pos: [34.68899, 135.83982] },
      { time: '12:30', title: '중식', kind: 'food', note: '', meal: 'lunch' },
      { time: '13:30', title: '가스가타이샤', kind: 'sight', note: '', map: KASUGA_MAP, pos: [34.68140, 135.84830] },
      { time: '15:00', title: '나라마치 산책 · 카페', kind: 'sight', note: '', map: NARAMACHI_MAP, pos: [34.67800, 135.82950] },
      { time: '17:30', title: '석식', kind: 'food', note: '', meal: 'dinner' },
      { time: '19:00', title: '긴테쓰나라역 출발', kind: 'move', note: '쾌속급행 · 급행 · 약 40분 · 680엔', map: KINTETSU_NARA_MAP, guide: NARA_MOVE_GUIDE, pos: [34.68455, 135.82715] },
      { time: '19:40', title: '긴테쓰닛폰바시역 도착', kind: 'move', note: '', map: KINTETSU_NIPPONBASHI_MAP, guide: NARA_MOVE_GUIDE, pos: [34.66710, 135.50595], far: true },
      { time: '21:00', title: '야식 · 난바', kind: 'food', note: '', meal: 'night' },
    ],
    meals: {
      breakfast: [],
      lunch: [],
      dinner: [],
      night: [
        {
          title: '라이브 음악 바 · BEAT CAFE MIXX',
          tag: '재방문',
          lines: [
            '난바 1-5-3 시스터 빌딩 지하 1층 · 호젠지 근처',
            '19:00 – · 주문 마감 24:00 (01:00 · 04:00 표기도 있음)',
            '일요일 · 공휴일 휴무 표기 · 01.04 영업 확인 필요 · 06-6213-5050',
            '공연 일정 · 요금 미확인',
          ],
          map: BEATCAFE_MAP,
        },
        {
          title: '카스 우동 · 우노타케',
          lines: [
            '니시신사이바시 2-9-5 2층 · 난바역 25번 출구 도보 5분',
            '20:00 – 익일 03:00 · 수요일 휴무',
            '연초 영업 미확인',
          ],
          map: UNOTAKE_MAP,
        },
        SASHISU,
      ],
    },
    info: [
      {
        title: '나라공원 · 사슴',
        tag: '초안',
        lines: [
          '긴테쓰나라역에서 도보 약 8분',
        ],
        map: NARA_PARK_MAP,
        guide: NARA_GUIDE,
      },
      {
        title: '고후쿠지',
        tag: '초안',
        lines: [
          '긴테쓰나라역에서 도보 5 – 10분',
          '오층탑은 수리 중일 수 있음 (미확인)',
          '시간 · 요금 미확인',
        ],
        map: KOFUKUJI_MAP,
        guide: NARA_GUIDE,
      },
      {
        title: '도다이지 대불전',
        tag: '초안',
        lines: [
          '긴테쓰나라역에서 도보 약 20분',
          '08:00 – 17:00 · 최종 입관 16:30',
          '성인 800엔',
        ],
        map: TODAIJI_MAP,
        guide: NARA_GUIDE,
      },
      {
        title: '가스가타이샤',
        tag: '초안',
        lines: [
          '긴테쓰나라역에서 도보 약 25분',
          '시간 · 요금 미확인',
        ],
        map: KASUGA_MAP,
        guide: NARA_GUIDE,
      },
      {
        title: '나라마치',
        tag: '초안',
        lines: [
          '옛 거리 산책 · 카페',
          '연초 휴무 점포 있을 수 있음',
        ],
        map: NARAMACHI_MAP,
        guide: NARA_GUIDE,
      },
    ],
  },
  {
    date: '01.05 (화)',
    tab: '1.5 화',
    title: 'Day 4 · 귀국',
    guide: DAY4_GUIDE,
    items: [
      { time: '10:00', title: '숙소 체크아웃', kind: 'stay', note: '', guide: '#stay', pos: [34.66802, 135.50714], far: true },
      { time: '10:30', title: '난카이 난바역 출발', kind: 'move', note: '공항급행 · 환승 없음 · 약 40분 · 820엔', map: NAMBA_MAP, guide: RINKU_GUIDE, pos: [34.66340, 135.50200], far: true },
      { time: '11:10', title: '린쿠타운역 도착', kind: 'move', note: '', map: RINKU_STATION_MAP, guide: RINKU_GUIDE, pos: [34.41075, 135.29966] },
      { time: '11:30', title: '점심 · 린쿠 프리미엄 아울렛', kind: 'shop', note: '역에서 도보 약 6분 · 10:00 – 20:00', map: OUTLET_MAP, guide: OUTLET_GUIDE, pos: [34.40811, 135.29506] },
      { time: '13:00', title: '돈키호테 린쿠점', kind: 'shop', note: '역에서 도보 약 5분', map: DONKI_MAP, guide: DONKI_GUIDE, pos: [34.40769, 135.29848] },
      { time: '14:00', title: '센슈노유 온천', kind: 'sight', note: '수건 대여 100엔 · 목욕 수건 200엔', map: ONSEN_MAP, guide: ONSEN_GUIDE, pos: [34.41501, 135.29838] },
      { time: '16:30', title: '린쿠타운역 출발', kind: 'move', note: '공항급행 · 6분 · 370엔', map: RINKU_STATION_MAP, guide: RINKU_GUIDE, pos: [34.41095, 135.29992] },
      { time: '16:36', title: '간사이공항역 도착', kind: 'move', note: '', map: MEET_MAP, guide: RINKU_GUIDE, pos: [34.43580, 135.24354], far: true },
      { time: '16:40', title: '난카이선 개찰구 앞 해산', kind: 'meet', note: '코2 는 걸어서 T1 · 코1 이1 은 에어로플라자 앞 셔틀로 T2 (7 – 9분)', map: MEET_MAP },
      { time: '19:20', title: '간사이 T1 출발', kind: 'flight', note: 'TW314', who: ['코2'] },
      { time: '19:50', title: '간사이 T2 출발', kind: 'flight', note: '', who: ['코1', '이1'] },
      { time: '20:55', title: '대구 도착', kind: 'flight', note: '', who: ['코2'] },
      { time: '21:50', title: '인천 도착', kind: 'flight', note: '', who: ['코1', '이1'] },
    ],
    meals: { breakfast: [], lunch: [] },
    info: [
      {
        title: '린쿠 프리미엄 아울렛',
        tag: '확정',
        lines: [
          '린쿠타운역에서 도보 약 6분',
          '10:00 – 20:00 · 연초 변동 가능',
          '약 210개 매장 · 푸드코트 있음',
        ],
        map: OUTLET_MAP,
        guide: OUTLET_GUIDE,
      },
      {
        title: '돈키호테 린쿠점',
        tag: '확정',
        lines: [
          '린쿠타운역에서 도보 약 5분 · 니토리 쇼핑센터 1층',
          '09:00 – 익일 01:00',
          '코1 · 이1 은 기내 수하물만 · 액체 100ml 이하 · 술 불가',
        ],
        map: DONKI_MAP,
        guide: DONKI_GUIDE,
      },
      {
        title: '센슈노유 온천',
        lines: [
          '린쿠타운역에서 도보 약 8분',
          '07:00 – 24:00 · 최종 입장 23:30',
          '평일 900엔 · 연말연시는 특별 요금',
          '수건 100엔 · 목욕 수건 200엔 · 샴푸 등 비치',
          '캐리어는 프런트 보관 · 1개 500엔',
        ],
        map: ONSEN_MAP,
        guide: ONSEN_GUIDE,
      },
    ],
  },
];
