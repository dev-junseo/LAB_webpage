interface FacilityBoxProps {
  info: {
    img: string;
    name: string;
  };
}

const FacilityBoxLg = (info: FacilityBoxProps) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-[300px] h-[320px] object-cover rounded-md mb-2"
        src={info.info.img}
        alt=""
      />
      <div className="font-bold">{info.info.name}</div>
    </div>
  );
};

export default FacilityBoxLg;
