import React from "react";
import { actors } from "../data";

// prettier-ignore
function Actors () {
  
  const displayActors = actors.map( actor => {
    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        Movies:
        <ul>
          {actor.movies.map((movie) => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })


  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors}
    </div>
  )
}

export default Actors;
