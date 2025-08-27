import LoaderIcon from '../icons/LoaderIcon'
export default function Button({ text, variant="primary", size="md", className, onClick, isLoading= false, iconRight }) {

  const buttonClass = ()=>{
    let base = "rounded-lg font-medium text-md cursor-pointer hover:shadow flex items-center justify-center"
    let variantClass = "";
    let sizeClass = "";

    switch(variant){
      case "primary":
        variantClass= `bg-primary text-title hover:bg-primary/95`
        break;
      case "secondary":
        variantClass= `bg-title text-divider hover:bg-title/95`
        break;
      default:
        variantClass= `bg-primary text-title hover:bg-primary/95`
    }

    switch(size){
      case "sm":
        sizeClass= "px-2 py-1"
        break;
      case "md":
        sizeClass= "px-4 py-2"
        break;
      case "lg":
        sizeClass= "px-6 py-3"
        break;
      default:
        sizeClass= "px-4 py-2"
    }

    return `${base} ${variantClass} ${sizeClass} ${className}`
  }

  return (
    <button className={buttonClass()} onClick={onClick}>
      {
        isLoading? (
          <span className="flex items-center gap-2">
            <LoaderIcon size={24} /> 
            Procesando...
          </span>
        ):(
          <>
            {
              iconRight && (
                <span className="flex items-center gap-2">
                  {text}
                  {iconRight}
                </span>
              )
            }
            {
              !iconRight && (
                <span className="flex items-center gap-2">
                  {text}
                </span>
              )
            }
          </>
        )
      }
    </button>
  );
}
