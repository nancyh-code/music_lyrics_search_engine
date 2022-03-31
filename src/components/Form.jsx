import { useState } from "react";
import useLyrics from "../hooks/useLyrics";

const Form = () => {
  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });

  const { setAlert, LyricSearch } = useLyrics();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Artist name and song are required");
      return;
    }
    LyricSearch(search);
    setAlert("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <legend>Search by Musician Artist and Song</legend>
      <div className="form-grid">
        <div>
          <label>Musician</label>
          <input
            type="text"
            name="artist"
            placeholder="Musician Artist"
            value={search.artist}
            onChange={(e) =>
              setSearch({
                ...search,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Song</label>
          <input
            type="text"
            name="song"
            placeholder="Name of the Song"
            value={search.song}
            onChange={(e) =>
              setSearch({
                ...search,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};

export default Form;
