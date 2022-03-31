import { useState } from "react";
import LyricsApp from "./components/LyricsApp";
import { LyricsProvider } from "./context/LyricsProvider";

function App() {
  return (
    <LyricsProvider>
      <LyricsApp />
    </LyricsProvider>
  );
}

export default App;
