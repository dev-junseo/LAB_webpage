import Submenu from "../components/layout/Submenu";

function Overview() {
  return (
    <div className="w-full h-screen bg-white">
      <Submenu menuName="ABOUT" />

      <div className="mx-[10%] mt-[70px]">
        <div className="flex justify-center">
          <div>
            <div className="text-center text-[60px] mb-10 text-title">
              <span>OVERVIEW</span>
            </div>
            <div className="flex justify-center items-center flex-col lg:flex-row">
              <div className="w-full">
                <div className="lg:mx-0 mx-0 mt-12 flex justify-center items-center">
                  <img
                    src="/images/lab-logo.png"
                    className="block w-[400px] h-[400px]"
                  />
                </div>
              </div>

              <div className="w-[90%]">
                <span className="inline-block mb-[20px] leading-[23px] text-[18px] font-medium">
                  <b>데이터 융합 철강소재 설계 연구실</b>에서는 철강 재료를
                  기반으로 첨단 모빌리티에 중요한 소재로 활용되는 철심 등의 자성
                  재료의 특성 향상을 연구를 하고 있으며, 이를 통해 재료의
                  진공/가스 열처리, 자성 특성 분석과 집합 조직, 압연 특성 등을
                  분석하고 평가하고 있습니다. 또한 AI를 활용한 재료 제조시
                  다양한 공정 최적화와 금속 재료 시뮬레이션을 통한 재료 특성
                  예측을 통해 신소재를 개발하는 연구를 하고 있습니다.
                </span>
                <span className="inline-block mb-[20px] leading-[23px] text-[18px] font-medium"></span>

                <div className="mt-[20px] font-semibold">
                  데이터 융합 철강소재 설계 연구실
                  <strong className="pl-[20px] font-bold text-[20px]">
                    Prof. 박세민
                  </strong>
                  <img src="" className="inline-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
