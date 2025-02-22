import { FC } from "react";
import Button from "./ui/Button";

interface DetailsProps {
  data: Pokemon;
}

const Details: FC<DetailsProps> = ({ data }) => {
  return (
    <section className="min-h-[600px] flex flex-col justify-center p-10 bg-white rounded-md">
      <div className="w-full flex flex-col md:flex-row justify-center gap-10 md:gap-20">
        <div>
          <img
            src={`https://img.pokemondb.net/artwork/${data.name}.jpg`}
            alt={data.name}
            className="w-full max-w-[700px] h-auto"
          />
        </div>
        <div>
          <ul className="flex flex-col gap-3 text-2xl">
            <li>
              Height: <span className="text-gray-600">{data.height}</span>
            </li>
            <li>
              Base Experience:{" "}
              <span className="text-gray-600">{data.base_experience}</span>
            </li>
            <div>
              <span>Abilities:</span>
              <div className="flex flex-col pl-4">
                {data.abilities.map((elem) => (
                  <span key={elem.slot} className="text-gray-600 uppercase">
                    {elem.ability.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span>Types:</span>
              <div className="flex flex-col pl-4">
                {data.types.map((elem) => (
                  <span key={elem.slot} className="text-gray-600 uppercase">
                    {elem.type.name}
                  </span>
                ))}
              </div>
            </div>
          </ul>

          <div className="pt-10">
            <Button content="Agregar a favoritos" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
