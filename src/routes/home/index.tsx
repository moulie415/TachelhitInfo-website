import {FunctionalComponent, h} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import AudioSection from '../../components/audioSection';
import BibleSection from '../../components/bibleSection';
import Videos from '../../components/videos';
import {CustomHistory} from 'preact-router';
import Welcome from './welcome';
import {colors} from '../../constants';

const Home: FunctionalComponent<{history: CustomHistory}> = ({history}) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

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
          {/* <AudioSection /> */}
          <BibleSection />
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
