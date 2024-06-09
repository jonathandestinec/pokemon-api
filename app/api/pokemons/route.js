"use server"

async function GET() {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)

    if (!res.ok) {
        throw new Error("Failed to fetch Pokemons")
    }

    const _pokemons = await res.json()

    return Response.json(_pokemons)
}

export { GET }