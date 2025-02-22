import pokeball from "../../assets/pokeball.png";
const Loader = () => {
  return (
    <div className="w-[120px] animate-spin">
      <img src={pokeball} alt="Pokeball" className="w-full h-auto" />
    </div>
  );
};

export default Loader;
