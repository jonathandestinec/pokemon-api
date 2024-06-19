"use client"

import React, { useEffect, useState } from 'react'

function Pokemon() {

    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        const fetchPokemons = async () => {
            const res = await fetch("/api/pokemons")
            const pokemons = await res.json()
            setPokemons(pokemons.results)
        }
        fetchPokemons()
    }, [])

    const displayPokemon = async (id) => {
        const res = await fetch(`/api/pokemon/${id}`)
        const pokemon = await res.json()
        setPokemon(pokemon)
    }

    // Initialize a pokemon to display once the app renders
    useEffect(() => {
        displayPokemon(2)
    }, [])

    return (
        <div className=' flex items-center justify-between w-full'>

            {/* Display all the pokemons gotten ftom the fetchPokemons */}

            <div className='block w-max'>
                {pokemons && pokemons.map(pokemon => {
                    const id = pokemon.url.split("/")[6]
                    return (
                        <div key={id}>
                            <button className=' w-max mb-5' onClick={() => {
                                displayPokemon(id)
                            }}>{pokemon.name}</button>
                        </div>
                    )
                })}
            </div>

            {/* Display Selected pokemon data */}
            {pokemon && (
                <div>
                    <h1>{pokemon.species.name}</h1>
                    <img src={`${pokemon.sprites.front_default}`} alt="" />
                </div>
            )}

        </div>
    )
}

export default Pokemon