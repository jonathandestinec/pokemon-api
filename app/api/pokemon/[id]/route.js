

async function GET (req, { params }) {
    const _id = params.id

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${_id}/`)

    const _pokemon = await res.json()

    return Response.json(_pokemon)
}

export { GET }