import useLyrics from "../hooks/useLyrics";
import Spinner from "./Spinner";

const Lyric = () => {
  const { lyrics, isLoading } = useLyrics();

  return isLoading ? <Spinner /> : <div className="lyrics">{lyrics}</div>;
};

export default Lyric;
