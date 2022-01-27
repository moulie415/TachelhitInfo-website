import {
  Grid,
  Typography,
  Card,
  Button,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import {useCallback, useEffect, useRef, useState} from 'preact/hooks';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import {GODS_STORY} from '../../constants';
import styles from '../../routes/home/styles.css';

const rbbi = '/assets/images/14.png';
const amsiggel = '/assets/images/15.png';
const jesusFilm = 'assets/images/22.jpg';

const Videos: FunctionalComponent = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fullScreen, setFullScreen] = useState(false);
  const onFullScreenChange = useCallback(() => {
    if (document.fullscreenElement) {
      setFullScreen(true);
      videoRef.current?.play();
    } else {
      setFullScreen(false);
      videoRef.current?.pause();
    }
  }, []);
  useEffect(() => {
    document.addEventListener('fullscreenchange', onFullScreenChange);
  }, [onFullScreenChange]);
  const matches = useMediaQuery('(min-width:800px)');
  return (
    <div style={{paddingBottom: 15, marginTop: 5}}>
      <Grid justifyContent="space-evenly" container>
        <Grid
          style={{textAlign: 'center'}}
          item
          xs={12}
          sm={matches ? 4 : 12}
          md={4}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <VideocamOutlinedIcon
              style={{fontSize: 30, color: '#000', marginRight: 10}}
            />
            <Button
              className={styles.textButton}
              onClick={() => videoRef.current?.requestFullscreen()}
              style={{textTransform: 'inherit', padding: 2}}>
              <Typography style={{marginRight: 10}} variant="h6">
                maylli iqsad rbbi
              </Typography>
              <Typography
                style={{
                  fontFamily: 'Calibri',
                  direction: 'rtl',
                  margin: '5px 0',
                }}
                variant="h5">
                مايلّي &nbsp;ءيقصاد &nbsp;ربّي
              </Typography>
            </Button>
          </div>
          <video
            ref={videoRef}
            style={{width: '100%', display: fullScreen ? 'inherit' : 'none'}}
            poster={rbbi}
            controls={fullScreen}>
            <source src={GODS_STORY} type="video/mp4" />
          </video>
          <a
            style={{cursor: 'pointer'}}
            onClick={() => videoRef.current?.requestFullscreen()}>
            <img
              style={{height: 225, maxWidth: '90vw'}}
              src={rbbi}
              alt="maylli iqsad rbbi"
            />
          </a>
        </Grid>
        <Grid
          style={{textAlign: 'center'}}
          item
          xs={12}
          sm={matches ? 4 : 12}
          md={4}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <VideocamOutlinedIcon
              style={{fontSize: 30, color: '#000', marginRight: 10}}
            />
            <Button
              className={styles.textButton}
              style={{textTransform: 'inherit', padding: 2}}
              onClick={() => window.open('https://www.amsiggel.com')}>
              <Typography style={{marginRight: 10}} variant="h6">
                amuddu n-umsiggel
              </Typography>
              <Typography
                style={{
                  fontFamily: 'Calibri',
                  direction: 'rtl',
                  margin: '5px 0',
                }}
                variant="h5">
                امودّو &nbsp;ن-ومسيݣّل
              </Typography>
            </Button>
          </div>
          <a href="https://www.amsiggel.com/" target="_blank" rel="noreferrer">
            <img
              style={{height: 225, maxWidth: '90vw'}}
              src={amsiggel}
              alt="Amsiggel"
            />
          </a>
        </Grid>
        <Grid
          style={{textAlign: 'center'}}
          item
          xs={12}
          sm={matches ? 4 : 12}
          md={4}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <VideocamOutlinedIcon
              style={{fontSize: 30, color: '#000', marginRight: 10}}
            />
            <Button
              className={styles.textButton}
              style={{textTransform: 'inherit', padding: 2}}
              onClick={() =>
                window.open(
                  'https://www.jesusfilm.org/watch/jesus.html/tachelhit.html',
                )
              }>
              <Typography style={{marginRight: 10}} variant="h6">
                tudert l-lmasih
              </Typography>
              <Typography
                style={{
                  fontFamily: 'Calibri',
                  direction: 'rtl',
                  margin: '5px 0',
                }}
                variant="h5">
                تودرت &nbsp;لّماسيح
              </Typography>
            </Button>
          </div>
          <a
            href="https://www.jesusfilm.org/watch/jesus.html/tachelhit.html"
            target="_blank"
            rel="noreferrer">
            <img
              style={{height: 225, maxWidth: '90vw'}}
              src={jesusFilm}
              alt="Jesus Film"
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Videos;
