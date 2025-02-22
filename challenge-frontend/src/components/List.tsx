import { FC } from "react";
import ListCard from "./ListCard";
import Button from "./ui/Button";
import Loader from "./ui/Loader";

interface ListProps {
  data: PokemonList;
  isLoading: boolean;
  isError: boolean;
  refetch: (query: string) => void;
}

const List: FC<ListProps> = ({ data, isLoading, isError, refetch }) => {
  const handlePagination = (url: string | null) => {
    if (url) {
      refetch(url);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <span>Error on fetching data.</span>;
  }

  return (
    <section>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10">
        {data &&
          data.results &&
          data.results.map((elem) => (
            <ListCard pokemon={elem} key={elem.name} />
          ))}
      </div>
      <div className="w-full flex justify-center gap-4 pt-10">
        {data?.previous && (
          <Button
            content="Anterior"
            action={() => handlePagination(data.previous)}
          />
        )}
        {data?.next && (
          <Button
            content="Siguiente"
            action={() => handlePagination(data.next)}
          />
        )}
      </div>
    </section>
  );
};

export default List;
