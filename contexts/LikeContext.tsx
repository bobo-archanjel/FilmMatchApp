import React, { createContext, useState } from 'react';

interface Film {
  id: number;
  title: string;
  imageUrl: string;
}

interface LikeContextValue {
  likedFilms: Film[];
  addLike: (film: Film) => void;
}

export const LikeContext = createContext<LikeContextValue>({
  likedFilms: [],
  addLike: () => {},
});

export function LikeProvider({ children }: { children: React.ReactNode }) {
  const [likedFilms, setLikedFilms] = useState<Film[]>([]);

  const addLike = (film: Film) => {
    setLikedFilms((prev) => [...prev, film]);
  };

  return (
    <LikeContext.Provider value={{ likedFilms, addLike }}>
      {children}
    </LikeContext.Provider>
  );
}
