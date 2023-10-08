import React from "react";
import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data } = useGenres();
  const selectedGenre = data?.results.find((genre) => genre.id === id);
  return selectedGenre;
};

export default useGenre;
