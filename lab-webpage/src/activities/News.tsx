import NewsBox from "../components/NewsBox";

function News() {
  const news_2026 = [
    {
      date: "2026.02.12",
      comments:
        "RISE 1차년도 통합성과공유회에서 '재료 AI 최적화법을 활용한 고성능 모터코어용 초극박 확산형 전기강판 제조 기술 개발' 주제로 연구 우수사례로 선정되었습니다.",
    },
  ];
  const news_2025 = [
    {
      date: "2025.11.26",
      comments:
        "2025 KMS Winter Conference_Post Discussion에 참가하여 김현아, 오지은, 하준서 학생이 포스터 발표를 하였습니다.",
    },
    {
      date: "2025.11.25",
      comments:
        "고은수 학생의 '박판 Fe-Si 전기강판의 Al 코팅 확산 열처리 시 진공도가 확산 거동에 미치는 영향' 논문이 KSHT에 게재되었습니다. 축하합니다!",
    },
    {
      date: "2025.09.19",
      comments:
        "유민상 학생이 포스코 청년 AI Big Data 아카데미 31기에 최종 선발되었습니다. 축하합니다!",
    },
    {
      date: "2025.09.08",
      comments:
        "독일 항공 우주센터 이수석 연구원님이 '독일항공우주센터 소개 및 AI를 통해 와류가 항공기에 미치는 영향' 주제로 강연을 해주셨습니다.",
    },
    {
      date: "2025.09.08",
      comments:
        "하준서 학생의 'Predicting Grain Size of Fe Si Alloy Steel Sheet through Magnetic Properties and Machine Learning with XAI' 논문이 Journal of Magnetics에 게재되었습니다. 축하합니다!",
    },
    {
      date: "2025.08.27",
      comments:
        "고은수, 유민상 학생이 내가 원하는 융복합 교양과목 공모전에서 '생활속 AI와 데이터' 주제로 우수상을 수상하였습니다. 축하합니다!",
    },
    {
      date: "2025.08.14",
      comments: "PKNU RISE 산업단 산학공동기술개발과제에 착수하였습니다.",
    },
    {
      date: "2025.07.01",
      comments:
        "오지은 학생의 'GAN과 AutoML의 조합을 통한 박판 Fe-Si 합금의 자기 특성 예측 및 프로세스 최적화' 논문이 KJMM에 게재되었습니다. 축하합니다!",
    },
    {
      date: "2025.06.19",
      comments:
        "김현아 학생의 '머신러닝 및 XAI 기반 최적화를 통한 L-PBF 박판 3.3% Si 전기강판의 제조 공정 및 특성 분석' 논문이 KJMM에 게재되었습니다. 축하합니다!",
    },
    {
      date: "2025.02.14",
      comments: "고은수 학생이 교육성과 우수자로 선정되었습니다. 축하합니다!",
    },
    {
      date: "2025.02.13",
      comments: "Technology Exchange Meeting with POMIA",
    },
  ];
  const news_2024 = [
    {
      date: "2024.11.27",
      comments:
        "2024 KMS Winter Conference_Soft Magentics Symposium 에 참가하여 구두발표를 하였습니다.",
    },
    {
      date: "2024.11.14",
      comments:
        "세계 부식의 날(Corrosion Awareness Day) 2024 제5회 부식 사례 포스터 공모전 에서 대학부 수상자로 선정되었습니다. 축하합니다!",
    },
  ];
  const news_2023 = [
    {
      date: "2023.09.02",
      comments: "박세민 교수님이 조교수로 부경대학교에 오셨습니다.",
    },
  ];

  return (
    <div>
      <div className="mx-[10%] mt-12">
        <div className="flex justify-center items-center flex-col">
          <div className="mb-20">
            <div className="text-center text-[60px] lg:mb-28 mb-16 text-title animate-[gotoDown_0.7s_ease-in-out_both]">
              <span>NEWS</span>
            </div>
          </div>
          <div>
            <div className="w-full mb-32">
              <div className="text-center text-[60px] mb-10 text-title border-b-2 border-b-title">
                <div className="mb-4">2026</div>
              </div>
              <div className="">
                {news_2026.map((info) => {
                  return <NewsBox info={info} />;
                })}
              </div>
            </div>
            <div className="w-full mb-32">
              <div className="text-center text-[60px] mb-10 text-title border-b-2 border-b-title">
                <div className="mb-4">2025</div>
              </div>
              <div className="">
                {news_2025.map((info) => {
                  return <NewsBox info={info} />;
                })}
              </div>
            </div>
            <div className="w-full mb-32">
              <div className="text-center text-[60px] mb-10 text-title border-b-2 border-b-title">
                <div className="mb-4">2024</div>
              </div>
              <div className="">
                {news_2024.map((info) => {
                  return <NewsBox info={info} />;
                })}
              </div>
            </div>
            <div className="w-full">
              <div className="text-center text-[60px] mb-10 text-title border-b-2 border-b-title">
                <div className="mb-4">2023</div>
              </div>
              <div className="">
                {news_2023.map((info) => {
                  return <NewsBox info={info} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
