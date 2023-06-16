const MovieCard = (props) => {

    const movies = props.movies;
    const handleDelete = props.handleDelete;

    return ( 
    <div className="container" >
        {movies.map((movie) => (
        <div key={movie.id} >
        
        <div className="movie">
                <div>
                {movie.director}
              
                </div>

                {<div>
                 
                    <img src={movie.image[1][1]} alt ={movie.image}/>
                   
                </div> }

                <div>
                <button className="btn" onClick={() => handleDelete(movie.id)}>delete blog</button>
                    <h2 style={{color: "white"}}>{movie.directory}</h2>
                </div>
              
            </div>
        </div>
        ))}
    </div>


     );
}
 
export default MovieCard;