import axios from 'axios'

function page() {
    return (
        <div>

            <ul>
                {
                    axios.get("http://localhost:3000/api/pokemons")
                        .then((response) => {
                            const data = response.data.results
                            console.log(data)

                            // Display the data

                            data.map((pokemon, k) => {
                                return (
                                    <li key={k}>{pokemon.name}</li>
                                )
                            })
                        })

                        .catch(err => {
                            console.log(err)
                        })
                }
            </ul>

        </div>
    )
}

export default page