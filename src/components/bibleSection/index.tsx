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
import {FunctionalComponent, h, RefObject} from 'preact';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Modal from 'react-modal';
import {useEffect, useRef, useState} from 'preact/hooks';
import {
  AZUZD,
  ISEQSITN,
  LATIN_NT,
  LATIN_OT,
  MATSSENT,
  newTestament,
  NTHUNA,
  oldTestament,
} from '../../constants';
import styles from '../../routes/home/styles.css';

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
  },
  overlay: {
    zIndex: 9999,
  },
};

Modal.setAppElement('#preact_root');

const BibleSection: FunctionalComponent<{ref: RefObject<HTMLAudioElement>}> = ({
  ref,
}) => {
  const [book, setBook] = useState<number>();
  const [chapter, setChapter] = useState<number>();
  const [playingBible, setPlayingBible] = useState(false);
  const bibleURL = `https://raw.githubusercontent.com/moulie415/WordOfGodForEachDay/master/files/bible/${book}/${chapter}.mp3`;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [arabic, setArabic] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState('../../assets/pdfs/nt_lat.pdf');
  const bookType = pdfSrc.includes('nt') ? newTestament : oldTestament;
  const player1 = useRef<HTMLAudioElement>(null);
  const player2 = useRef<HTMLAudioElement>(null);
  const player3 = useRef<HTMLAudioElement>(null);
  const player4 = useRef<HTMLAudioElement>(null);
  const [_, setState] = useState(0);

  const toggle = (ref: RefObject<HTMLAudioElement | null>) => {
    if (ref.current) {
      ref.current.paused ? ref.current.play() : ref.current.pause();
      setState(Math.random());
    }
  };

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
      <div style={{marginTop: 15}}>
        <Grid justifyContent="space-evenly" container>
          <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={3}>
            <Button
              onClick={() =>
                window.open('https://live.bible.is/bible/SHIRBD/MRK/1')
              }>
              <Typography variant="h4" className={styles.arabic}>
                سّموقّل غ-تودرت ن-لماسيح، ار-تسفليدت ءي-واوال-نس
              </Typography>
            </Button>
            <Button>
              <a
                href="https://live.bible.is/bible/SHIRBD/MRK/1"
                target="_blank"
                rel="noreferrer">
                <img style={{width: '100%'}} src={injil} alt="injil l-lmasih" />
              </a>
            </Button>
          </Grid>
          <Grid style={{textAlign: 'center'}} item xs={12} sm={2} md={2}>
            <Button
              onClick={() => {
                openModal();
                setPdfSrc('../../assets/pdfs/nt_abc.pdf');
                setArabic(true);
              }}
              style={{marginBottom: 20}}>
              <Typography variant="h4" className={styles.arabic}>
                اقرا ءينجيل ن-لماسيح ار-اس-تسفليدت
              </Typography>
            </Button>
            <img
              style={{cursor: 'pointer'}}
              onClick={() => {
                openModal();
                setPdfSrc('../../assets/pdfs/nt_abc.pdf');
                setArabic(true);
              }}
              src={arratn}
              width={150}
              alt="bible pdf"
            />
          </Grid>
          <Grid style={{textAlign: 'center'}} item xs={12} sm={2} md={2}>
            <Button
              onClick={() => {
                openModal();
                setPdfSrc('../../assets/pdfs/ot_abc.pdf');
                setArabic(true);
              }}
              style={{marginBottom: 20}}>
              <Typography variant="h4" className={styles.arabic}>
                اقرا ءيواليون ن-لانبيا ار-اسن-تسفليدت
              </Typography>
            </Button>
            <img
              style={{cursor: 'pointer'}}
              onClick={() => {
                openModal();
                setPdfSrc('../../assets/pdfs/ot_abc.pdf');
                setArabic(true);
              }}
              src={ikhbar}
              width={150}
              alt="bible pdf"
            />
          </Grid>
          <Grid style={{textAlign: 'center'}} item xs={12} sm={5} md={5}>
            <Typography
              variant="h4"
              style={{
                margin: 10,
                fontFamily: 'Scheherazade',
                marginBottom: 0,
              }}>
              سفلد ءي-يواليون ميمنين ف-تودرت-اد لّجديد
            </Typography>
            <Button
              style={{textTransform: 'inherit'}}
              onClick={() => toggle(player1)}>
              {player1.current?.paused ? <PlayArrow /> : <Pause />}
              <Typography style={{marginRight: 10}} variant="h6">
                is-tgit amuslem?
              </Typography>
              <Typography className={styles.arabic} variant="h4">
                ءيس-تگيت اموسلم؟
              </Typography>
            </Button>
            <audio
              ref={player1}
              style={{marginBottom: 5, width: '90%', display: 'none'}}
              controls>
              <source src={MATSSENT} type="audio/mpeg" />
            </audio>
            <Button
              style={{textTransform: 'inherit'}}
              onClick={() => toggle(player2)}>
              {player2.current?.paused ? <PlayArrow /> : <Pause />}
              <Typography style={{marginRight: 10}} variant="h6">
                is-tzuzdt laman d-sslamt?
              </Typography>
              <Typography className={styles.arabic} variant="h4">
                ءيس-تژوژضت لامان د-سّلامت؟
              </Typography>
            </Button>
            <audio
              ref={player2}
              style={{marginBottom: 5, width: '90%', display: 'none'}}
              controls>
              <source src={AZUZD} type="audio/mpeg" />
            </audio>
            <Button
              style={{textTransform: 'inherit'}}
              onClick={() => toggle(player3)}>
              {player3.current?.paused ? <PlayArrow /> : <Pause />}
              <Typography style={{marginRight: 10}} variant="h6">
                is dark kra n-iseqsitn?
              </Typography>
              <Typography className={styles.arabic} variant="h4">
                ءيس-دارك كرا ن-يسقسيتن؟
              </Typography>
            </Button>
            <audio
              ref={player3}
              style={{marginBottom: 5, width: '90%', display: 'none'}}
              controls>
              <source src={ISEQSITN} type="audio/mpeg" />
            </audio>
            <Button
              style={{textTransform: 'inherit'}}
              onClick={() => toggle(player4)}>
              {player4.current?.paused ? <PlayArrow /> : <Pause />}
              <Typography style={{marginRight: 10}} variant="h6">
                is-tumnt s-lmasih?
              </Typography>
              <Typography className={styles.arabic} variant="h4">
                ءيس-تومنت س-لماسيح؟
              </Typography>
            </Button>
            <audio
              ref={player4}
              style={{marginBottom: 5, width: '90%', display: 'none'}}
              controls>
              <source src={NTHUNA} type="audio/mpeg" />
            </audio>
          </Grid>
        </Grid>
      </div>
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
