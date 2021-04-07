import Movie from "./Movie"

const MovieList = (props) => {
    const {movies} = props
    return (
<div className="movies">
{
movies ? (movies.map(movie =>(
    <Movie key={movie.imdbID} {...movie}/>
))):(<h4>Nothing found</h4>)}
</div>
    )
}
export default MovieList