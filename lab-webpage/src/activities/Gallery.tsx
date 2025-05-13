function Gallery() {
  return (
    <div>
      <div className="mx-[10%] mt-12">
        <div className="flex justify-center items-center flex-col">
          <div className="mb-20">
            <div className="text-center text-[60px] lg:mb-28 mb-16 text-title animate-[gotoDown_0.7s_ease-in-out_both]">
              <span>GALLERY</span>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="w-[450px] h-[300px] mb-5 flex flex-col justify-center items-center">
              <img
                className="w-full h-full object-cover rounded-md mb-2"
                src="/images/pomia.jpg"
                alt=""
              />
              <div>{"(Fev 2025) Exchange meeting with POMIA "}</div>
            </div>
            <div className="w-[450px] h-[300px] mb-5 flex flex-col justify-center items-center">
              <img
                className="w-full h-full object-cover rounded-md mb-2"
                src="/images/2024_magnetic.jpg"
                alt=""
              />
              <div>{"(Fev 2025) Exchange meeting with POMIA "}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
