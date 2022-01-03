import {FunctionalComponent, h} from 'preact';
import {useEffect, useRef, useState} from 'preact/hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import BibleSection from '../../components/bibleSection';
import Videos from '../../components/videos';
import {CustomHistory} from 'preact-router';
import Welcome from './welcome';
import {colors} from '../../constants';
import MusicPlayer from '../../components/MusicPlayer';

const Home: FunctionalComponent<{history: CustomHistory}> = ({history}) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  const musicPlayer = useRef<HTMLAudioElement>(null);
  return (
    <div
      style={{
        minHeight: '100%',
        padding: 15,
        backgroundColor: colors.paleTurquoise,
      }}>
      {ready ? (
        <div>
          <Welcome />
          <BibleSection ref={musicPlayer} />
          <Videos />
          {/* <MusicPlayer
            ref={musicPlayer}
            src="../../assets/audio/homepage_intro.mp3"
          /> */}
        </div>
      ) : (
        <div style={{textAlign: 'center'}}>
          <CircularProgress style={{textAlign: 'center'}} />
        </div>
      )}
    </div>
  );
};

export default Home;
