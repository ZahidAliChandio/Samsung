const BigCard = ({ image, title, description }) => {
  return (
    <div className="group relative rounded-lg w-full h-full bg-gray-200 border border-danger overflow-hidden cursor-pointer">
      <div>
        <img
          src={image}
          alt="appliance"
          className="group-hover:scale-105 ease-in duration-200"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white">
        <h5 className="text-2xl font-bold">{title}</h5>
        <p className="text-sm group-hover:-translate-y-4 group-hover:opacity-0 ease-in duration-300 mt-2">
          {description}
        </p>
        <button className="bg-black hover:bg-slate-800 text-white py-2 px-4 rounded-full text-sm translate-y-20 ease-in duration-300 group-hover:-translate-y-6">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BigCard;
