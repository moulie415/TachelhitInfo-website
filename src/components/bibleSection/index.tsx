import {
  Grid,
  Typography,
  Card,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery,
  IconButton,
  Divider,
} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Modal from 'react-modal';
import {useEffect, useRef, useState} from 'preact/hooks';
import {LATIN_NT, LATIN_OT, newTestament, oldTestament} from '../../constants';
import styles from '../../routes/home/styles.css';

const ikhbar = '/assets/images/11.jpg';
const arratn = '/assets/images/12.png';
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
  },
  overlay: {
    zIndex: 9999,
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

  return (
    <div>
      <Card style={{marginTop: 40, paddingBottom: 20}}>
        <div
          style={{
            display: 'flex',
            backgroundColor: 'rgb(238, 28, 37)',
            alignItems: 'center',
            padding: 10,
            width: '100%',
            marginBottom: 20,
            justifyContent: 'center',
          }}>
          <Typography style={{marginRight: 10, color: '#fff'}} variant="h5">
            awal n-rbbi
          </Typography>
          <Typography
            className={styles.arabic}
            style={{color: '#fff'}}
            variant="h4">
            اوال ن-ربّي
          </Typography>
        </div>
        <Grid justifyContent="space-evenly" container>
          <Grid
            style={{textAlign: 'center', marginLeft: '2%', marginRight: '2%'}}
            item
            xs={12}
            sm={6}
            md={3}>
            <Typography variant="h6">injil l-lmasih</Typography>
            <Typography
              variant="h4"
              style={{marginBottom: 20}}
              className={styles.arabic}>
              ءينجيل لّماسيح
            </Typography>
            <Button>
              <a
                href="https://live.bible.is/bible/SHIRBD/MRK/1"
                target="_blank"
                rel="noreferrer">
                <img style={{width: '100%'}} src={injil} alt="injil l-lmasih" />
              </a>
            </Button>
          </Grid>
          <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
            <div style={{display: 'grid'}}>
              <Button
                onClick={() => {
                  openModal();
                  setPdfSrc('../../assets/pdfs/nt_lat.pdf');
                  setArabic(false);
                }}
                style={{textTransform: 'inherit', padding: 0}}>
                <Typography variant="h6">lkhbar ifulkin</Typography>
              </Button>
              <Button
                onClick={() => {
                  openModal();
                  setPdfSrc('../../assets/pdfs/nt_abc.pdf');
                  setArabic(true);
                }}
                style={{marginBottom: 20}}>
                <Typography variant="h4" className={styles.arabic}>
                  لخبار ءيفولكين
                </Typography>
              </Button>
            </div>
            <img src={arratn} width={150} alt="bible pdf" />
          </Grid>
          <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
            <div style={{display: 'grid'}}>
              <Button
                onClick={() => {
                  openModal();
                  setPdfSrc('../../assets/pdfs/ot_lat.pdf');
                  setArabic(false);
                }}
                style={{textTransform: 'inherit', padding: 0}}>
                <Typography variant="h6">arratn l-lanbya</Typography>
              </Button>
              <Button
                onClick={() => {
                  openModal();
                  setPdfSrc('../../assets/pdfs/ot_abc.pdf');
                  setArabic(true);
                }}
                style={{marginBottom: 20}}>
                <Typography variant="h4" className={styles.arabic}>
                  ارّاتن لّانبيا
                </Typography>
              </Button>
            </div>
            <img src={ikhbar} width={150} alt="bible pdf" />
          </Grid>
        </Grid>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="pdf modal">
        <div>
          <IconButton
            aria-label="close"
            onClick={closeModal}
            style={{position: 'absolute', top: -11, right: -11, zIndex: 9}}>
            <CloseIcon />
          </IconButton>
          <Grid container style={{overflowY: 'scroll'}}>
            <Grid xs={12} sm={2} item style={{textAlign: 'center'}}>
              <div
                style={{
                  overflowY: 'scroll',
                  height: matches ? '80vh' : '30vh',
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
    </div>
  );
};

export default BibleSection;
