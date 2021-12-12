import {
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import {useRef, useState} from 'preact/hooks';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';
import SocialsFooter from '../../components/socialsFooter';
import {colors, questionList} from '../../constants';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-25%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
  },
};

function Questions() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [question, setQuestion] = useState<number>(0);
  const player = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useState('');

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    player.current?.play();
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div
      style={{
        minHeight: '100%',
        padding: 15,
      }}>
      <Card style={{marginBottom: 20}}>
        <List style={{alignItems: 'center', textAlign: 'center', padding: 10}}>
          {questionList.map(({question}, index) => {
            return (
              <ListItem
                key={question}
                button
                onClick={() => {
                  setQuestion(index);
                  setModalIsOpen(true);
                  openModal();
                  setAudio(`../../assets/audio/questions/Q${index + 1}.mp3`);
                }}>
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    maxWidth: '80%',
                    margin: 'auto',
                    padding: 5,
                    textAlign: 'center',
                    // fontFamily: 'Tashelhayt',
                  }}>
                  <div
                    style={{
                      color: colors.red,
                      fontWeight: 'bold',
                      marginRight: 5,
                    }}>
                    {index + 1}
                  </div>
                  <div>{question}</div>
                </div>
              </ListItem>
            );
          })}
        </List>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="question modal">
        <div style={{maxHeight: '70vh'}}>
          <div style={{display: 'flex'}}>
            <audio style={{width: '100%'}} controls ref={player}>
              <source src={audio} type="audio/mpeg" />
            </audio>
            <IconButton onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="h4" gutterBottom>{`Aseqsi ${
            question + 1
          }`}</Typography>
          <Typography variant="h6" style={{color: colors.red}} gutterBottom>
            {questionList[question].question}
          </Typography>
          <Typography gutterBottom>{questionList[question].body}</Typography>
        </div>
      </Modal>
    </div>
  );
}

export default Questions;
