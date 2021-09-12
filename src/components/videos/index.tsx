import { Grid, Typography, Card } from '@material-ui/core';
import { FunctionalComponent, h } from 'preact';
import { GODS_STORY } from '../../constants';
import styles from '../../routes/home/styles.css';

const rbbi = '/assets/images/14.jpg';
const amsiggel = '/assets/images/15.PNG';
const jesusFilm = 'assets/images/22.jpg';

const Videos: FunctionalComponent = () => (
  <Card style={{ marginTop: 40, paddingBottom: 20 }} >
    <div style={{display: 'flex', backgroundColor: 'rgb(238, 28, 37)', alignItems: 'center', padding: 10, width: '100%', marginBottom: 20}}>
      <Typography style={{color: '#fff', marginRight: 10}} variant="h5">videos</Typography>
      <Typography className={styles.arabic} style={{ color: '#fff' }} variant="h4">فيديو</Typography>
    </div>
    <Grid justifyContent="space-evenly" container spacing={2}>
      <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
        <Typography variant="h6">maylli iqsad rbbi</Typography>
        <Typography className={styles.arabic} style={{ marginBottom: 10 }} variant="h4">مايلّي ءيقصاد ربّي</Typography>
        <video style={{ maxHeight: 200 }} poster={rbbi} controls>
          <source src={GODS_STORY} type="video/mp4" />
        </video>
      </Grid>
      <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
        <Typography variant="h6">amuddu n-umsiggel</Typography>
        <Typography className={styles.arabic} style={{ marginBottom: 10 }} variant="h4">امودّو ن-ومسيگّل</Typography>
        <a href="https://www.amsiggel.com/" target="_blank" rel="noreferrer">
          <img style={{ maxHeight: 200 }} src={amsiggel} alt="Amsiggel" />
        </a>
      </Grid>
      <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
        <Typography variant="h6">tudert l-lmasih</Typography>
        <Typography className={styles.arabic} style={{ marginBottom: 10 }} variant="h4">تودرت لّماسيح</Typography>
        <a href="https://www.jesusfilm.org/watch/jesus.html/tachelhit.html" target="_blank" rel="noreferrer">
          <img style={{ maxHeight: 200 }} src={jesusFilm} alt="Jesus Film" />
        </a>
      </Grid>
    </Grid>
  </Card>
  );

export default Videos;
