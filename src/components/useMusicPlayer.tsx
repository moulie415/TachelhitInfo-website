import {h} from 'preact';
import {useEffect, useRef} from 'preact/hooks';

const useMusicPlayer = (src: string, autoPlay = true) => {
  const ref = useRef<HTMLAudioElement>(null);

  const Player = () => (
    <audio
      style={{display: 'none'}}
      autoPlay={autoPlay}
      controls
      ref={ref}
      loop>
      <source src={src} type="audio/mpeg" />
    </audio>
  );
  return {ref, Player};
};

export default useMusicPlayer;
