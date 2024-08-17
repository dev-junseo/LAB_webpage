function MainPage() {
  return (
    <div>
      <div className="w-full h-[92vh] relative">
        <div className="absolute w-full h-[92vh] bg-first-bg bg-cover bg-fixed"></div>
        <div className="absolute bg-[rgba(89,120,148,0.5)] w-1/3 h-[92vh] flex justify-end items-center">
          <div className="slide-right animate-[gotoRight_0.7s_ease-in-out_both] mr-[100px]">
            <h1 className="text-4xl font-bold">Data Fustion Steel</h1>
            <h1 className="text-4xl font-bold">Material Design Laboratory</h1>
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] flex justify-between">
        <div className="bg-dark w-1/3 h-[50vh] flex justify-center items-center">
            <div className="mb-14">
                <h1 className="border-b border-white pb-10 mb-10 text-5xl text-white">Our Story</h1>
                <a href="#" className="text-white">
                    Get More        
                </a>
            </div>
        </div>

        <div className="r-0 w-2/3 h-[50vh] bg-white flex justify-left items-center">
            <div className="w-[450px] mt-[5%] mr-0 mb-24 ml-[25%]">
                <h3 className="text-2xl mb-7">
                    Get to Know Us
                </h3>
                <h3 className="text-xl">
                    Our company is a company whose main business fields are construction machinery and equipment, design, supervision, construction consulting, various design changes, deliberation, and TAB.
                </h3>
                
            </div>
        </div>
      </div>

      <div className="w-full h-[50vh] bg-second-bg bg-cover bg-fixed flex justify-center items-end">
        <div className="w-1/2 h-[30%] flex justify-center items-center bg-white">
          <span className="text-3xl text-dark">Our Work</span>
        </div>
      </div>

      <div className="w-full h-[100vh] bg-cyan-900">
        
      </div>
    </div>
  );
}

export default MainPage;
