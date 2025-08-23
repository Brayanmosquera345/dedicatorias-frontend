import CheckIcon from "../icons/CheckIcon";

export default function ImageOption({ image, selected = false }) {
  return (
    <div
      className={`relative rounded-md w-full h-52 md:h-64 border-2 overflow-hidden ${
        selected ? "border-primary" : "border-transparent"
      }`}
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
