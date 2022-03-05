import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setFavMovie}from "./../store/actions/Fav"
import { axiosInstance } from "../network/axiosConfig";
import { axiosInstance2 } from "../network/axiosSearch";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Movies() {
 // const fav = useSelector((state) => state.Fav.addFavorites);
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [color,setColor]=useState(false);
  let[pageNumber,setPageNumber]=useState(1)
  let[searchValue,setSearchValue]=useState("")
  useEffect(() => {
    axiosInstance
      .get("/popular",{
        params:{
        page:pageNumber
        }
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [pageNumber]);
  useEffect(() => {
    axiosInstance2
      .get("",{
        params:{
        query:searchValue
        }
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [searchValue]);
 const changePageNumer=()=>{
   if(pageNumber>1){
    setPageNumber(--pageNumber)
   }
  }
  const increasePageNumer=()=>{
    setPageNumber(++pageNumber)
  }
  const pushData =(movie)=>{
    dispatch(setFavMovie(movie));
    setColor(true);
    console.log(color)
  }
  const handleSearch=(e)=>{
    console.log(e.target.value);
     setSearchValue(e.target.value);
  }
  return (
      <>
    <Header/>
    <form className="d-flex justify-content-center mt-3">
        <input className="form-control me-2 w-50 " type="search" placeholder="Search" aria-label="Search" onChange={(event) =>handleSearch(event)}/>
        <i class="fa-solid fa-magnifying-glass text-white mt-2 fs-5 ms-2"></i>
      </form>
    <div className="container my-5">
    <div className="row">
        {movies.map((movie)=>{
            return(
                <div className="col-lg-3" key={movie.id}>
                <div className="card border-0">
                <Link to={`/movie-details/${movie.id}`} ><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top rounded-3" alt=""/></Link> 
                  <div className="card-body">
                  <i className="fa-solid fa-heart fs-2" onClick={( )=>pushData(movie)} style={{color:color==true?"red":"white" }}></i>
                    {/* <h5 className="card-title fs-6">{movie.title}</h5> */}
                    {/* <p className="card-text text-muted">{movie.popularity}</p> */}
                  </div>
                </div>
                </div>
            )
        })}
    </div>
    <div>
    <button type="button" className="btn btn-outline-danger m-5 px-4" onClick={changePageNumer}>Prev</button>
    <button type="button" className="btn btn-outline-danger px-4"onClick={increasePageNumer}>Next</button>
    </div>
    </div>
    </>
  );
}
