import * as React from "react";
import { useState, useEffect } from "react";

export interface FilmsProps {}

interface IFilm {
  id: string;
  title: string;
}

const Films: React.SFC<FilmsProps> = (props) => {
  const [films, setFilms] = useState<IFilm[]>([]);

  const getFilms = async () => {
    let r = await fetch("/api/films");
    let films = await r.json();
    setFilms(films);
  };

  useEffect(() => { getFilms(); }, []);

  return (
    <section className="row my-2">
      <ul className="col-md-6 offset-md-3 list-group">
        {films.map((film) => (
          <li
            key={film.id}
            className="list-group-items d-flex justify-content-between">
                <h3> {film.title} </h3>
            </li>
        ))}
      </ul>
    </section>
  );
};

export default Films;
