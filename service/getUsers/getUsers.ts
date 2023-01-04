import { useEffect, useState } from 'react'

export const getUsers = () => {
  const [users, setUsers] = useState([])
  return useEffect(() => {
    //consumindo a API - buscando os filmes mais bem avaliados
    fetch(`http://localhost:8000/api/v1/user/all`)
      .then(response => response.json())
      .then(data => {
        setUsers(data.results)
      })
    console.log(users)
  }, [])
}
