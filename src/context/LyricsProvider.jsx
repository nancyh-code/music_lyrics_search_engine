import { useState, createContext } from "react";
import axios from "axios";

const LyricsContext = createContext();

const LyricsProvider = ({ children }) => {
  const [alert, setAlert] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const LyricSearch = async (search) => {
    setIsLoading(true);
    try {
      const { artist, song } = search;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const { data } = await axios(url);
      setLyrics(data.lyrics);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <LyricsContext.Provider
      value={{ alert, setAlert, LyricSearch, setLyrics, lyrics, isLoading }}
    >
      ;{children}
    </LyricsContext.Provider>
  );
};

export { LyricsProvider };

export default LyricsContext;
