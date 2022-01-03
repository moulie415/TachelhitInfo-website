import {Grid, Typography, Card, Button} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import {useRef} from 'preact/hooks';
import {GODS_STORY} from '../../constants';
import styles from '../../routes/home/styles.css';

const rbbi = '/assets/images/14.png';
const amsiggel = '/assets/images/15.png';
const jesusFilm = 'assets/images/22.jpg';

const Videos: FunctionalComponent = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <Card style={{marginTop: 15, paddingBottom: 15}}>
      <Typography
        variant="h4"
        style={{
          fontFamily: 'Scheherazade',
          textAlign: 'center',
          marginTop: 15,
        }}>
        سّموقّل غ-فيديوات، تيسّانت ءوگّار ف-تودرت-اد ءيفولكين
      </Typography>
      <Grid justifyContent="space-evenly" container>
        <Grid
          style={{textAlign: 'center', marginLeft: '2%', marginRight: '2%'}}
          item
          xs={12}
          sm={6}
          md={3}>
          <Button
            onClick={() => videoRef.current?.play()}
            style={{textTransform: 'inherit'}}>
            <Typography variant="h6">maylli iqsad rbbi</Typography>
          </Button>
          <Button onClick={() => videoRef.current?.play()}>
            <Typography
              className={styles.arabic}
              style={{marginBottom: 10}}
              variant="h4">
              مايلّي ءيقصاد ربّي
            </Typography>
          </Button>
          <video
            ref={videoRef}
            onPlay={() => videoRef.current?.requestFullscreen()}
            style={{width: '100%'}}
            poster={rbbi}
            controls>
            <source src={GODS_STORY} type="video/mp4" />
          </video>
        </Grid>
        <Grid
          style={{textAlign: 'center', marginLeft: '2%', marginRight: '2%'}}
          item
          xs={12}
          sm={6}
          md={3}>
          <Button
            style={{textTransform: 'inherit'}}
            onClick={() => window.open('https://www.amsiggel.com')}>
            <Typography variant="h6">amuddu n-umsiggel</Typography>
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
            <img style={{width: '100%'}} src={amsiggel} alt="Amsiggel" />
          </a>
        </Grid>
        <Grid
          style={{textAlign: 'center', marginLeft: '2%', marginRight: '2%'}}
          item
          xs={12}
          sm={6}
          md={3}>
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
            <img style={{width: '100%'}} src={jesusFilm} alt="Jesus Film" />
          </a>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Videos;
