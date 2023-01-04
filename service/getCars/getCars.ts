// import { useEffect, useState } from 'react'

// const [cars, setCars] = useState([])

// export const getCars = () => {
//   return useEffect(() => {
//     //consumindo a API - buscando os filmes mais bem avaliados
//     fetch(
//       `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`
//     )
//       .then(response => response.json())
//       .then(data => {
//         setCars(data.results)
//       })
//   }, [])
// }
