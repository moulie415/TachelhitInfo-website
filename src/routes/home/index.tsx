import {FunctionalComponent, h} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import BibleSection from '../../components/bibleSection';
import Videos from '../../components/videos';
import {CustomHistory} from 'preact-router';
import Welcome from './Welcome';
import {colors} from '../../constants';
import useMusicPlayer from '../../components/useMusicPlayer';

const Home: FunctionalComponent<{history: CustomHistory}> = ({history}) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  const {ref} = useMusicPlayer('../../assets/audio/homepage_intro.mp3');
  return (
    <div
      style={{
        height: '100vh',
        padding: 15,
        backgroundColor: colors.paleTurquoise,
      }}>
      {ready ? (
        <div>
          <Welcome />
          <BibleSection ref={ref} />
          <Videos />
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
