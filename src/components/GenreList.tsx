import { Spinner } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const {data,isLoading,error}=useGenres()
  return (
    <>

    {isLoading && <Spinner></Spinner>}
    {error && <h2>{error}</h2>}
    <ul>
        {data.map(genre=> <li key={genre.id}>{genre.name}</li>)}
    </ul>
    </>
  )
}

export default GenreList