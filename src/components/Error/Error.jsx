import AlertIcon from "../icons/AlertIcon";
export default function Error({ text, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <div className="flex justify-center items-center w-full text-title"><AlertIcon size={48} /></div>
      <h4 className="text-title font-bold text-center text-xl">{text}</h4>
      <p className="text-paragraph text-center">{description}</p>
    </div>
  );
}