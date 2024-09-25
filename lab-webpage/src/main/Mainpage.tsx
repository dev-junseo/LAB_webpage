function MainPage() {
  return (
    <div>
      <div className="w-full h-[92vh] relative">
        <div className="absolute w-full h-[92vh] bg-first-bg bg-cover bg-fixed"></div>
        <div className="absolute bg-[rgba(89,120,148,0.5)] w-1/3 h-[92vh] flex justify-end items-center">
          <div className="slide-right animate-[gotoRight_0.7s_ease-in-out_both] mr-[110px]">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
              Advanced Steel Design & Data Fusion
            </h1>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">Lab</h1>
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] flex justify-between">
        <div className="bg-dark w-1/3 h-[50vh] flex justify-center items-center">
          <div className="mb-14">
            <h1 className="border-b border-white pb-10 mb-10 lg:text-4xl text-3xl text-white">
              Our Story
            </h1>
            <a href="/about/Overview" className="text-white md:text-lg text-base">
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

      <div className="w-full h-[100vh] bg-white"></div>
    </div>
  );
}

export default MainPage;
