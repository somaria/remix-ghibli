import { LoaderFunction } from '@remix-run/node'
import React from 'react'
import { Film, getFilmById } from '~/api/films'
import invariant from 'tiny-invariant'
import { useLoaderData } from '@remix-run/react'

type Props = {}

export const loader: LoaderFunction = async ({ params }) => {
  console.log('the params')
  console.log(params)
  invariant(params.filmId, 'film id is null')
  const film = await getFilmById(params.filmId)
  return film
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Film = (props: Props) => {
  const film = useLoaderData()
  return <div>{film.title}</div>
}

export default Film
