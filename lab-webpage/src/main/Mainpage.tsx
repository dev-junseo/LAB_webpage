function MainPage() {
  return (
    <div>
      <div className="w-full h-screen relative">
        <img className="absolute w-full h-screen" src="main_img.jpg" alt="" />
        <div className="absolute bg-[rgba(89,120,148,0.5)] w-1/3 h-screen flex justify-end items-center">
          <div className="side-bar__comment slide-right">
            <h1 className="main__name text-3xl font-bold">Data Fustion Steel</h1>
            <h1 className="main__name text-3xl font-bold">Material Design Laboratory</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
