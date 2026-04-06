import  {React,useState, useEffect } from "react";
import "./Add.css";
import axios from "axios";
import ResultCard from "./ResultCard"; 
const Add=()=>{
    const[searchValue ,setsearchValue]=useState("")
    const[movies,setMovies]=useState([])
    useEffect(()=>{
      axios.get(`https://www.omdbapi.com/?s=${searchValue} man&apikey=c059e884`)
      .then((Response)=>{
       if(Response.data.Search){
       setMovies(Response.data.Search);
       }
      })
      .catch((error)=>console.log(error));
    },[searchValue]);
return <div className="add-page">
    <div className="container">
        <div className="add-content">
            <div className="input-container">
                <input type="text" placeholder="Search For Movie" 
                value={searchValue}
                onChange={(e)=>setsearchValue(e.target.value)}/>
            </div>
            {movies.length>0 && (<ul className="results">
             {movies.map((movie)=><li key={movie.imdbID}>{<ResultCard movie={movie}/>}</li>)}
            </ul>)}
        </div>

    </div>
</div>
}
export default Add;