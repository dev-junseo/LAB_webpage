import Submenu from "../components/layout/Submenu";

function Members() {
  return (
    <div>
      <div className="mx-[10%] mt-12">
        <div className="flex justify-center">
          <div>
            <div className="text-center lg:mb-28 mb-16 animate-[gotoDown_0.7s_ease-in-out_both] flex justify-center items-center flex-col">
              <span className="text-title text-[60px]">MEMBERS</span>
              <div className="flex items-center justify-center flex-wrap w-3/4">
                <div className="w-[450px] h-60 bg-border m-8"></div>
                <div className="w-[450px] h-60 bg-border m-8 p-4 flex">
                  <div className="w-40 h-40">
                    <img
                      className="w-full h-full object-cover rounded-md"
                      src="/images/member-profile.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="mb-4 text-lg font-bold text-title flex items-center">
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
                      {"Ha Jun Seo(하준서)"}
                    </div>
                  </div>
                </div>
                <div className="w-[450px] h-60 bg-border m-8"></div>
                <div className="w-[450px] h-60 bg-border m-8"></div>
                <div className="w-[450px] h-60 bg-border m-8"></div>
                <div className="w-[450px] h-60 bg-border m-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
