/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

interface CountriesProps {
  name: string
  population: number
  region: string
  capital: string
  flags: {
    png: string
  }
}

export function Countries() {
  const [countries, setCountries] = useState<CountriesProps[]>([])
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [inputValue, setInputValue] = useState('')
  const [loading, isLoading] = useState(true)

{/*chama a api */}
  useEffect(() => {
    async function countries() {
      await fetch('./server.json')
          .then((res) => res.json())
          .then((data) => {setCountries(data)
          })  
          isLoading(false)
        }
        countries()
    }, [])

  function onChangeText(event: any) {
    setInputValue(event.target.value)
    setFilteredCountries(countries?.filter(countrie => {
      return countrie.name.toLowerCase().includes(event.target.value)
    }))
  }

  return (
    <>
      <div className="w-full flex justify-between items-center">
        {/* busca por pais */}
        <form>
          <input
            className="w-96 h-10 border-2 border-dark-lightinput border-opacity-30 rounded-md placeholder:p-9"
            type="text"
            name='filteredCountries'
            value={inputValue}
            onChange={event => onChangeText(event)}
            placeholder="Search for a country..." />
        </form>

        {/* busca por região */}
        <form>
          <select className="font-nunito w-40 px-2 h-10" id="countrie" name="caountries">
            <option defaultValue={'Filter by Region'}>Filter by Region</option>
            <option value="africa">Afríca</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europa">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>
      </div>

      <div className="w-full flex flex-wrap justify-between">
        {
        loading === true ? <p>Carregando</p> :
        filteredCountries.map(item => {
          return (
            <div key={item.name} className="w-60 border-b-2 border-dark-lightinput border-opacity-10 bg-dark-lightElements rounded-xl cursor-pointer mb-10">
              <img className="rounded-tl-lg rounded-tr-lg" width={250} height={250} src={item.flags.png} alt="bandeira" />
              <div className="flex m-6 p-2 flex-wrap h-32">
                <h2 className="mb-2 font-nunito font-bold text-lg">{item.name}</h2>
                <span><b>Population:</b> {item.population}</span>
                <span><b>Region:</b> {item.region}</span>
                <span><b>Capital:</b> {item.capital}</span>
              </div>
            </div>
          )
        })}
      </div>

    </>
  )
}