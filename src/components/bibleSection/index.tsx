import {
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery,
  IconButton,
  Divider,
} from '@material-ui/core';
import {FunctionalComponent, h, RefObject} from 'preact';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayArrow from '@material-ui/icons/PlayArrow';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Pause from '@material-ui/icons/Pause';
import Modal from 'react-modal';
import {useEffect, useRef, useState} from 'preact/hooks';
import {colors, newTestament, oldTestament} from '../../constants';
import styles from '../../routes/home/styles.css';
import AudioSection from '../audioSection';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';

const arratn = '/assets/images/11.jpg';
const ikhbar = '/assets/images/12.png';
const injil = '/assets/images/23.jpg';

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

Modal.setAppElement('#preact_root');

const BibleSection: FunctionalComponent = () => {
  const [book, setBook] = useState<number>();
  const [chapter, setChapter] = useState<number>();
  const [playingBible, setPlayingBible] = useState(false);
  const bibleURL = `https://raw.githubusercontent.com/moulie415/WordOfGodForEachDay/master/files/bible/${book}/${chapter}.mp3`;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [arabic, setArabic] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState('../../assets/pdfs/nt_lat.pdf');
  const bookType = pdfSrc.includes('nt') ? newTestament : oldTestament;


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
    setPlayingBible(false);
  }

  useEffect(() => {
    if (playingBible) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [playingBible]);

  const getArabicBookText = (str: string) => {
    const split = str.split(' ');
    return (
      <div style={{display: 'flex'}}>
        {split.map(s => (
          <Typography
            key={s}
            style={{
              fontFamily: isNaN(Number(s)) ? 'Scheherazade' : 'inherit',
              fontSize: 25,
              direction: 'rtl',
              marginRight: 5,
            }}>
            {s}
          </Typography>
        ))}
      </div>
    );
  };

  const matches = useMediaQuery('(min-width:600px)');
  const desktop = useMediaQuery('(min-width:800px)');

  return (
    <div>
      <div style={{marginTop: 15}}>
        <Grid justifyContent="space-evenly" container>
          <Grid
            style={{textAlign: 'center'}}
            item
            xs={12}
            sm={desktop ? 4 : 12}
            md={4}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <VolumeMuteIcon
                style={{fontSize: 30, color: '#000', marginRight: 10}}
              />
              <ImportContactsTwoToneIcon
                style={{
                  fontSize: 25,
                  color: '#000',
                  marginRight: 10,
                  marginBottom: 3,
                }}
              />
              <VideocamOutlinedIcon
                style={{fontSize: 30, color: '#000', marginRight: 10}}
              />
              <Button
                className={styles.textButton}
                onClick={() =>
                  window.open('https://live.bible.is/bible/SHIRBD/MRK/1')
                }>
                <Typography
                  style={{
                    textTransform: 'initial',
                    marginRight: 10,
                  }}
                  variant="h6">
                  lɛhd l-ljdid
                </Typography>
                <Typography
                  style={{
                    marginLeft: 10,
                    fontFamily: 'Calibri',
                    direction: 'rtl',
                  }}
                  variant="h5">
                  لعهد لّجديد
                </Typography>
              </Button>
            </div>
            <Button>
              <a
                href="https://live.bible.is/bible/SHIRBD/MRK/1"
                target="_blank"
                rel="noreferrer">
                <img
                  style={{height: 235, maxWidth: '90vw'}}
                  src={injil}
                  alt="injil l-lmasih"
                />
              </a>
            </Button>
          </Grid>
          <Grid
            style={{
              textAlign: 'center',
              border: '5px solid #fff',
              paddingBottom: 10,
              backgroundColor: colors.palerTurquoise,
            }}
            item
            xs={12}
            sm={desktop ? 4 : 12}
            md={4}>
            <Grid container>
              <Grid item xs={12} sm={desktop ? 6 : 12} md={6}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <img
                    style={{margin: '25px 0 10px'}}
                    src={arratn}
                    width={150}
                    alt="bible pdf"
                  />
                </div>
                <Button
                  className={styles.textButton}
                  style={{padding: 0, display: 'block', margin: 'auto'}}
                  onClick={() => {
                    openModal();
                    setPdfSrc('../../assets/pdfs/nt_abc.pdf');
                    setArabic(true);
                  }}>
                  <Typography
                    variant="h4"
                    style={{
                      fontFamily: 'Calibri',
                      direction: 'rtl',
                      fontSize: 22,
                    }}>
                    ءينجيل ن-لماسيح
                  </Typography>
                </Button>
                <Button
                  className={styles.textButton}
                  style={{padding: 0, display: 'block', margin: 'auto'}}
                  onClick={() => {
                    openModal();
                    setPdfSrc('../../assets/pdfs/nt_lat.pdf');
                    setArabic(false);
                  }}>
                  <Typography
                    style={{
                      textTransform: 'initial',
                      fontSize: 18,
                    }}>
                    injil n-lmasih
                  </Typography>
                </Button>
                <div>
                  <VolumeMuteIcon
                    style={{fontSize: 30, color: '#000', marginRight: 10}}
                  />
                  <ImportContactsTwoToneIcon
                    style={{
                      fontSize: 25,
                      color: '#000',
                      marginRight: 10,
                      marginBottom: 3,
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={desktop ? 6 : 12} md={6}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <img
                    style={{margin: '25px 0 10px'}}
                    src={ikhbar}
                    width={150}
                    alt="bible pdf"
                  />
                </div>
                <Button
                  className={styles.textButton}
                  style={{padding: 0, display: 'block', margin: 'auto'}}
                  onClick={() => {
                    openModal();
                    setPdfSrc('../../assets/pdfs/ot_abc.pdf');
                    setArabic(true);
                  }}>
                  <Typography
                    variant="h4"
                    style={{
                      fontFamily: 'Calibri',
                      direction: 'rtl',
                      fontSize: 22,
                    }}>
                    ارّاتن ن-لانبيا
                  </Typography>
                </Button>
                <Button
                  className={styles.textButton}
                  style={{padding: 0, display: 'block', margin: 'auto'}}
                  onClick={() => {
                    openModal();
                    setPdfSrc('../../assets/pdfs/ot_lat.pdf');
                    setArabic(false);
                  }}>
                  <Typography
                    style={{
                      textTransform: 'initial',
                      fontSize: 18,
                    }}>
                    arratn n-lanbya
                  </Typography>
                </Button>
                <div>
                  <VolumeMuteIcon
                    style={{fontSize: 30, color: '#000', marginRight: 10}}
                  />
                  <ImportContactsTwoToneIcon
                    style={{
                      fontSize: 25,
                      color: '#000',
                      marginRight: 10,
                      marginBottom: 3,
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <AudioSection />
        </Grid>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="pdf modal">
        <div>
          <Grid container style={{overflowY: 'scroll'}}>
            <Grid
              xs={12}
              sm={2}
              item
              style={{
                textAlign: 'center',
              }}>
              <div
                style={{
                  overflowY: 'scroll',
                  height: matches ? '100vh' : '30vh',
                }}>
                {Object.keys(bookType).map(item => (
                  <Accordion key={item}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography
                        style={{
                          fontFamily: arabic ? 'Scheherazade' : 'Tashelhayt',
                          fontSize: arabic ? 25 : 'inherit',
                          direction: arabic ? 'rtl' : 'inherit',
                        }}>
                        {arabic
                          ? getArabicBookText(bookType[Number(item)].arabicName)
                          : bookType[Number(item)].name}
                      </Typography>
                    </AccordionSummary>
                    {bookType[Number(item)].chapters.map((c, index) => (
                      <div key={`${item}-${c}`}>
                        <AccordionDetails style={{padding: 0}}>
                          <button
                            onClick={() => {
                              if (
                                Number(item) === book &&
                                index + 1 === chapter
                              ) {
                                setPlayingBible(!playingBible);
                              } else {
                                setChapter(index + 1);
                                setBook(Number(item));
                                setPlayingBible(true);
                              }
                            }}
                            className={styles.menuButton}
                            type="button">
                            {Number(item) === book &&
                            index + 1 === chapter &&
                            playingBible ? (
                              <Pause />
                            ) : (
                              <PlayArrow />
                            )}
                            <Typography style={{marginLeft: 10}}>
                              {c}
                            </Typography>
                          </button>
                        </AccordionDetails>
                        <Divider />
                      </div>
                    ))}
                  </Accordion>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} sm={10}>
              <iframe src={pdfSrc} width="100%" height="100%" />
            </Grid>
          </Grid>
        </div>
      </Modal>
      {book && chapter && (
        <audio style={{display: 'none'}} controls ref={audioRef}>
          <source src={bibleURL} type="audio/mpeg" />
        </audio>
      )}
      {modalIsOpen && (
        <IconButton
          aria-label="close"
          onClick={closeModal}
          style={{position: 'fixed', top: 0, left: 0, zIndex: 999999}}>
          <ArrowBackIcon />
        </IconButton>
      )}
    </div>
  );
};

export default BibleSection;
