import { FC } from "react";
import { useFetch } from "../hooks/useFetch";
import ListCard from "./ListCard";
import Button from "./ui/Button";
import Loader from "./ui/Loader";
import Searchbar from "./ui/Searchbar";

interface ListProps {}

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const List: FC<ListProps> = ({}) => {
  const { data, isLoading, isError, refetch } = useFetch(
    API_URL
  );
  
  const handlePagination = (url: string | null) => {
    if (url) {
        refetch(url);
    }
  }

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
        <div className="pb-10">
          <Searchbar />
        </div>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10">

        {data && data.results.map((elem) => <ListCard pokemon={elem} />)}
        </div>
      <div className="w-full flex justify-center gap-4 pt-10">
      {
        data?.previous && 
        <Button content="Anterior" action={() => handlePagination(data.previous)} />
      }
      {
        data?.next &&
        <Button content="Siguiente" action={() => handlePagination(data.next)} />
      }
      </div>
    </section>
  );
};

export default List;
