import CheckIcon from "../icons/CheckIcon";

export default function ImageOption({ image= "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png", selected = false, onSelectImage }) {
  return (
    <div
      className={`relative rounded-md w-full h-52 md:h-64 border-2 overflow-hidden transition-colors duration-200 hover:border-primary cursor-pointer ${
        selected ? "border-primary" : "border-transparent"
      }`}
      onClick={() => onSelectImage()}
    >
      {selected && (
        <div className="absolute top-2 right-2 text-primary">
          <CheckIcon size={24} />
        </div>
      )}
      <img src={image} alt={image} className="w-full h-full object-cover" />
    </div>
  );
}
