import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { getMovieList } from "../store/actions/movies"
import { getMovieSearch } from "../store/actions/movies"
import CardMovie from "../components/CardMovie";

export default function Movies() {

  let movies = useSelector((state) => state.movies.movieList);
  console.log(movies)
  const dispatch = useDispatch();
  let [pageNumber, setPageNumber] = useState(1)
  // const fav = useSelector((state) => state.fav.addFavorites);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    dispatch(getMovieList(pageNumber))
  }, [pageNumber,dispatch]);

  // useEffect(() => {
  //   dispatch(getMovieSearch(searchQuery))
  // }, [dispatch]);
  const changePageNumer = () => {
    if (pageNumber > 1) {
      setPageNumber(--pageNumber)
    }
  }
  const increasePageNumer = () => {
    setPageNumber(++pageNumber)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getMovieSearch(searchQuery))
  }
  return (
    <div className="Movies" >
      <Header />
      <form className="d-flex justify-content-center mt-3 ">
        <input className="form-control me-2 w-50 " type="search" placeholder="Search movies..." aria-label="Search" onChange={(event) => setSearchQuery(event.target.value)} />
        <button type="button" className="btn btn-outline-danger px-4 me-5" onClick={(e)=>handleSearch(e)}>Search</button>
      </form>
      <div className="container mt-5">
        <div className="row">
          {movies.map((movie) => {
            return (
              <CardMovie movie={movie} key={movie.id} />
            )
          })}
        </div>
        <div className="d-flex justify-content-center pb-5">
          <button type="button" className="btn btn-outline-danger px-4 me-5 mt-4" onClick={changePageNumer} disabled={pageNumber===1&&true}>Prev</button>
          <button type="button" className="btn btn-outline-danger px-4 mt-4 " onClick={increasePageNumer}>Next</button>
        </div>
      </div>
    </div>
  );
}
