import { Spinner } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const {isLoading,genres,error}=useGenres()
  return (
    <>

    {isLoading && <Spinner></Spinner>}
    {error && <h2>{error}</h2>}
    <ul>
        {genres.map(genre=> <li key={genre.id}>{genre.name}</li>)}
    </ul>
    </>
  )
}

export default GenreList