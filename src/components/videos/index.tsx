import {Grid, Typography, Card, Button, IconButton} from '@material-ui/core';
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
  return (
    <div style={{marginTop: 15, paddingBottom: 15}}>
      <Grid justifyContent="space-evenly" container>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
          <IconButton onClick={() => videoRef.current?.requestFullscreen()}>
            <VideocamOutlinedIcon style={{fontSize: 30, color: '#000'}} />
          </IconButton>
          <Button
            onClick={() => videoRef.current?.requestFullscreen()}
            style={{textTransform: 'inherit'}}>
            <Typography variant="h6">maylli iqsad rbbi</Typography>
          </Button>
          <Button onClick={() => videoRef.current?.requestFullscreen()}>
            <Typography
              className={styles.arabic}
              style={{marginBottom: 10}}
              variant="h4">
              مايلّي ءيقصاد ربّي
            </Typography>
          </Button>
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
              style={{width: '100%', height: 225}}
              src={rbbi}
              alt="maylli iqsad rbbi"
            />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
          <IconButton onClick={() => window.open('https://www.amsiggel.com')}>
            <VideocamOutlinedIcon style={{fontSize: 30, color: '#000'}} />
          </IconButton>
          <Button
            style={{textTransform: 'inherit'}}
            onClick={() => window.open('https://www.amsiggel.com')}>
            <Typography variant="h6">amuddu n-u msiggel</Typography>
          </Button>
          <Button onClick={() => window.open('https://www.amsiggel.com')}>
            <Typography
              className={styles.arabic}
              style={{marginBottom: 10}}
              variant="h4">
              امودّو ن-ومسيگّل
            </Typography>
          </Button>
          <a href="https://www.amsiggel.com/" target="_blank" rel="noreferrer">
            <img
              style={{width: '100%', height: 225}}
              src={amsiggel}
              alt="Amsiggel"
            />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
          <IconButton
            onClick={() =>
              window.open(
                'https://www.jesusfilm.org/watch/jesus.html/tachelhit.html',
              )
            }>
            <VideocamOutlinedIcon style={{fontSize: 30, color: '#000'}} />
          </IconButton>
          <Button
            style={{textTransform: 'inherit'}}
            onClick={() =>
              window.open(
                'https://www.jesusfilm.org/watch/jesus.html/tachelhit.html',
              )
            }>
            <Typography variant="h6">tudert l-lmasih</Typography>
          </Button>
          <Button
            onClick={() =>
              window.open(
                'https://www.jesusfilm.org/watch/jesus.html/tachelhit.html',
              )
            }>
            <Typography
              className={styles.arabic}
              style={{marginBottom: 10}}
              variant="h4">
              تودرت لّماسيح
            </Typography>
          </Button>
          <a
            href="https://www.jesusfilm.org/watch/jesus.html/tachelhit.html"
            target="_blank"
            rel="noreferrer">
            <img
              style={{width: '100%', height: 225}}
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
