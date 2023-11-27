import { useRef } from "react"
import { setTrainerName } from "../store/slices/trainerName.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './stylesPages/HomePage.css'
import Nav from "../components/Nav"
const HomePage = () => {

    const trainerName = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(setTrainerName(trainerName.current.value.trim()))
        navigate('/pokedex')
    }

    
  return (
    <article className="containerHome">
      <Nav/>
      
      <div className="homePage">
        <h2 className="homePage__wlcm">Welcome Trainer!</h2>
        <p className="homePage__txt">To start, please type your trainer name: </p>
        <form className="homePage__form" onSubmit={handelSubmit} >
            <input className="homePage__form__input" placeholder="Name" ref={trainerName} type="text" />
            <button className="homePage__form_button"><img className="homePage__form_button-img" src="./src/assets/te-tengo.png" alt="" /></button>
        </form>
        
      </div>
    </article>
  )
}

export default HomePage