import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import '../Css components/PokeCard.css'

const PokeCard = ({ url }) => {
  
  const [infoPoke, getPoke, getTypeApi, isLoading] = useFetch(url)
  
  useEffect(() => {
   getPoke() 
  }, [])
  

  const navigate = useNavigate()

  const handelNavigate = () => {
    navigate(`/pokedex/${infoPoke.id}`)
  }

  
    return (
    <article className={`containerPoke ${infoPoke?.types[0].type.name}-border`} onClick={handelNavigate}>
        <header className={`containerPoke__header ${infoPoke?.types[0].type.name}-gradient`} >
            <img className="containerPoke__img" src={infoPoke?.sprites.other["official-artwork"].front_default} alt={infoPoke?.name} />
        </header>
        <section className="pokecard__body">
            <h3 className={`pokecard__title ${infoPoke?.types[0].type.name}-title`}>{infoPoke?.name}</h3>
            <ul className="pokecard__type">
                {
                    infoPoke?.types.map(infoType => (
                        <li className="pokecard__typename" key={infoType.type.url}>{infoType.type.name} </li>
                    ))
                }
            </ul>
            <hr className="pokecard__hr" />

            <ul className="pokecard__stats">
                {
                    infoPoke?.stats.filter(e => e.stat.name.length < 8).map(infoStat => (
                        <li key={infoStat.stat.url}>
  
                            <span className="pokecard__stats-name">
                                {infoStat.stat.name}
                            </span>
                            <span className={`pokecard__stats-value ${infoPoke?.types[0].type.name}-stats`}>
                                {infoStat.base_stat}
                            </span>
                        </li> 

                        
                        
                    )).filter(e => e !== undefined)
                }
            </ul>

        </section>
    </article>
  )
}

export default PokeCard