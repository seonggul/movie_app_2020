import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';


function Movie( {id, year,title,summary,poster, genres} ){
return  (
          <Link to={{
            pathname:`/movie/${id}`,
            state:{
              year,title,summary,poster,genres
            }
          }}>
          <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                  {genres.map((genre, index)=>(
                    <li className="genres_genre" key={index}>
                      {genre} </li>))}
                </ul>
                <p className="movie_summary">{summary.slice(0,120)}</p>
                
            </div>
          </div>
        </Link>
        );
}

Movie.proptype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;