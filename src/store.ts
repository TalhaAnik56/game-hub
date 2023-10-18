import { create } from "zustand";

interface GameQuery {
  genreId?: number; //same thing like this genre: Genre | undefined;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  setGameQuery: () => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setGameQuery: () => set(() => ({ gameQuery: {} })),

  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } })),

  setPlatformId: (platformId: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: platformId },
    })),

  setSortOrder: (sortOrder: string) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
    })),

  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText: searchText } })),
}));

export default useGameQueryStore;
