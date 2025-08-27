import { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import UpIcon from "../icons/UpIcon";

export default function TapImage({ onSearchImage, onUploadImage }) {
  const [activeTab, setActiveTab] = useState("search"); // "search" o "upload"

  return (
    <div className="flex items-center border-b border-divider">
      <button
        onClick={() => {
          setActiveTab("search");
          onSearchImage?.();
        }}
        className={`py-2 px-4 flex items-center gap-2 cursor-pointer transition-colors duration-200 border-b 
          ${activeTab === "search" 
            ? "text-primary border-primary" 
            : "text-paragraph border-transparent hover:border-primary hover:text-primary"}
        `}
      >
        <SearchIcon size={20} />
        Buscar
      </button>

      <button
        onClick={() => {
          setActiveTab("upload");
          onUploadImage?.();
        }}
        className={`py-2 px-4 flex items-center gap-2 cursor-pointer transition-colors duration-200 border-b 
          ${activeTab === "upload" 
            ? "text-primary border-primary" 
            : "text-paragraph border-transparent hover:border-primary hover:text-primary"}
        `}
      >
        <UpIcon size={20} />
        Subir
      </button>
    </div>
  );
}
