import dayjs from "dayjs";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { IBook } from "../interfaces";

interface ICard extends Omit<LinkProps, "to"> {
  data: IBook;
  to?: string;
}

const Card: FC<ICard>= ({ 
  data,
  to,
  ...props
}) => {
  return (
    <Link
      {...props}  
      to={`/books/${data.id}`}
      className="card"
    >
      <div>
        <img 
          src={data.cover}
          alt={data.title}
          className="card__image"
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

export default Card;