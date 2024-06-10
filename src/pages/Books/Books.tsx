import dayjs from "dayjs";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { IconFavorite, IconFavoriteFilled } from "../../assets/icons";
import { Button, Container } from "../../components";
import useFavorite from "../../hooks/useFavorite";
import { IBook } from "../../interfaces";
import { getBookById } from "../../services/api";

const defaultImage = "https://placehold.co/388x500";

const Books = () => {
  const [imageBook, setImageBook] = useState(defaultImage);
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["book-detail", id],
    () => getBookById(+(id || 0)),
    {
      refetchOnWindowFocus: false,
      onSuccess: res => {
        setImageBook(res.cover);
      }
    });
  const navigate = useNavigate();
  const { isInFavoriteList, handleAddToFavorite } = useFavorite(data || {} as IBook);

  return (
    <Container>
      <div className="books-detail">
        <div className="books-detail__section">
          <div className="w-per-4">
            {isLoading ? (
              <Skeleton height={500} borderRadius={12} />
            ) : (
              <img
                src={imageBook}
                alt={data?.title}
                className="books-detail__image"
                onError={() => setImageBook(defaultImage)}
              />
            )}
          </div>
          <div className="w-per-7">
            {isLoading ? (
              <div>
                <Skeleton borderRadius={12} height={58} width={500} className="mb-5" />
                <div className="books-detail__info">
                  <Skeleton height={36} width={150} borderRadius={12} />
                  <p className="books-detail__info-text">
                    |
                  </p>
                  <Skeleton height={36} width={100} borderRadius={12} />
                </div>
                <Skeleton height={16} />
                <Skeleton height={16} width="70%" />
              </div>
            ) : (
              <>
                <h1 className="heading mb-1 text-italic">
                  {data?.title}
                </h1>
                <div className="books-detail__info">
                  <p className="books-detail__info-text">
                    {data?.author}
                  </p>
                  <p className="books-detail__info-text">
                    |
                  </p>
                  <p className="books-detail__info-text">
                    {dayjs(data?.publicationDate).format("DD MMMM YYYY")}
                  </p>
                  <Button
                    variant="icon"
                    onClick={() => handleAddToFavorite()}
                  >
                    {isInFavoriteList ? <IconFavoriteFilled /> : <IconFavorite />}
                  </Button>
                </div>
                <p className="books-detail__description">
                  {data?.description}
                </p>
                <Button
                  variant="text"
                  size="lg"
                  className="p-1"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Books;