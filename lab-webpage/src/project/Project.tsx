import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import Modal from "../components/Modal";

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Projects
      </h1>

      <div className="max-w-4xl mx-auto">
        <Card
          className="hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="relative h-64 overflow-hidden bg-gray-100">
            <img
              src="/images/2026_RISE_1차년도_통합성과공유회.jpg"
              alt="RISE Project"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // 이미지 로드 실패 시 대체 배경색 표시
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <span className="bg-blue-600 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                  산학공동기술개발과제
                </span>
                <p className="text-sm font-medium opacity-90">
                  국립부경대학교 RISE사업단
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white/90 text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                Click for Details
              </span>
            </div>
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-blue-900 mb-2">
              모빌리티 소재, 요소부품 기술 개발
            </CardTitle>
            <p className="text-lg font-medium text-gray-700">
              재료 AI 최적화법을 활용한 고성능 모터 코어용 초극박 확산형
              전기강판 제조 기술 개발
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              Development of ultra-thin diffusion-type electrical steel sheet
              manufacturing technology for high-performance motor cores using
              material AI optimization method
            </p>
          </CardHeader>
        </Card>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Project Details"
      >
        <div className="space-y-8">
          <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-inner">
            <img
              src="/images/2026_RISE_1차년도_통합성과공유회.jpg"
              alt="RISE Project Detail"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="border-b pb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              모빌리티 소재, 요소부품 기술 개발
            </h2>
            <p className="text-lg text-gray-800 font-medium">
              재료 AI 최적화법을 활용한 고성능 모터 코어용 초극박 확산형
              전기강판 제조 기술 개발
            </p>
          </div>

          <CardContent className="space-y-8 !p-0">
            {/* 연구 개요 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div>
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  연구 기간
                </h4>
                <p className="text-gray-700 text-base">2025. 08 ~ 2025. 12. 31</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01"
                    />
                  </svg>
                  키워드
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI 모델",
                    "초극박 전기강판",
                    "집합조직 최적화",
                    "확산형 코팅 제어",
                    "모터 코어",
                  ].map((keyword, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-blue-800 text-xs px-3 py-1 rounded-full shadow-sm border border-blue-200"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 세부 연구 내용 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 mr-4 rounded-full"></span>
                주요 연구 내용
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start bg-gray-50 p-5 rounded-lg hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-base font-bold mr-4">
                    1
                  </span>
                  <div>
                    <strong className="text-gray-900 text-base block mb-1">
                      스마트 공정 제어형 분산 최소화 TuRBO AI 모델 개발
                    </strong>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      기존 BO 기법에 공정 최적화된 TuRBO 알고리즘 개발 및
                      전기강판 성분/공정 조건 최적화 AI 시스템 구축
                    </p>
                  </div>
                </li>
                <li className="flex items-start bg-gray-50 p-5 rounded-lg hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-base font-bold mr-4">
                    2
                  </span>
                  <div>
                    <strong className="text-gray-900 text-base block mb-1">
                      AI 기반 집합조직 최적화 및 자성 특성 극대화
                    </strong>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      AI 기반 집합조직 예측 및 제어 기술, 모터 코어 에너지
                      감소를 위한 조건 도출
                    </p>
                  </div>
                </li>
                <li className="flex items-start bg-gray-50 p-5 rounded-lg hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-base font-bold mr-4">
                    3
                  </span>
                  <div>
                    <strong className="text-gray-900 text-base block mb-1">
                      지능형 코팅 및 확산 제어 기술
                    </strong>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      신개념 코팅 적층 메커니즘 분석 및 고절연 코팅 조건 도출
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 기대 효과 */}
            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-green-500 mr-4 rounded-full"></span>
                기대 효과
              </h3>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-sm">
                <ul className="flex flex-col gap-4">
                  {[
                    <>
                      <span className="font-bold text-green-800">
                        TuRBO AI 기반 초극박
                      </span>{" "}
                      제조 기술 확보 (0.1mm 이하)
                    </>,
                    <>
                      모터 코어{" "}
                      <span className="font-bold text-green-800">
                        에너지 손실 15% 이상 감소
                      </span>{" "}
                      (0.5mm 대비)
                    </>,
                    <>
                      초극박 제품의{" "}
                      <span className="font-bold text-green-800">
                        국산화 및 기술 자립
                      </span>
                    </>,
                    <>
                      차세대 모빌리티 분야{" "}
                      <span className="font-bold text-green-800">
                        전문 인력 양성
                      </span>
                    </>,
                  ].map((effect, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-base">
                      <svg
                        className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 연구 성과 */}
            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-purple-600 mr-4 rounded-full"></span>
                연구 성과
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-50 p-5 rounded-xl border border-purple-100 flex flex-col items-center text-center shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-3">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-purple-900 mb-1">논문 게재</h4>
                  <p className="text-purple-700 text-2xl font-black">3건</p>
                </div>

                <div className="bg-purple-50 p-5 rounded-xl border border-purple-100 flex flex-col items-center text-center shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-3">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-purple-900 mb-1">특허 출원</h4>
                  <p className="text-purple-700 text-2xl font-black">1건</p>
                </div>

                <div className="bg-purple-50 p-5 rounded-xl border border-purple-100 flex flex-col items-center text-center shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-3">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-purple-900 mb-1">
                    학술대회 발표
                  </h4>
                  <p className="text-purple-700 text-2xl font-black">1건</p>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h5 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">
                  상세 성과 목록
                </h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>
                      하준서, 장호성, 신선미, 박창수 and 박세민. (2025).
                      Predicting Grain Size of Fe Si Alloys Steel Sheet through
                      Magnetic Properties and Machine Learning with XAI. Journal
                      of Magnetics, 30(3), 360-373.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>
                      고은수 and 박세민. (2025). 박판 Fe-Si 전기강판의 Al 코팅
                      확산 열처리 시 진공도가 확산 거동에 미치는 영향.
                      열처리공학회지, 38(6), 1-8.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>
                      오지은 and 박세민. (2025). GAN 기반 데이터 증강과
                      머신러닝을 활용한 극박 무방향성 전기강판 히스테리시스 곡선
                      및 철손 예측 연구. 한국자기학회지, 35(6), 341-350.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>

          <div className="mt-8 text-center border-t pt-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-8 py-3 bg-blue-900 text-white rounded-full font-bold hover:bg-blue-800 transition-colors shadow-lg"
            >
              닫기
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Project;
