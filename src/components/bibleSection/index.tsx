import { Grid, Typography, Card, Button, Accordion, AccordionDetails, AccordionSummary, useMediaQuery, IconButton, Divider } from '@material-ui/core';
import { FunctionalComponent, h } from 'preact';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close'
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from "@material-ui/icons/Pause";
import { LATIN_NT, LATIN_OT, oldTestament } from '../../constants';
import styles from '../../routes/home/styles.css';
import Modal from 'react-modal';
import { useEffect, useRef, useState } from 'preact/hooks';


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
    width: '90%'
  },
};

Modal.setAppElement('#preact_root');


const BibleSection: FunctionalComponent = () => {
  const [book, setBook] = useState<number>();
  const [chapter, setChapter] = useState<number>();
  const [playingBible, setPlayingBible] = useState(false);
  const bibleURL = `https://raw.githubusercontent.com/moulie415/WordOfGodForEachDay/master/files/bible/${book}/${chapter}.mp3`;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  }

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


  const matches = useMediaQuery('(min-width:600px)');


  return (
    <div>
      <Card style={{marginTop: 40, paddingBottom: 20}}>
        <div style={{display: 'flex', backgroundColor: 'rgb(238, 28, 37)', alignItems: 'center', padding: 10, width: '100%', marginBottom: 20}}>
          <Typography style={{marginRight: 10, color: '#fff'}} variant="h5">awal n-rbbi</Typography>
          <Typography className={styles.arabic} style={{ color: '#fff' }} variant="h4">اوال ن-ربّي</Typography>
        </div>
        <Grid justifyContent="space-evenly" container spacing={2}>
          <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
            <Typography variant="h6">injil l-lmasih</Typography>
            <Typography variant="h4" style={{ marginBottom: 20 }} className={styles.arabic}>ءينجيل لّماسيح</Typography>
            <Button>
              <a href='https://live.bible.is/bible/SHIRBD/MRK/1' target="_blank" rel="noreferrer">
                <img style={{ maxHeight: 200 }} src={injil} alt="injil l-lmasih" />  
              </a>
            </Button>
            
          </Grid>
          <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
            <Typography variant="h6">lkhbar ifulkin</Typography>
            <Typography variant="h4" style={{ marginBottom: 20 }} className={styles.arabic}>لخبار ءيفولكين</Typography>
            <Button>
              <a href={LATIN_NT} target="_blank" rel="noreferrer">
                <img src={arratn} width={150} alt="bible pdf" />
              </a>
            </Button>
          </Grid>
          <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
            <Typography variant="h6">arratn l-lanbya</Typography>
            <Typography variant="h4" style={{ marginBottom: 20 }} className={styles.arabic}>ارّتن لّانبيا</Typography>
            <Button onClick={openModal}>
              {/* <a href={IS_DEV ? '/' : LATIN_OT} target="_blank" rel="noreferrer"> */}
                <img src={ikhbar} width={150} alt="bible pdf" />
              {/* </a> */}
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="pdf modal"
        >
          <div>
          <IconButton aria-label="close" onClick={closeModal} style={{position: 'absolute', top: -7, right: -7, zIndex: 9}}>
            <CloseIcon />
          </IconButton>
            <Grid container style={{overflowY: 'scroll'}}>
              <Grid xs={12} sm={2} item style={{textAlign: 'center'}} >
                <div style={{overflowY: 'scroll', height: matches ? '80vh' : '30vh'}}>
                    {Object.keys(oldTestament).map(item => (
                        <Accordion  key={item}>
                          <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                            <Typography style={{fontFamily: 'Tashelhayt'}}>{oldTestament[Number(item)].name}</Typography>
                          </AccordionSummary>
                            {oldTestament[Number(item)].chapters.map((c, index) => (
                              <div key={`${item}-${c}`}>
                                <AccordionDetails style={{padding: 0}}>
                                  <button
                                    onClick={() => {
                                      if (Number(item) === book && index + 1 === chapter) {
                                        setPlayingBible(!playingBible);
                                      } else {
                                        setChapter(index + 1);
                                        setBook(Number(item));
                                        setPlayingBible(true);
                                      }
                                    }}
                                    className={styles.menuButton}
                                    type="button"
                                  >
                                    {Number(item) === book &&
                                      index + 1 === chapter &&
                                      playingBible ? <Pause /> : <PlayArrow />}
                                    <Typography style={{marginLeft: 10}}>{c}</Typography>
                                  </button>
                                </AccordionDetails>
                                <Divider />
                              </div>
                              ))}
                        </Accordion>
                      ))}
                    </div>
                  </Grid>
                <Grid item  xs={12} sm={10}>
                  <iframe src={LATIN_OT} width="100%" height="100%" />
                </Grid>
            </Grid>
          </div>
        </Modal>
        {book && chapter && <audio style={{display: 'none'}} controls ref={audioRef}>
            <source src={bibleURL} type='audio/mpeg' />
          </audio>}
    </div>
    );
  }

export default BibleSection;
