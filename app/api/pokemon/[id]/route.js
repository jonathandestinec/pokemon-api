"use server"

async function GET (req, {params}) {
    const id = params.id
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const _pokemon = await res.json()
    return Response.json(_pokemon)
}

export {GET}