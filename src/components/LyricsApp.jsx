import React from "react";
import Form from "./Form";
import Alert from "./Alert";
import Lyrics from "./Lyrics";
import Spinner from "./Spinner";
import useLyrics from "../hooks/useLyrics";

const LyricsApp = () => {
  const { alert, lyrics, isLoading } = useLyrics();
  return (
    <>
      <header>Music lyrics search engine</header>
      <Form />
      <main>
        {alert ? (
          <Alert>{alert}</Alert>
        ) : lyrics ? (
          <Lyrics />
        ) : isLoading ? (
          <Spinner />
        ) : (
          <p className="text-center">
            Find the lyrics of the songs of your favorite artists
          </p>
        )}
      </main>
    </>
  );
};

export default LyricsApp;
