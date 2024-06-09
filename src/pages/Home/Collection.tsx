import { useQuery } from "react-query";
import { Container } from "../../components";
import Card, { CardSkeleton } from "../../components/Card";
import { getBookList } from "../../services/api";

const Collection = () => {
  const { data, isLoading } = useQuery("list-book", () => getBookList(), { refetchOnWindowFocus: false });

  return (
    <div className="collection">
      <Container>
        <div className="mb-10">
          <p className="text-center heading-2">
            Book Collection
          </p>
        </div>
        <div className="collection__list">
          {!!data?.length && !isLoading && data?.map(item => (
            <Card data={item} key={item.id} />
          ))}
          {isLoading && (
            <>
              {[ ...Array(5).keys() ].map(item => (
                <CardSkeleton key={item} />
              ))}
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Collection;