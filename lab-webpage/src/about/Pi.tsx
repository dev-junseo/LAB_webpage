import Submenu from "../components/layout/Submenu";

function Pi() {
  return (
    <div>
      <div className="mx-[10%] mt-12">
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center text-[60px] lg:mb-28 mb-16 text-title animate-[gotoDown_0.7s_ease-in-out_both]">
              <span>PROFESSOR</span>
            </div>
            <div className="flex justify-center items-center flex-col lg:flex-row">
              <div className="w-full">
                <div className="lg:mt-20 mt-5 flex justify-center items-center">
                  <img
                    alt="logo"
                    src="/images/prof-profile.png"
                    className="block w-[200px] h-[240px]"
                  />
                </div>
              </div>

              <div className="w-[90%] lg:mt-10">
                <div className="inline-block mb-6 leading-6 text-lg font-medium">
                  <div className="mb-4 text-2xl font-bold text-title flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    Prof
                  </div>
                  <span className="text-4xl font-bold">Se Min Park</span>
                  <div className="ml-2">
                    <b className="ml-2">
                      Advanced Steel Design & Data Fusion Lab
                    </b>{" "}
                    focuses on improving the properties of magnetic materials,
                    such as steel cores, which are essential in advanced
                    mobility applications. We conduct research on vacuum and gas
                    heat treatments, analyze magnetic properties, and evaluate
                    texture and rolling characteristics. Additionally, we
                    develop new materials by optimizing various processes using
                    AI and predicting material properties through metal material
                    simulations.
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pi;
