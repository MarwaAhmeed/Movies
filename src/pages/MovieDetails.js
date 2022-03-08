import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import{getMovieDetails} from "../store/actions/movies"


export default function MovieDetails() {
  let movieeDetails=useSelector((state)=>state.movies.movieDetails);  
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(params))
  }, []);
  
  return (
    <>
  <div className="container-fluid vh-100"style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movieeDetails.poster_path})`,backgroundPosition:"center",backgroundSize:"cover"}}>
  <div className="card text-white w-75 ms-5" style={{backgroundColor:"transparent"}}>
  <div className="row g-0 mt-5 ">
    <div className="col-md-4">
      <img src={`https://image.tmdb.org/t/p/w500/${movieeDetails.poster_path}`} className="img-fluid rounded-3" alt="..."/>
    </div>
    <div className="col-md-8" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
      <div className="card-body ms-3 mt-3">
        <h4 className="card-title text-capitalize mb-4">{movieeDetails.title}</h4>
        <p className="card-text mb-4 fw-light" style={{fontSize:"0.9rem"}}>{movieeDetails.overview}</p>
        <p className="card-text">Rating : {movieeDetails.vote_average} <i class="fa-solid fa-star text-warning"></i></p>
        <p className="card-text"><small className="text-muted">popularity: {movieeDetails.popularity} views</small></p>
      </div>
    </div>
  </div>
</div>
</div>
 </>
  );
}









// useHistory -> navigate between routes -> .push / .replace / .goback / .goForward
// useLocation -> to get details about current [active] route
// useParams -> to get the dynamic url params values for current [active] route
