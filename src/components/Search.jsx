import React, {useState} from "react";
const Search = (props) => {
  const {
    searchMovies = Function.prototype
  } = props;

const [search, setSearch] = useState('all')
const [type, setType] = useState('all')


const  handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

const  handleFilter = (e) => {
    setType(e.target.dataset.type)
    searchMovies(search, e.target.dataset.type);
  };
    return (
      <div className="row">
        <div className="input-field col s12">
          <div>
            <input
              className="validate"
              placeholder="search"
              type="search"
              value={search}
              onChange={(e) =>
               setSearch(
                  e.target.value
                )
              }
              onKeyDown={handleKey}
            />
            <button
              className="waves-effect waves-light search-btn btn"
              onClick={() => searchMovies(search, type)}
            >
              Search
            </button>
          </div>
          <div>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={handleFilter}
                checked={type === 'all'}
              />
              <span>All</span>
            </label>

            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={handleFilter}
                checked={type === 'movie'}
              />
              <span>Only movies</span>
            </label>

            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={handleFilter}
                checked={type === 'series'}
              />
              <span>Only series</span>
            </label>
          </div>
        </div>
      </div>
    );
  }

export default Search;
