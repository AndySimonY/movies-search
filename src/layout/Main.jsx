import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'
import Pleloader from '../components/Preloader'
import Search from '../components/Search'


const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const searchMovies = (str, type = 'all') =>{
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
            type !== 'all'? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => {setMovies(data.Search);
                      setLoading(false)
                    })
        .catch((err) => {
            console.error(err);
            setLoading(false)
        })
    }

useEffect(() =>{
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => {searchMovies(data.Search);
                      setLoading(false)
                    })
        .catch((err) => {
            console.error(err);
            setLoading(false)
        })
}, [])
        return(
            <main className='container content'>
                <Search searchMovies={searchMovies}/>
                {
                    loading ? (
                    <Pleloader/>
                    ):(<MovieList movies={movies}/>

                    )}
                
            </main>
        )
    }


export default Main