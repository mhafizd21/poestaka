import { IBook } from "../interfaces";
import usePersisted from "./usePersisted";

const useFavorite = (data: IBook) => {
  const [favoriteList, setFavoriteList] = usePersisted<IBook[]>("FAVORITE_LIST", []);

  const isInFavoriteList = favoriteList.some(item => item?.id === data?.id || 0);

  const handleAddToFavorite = () => {
    if (favoriteList.some(item => item.id === data.id)) {
      const newList = favoriteList.filter(item => item.id !== data.id);
      setFavoriteList(newList);
    } else {
      setFavoriteList([...favoriteList, data]);
    }
  };

  return {
    isInFavoriteList,
    handleAddToFavorite,
  };
};

export default useFavorite;
