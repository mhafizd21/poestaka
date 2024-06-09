import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Button, Container } from "../../components";
import { getBookById } from "../../services/api";

const Books = () => {
  const { id } = useParams();
  const { data } = useQuery(["book-detail", id], () => getBookById(+(id || 0)), { refetchOnWindowFocus: false });
  const navigate = useNavigate();

  return (
    <Container>
      <div className="books-detail">
        <div className="books-detail__section">
          <div className="w-per-4">
            <img
              src={data?.cover}
              alt={data?.title}
              className="books-detail__image"
            />
          </div>
          <div className="w-per-7">
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
                {dayjs(data?.publicationDate).format("YYYY")}
              </p>
            </div>
            <p className="books-detail__description">
              {data?.description}
            </p>
            <Button
              variant="text"
              className="p-1 btn--lg"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Books;