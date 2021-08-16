import { FunctionalComponent, h } from 'preact';
import AudioPlayer from 'material-ui-audio-player';
import styles from './styles';
import { AZUZD, ISEQSITN, MATSSENT, NTHUNA } from '../../constants';
import { Grid, Typography } from '@material-ui/core';

const Home: FunctionalComponent = () => {
  const classes = styles();
    return (
        <div class={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" style={{marginBottom: 20}}>is-tgit amuslem?</Typography>
              <AudioPlayer src={MATSSENT} download />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" style={{marginBottom: 20}}>is-tzuzdt laman d-sslamt?</Typography>
              <AudioPlayer src={AZUZD} download />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" style={{marginBottom: 20}}>is dark kra n-iseqsitn?</Typography>
              <AudioPlayer src={ISEQSITN} download />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" style={{marginBottom: 20}}>is-tumnt s-lmasih?</Typography>
              <AudioPlayer src={NTHUNA} download />
            </Grid>
          </Grid>
          <Typography style={{marginTop: 20}} variant="h3">awal n-rbbi</Typography>
        </div>
    );
};

export default Home;
