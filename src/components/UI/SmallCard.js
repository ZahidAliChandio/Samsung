const SmallCard = ({ image, title, description, textSize, textColor }) => {
  return (
    <div className="group flex flex-col justify-center items-center gap-3 px-2 rounded-lg overflow-hidden w-full h-full bg-gray-200 cursor-pointer">
      <div>
        <img
          src={image}
          alt="appliance"
          className="group-hover:scale-105 ease-in duration-200"
        />
      </div>
      <div>
        <h5 className="font-bold">{title}</h5>
        <p className="mt-2 px-12 text-xxs group-hover:-translate-y-4 group-hover:opacity-0 ease-in duration-300">
          {description}
        </p>
        <button className="bg-black hover:bg-slate-800 text-white py-2 px-4 rounded-full text-sm translate-y-20 group-hover:-translate-y-4 ease-in duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SmallCard;
