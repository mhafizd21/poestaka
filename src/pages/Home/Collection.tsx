import { useState } from "react";
import { useQuery } from "react-query";
import { Button, Container } from "../../components";
import Card, { CardSkeleton } from "../../components/Card";
import { IBook } from "../../interfaces";
import { getBookList } from "../../services/api";

const limit = 5;

const Collection = () => {
  const [listData, setListData] = useState<IBook[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);
  const { isLoading } = useQuery(
    ["list-books", page],
    () => getBookList({
      _page: page,
      _limit: limit,
    }),
    {
      refetchOnWindowFocus: false,
      onSuccess: res => {
        setListData(prev => [
          ...prev,
          ...res,
        ]);
        if (res.length === limit) {
          setHasNextPage(true);
        } else {
          setHasNextPage(false);
        }
      }
    }
  );

  const fetchNextPage = () => {
    if (hasNextPage) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div className="collection">
      <Container>
        <div className="mb-10">
          <p className="text-center heading-2">
            Book Collection
          </p>
        </div>
        <div className="collection__list">
          {!!listData?.length && listData?.map(item => (
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
        {hasNextPage && (
          <div className="collection__nav">
            <Button onClick={() => fetchNextPage()}>
              Load More
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Collection;