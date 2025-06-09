interface InfoProps {
  info: {
    img: string;
    comments: string;
  };
}

const GalleryBox = (info: InfoProps) => {
  return (
    <div className="w-full h-full my-8 p-4 lg:mr-10 w-[450px] h-[300px] mb-5 flex flex-col justify-center items-center text-center">
      <img
        className="w-[600px] h-[400px] object-cover rounded-md mb-2"
        src={info.info.img}
        alt=""
      />
      <div>{info.info.comments}</div>
    </div>
  );
};

export default GalleryBox;
