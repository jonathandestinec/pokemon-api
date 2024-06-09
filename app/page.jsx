"use client"

import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

function page() {

  const [data, setData] = useState(null)

  const displayInfo = async (_id) => {

    // Fetch Specific Pokemon Data

    axios.get(`/api/pokemon/${_id}`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })

      .catch((err) => {
        console.log(err)
      })
  }

  displayInfo(2)

  return (
    <div>

      {/* Pokemons */}

      <ul>

        {
          axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
            .then((res) => {

              const _pokemons = res.data.results

              _pokemons.map((pokemon, k) => {

                const _id = pokemon.url.split("/")[6]

                return (
                  <li key={k}>
                    <a onClick={(_id) => { displayInfo(_id) }} className='listItem cursor-pointer text-blue-700 hover:text-white'>{pokemon.name}</a>
                  </li>
                )

              })
            })

            .catch((err) => {
              console.log(err)
            })

        }

      </ul>

      <div>
        <h1>Ability: {data.ability.name}</h1>
        <h1>Name {data.species.name}</h1>
        <h1>Weight: {data.weight}</h1>
        <Image
          src={data.sprites.front_default}
          width={100}
          height={100}
        ></Image>
      </div>

    </div>
  )
}

export default page