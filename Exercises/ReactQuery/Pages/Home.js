import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function Home() {
  const {data ,isLoading , isError , refetch} = useQuery(['cat'] , () => {
    return axios.get('https://catfact.ninja/fact').then( (e) => e.data)
  })

  if (isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Sorry File Not Found</div>
  }
  return (
    <div>
      Home
      <p>{data?.fact}</p>

      <button onClick={refetch}> Update</button>
      </div>
  )
}

export default Home