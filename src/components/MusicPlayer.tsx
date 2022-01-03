import {FunctionalComponent, h, RefObject} from 'preact';
import {useEffect, useRef, useState} from 'preact/hooks';

const MusicPlayer: FunctionalComponent<{
  src: string;
  ref?: RefObject<HTMLAudioElement>;
}> = ({src, ref}) => {
  const musicPlayer = ref || useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (musicPlayer.current) {
      musicPlayer.current.pause();
      musicPlayer.current.load();
      musicPlayer.current.play();
    }
  }, []);

  return (
    <audio
      style={{display: 'none'}}
      controls
      ref={musicPlayer}
      autoPlay
      loop
      muted>
      <source src={src} type="audio/mpeg" />
    </audio>
  );
};

export default MusicPlayer;
