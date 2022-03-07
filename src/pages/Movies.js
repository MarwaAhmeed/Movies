import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Header from "../components/Header";
import{getMovieList} from "../store/actions/movies"
import{getMovieSearch} from "../store/actions/movies"
import CardMovie from "../components/CardMovie";

export default function Movies() {

  let movies=useSelector((state)=>state.movies.movieList);
  const dispatch = useDispatch();
  let[pageNumber,setPageNumber]=useState(1)
  let[searchValue,setSearchValue]=useState("")
  const fav = useSelector((state) => state.fav.addFavorites);
  
  useEffect(() => { 
    dispatch(getMovieList(pageNumber))
  }, [pageNumber]);

  useEffect(() => {
     dispatch(getMovieSearch(searchValue))
  }, [searchValue]);
 const changePageNumer=()=>{
   if(pageNumber>1){
    setPageNumber(--pageNumber)
   }
  }
  const increasePageNumer=()=>{
    setPageNumber(++pageNumber)
  }

  const handleSearch=(e)=>{
     setSearchValue(e.target.value);
  }
  return (
      <div className="Movies" >
    <Header/>
    <form className="d-flex justify-content-center mt-3 ">
        <input className="form-control me-2 w-50 " type="search" placeholder="Search" aria-label="Search" onChange={(event) =>handleSearch(event)}/>
      </form>
    <div className="container mt-5">
    <div className="row">
        {movies.map((movie)=>{
            return(
                <CardMovie movie={movie} key={movie.id}/>
            )
        })}
    </div>
    <div className="d-flex justify-content-center pb-5">
    <button type="button" className="btn btn-outline-danger px-4 me-5 mt-4" onClick={changePageNumer}>Prev</button>
    <button type="button" className="btn btn-outline-danger px-4 mt-4 "onClick={increasePageNumer}>Next</button>
    </div>
    </div>
    </div>
  );
}
