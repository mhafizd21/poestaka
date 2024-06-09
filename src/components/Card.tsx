import dayjs from "dayjs";
import { FC, useState } from "react";
import { Link, LinkProps } from "react-router-dom";
import { IBook } from "../interfaces";
import Skeleton from "react-loading-skeleton";

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
  return (
    <Link
      {...props}  
      to={`/books/${data.id}`}
      className="card"
    >
      <div>
        <img 
          src={imageBook}
          alt={data.title}
          className="card__image"
          onError={() => setImageBook(defaultImage)}
        />
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