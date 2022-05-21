/* eslint-disable react-hooks/rules-of-hooks */
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  Form,
  Link,
} from '@remix-run/react'
import { ReactChild, ReactFragment, ReactPortal } from 'react'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { getFilms, Film, getFilmById } from '~/api/films'

export const meta: MetaFunction = () => ({
  title: 'Films | Studio Ghibli',
  description: 'List of films',
})

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: 'styles' }]
}

type Props = {}

//server side
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)

  const title = url.searchParams.get('title')
  return getFilms(title)
}

const index = (props: Props) => {
  const films = useLoaderData<Film[]>()

  return (
    <div className='p-16 font-sans'>
      <div className='text-5xl font-bold text-center mb-12'>
        Studio Ghibli Films
      </div>

      <Form reloadDocument method='get' className='py-5'>
        <label htmlFor='' className='font-bold mr-4'>
          Search:
        </label>
        <input
          type='text'
          name='title'
          id=''
          placeholder='Type a title'
          className='border-2 rounded py-2 px-3'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2'
        >
          Search
        </button>
      </Form>

      <div className='grid grid-cols-4 gap-12'>
        {films.map((film: Film) => (
          <Link
            title={film.title}
            to={film.id}
            key={film.id}
            className='hover:shadow-2xl hover:scale-105 hover:font-bold curson-pointer'
            prefetch='render'
          >
            <div>{film.title}</div>
            <div>
              <img src={film.image} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default index
