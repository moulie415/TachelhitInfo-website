import {Button, Card, Grid, Tab, Tabs, useMediaQuery} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import {useEffect, useRef, useState} from 'preact/hooks';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Modal from 'react-modal';
import {colors, psalmData, psalms} from '../../constants';
import styles from '../../routes/home/styles.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
  },
  overlay: {
    zIndex: 9999,
  },
};

function Psalms() {
  const [tab, setTab] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState('');
  const player = useRef<HTMLAudioElement>(null);
  const musicPlayer = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useState('');
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [musicIndex, setMusicIndex] = useState(0);
  const music = `./assets/audio/psalms/musical/ps${psalms[musicIndex]}.mp3`;

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

  const handleClick = (
    lat: string,
    arabic: string,
    tif: string,
    audio: string,
  ) => {
    if (tab === 0) {
      // window.open(lat);
      setPdfSrc(lat);
    }
    if (tab === 1) {
      // window.open(tif);
      setPdfSrc(tif);
    }
    if (tab === 2) {
      // window.open(arabic);
      setPdfSrc(arabic);
    }
    setAudio(audio);
    openModal();
  };

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

  const getFontSize = () => (tab === 2 ? 20 : 'inherit');

  const getFontFamily = () => {
    if (tab === 1) {
      return 'Tifinagh';
    }
    if (tab === 2) {
      return 'Scheherazade';
    }
    return 'inherit';
  };

  return (
    <div
      style={{
        padding: 15,
        height: '100vh',
        backgroundColor: colors.paleTurquoise,
      }}>
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
          <Grid xs={12} sm={3} md={3} item>
            {psalmData
              .slice(0, psalmData.length / 2)
              .map(
                ({
                  psalm,
                  name,
                  arabicName,
                  tifName,
                  pdfLat,
                  pdfArabic,
                  pdfTif,
                  audio,
                }) => {
                  return (
                    <div key={psalm}>
                      <Button
                        onClick={() =>
                          handleClick(pdfLat, pdfArabic, pdfTif, audio)
                        }
                        style={{
                          textTransform: 'inherit',
                        }}>
                        <span style={{color: colors.red}}>{psalm}</span>
                        <span>&nbsp;</span>
                        <span> </span>
                        <span
                          style={{
                            fontSize: getFontSize(),
                            fontFamily: getFontFamily(),
                            direction: tab === 2 ? 'rtl' : 'inherit',
                          }}>
                          {getName(tab, name, arabicName, tifName)}
                        </span>
                      </Button>
                    </div>
                  );
                },
              )}
          </Grid>
          <Grid xs={12} sm={3} md={3} item style={{paddingBottom: 40}}>
            {psalmData
              .slice(psalmData.length / 2)
              .map(
                ({
                  psalm,
                  name,
                  arabicName,
                  tifName,
                  pdfLat,
                  pdfArabic,
                  pdfTif,
                  audio,
                }) => {
                  return (
                    <div
                      key={psalm}
                      style={{fontSize: tab === 2 ? 20 : 'inherit'}}>
                      <Button
                        onClick={() =>
                          handleClick(pdfLat, pdfArabic, pdfTif, audio)
                        }
                        style={{
                          textTransform: 'inherit',
                        }}>
                        <span style={{color: colors.red}}>{psalm}</span>
                        <span>&nbsp;</span>
                        <span> </span>
                        <span
                          style={{
                            fontSize: getFontSize(),
                            fontFamily: getFontFamily(),
                            direction: tab === 2 ? 'rtl' : 'inherit',
                          }}>
                          {getName(tab, name, arabicName, tifName)}
                        </span>
                      </Button>
                    </div>
                  );
                },
              )}
          </Grid>
          <Grid
            style={{
              border: '1px solid',
              borderColor: colors.red,
              backgroundColor: colors.cream,
              textAlign: 'center',
            }}
            xs={12}
            sm={3}
            md={3}
            item>
            {psalmData
              .slice(0, psalmData.length / 2)
              .map(({psalm, name, arabicName, tifName}, index) => {
                return (
                  <div
                    key={psalm}
                    style={{fontSize: tab === 2 ? 20 : 'inherit'}}>
                    <Button
                      onClick={() => {
                        if (index === musicIndex) {
                          setMusicPlaying(!musicPlaying);
                        } else {
                          setMusicIndex(index);
                          setMusicPlaying(true);
                        }
                      }}
                      style={{
                        textTransform: 'inherit',
                      }}>
                      {index === musicIndex && musicPlaying ? (
                        <Pause />
                      ) : (
                        <PlayArrow />
                      )}
                      <span style={{color: colors.red}}>{psalm}</span>
                      <span>&nbsp;</span>
                      <span> </span>
                      <span
                        style={{
                          fontSize: getFontSize(),
                          fontFamily: getFontFamily(),
                          direction: tab === 2 ? 'rtl' : 'inherit',
                        }}>
                        {getName(tab, name, arabicName, tifName)}
                      </span>
                    </Button>
                  </div>
                );
              })}
          </Grid>
          <Grid
            style={{
              border: '1px solid',
              borderColor: colors.red,
              backgroundColor: colors.cream,
              textAlign: 'center',
            }}
            xs={12}
            sm={3}
            md={3}
            item>
            {psalmData
              .slice(psalmData.length / 2)
              .map(({psalm, name, arabicName, tifName}, index) => {
                const actualIndex = index + 12;
                return (
                  <div
                    key={psalm}
                    style={{fontSize: tab === 2 ? 20 : 'inherit'}}>
                    <Button
                      onClick={() => {
                        if (actualIndex === musicIndex) {
                          setMusicPlaying(!musicPlaying);
                        } else {
                          setMusicIndex(actualIndex);
                          setMusicPlaying(true);
                        }
                      }}
                      style={{
                        textTransform: 'inherit',
                      }}>
                      {actualIndex === musicIndex && musicPlaying ? (
                        <Pause />
                      ) : (
                        <PlayArrow />
                      )}
                      <span style={{color: colors.red}}>{psalm}</span>
                      <span>&nbsp;</span>
                      <span> </span>
                      <span
                        style={{
                          fontSize: getFontSize(),
                          fontFamily: getFontFamily(),
                          direction: tab === 2 ? 'rtl' : 'inherit',
                        }}>
                        {getName(tab, name, arabicName, tifName)}
                      </span>
                    </Button>
                  </div>
                );
              })}
          </Grid>
        </Grid>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="pdf modal">
        <div style={{height: matches ? '80vh' : '30vh'}}>
          <iframe src={pdfSrc} width="100%" height="100%" />
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
