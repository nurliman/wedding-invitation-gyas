import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactHowler from "react-howler";
import Spinner from "../Spinner";
import styles from "./MusicPlayer.module.scss";

const MusicPlayer: React.FC = () => {
  const [preload, setPreload] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);

  const loading = preload && !loaded;

  const handleClick = () => {
    if (!loading) {
      if (!loaded) setPreload(true);
      else setPlaying(!playing);
    }
  };

  useEffect(() => {
    setPreload(true);
  }, []);

  return (
    <>
      <ReactHowler
        src="/assets/beautiful-in-white-shane-filan.mp3"
        preload={preload}
        playing={playing}
        onLoad={() => {
          setLoaded(true);
          setPlaying(true);
        }}
      />
      <button className={styles.button} onClick={handleClick}>
        {loading ? (
          <Spinner
            style={{ width: "3rem", height: "3rem", borderWidth: ".5rem" }}
          />
        ) : playing ? (
          <Image src="/assets/pause.svg" width={20} height={20} />
        ) : (
          <div className={styles.playIcon}>
            <Image src="/assets/play.svg" width={20} height={20} />
          </div>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
