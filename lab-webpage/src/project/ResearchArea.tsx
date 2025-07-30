import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Project() {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col w-full min-h-[30vh] md:min-h-[70vh]">
          <span className="text-title text-[60px] text-center mb-28 animate-[gotoDown_0.7s_ease-in-out_both]">
            RESEARCH AREAS
          </span>
          <div className="w-[100%] bg-[rgb(97,120,161)] flex flex-col justify-center items-center p-4">
            <div className="text-title md:text-[60px] text-[40px] mt-[-5px] text-center">
              Research Areas
            </div>
            <div className="relative w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
