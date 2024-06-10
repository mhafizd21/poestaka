import dayjs from "dayjs";
import { FC, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, LinkProps } from "react-router-dom";
import { IBook } from "../interfaces";
import Button from "./Button";
import { IconFavorite, IconFavoriteFilled } from "../assets/icons";
import useFavorite from "../hooks/useFavorite";

interface ICard extends Omit<LinkProps, "to"> {
  data: IBook;
  to?: string;
}

const defaultImage = "https://placehold.co/212x300";

const Card: FC<ICard>= ({ 
  data,
  to,
  ...props
}) => {
  const [imageBook, setImageBook] = useState(data?.cover);
  const { isInFavoriteList, handleAddToFavorite } = useFavorite(data);
  return (
    <Link
      {...props}  
      to={`/books/${data.id}`}
      className="card"
    >
      <div className="card__image-container">
        <img 
          src={imageBook}
          alt={data.title}
          className="card__image"
          onError={() => setImageBook(defaultImage)}
        />
        <Button
          variant="icon"
          onClick={e => {
            e.preventDefault();
            handleAddToFavorite();
          }}
        >
          {isInFavoriteList ? <IconFavoriteFilled /> : <IconFavorite />}
        </Button>
      </div>
      <div>
        <div className="card__desc">
          <p className="text-center">
            {data.author}
          </p>
          <p className="card__desc-title text-center text-md">
            {data.title}
          </p>
          <p className="text-center">
            {dayjs(data.publicationDate).format("YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const CardSkeleton  = () => (
  <div className="card__loader">
    <Skeleton height={300} width={200}  borderRadius={12} />
    <div className="card__loader-desc">
      <Skeleton width={150} />
      <Skeleton width={180} />
      <Skeleton width={100} />
    </div>
  </div>
);

export default Card;