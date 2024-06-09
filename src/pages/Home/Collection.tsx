import { useQuery } from "react-query";
import { Container } from "../../components";
import Card from "../../components/Card";
import { getBookList } from "../../services/api";

const Collection = () => {
  const { data } = useQuery("list-book", () => getBookList(), { refetchOnWindowFocus: false });

  return (
    <div className="collection">
      <Container>
        <div className="mb-10">
          <p className="text-center heading-2">
            Book Collection
          </p>
        </div>
        <div className="collection__list">
          {!!data?.length && data?.map(item => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Collection;