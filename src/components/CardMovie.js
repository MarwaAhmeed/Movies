import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setFavMovie, removeFavMovie } from "./../store/actions/Fav"
import { useDispatch, useSelector } from "react-redux";

export default function CardMovie(props) {
  const movie = props.movie;
  const fav = useSelector((state) => state.fav.addFavorites);
  const isFavorite = fav.find((f) => f.id === movie.id);
  const [isClicked, setIsClicked] = useState(isFavorite);
  const dispatch = useDispatch();
  const pushData = (movie) => {
    if (!isClicked) {
      dispatch(setFavMovie(movie));
    } else {
      dispatch(removeFavMovie(movie));
    }
    setIsClicked(!isClicked);
  }
  return (
    <div className="col-lg-3">
      <div className="card border-0 bg-transparent text-white  pe-2 mb-5">
        <Link to={`/movie-details/${movie.id}`} ><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top position-relative rounded-3 cardImage" alt="" /></Link>
        <span className="position-absolute top-0 end-0 badge  m-3">
          <i className="fa-solid fa-heart  fs-3" onClick={() => pushData(movie)} style={{ color: isClicked ? "red" : "white"}}></i>
        </span>
        <div className="card-body">
          <h5 className="card-title fs-6">{movie.title}</h5>
          <p className="card-text text-muted">{movie.popularity} Views</p>
        </div>
      </div>
    </div>
  )
}