"use client"

import React, { useEffect, useState } from 'react'
import { Suspense } from 'react'

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

    const scrollBottomPokeList = () => {
        const pokeList = document.querySelector('.poke-list')
        pokeList.scrollTop += 100
    }

    const scrollTopPokeList = () => {
        const pokeList = document.querySelector('.poke-list')
        pokeList.scrollTop = 0
    }

    return (

        // Style them up
        <div className=' md:flex block items-center justify-between md:w-3/5 w-4/5 ml-auto mr-auto poke-container md:h-4/5 h-5/6 bg-gray-900 bg-opacity-50 absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:p-10 p-5 pl-10 pr-10 rounded-lg ring-1 ring-gray-700'>

            {/* Display all the pokemons gotten ftom the fetchPokemons */}

            <div className='block w-max overflow-scroll md:h-full h-2/5 md:m-0 mb-5 relative poke-list scroll-smooth'>

                {/* Mobile scroll notification */}
                <h4 className=' text-xsm sticky mb-5 text-lime-400 cursor-pointer' onClick={scrollBottomPokeList}>Scroll ▼</h4>

                {pokemons && pokemons.map(pokemon => {
                    const id = pokemon.url.split("/")[6]
                    return (
                        <div key={id}>
                            <button className=' w-max mb-5 font-mono text-lg underline underline-offset-8' onClick={() => {
                                displayPokemon(id)
                            }}>{pokemon.name}</button>
                        </div>
                    )
                })}

            </div>

            {/* Display Selected pokemon data */}
            {pokemon && (
                <div className=' md:flex block items-center justify-between gap-10'>

                    <div className=' md:m-0 mb-5'>
                        <h3 className=' text-2xl font-mono font-black md:m-0 mb-3'>
                            <span className=' font-mono text-base font-light mr-5 text-lime-300 italic'>species.name:</span>
                            <br className=' md:hidden block' />
                            {pokemon.species.name}
                        </h3>

                        <h3 className=' text-2xl font-mono font-black md:m-0 mb-3'>
                            <span className=' font-mono text-base font-light mr-5 text-lime-300 italic'>height:</span>
                            <br className=' md:hidden block' />
                            {pokemon.height}

                            {/* Conditional more context about height 🙃 */}
                            <span className=' font-mono text-sm font-light mr-5 text-amber-300 italic ml-2'>
                                {pokemon.height > 16 && "(very Tall)"}
                            </span>
                        </h3>

                        <h3 className=' text-2xl font-mono font-black md:m-0 mb-3'>
                            <span className=' font-mono text-base font-light mr-5 text-lime-300 italic'>weight:</span>
                            <br className=' md:hidden block' />
                            {pokemon.weight}

                            {/* Conditional more context about weight 🙃 */}
                            <span className=' font-mono text-sm font-light mr-5 text-amber-300 italic ml-2'>
                                {pokemon.weight > 900 && "(really heavy)"}
                            </span>
                        </h3>
                    </div>

                    <div>
                        <img src={`${pokemon.sprites.front_shiny}`} alt="" className=' w-48 -m-4 md:m-0 mr-auto ml-auto' />
                        <img src={`${pokemon.sprites.back_default}`} alt="" className=' w-48 -m-4 md:block hidden' />
                    </div>

                </div>
            )}

        </div>
    )
}

export default Pokemon