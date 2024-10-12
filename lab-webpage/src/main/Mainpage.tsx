function MainPage() {
  return (
    <div className="font-light">
      <div className="w-full h-[92vh] relative">
        <div className="absolute w-full h-[92vh] bg-first-bg bg-cover bg-fixed"></div>
        <div className="absolute bg-[rgba(89,120,148,0.5)] w-1/3 h-[92vh] flex justify-end items-center">
          <div className="slide-right animate-[gotoRight_0.7s_ease-in-out_both] mr-[110px]">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium">
              Advanced Steel Design & Data Fusion
            </h1>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium">
              Lab
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] flex justify-between">
        <div className="bg-dark w-1/3 h-[50vh] flex justify-center items-center">
          <div className="mb-14">
            <h1 className="border-b border-white pb-10 mb-10 lg:text-4xl text-3xl text-white">
              Our Story
            </h1>
            <a
              href="/about/Overview"
              className="text-white md:text-lg text-base"
            >
              Get More
            </a>
          </div>
        </div>

        <div className="r-0 w-2/3 h-[50vh] bg-white flex justify-left items-center">
          <div className="w-[80%] mt-[5%] mr-0 xl:mb-24 mb-16 ml-[10%]">
            <h3 className="md:text-2xl text-xl mb-7">Get to Know Us</h3>
            <h3 className="lg:text-lg md:text-base text-sm">
              Our Lab focuses on improving the properties of magnetic materials,
              such as steel cores, which are essential in advanced mobility
              applications. We conduct research on vacuum and gas heat
              treatments, analyze magnetic properties, and evaluate texture and
              rolling characteristics. Additionally, we develop new materials by
              optimizing various processes using AI and predicting material
              properties through metal material simulations.
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] bg-second-bg bg-cover bg-fixed flex justify-center items-end">
        <div className="w-1/2 h-[30%] flex justify-center items-center bg-white">
          <span className="text-3xl text-dark">Our Work</span>
        </div>
      </div>

      <div className="w-full h-full flex justify-start items-center flex-col py-20 mt-20">
        <div className="w-4/5 max-w-[1440px]">
          <div className="mb-4 lg:text-3xl text-2xl flex flex-col md:flex-row items-start">
            <div className="mr-2">
              <span className="mr-2 font-medium">GO/NO STEEL</span>based on
            </div>
            <div>
              <span className="mr-2 font-medium">3D PRINTING</span>&
              <span className="ml-2 font-medium">AI OPTIMIZED</span>
            </div>
          </div>
          <div className="flex justify-center items-center text-lg">
            Our Lab focuses on improving the properties of magnetic materials,
            such as steel cores, which are essential in advanced mobility
            applications. We conduct research on vacuum and gas heat treatments,
            analyze magnetic properties, and evaluate texture and rolling
            characteristics. Additionally, we develop new materials by
            optimizing various processes using AI and predicting material
            properties through metal material simulations.
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center clex-col my-20">
        <div className="w-4/5 max-w-[1440px]">
          <div className="text-4xl mb-2">Our research areas</div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-y-20">
            <div className="w-11/12 h-11/12 p-4">
              <img
                className="w-full h-full object-cover rounded-md"
                src="/images/our_work(1).jpg"
                alt=""
              />
              <div className="text-2xl mt-1.5 flex items-center">
                3D Printing for AM Metal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div className="w-11/12 h-11/12 p-4">
              <img
                className="w-full h-full object-cover rounded-md"
                src="/images/our_work(2).jpg"
                alt=""
              />
              <div className="text-2xl mt-1.5 flex items-center">
                GO / NO Steel properties
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div className="w-11/12 h-5/6 p-4">
              <img
                className="w-full h-full object-cover rounded-md"
                src="/images/our_work(3).webp"
                alt=""
              />
              <div className="text-2xl mt-1.5 flex items-center">
                AI Optimized
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex bg-[rgb(228,240,255)]">
        <div className="w-1/2 h-full">
          <img src="/images/ai_and_material.webp" alt="" />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <div>How to mixing Data Science & Material Science</div>
        </div>
      </div>

      <div className="w-full h-[100vh] bg-white"></div>
    </div>
  );
}

export default MainPage;
