import { Outlet } from '@remix-run/react'
import React from 'react'

type Props = {}

const Parent = (props: Props) => {
  return (
    <div className='p-10'>
      <Outlet />
    </div>
  )
}

export default Parent
