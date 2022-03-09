import React, { useState, useEffect, useRef } from "react";


const GenresInDb = () => {
  const [genres, setGenres] = useState([]);
 

  useEffect(() => {
    fetch( 'api/genres')
      .then(res => res.json())
      .then(genres => {
        setGenres(genres.data)
      })
  })

  const fondo = useRef();
  const titulo = useRef();
  console.log(fondo.current);

    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3" ref={fondo}>
            <h5 className="m-0 font-weight-bold text-gray-800" ref={titulo}>
              Genres in Data Base</h5>
      

          <div className="card-body">
            <div className="row">
              {
                genres.map((genres, i) => (
                  <div className="col-lg-6 mb-4" key={genres.name + i}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{genres.name}</div>
                    </div>
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default GenresInDb;
