import React from "react";
import { useSelector} from "react-redux";
import CardMovie from "../components/CardMovie";


export default function Favorites() {
  const Favorites = useSelector((state) => state.fav.addFavorites);
  console.log(Favorites)
  return (
    <div className="container">
      <div className="row mt-5">
        {Favorites.map((movie) => {
          console.log(movie)
          return (
            <CardMovie movie={movie} key={movie.id} />
          )
        })}
      </div>
    </div>
  );
}
