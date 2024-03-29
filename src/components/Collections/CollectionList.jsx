import { useCollection } from "../../context/CollectionProvider";
import { CollectionItem } from "./CollectionItem";
import { Header } from "../Header";
import { SearchBar } from "./SearchBar";

export const CollectionList = () => {
  const { collection } = useCollection();

  return (
    <div className="bg-black w-full h-screen">
      <div className="bg-black border-r [border-right-style:solid] border-l [border-left-style:solid] border-transparent">
        <div className="">
          <div className="">
            <Header />
            <SearchBar />
            <div className="grid grid-cols-4">
              {collection.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
