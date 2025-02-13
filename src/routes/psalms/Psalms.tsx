import {
  Button,
  Card,
  Grid,
  IconButton,
  Tab,
  Tabs,
  useMediaQuery,
} from '@material-ui/core';
import {h} from 'preact';
import {useEffect, useMemo, useRef, useState} from 'preact/hooks';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Modal from 'react-modal';
import {colors, psalmData, psalms} from '../../constants';
import styles from '../../routes/home/styles.css';
import Column1 from './Column1';
import Column2 from './Column2';
import Column3 from './Column3';
import Column4 from './Column4';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    backgroundColor: colors.paleTurquoise,
    borderWidth: 0,
    overflow: 'hidden',
  },
  overlay: {
    zIndex: 9999,
    backgroundColor: colors.paleTurquoise,
  },
};

function Psalms() {
  const [tab, setTab] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const player = useRef<HTMLAudioElement>(null);
  const musicPlayer = useRef<HTMLAudioElement>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [psalmIndex, setPsalmIndex] = useState(0);
  const [audio, setAudio] = useState('');
  const music = `./assets/audio/psalms/musical/ps${psalms[musicIndex]}.mp3`;

  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    player.current?.play();
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    if (musicPlaying) {
      if (musicPlayer.current) {
        musicPlayer.current.pause();
        musicPlayer.current.load();
        musicPlayer.current.play();
      }
    } else if (musicPlayer.current) {
      musicPlayer.current.pause();
    }
  }, [musicPlaying, musicIndex]);

  const pdfSrc = useMemo(() => {
    const psalm = psalmData[psalmIndex];
    let pdfSrc = '';
    if (psalm) {
      if (tab === 0) {
        pdfSrc = psalm.pdfLat;
      }
      if (tab === 1) {
        pdfSrc = psalm.pdfTif;
      }
      if (tab === 2) {
        pdfSrc = psalm.pdfArabic;
      }
      return pdfSrc;
    }
    return pdfSrc;
  }, [psalmIndex, tab]);

  const getName = (
    tab: number,
    name: string,
    arabicName: string,
    tifName: string,
  ) => {
    if (tab === 0) {
      return name;
    }
    if (tab === 1) {
      return tifName;
    }
    return arabicName;
  };

  const matches = useMediaQuery('(min-width:600px)');

  const getFontSize = () => (tab === 2 ? 25 : 'inherit');

  const getFontFamily = () => {
    if (tab === 1) {
      return 'Tifinagh';
    }
    if (tab === 2) {
      return 'Scheherazade';
    }
    return 'inherit';
  };

  useEffect(() => {
    if (player.current && audio) {
      player.current.pause();
      player.current.load();
      player.current.play();
    }
  }, [audio]);

  return (
    <div
      style={{
        padding: 15,
        minHeight: '100vh',
        backgroundColor: colors.paleTurquoise,
      }}>
      {modalIsOpen && (
        <IconButton
          aria-label="close"
          onClick={closeModal}
          style={{position: 'fixed', top: 0, left: 0, zIndex: 99999}}>
          <ArrowBackIcon />
        </IconButton>
      )}
      {modalIsOpen && psalmIndex < psalmData.length - 1 && (
        <IconButton
          aria-label="close"
          onClick={() => {
            setPsalmIndex(psalmIndex + 1);
            setAudio(psalmData[psalmIndex + 1].audio);
          }}
          style={{position: 'fixed', top: 0, right: 0, zIndex: 99999}}>
          <ArrowForwardIcon />
        </IconButton>
      )}
      <Card>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#d7d7d7',
            marginBottom: 10,
          }}>
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example">
            <Tab
              style={{
                textTransform: 'inherit',
                fontSize: 20,
                maxWidth: '33%',
                width: '30vw',
              }}
              label="imurign i-sidi rbbi"
            />
            <Tab
              style={{
                fontSize: 20,
                maxWidth: '33%',
                width: '30vw',
              }}
              className={styles.tifinagh}
              label="imurign i-sidi rbbi"
            />
            <Tab
              style={{
                fontSize: 30,
                maxWidth: '33%',
                width: '30vw',
              }}
              className={styles.arabic}
              label="ءيموريگن ءي-سيدي ربّي"
            />
          </Tabs>
        </div>
        <Grid
          style={{
            padding: 20,
            paddingTop: 0,
            textAlign: 'left',
          }}
          justifyContent="space-evenly"
          container>
          {tab === 2 ? (
            <Column2
              setPsalmIndex={setPsalmIndex}
              setAudio={setAudio}
              openModal={openModal}
              tab={tab}
            />
          ) : (
            <Column1
              setPsalmIndex={setPsalmIndex}
              setAudio={setAudio}
              openModal={openModal}
              tab={tab}
            />
          )}
          {tab === 2 ? (
            <Column1
              setPsalmIndex={setPsalmIndex}
              setAudio={setAudio}
              openModal={openModal}
              tab={tab}
            />
          ) : (
            <Column2
              setPsalmIndex={setPsalmIndex}
              setAudio={setAudio}
              openModal={openModal}
              tab={tab}
            />
          )}
          {tab === 2 ? (
            <Column4
              setMusicIndex={setMusicIndex}
              musicIndex={musicIndex}
              musicPlaying={musicPlaying}
              setMusicPlaying={setMusicPlaying}
              tab={tab}
            />
          ) : (
            <Column3
              setMusicIndex={setMusicIndex}
              musicIndex={musicIndex}
              musicPlaying={musicPlaying}
              setMusicPlaying={setMusicPlaying}
              tab={tab}
            />
          )}
          {tab === 2 ? (
            <Column3
              setMusicIndex={setMusicIndex}
              musicIndex={musicIndex}
              musicPlaying={musicPlaying}
              setMusicPlaying={setMusicPlaying}
              tab={tab}
            />
          ) : (
            <Column4
              setMusicIndex={setMusicIndex}
              musicIndex={musicIndex}
              musicPlaying={musicPlaying}
              setMusicPlaying={setMusicPlaying}
              tab={tab}
            />
          )}
        </Grid>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="pdf modal">
        <div style={{height: matches ? '92vh' : '30vh'}}>
          <iframe
            src={`${pdfSrc}${isFirefox ? '#zoom=Fit' : '#view=Fit'}`}
            width="100%"
            height="100%"
          />
        </div>
        <audio style={{width: '100%'}} controls ref={player}>
          <source src={audio} type="audio/mpeg" />
        </audio>
      </Modal>
      <audio
        style={{display: 'none'}}
        controls
        ref={musicPlayer}
        autoPlay
        onEnded={() => {
          if (musicIndex === psalms[psalms.length] - 1) {
            setMusicIndex(0);
          } else {
            setMusicIndex(musicIndex + 1);
          }
        }}>
        <source src={music} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Psalms;
