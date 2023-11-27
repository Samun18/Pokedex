import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
    const [infoApi, setInfoApi] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const getApi = () => {
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
                setIsLoading(false)
            })
            .catch(err => console.error(err))
    }

    const getTypeApi = (urlType) => {
        axios.get(urlType)
            .then(res => {
                const obj = {
                    results: res.data.pokemon.map(e => e.pokemon)
                }
                setInfoApi(obj)
            })
            .catch(err => console.error(err))
    }
    return [infoApi, getApi, getTypeApi, isLoading]
}

export default useFetch