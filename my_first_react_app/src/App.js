import {  useEffect } from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from "./search.svg";


const App = () => {

    const[movies, setMovies] = useState([]);
    const[searchItem, setSearchItem] = useState('');

    useEffect(() => {
        fetchData();
      },[])
    
    const fetchData = async () => {
        const url = ('https://imdb-top-100-movies1.p.rapidapi.com/');
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f0abe106ccmsh50a997067495d78p1fc2aajsn9fe122ebb39e',
                'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setMovies(result);
            //console.log(result);
        } catch (error) {
            console.error(error);
        }
      
        
      };
    
    const handleSearch =(title) => {
        const newMovies = movies.filter(movie => movie.title == title);

        setMovies(newMovies);
    }

    const handleDelete = (id) => {
        const newMovies = movies.filter(movie => movie.id !== id);
        setMovies(newMovies);
    }


    return(
      
        <div className='app'>
        <h1>MovieApp</h1>
        <div className="search">
            <input placeholder='Search for movies' value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            />
            <img 
            src={SearchIcon}
            alt='search'
            onClick={() => handleSearch(searchItem)}
            placeholder="Search for movies"
            />
        </div>

        {
            movies?.length > 0 
            ? (
               <div className='container'>
                <MovieCard movies = {movies}  handleDelete={handleDelete} />
               </div>

            ) :
            ( <div className='empty'>
            <h2>Loading...</h2> </div>
             )
            
        }


      
       </div>
    );
   
}
 
export default App;