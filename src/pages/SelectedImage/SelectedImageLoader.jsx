import ImageLoader from "../../components/Image/ImagenLoader";
export default function SelectedImageLoader() {
  const listLoader = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="h-96 overflow-y-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {
        listLoader.map((loader, index) => <ImageLoader key={index} />)
      }
    </div>
  );
}