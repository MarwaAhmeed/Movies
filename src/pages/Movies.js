import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosConfig";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Movies() {
  const [movies, setMovies] = useState([]);
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
                    {/* <h5 className="card-title fs-6">{movie.title}</h5> */}
                    {/* <p className="card-text text-muted">{movie.popularity}</p> */}
                  </div>
                </div>
                </div>
            )
        })}
    </div>
    <div>
    <Link type="button" className="btn btn-outline-dark m-5 px-4" onClick={changePageNumer}>Prev</Link>
    <Link type="button" className="btn btn-outline-dark px-4"onClick={increasePageNumer}>Next</Link>
    </div>
    </div>
    </>
  );
}
