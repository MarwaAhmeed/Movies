import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setFavMovie}from "./../store/actions/Fav"
import { axiosInstance } from "../network/axiosConfig";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Movies() {
 // const fav = useSelector((state) => state.Fav.addFavorites);
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [color,setColor]=useState(false);
  let[pageNumber,setPageNumber]=useState(1)
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
  return (
      <>
    <Header/>
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
