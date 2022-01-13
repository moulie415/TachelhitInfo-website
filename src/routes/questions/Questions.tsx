import {
  Button,
  Card,
  Grid,
  IconButton,
  List,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import {h} from 'preact';
import {useRef, useState} from 'preact/hooks';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';
import {colors, questionList} from '../../constants';
import useMusicPlayer from '../../components/useMusicPlayer';
import styles from './styles.css';

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

function Questions() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [question, setQuestion] = useState<number>(0);
  const player = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useState('');
  const [autoPlay, setAutoPlay] = useState(true);
  const {Player} = useMusicPlayer(
    '../../assets/audio/questions_intro.mp3',
    autoPlay,
  );

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    player.current?.play();
    setAutoPlay(false);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div
      style={{
        padding: 15,
        backgroundColor: colors.paleTurquoise,
        minHeight: '100vh',
      }}>
      <Grid container justifyContent="space-evenly" alignItems="center">
        {questionList.map(({question}, index) => {
          return (
            <Grid
              key={question}
              item
              xs={12}
              sm={4}
              md={3}
              style={{height: matches ? 275 : '90vw'}}>
              <div style={{textAlign: 'center'}}>
                <Button
                  onClick={() => {
                    setQuestion(index);
                    setModalIsOpen(true);
                    openModal();
                    setAudio(`../../assets/audio/questions/Q${index + 1}.mp3`);
                  }}>
                  <img
                    style={{
                      maxWidth: matches ? '18vw' : '90vw',
                    }}
                    src={`../../assets/images/questions/iseqsitn${
                      index + 1
                    }.gif`}
                  />
                </Button>
              </div>
              <Button
                className={styles.textButton}
                style={{textTransform: 'initial'}}
                onClick={() => {
                  setQuestion(index);
                  setModalIsOpen(true);
                  openModal();
                  setAudio(`../../assets/audio/questions/Q${index + 1}.mp3`);
                }}>
                <Typography
                  style={{textAlign: 'left', fontFamily: 'Tashelhayt'}}>{`${
                  index + 1
                }. ${question}`}</Typography>
              </Button>
            </Grid>
          );
        })}
      </Grid>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="question modal">
        <div style={{maxHeight: '90vh', textAlign: 'center'}}>
          <IconButton
            style={{position: 'absolute', top: 0, right: 0}}
            onClick={closeModal}>
            <CloseIcon />
          </IconButton>

          <img
            style={{
              maxHeight: '80vh',
            }}
            src={`../../assets/images/questions/iseqsitn${question + 1}.gif`}
          />
          <audio style={{width: '100%'}} controls ref={player}>
            <source src={audio} type="audio/mpeg" />
          </audio>
        </div>
      </Modal>
      <Player />
    </div>
  );
}

export default Questions;
