interface InfoProps {
  info: {
    date: string;
    comments: string;
  };
}

const NewsBox = ({ info }: InfoProps) => {
  return (
    <div className="flex flex-row items-start mb-6">
      <div className="w-1.5 h-1.5 bg-title mt-2 mr-4 shrink-0"></div>

      <div className="text-base leading-relaxed">
        <span className="font-bold mr-2">{info.date}</span>
        {info.comments}
      </div>
    </div>
  );
};

export default NewsBox;
