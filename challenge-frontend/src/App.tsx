import banner from "./assets/banner.jpg";
import Layout from "./components/Layout";
import PokemonContainer from "./components/PokemonContainer";

function App() {
  return (
    <>
      <header className='w-full'>
        <div className="h-[450px]">
          <img src={banner} alt="Group of Pokemons and trainers" className="w-full h-auto object-contain" />
        </div>
      </header>
      
      <Layout>
        <div className="w-full flex justify-center pb-10 md:pb-20">
          <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold text-primary">¡Find and choose your favourites Pokemons!</h1>
        </div>

        <PokemonContainer />
      </Layout>
    </>
  )
}

export default App
