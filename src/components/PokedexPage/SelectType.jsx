import { useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import '../Css components/SelectType.css'

const SelectType = ({ setSelectValue }) => {
  const url = `https://pokeapi.co/api/v2/type`;

  const [types, getType] = useFetch(url);

  useEffect(() => {
    getType();
  }, []);

  const selectType = useRef();

  

  const handleChange = () => {
    setSelectValue(selectType.current.value);
  };

  return (
    <select className="select" ref={selectType} onChange={handleChange}>
      <option value="allPokemons">All Pokemons</option>
      {types?.results.map((type) => (
        <option key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectType;
