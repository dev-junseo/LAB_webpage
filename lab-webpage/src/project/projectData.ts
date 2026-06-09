export type Status = "Done" | "In Progress";

// 기대 효과 한 줄을 이루는 텍스트 조각 (bold === 강조 표시)
export interface EffectPart {
  text: string;
  bold?: boolean;
}

export interface ResearchItem {
  title: string;
  desc: string;
}

export interface Stat {
  label: string;
  value: string;
  iconPath: string;
}

export interface Achievements {
  stats: Stat[];
  list: string[];
}

export interface ProjectData {
  id: string;
  status: Status;
  // 카드/모달 배너
  image: string;
  bannerClass: string;
  category: string;
  org: string;
  // 텍스트
  title: string;
  description: string;
  englishTitle: string;
  // 모달 상세
  period: string;
  periodSub?: string;
  keywords: string[];
  research: ResearchItem[];
  effects: EffectPart[][];
  achievements?: Achievements;
}

const GRADIENT_BANNER = "bg-gradient-to-br from-blue-900 to-blue-700";

export const projects: ProjectData[] = [
  // ===================== Project 1 : 6.5% 고규소 전기강판 =====================
  {
    id: "silicon",
    status: "In Progress",
    image: "",
    bannerClass: GRADIENT_BANNER,
    category: "자동차산업기술개발 (철강세라믹)",
    org: "포스코 주관 · 산업통상자원부 · KEIT",
    title: "고규소 전기강판·xEV 구동모터 제조기술 개발",
    description:
      "규소 함량 6.5%급 광폭 전기강판 및 xEV 전비 향상형 코어·구동모터 제조기술 개발",
    englishTitle:
      "Development of Manufacturing Technology for 6.5% Silicon Wide Electrical Steel Sheets and xEV Energy-Efficiency-Improved Cores and Drive Motors",
    period: "2026. 04 ~ (1단계 3년 + 2단계 2년)",
    periodSub: "포스코 주관 · 산업통상자원부 · KEIT (자동차산업기술개발)",
    keywords: [
      "6.5% 고규소 전기강판",
      "광폭 (600mm)",
      "xEV 전비 향상",
      "저철손",
      "확산 열처리",
      "집합조직 제어",
    ],
    research: [
      {
        title: "광폭 고규소(6.5%) 전기강판 제조기술 개발",
        desc: "두께 0.2mm 이하, 폭 600mm 이상 광폭 규격의 고규소 전기강판 제조 및 집합조직 제어 기술 개발",
      },
      {
        title: "확산 열처리 공정 및 시뮬레이션 정교화",
        desc: "확산 열처리 설비 구축 및 CALPHAD 기반 확산 시뮬레이션을 통한 자성 최적 확산 형태·확산량 도출 (부경대 담당)",
      },
      {
        title: "주파수별 철손/자속밀도 예측 모델 개발",
        desc: "저주파(50Hz) 측정 데이터로 고주파(400Hz·1kHz·20kHz) 철손·자속밀도를 예측하는 회귀/머신러닝 모델 구축",
      },
      {
        title: "xEV 구동모터용 코어 설계·제조 및 차량 적용성 검증",
        desc: "고규소 전기강판 적용 고속·고효율 xEV 구동모터 설계·제조 및 HILS 기반 실주행 전비 평가",
      },
    ],
    effects: [
      [
        { text: "기존 3.5% 규소 전기강판 대비 " },
        { text: "철손 저감 및 모터 효율 향상", bold: true },
      ],
      [
        { text: "xEV 전비 개선 및 주행거리 향상", bold: true },
        { text: "에 기여" },
      ],
      [
        { text: "광폭 규격 구현을 통한 " },
        { text: "양산성 확보 및 소재 국산화", bold: true },
      ],
      [
        { text: "고속·고효율 구동모터 " },
        { text: "차량 적용성 검증", bold: true },
      ],
    ],
  },

  // ===================== Project 2 : Multimodal AI =====================
  {
    id: "multimodal",
    status: "In Progress",
    image: "",
    bannerClass: GRADIENT_BANNER,
    category: "개인기초연구 (신진연구)",
    org: "한국연구재단 · 국립부경대학교",
    title: "AI 기반 모터 코어 신소재·제조공정 개발",
    description:
      "Multimodal·Multi-Fidelity AI 및 베이지안 최적화 기반 고성능 자성·고내식 모터 코어용 3D 프린팅·HIP 신소재 및 AI 제어 제조공정 개발",
    englishTitle:
      "Development of 3D Printing·HIP Motor-Core Materials and AI-Controlled Manufacturing Processes via Multimodal·Multi-Fidelity AI and Bayesian Optimization",
    period: "2026. 03. 01 ~ 2029. 02. 28",
    periodSub: "한국연구재단 · 개인기초연구(신진연구, 유형A)",
    keywords: [
      "Multimodal·Multi-Fidelity AI",
      "베이지안 최적화",
      "3D 프린팅·HIP",
      "고성능 자성",
      "고내식 모터 코어",
    ],
    research: [
      {
        title: "Multimodal·Multi-Fidelity AI 기반 재료 물성 예측",
        desc: "서로 다른 정밀도(Multi-Fidelity)와 다종 데이터(Multimodal)를 통합한 AI 모델로 모터 코어 소재의 자성·내식 물성을 예측",
      },
      {
        title: "베이지안 최적화 기반 고성능 자성·고내식 소재 설계",
        desc: "베이지안 최적화를 활용해 최소 실험으로 고성능 자성과 고내식 특성을 동시에 만족하는 신소재 조성·조건 탐색",
      },
      {
        title: "3D 프린팅·HIP 신소재 및 AI 제어 제조공정 개발",
        desc: "3D 프린팅·HIP(열간정수압성형) 공정을 적용한 모터 코어 신소재 제조 및 AI 기반 제조공정 자동 제어 기술 개발",
      },
    ],
    effects: [
      [
        { text: "고성능 자성과 " },
        { text: "고내식 특성을 동시 확보", bold: true },
        { text: "한 모터 코어 신소재 개발" },
      ],
      [
        { text: "AI 기반 제조공정 자동 제어", bold: true },
        { text: "를 통한 공정 효율 및 재현성 향상" },
      ],
      [
        { text: "3D 프린팅·HIP 기술을 통한 " },
        { text: "복잡 형상 일체형 코어 제조", bold: true },
      ],
      [
        { text: "재료·AI " },
        { text: "융합 연구 역량 및 전문 인력 양성", bold: true },
      ],
    ],
  },

  // ===================== Project 3 : RISE =====================
  {
    id: "rise",
    status: "Done",
    image: "/images/2026_RISE_1차년도_통합성과공유회.jpg",
    bannerClass: "bg-gray-100",
    category: "산학공동기술개발과제",
    org: "국립부경대학교 RISE사업단",
    title: "모빌리티 소재, 요소부품 기술 개발",
    description:
      "재료 AI 최적화법을 활용한 고성능 모터 코어용 초극박 확산형 전기강판 제조 기술 개발",
    englishTitle:
      "Development of ultra-thin diffusion-type electrical steel sheet manufacturing technology for high-performance motor cores using material AI optimization method",
    period: "2025. 08 ~ 2025. 12. 31",
    keywords: [
      "AI 모델",
      "초극박 전기강판",
      "집합조직 최적화",
      "확산형 코팅 제어",
      "모터 코어",
    ],
    research: [
      {
        title: "스마트 공정 제어형 분산 최소화 TuRBO AI 모델 개발",
        desc: "기존 BO 기법에 공정 최적화된 TuRBO 알고리즘 개발 및 전기강판 성분/공정 조건 최적화 AI 시스템 구축",
      },
      {
        title: "AI 기반 집합조직 최적화 및 자성 특성 극대화",
        desc: "AI 기반 집합조직 예측 및 제어 기술, 모터 코어 에너지 감소를 위한 조건 도출",
      },
      {
        title: "지능형 코팅 및 확산 제어 기술",
        desc: "신개념 코팅 적층 메커니즘 분석 및 고절연 코팅 조건 도출",
      },
    ],
    effects: [
      [
        { text: "TuRBO AI 기반 초극박", bold: true },
        { text: " 제조 기술 확보 (0.1mm 이하)" },
      ],
      [
        { text: "모터 코어 " },
        { text: "에너지 손실 15% 이상 감소", bold: true },
        { text: " (0.5mm 대비)" },
      ],
      [{ text: "초극박 제품의 " }, { text: "국산화 및 기술 자립", bold: true }],
      [
        { text: "차세대 모빌리티 분야 " },
        { text: "전문 인력 양성", bold: true },
      ],
    ],
    achievements: {
      stats: [
        {
          label: "논문 게재",
          value: "3건",
          iconPath:
            "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        },
        {
          label: "특허 출원",
          value: "1건",
          iconPath:
            "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        },
        {
          label: "학술대회 발표",
          value: "1건",
          iconPath:
            "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        },
      ],
      list: [
        "하준서, 장호성, 신선미, 박창수 and 박세민. (2025). Predicting Grain Size of Fe Si Alloys Steel Sheet through Magnetic Properties and Machine Learning with XAI. Journal of Magnetics, 30(3), 360-373.",
        "고은수 and 박세민. (2025). 박판 Fe-Si 전기강판의 Al 코팅 확산 열처리 시 진공도가 확산 거동에 미치는 영향. 열처리공학회지, 38(6), 1-8.",
        "오지은 and 박세민. (2025). GAN 기반 데이터 증강과 머신러닝을 활용한 극박 무방향성 전기강판 히스테리시스 곡선 및 철손 예측 연구. 한국자기학회지, 35(6), 341-350.",
      ],
    },
  },
];
