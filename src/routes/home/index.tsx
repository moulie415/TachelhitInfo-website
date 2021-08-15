import { FunctionalComponent, h } from 'preact';
import AudioPlayer from 'material-ui-audio-player';
import styles from './styles';
import { AZUZD, ISEQSITN, MATSSENT, NTHUNA } from '../../constants';
import { Grid, Typography } from '@material-ui/core';

const Home: FunctionalComponent = () => {
  const classes = styles();
    return (
        <div class={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Typography>is-tgit amuslem?</Typography>
          <AudioPlayer src={MATSSENT} download />
          </Grid>
            <Grid item xs={6} sm={3}>
            <Typography>is-tzuzdt laman d-sslamt?</Typography>
          <AudioPlayer src={AZUZD} download />
          </Grid>
          <Grid item xs={6} sm={3}>
          <Typography>is dark kra n-iseqsitn?</Typography>
          <AudioPlayer src={ISEQSITN} download />
          </Grid>
          <Grid item xs={6} sm={3}>
          <Typography>is-tumnt s-lmasih?</Typography>
          <AudioPlayer src={NTHUNA} download />
          </Grid>
          </Grid>
         
        </div>
    );
};

export default Home;
