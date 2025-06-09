import GalleryBox from "../components/GalleryBox";

function Gallery() {
  const GalleryInfo = [
    {
      img: "/images/2025_Calphad 학회.jpg",
      comments:
        "(May 2025)_International Conference on Computer Coupling of Phase Diagrams and Thermochemistry",
    },
    {
      img: "/images/2025_pandat 미팅.jpg",
      comments: "(May 2025)_Pandat Software Workshop",
    },
    {
      img: "/images/pomia.jpg",
      comments: "(Fev 2025)_Technology Exchange Meeting with POMIA",
    },
    {
      img: "/images/CALPAD_PANDAT_seminar.jpg",
      comments: "(Jan 2025)_CALPAD Pandat Seminar",
    },
    {
      img: "/images/2024_magnetic.jpg",
      comments:
        "(Nov 2024)_2024 KMS Winter Conference_Soft Magentics Symposium",
    },
    {
      img: "/images/2024_openlab.jpg",
      comments: "(Nov 2024)_OPENLAB_Department of Materials System Engineering",
    },
  ];
  return (
    <div>
      <div className="mx-[10%] mt-12">
        <div className="flex justify-center items-center flex-col">
          <div className="mb-20">
            <div className="text-center text-[60px] lg:mb-28 mb-16 text-title animate-[gotoDown_0.7s_ease-in-out_both]">
              <span>GALLERY</span>
            </div>
          </div>
          <div className="flex items-center justify-center grid lg:grid-cols-2 grid-cols-1">
            {GalleryInfo.map((info) => {
              return <GalleryBox info={info} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
