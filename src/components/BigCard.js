const BigCard = ({ image, title, description }) => {
  return (
    <div className="flex justify-center relative rounded-lg overflow-hidden w-full h-full bg-gray-200">
      <img
        src={image}
        alt="appliance"
        className="object-contain m-auto align-middle"
      />
      <div className="absolute bottom-0 text-center">
        <title>{title}</title>
        <p>{description}</p>
        <button class="bg-black hover:bg-slate-800 text-white py-2 px-4 rounded-full text-sm">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BigCard;
