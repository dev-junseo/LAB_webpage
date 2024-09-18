import Submenu from "../components/layout/Submenu";

function Pi() {
  return (
    <div>
      <Submenu />

      <div className="mx-[10%] mt-12">
        <div className="flex justify-center">
          <div>
            <div className="text-center text-[60px] lg:mb-28 mb-16 text-title animate-[gotoDown_0.7s_ease-in-out_both]">
              <span>PROFESSOR</span>
            </div>
            <div className="flex justify-center items-center flex-col lg:flex-row">
              <div className="w-full">
                <div className="lg:mx-0 mx-0 mt-12 flex justify-center items-center">
                  <img
                    alt="logo"
                    src="/images/prof-profile.png"
                    className="block w-[200px] h-[260px]"
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
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                      />
                    </svg>
                    Introduce
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pi;
