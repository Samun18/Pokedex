import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import IsLoading from "../components/PokedexPage/IsLoading";
import "./stylesPages/PokedexPage.css";
import { Pagination } from "../components/PokedexPage/Pagination";
import Nav from "../components/Nav";

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("allPokemons");

  // PAGINATION STATES 
  const [pokPerPage, setPokPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)
  
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const [pokemons, getPokemons, getByTypePokemon, isLoading] = useFetch(url);
  
  useEffect(() => {
    if (selectValue === "allPokemons") {
      getPokemons();
    } else {
      getByTypePokemon(selectValue);
    }
  }, [selectValue]);
  
  const totalPoks = pokemons?.results.length
  const lastIndex =  currentPage * pokPerPage
  const firstIndex =  lastIndex - pokPerPage

  const trainerName = useSelector((store) => store.trainerName);

  const inputSearch = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.toLowerCase().trim());
    inputSearch.current.value = "";
  };

  

  const cbFilter = (poke) => {
    //filtro por nombre en el input
    const nameFiltered = poke.name.includes(inputValue);

    return nameFiltered;
  };

  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className="containerP" >
          <Nav/>

          <main className="main">
            <p className="main__text">
               <span className="main__text--red">Welcome {trainerName},</span> Here you can find your find
              your favorite pokemon
            </p>

            <article className="containerForm">
              <form className="form" onSubmit={handelSubmit}>
                <input placeholder="For Name..." className="form__input" ref={inputSearch} type="text" />
                <button className="form__btn"><img className="form__btn-svg" src="./src/assets/srcIcon.svg" alt="" /></button>
              </form>
            </article>
            <SelectType setSelectValue={setSelectValue} />

            <div className="containerCards">
              {pokemons?.results.filter(cbFilter).map((poke) => (
                <PokeCard key={poke.url} url={poke.url} />
              )).slice(firstIndex, lastIndex)}
            </div>
            
              <Pagination
                pokPerPage={pokPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPoks={totalPoks}
              />
            
          </main>
        </div>
      )}
    </>
  );
};

export default PokedexPage;
