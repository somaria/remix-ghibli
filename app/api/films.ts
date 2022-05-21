/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Film {
  id: string
  title: string
  original_title: string
  description: string
  image: string
  people: string[]
}

export const getFilms = async (title?: string | null) => {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const films: Film[] = await response.json()
  return films.filter((film) =>
    title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
  )
}

export const getFilmById = async (filmId: string) => {
  console.log('getting film 49302')
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/films/${filmId}`
  )
  const film: Film = await response.json()
  return film
}
