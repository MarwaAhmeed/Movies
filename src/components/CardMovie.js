import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {setFavMovie}from "./../store/actions/Fav"
import { useDispatch,useSelector } from "react-redux";
import Card from "./CardMovie.css";

export default function CardMovie(props){
    let isF;
    const fav = useSelector((state) => state.fav.addFavorites);
    const [isFound,setFound]=useState();
    const dispatch = useDispatch();
    const movie=props.movie;

    const pushData =(movie)=>{
        isF=fav.find((i)=>i.id===movie.id)
        console.log(isF)
        if(isF ===undefined){
            setFound(true);
            console.log(isFound)
            dispatch(setFavMovie(movie));
        }
      }
    return(
     <div className="col-lg-3">
        <div className="card border-0 bg-transparent text-white  pe-2 mb-5">
           <Link to={`/movie-details/${movie.id}`} ><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top position-relative rounded-3 cardImage" alt=""/></Link> 
            <span className="position-absolute top-0 end-0 badge">
               <i className="fa-solid fa-heart  fs-3" onClick={( )=>pushData(movie)} style={{color:isFound?"red":"white"}}></i>   
            </span>
           <div className="card-body">
            <h5 className="card-title fs-6">{movie.title}</h5>
            <p className="card-text text-muted">{movie.popularity}</p>
          </div>
        </div>
      </div>
    )    
}