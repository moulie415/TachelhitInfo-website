import {
  Button,
  Card,
  Grid,
  Tab,
  Tabs,
  Typography,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';
import {colors, psalmData} from '../../constants';
import styles from '../../routes/home/styles.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
  },
};

function Psalms() {
  const [tab, setTab] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  const handleClick = (arabic: string, tif: string) => {
    if (tab === 0) {
      setPdfSrc('');
    }
    if (tab === 1) {
      setPdfSrc(tif);
    }
    if (tab === 2) {
      setPdfSrc(arabic);
    }
    openModal();
  };

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div
      style={{
        minHeight: '100%',
        padding: 32,
      }}>
      <Card style={{marginTop: 40, marginBottom: 20}}>
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
            imurign
          </Typography>
          <Typography
            className={styles.arabic}
            style={{color: '#fff'}}
            variant="h4">
            ءيموريگن
          </Typography>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example">
            <Tab
              style={{textTransform: 'inherit', fontSize: 20}}
              label="imurign i-sidi rbbi"
            />
            <Tab
              style={{fontSize: 20}}
              className={styles.tifinagh}
              label="imurign i-sidi rbbi"
            />
            <Tab
              style={{fontSize: 30}}
              className={styles.arabic}
              label="لخبار ءيفولكين"
            />
          </Tabs>
        </div>
        <div
          style={{display: 'flex', justifyContent: 'space-evenly', margin: 10}}>
          <div>
            {psalmData
              .slice(0, psalmData.length / 2)
              .map(({psalm, name, pdfArabic, pdfTif}) => {
                return (
                  <div key={psalm}>
                    <Button
                      onClick={() => handleClick(pdfArabic, pdfTif)}
                      style={{textTransform: 'inherit'}}>
                      <span style={{color: colors.red}}>{psalm}</span>
                      <span>&nbsp;</span>
                      <span> </span>
                      <span>{name}</span>
                    </Button>
                  </div>
                );
              })}
          </div>
          <div>
            {psalmData
              .slice(psalmData.length / 2 + 1)
              .map(({psalm, name, pdfArabic, pdfTif}) => {
                return (
                  <div key={psalm}>
                    <Button
                      onClick={() => handleClick(pdfArabic, pdfTif)}
                      style={{textTransform: 'inherit'}}>
                      <span style={{color: colors.red}}>{psalm}</span>
                      <span>&nbsp;</span>
                      <span> </span>
                      <span>{name}</span>
                    </Button>
                  </div>
                );
              })}
          </div>
        </div>
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
      </Modal>
    </div>
  );
}

export default Psalms;
