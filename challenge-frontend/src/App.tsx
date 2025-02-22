import banner from "./assets/banner.jpg";
import Layout from "./components/Layout";
import PokemonContainer from "./components/PokemonContainer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="relative">
      <header className="w-full">
        <div className="h-[450px]">
          <img
            src={banner}
            alt="Group of Pokemons and trainers"
            className="w-full h-auto object-contain"
          />
        </div>
      </header>

      <Sidebar />

      <Layout>
        <div className="w-full flex justify-center pb-10 md:pb-20">
          <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold text-primary">
            ¡Find and choose your favorites Pokemons!
          </h1>
        </div>

        <PokemonContainer />
      </Layout>
    </div>
  );
}

export default App;
