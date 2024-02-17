import React from 'react'

const TransformationsPage = ({params} : {params: {id: string}}) => {
  return (
    <div>TransformationPage {params.id}</div>
  )
}

export default TransformationsPage