import { useParams } from '@remix-run/react'
import React from 'react'

type Props = {}

const DynamicChild = (props: Props) => {
  const { someId } = useParams()
  return <div>I am dynamic child {someId}</div>
}

export default DynamicChild
