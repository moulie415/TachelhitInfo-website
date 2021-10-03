import {FunctionalComponent, h} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import AudioSection from '../../components/audioSection';
import BibleSection from '../../components/bibleSection';
import Videos from '../../components/videos';
import Applications from '../../components/applications';
import SocialsFooter from '../../components/socialsFooter';

const Home: FunctionalComponent = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div
      style={{
        minHeight: '100%',
        padding: 32,
      }}>
      {ready ? (
        <div>
          <AudioSection />
          <BibleSection />
          <Videos />
          <Applications />
          <SocialsFooter />
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
