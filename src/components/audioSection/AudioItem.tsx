import {Button, Typography, useMediaQuery} from '@material-ui/core';
import {FunctionalComponent, h, Fragment, RefObject} from 'preact';
import styles from '../../routes/home/styles.css';
import {useRef, useState} from 'preact/hooks';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';

const AudioItem: FunctionalComponent<{
  player: RefObject<HTMLAudioElement>;
  src: string;
  title: string;
}> = ({player, src, title}) => {
  const [_, setState] = useState(0);
  const toggle = (ref: RefObject<HTMLAudioElement | null>) => {
    if (ref.current) {
      ref.current.paused ? ref.current.play() : ref.current.pause();
    }
    setState(Math.random());
  };
  const matches = useMediaQuery('(min-width:800px)');
  const marginBottom = matches ? 0 : 10;
  const progressRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState(0);
  return (
    <Fragment>
      <Button
        className={styles.textButton}
        style={{
          textTransform: 'inherit',
          width: '100%',
          border: '1px solid #000',
          marginBottom,
          display: 'block',
        }}
        onClick={e => toggle(player)}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          {/* <div onClick={() => toggle(player)}> */}
          {player.current?.paused ? <PlayArrow /> : <Pause />}
          {/* </div> */}
          <Typography
            style={{
              textAlign: 'right',
              fontFamily: 'Calibri',
              direction: 'rtl',
              fontSize: 22,
              flex: 1,
            }}
            variant="h4">
            {title}
          </Typography>
        </div>
        <input
          type="range"
          ref={progressRef}
          style={{width: '100%', marginTop: 10}}
          value={progress}
          className={styles.progressBar}
          onClick={e => e.stopPropagation()}
          onChange={e => {
            // @ts-ignore
            const val = e.target?.value;
            if (player.current) {
              player.current.currentTime =
                (player.current?.duration / 100) * val;
            }
          }}
        />
      </Button>
      <audio
        ref={player}
        onTimeUpdate={() => {
          const prog =
            (player.current?.currentTime || 0) /
            (player.current?.duration || 0);

          setProgress(prog * 100);
        }}
        style={{marginBottom: 5, width: '90%', display: 'none'}}
        controls>
        <source src={src} type="audio/mpeg" />
      </audio>
    </Fragment>
  );
};

export default AudioItem;
