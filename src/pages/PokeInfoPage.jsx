import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "./stylesPages/PokeInfoPage.css";
import Nav from "../components/Nav";

const PokeInfoPage = () => {
  const { id } = useParams();

  const url = ` https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokemon, getPokemon] = useFetch(url);
  console.log(pokemon);

  useEffect(() => {
    getPokemon();
  }, []);
  
  return (
    <div>
      <header>
        <Nav/>
      </header>

      <main className="mainInfo">
        <div className={`hero ${pokemon?.types[0].type.name}-gradient`}>
          <img
            className="hero__image"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt={pokemon?.name}
          />
        </div>
        <section className="main__card">
          <hr />
          <h1 className={`hero__title ${pokemon?.types[0].type.name}-title`}>{pokemon?.name}</h1>
          <hr />
          <div className="hero__body">
            <span className="hero__body-n">Weight</span>
            <span className="hero__body-n">Heigth</span>
            <span className="hero__body-nb">{pokemon?.weight}</span>
            <span className="hero__body-nb">{pokemon?.height}</span>
          </div>

          <section className="main__info">
            <div className="main__info__right">
              <h3 className="right__title">Type:</h3>
              <ul className="right__ul">
                {pokemon?.types.map((typ) => (
                  <li className={`right__ul--li ${pokemon?.types[0].type.name}-gradient`} key={typ.type.url}>
                    <span>{typ.type.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="main__info__left">
              <h3 className="left__title">Abilities:</h3>
              <ul className="left__ul">
                {pokemon?.abilities.map((abi) => (
                  <li key={abi.ability.url} className="left__ul--li">
                    {abi.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>

        <section className="main__movements">
          <hr />
          <h2 className="main__movements__title">Movements</h2>
          <hr />
          <ul className="main__movements__ul">
            {pokemon?.moves.map((mov) => (
              <li className="main__movements__li" key={mov.move.url}>
                {mov.move.name}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PokeInfoPage;
