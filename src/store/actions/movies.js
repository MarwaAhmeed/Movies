import {axiosInstance} from "./../../network/axiosConfig"
import {axiosInstance2} from "./../../network/axiosSearch"

export const getMovieList = (pageNumber) => (dispatch) => {
    axiosInstance
    .get("/popular",{
      params:{
      page:pageNumber
      }
    })
    .then((res) =>
      dispatch({
        type: "GET_MOVIE_LIST",
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
}
export const getMovieSearch = (searchValue) => (dispatch) => {
    axiosInstance2
    .get("",{
        params:{
          query:searchValue,
      }
    })
    .then((res) =>
      dispatch({
        type: "GET_MOVIE_SEARCH",
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
}
export const getMovieDetails = (params) => (dispatch) => {
    axiosInstance
    .get(`/${params.id}`)
    .then((res) =>
      dispatch({
        type: "GET_MOVIE_DETAILS",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
}


