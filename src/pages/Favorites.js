import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavMovie } from "../store/actions/Fav";

export default function Favorites() {
  const {isClicked,setColor}=useState(false)
  const Favorites = useSelector((state) => state.addFavorites);
  const dispatch = useDispatch();
  const removeFav=(movie)=>{
    console.log(movie)
      dispatch(removeFavMovie(movie))
  }
  console.log(Favorites)
  return (
    <div className="container">
    <div className="row mt-5">
      {Favorites.map((movie)=>{
        console.log(movie)
        return(
          <div className="col-lg-3" key={movie.id}>
          <div className="card border-0">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text">
              <i className="fa-solid fa-trash-can text-danger" onClick={()=>removeFav(movie)}></i>
              </p>
            </div>
          </div>
        </div>
        )
        })}
    </div>
    </div>
  );
}
