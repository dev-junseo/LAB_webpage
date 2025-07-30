import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Project() {
  // 슬라이드에 사용할 이미지 데이터 배열
  const slideImages = [
    {
      src: "/images/must_read_paper_1.png",
      alt: "Gaussian process regression-based Bayesian optimization of the insulation-coating process for FeeSi alloy sheets",
      keywords: "",
      abstract: "",
    },
    {
      src: "/images/must_read_paper_2.png", // 예시 이미지
      alt: "Ultra-thin Fe–Si alloy sheet with excellent high frequency magnetic properties fabricated by partial decarburization combined with multi-stage cold rolling ",
      keywords: "",
      abstract: "",
    },
    {
      src: "/images/must_read_paper_3.png", // 예시 이미지
      alt: "Formation mechanism of texture in ultra-thin Fe–Si alloy sheet with excellent medium frequency magnetic properties fabricated by multi-stage decarburizing and cold rolling",
      keywords: "",
      abstract: "",
    },
    {
      src: "/images/must_read_paper_4.png", // 예시 이미지
      alt: "Thin Fe–Si–Al alloy sheet fabricated by Al gradient diffusion through PVD for excellent high-frequency magnetic properties",
      keywords: "",
      abstract: "",
    },
    // 필요에 따라 더 많은 이미지 추가 가능
  ];

  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col w-full min-h-[30vh] md:min-h-[70vh]">
          <span className="text-title text-[60px] text-center mb-28 animate-[gotoDown_0.7s_ease-in-out_both]">
            RESEARCH AREAS
          </span>
          {/* Swiper 슬라이드 구현 - 100vh 높이 적용 */}
          <div className="w-[100%] h-[100vh] bg-[rgb(97,120,161)] flex flex-col justify-center items-center p-4">
            <span className="text-title text-[60px] mt-5 mb-10 text-center">
              Must Read Papers
            </span>
            <div className="relative w-full h-full">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  el: ".swiper-pagination-custom",
                }}
                autoplay={{
                  delay: 9000,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={800}
                className="relative w-full h-full"
              >
                {slideImages.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center"
                  >
                    <div className="flex justify-center items-start h-full">
                      <img
                        className="w-[500px] h-[650px] object-cover rounded-md"
                        src={image.src}
                        alt={image.alt}
                      />
                      <div className="w-[40%] ml-16 flex flex-col items-start justify-start">
                        <div className="font-bold text-3xl mt-5">
                          {image.alt}
                        </div>
                        <div>Keywords</div>
                        <div>Abstract</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* 커스텀 네비게이션 버튼 */}
              <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* 커스텀 페이지네이션 */}
              <div className="swiper-pagination-custom absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
