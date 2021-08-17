import { FunctionalComponent, h } from 'preact';
import AudioPlayer from 'material-ui-audio-player';
import styles from './styles';
import { AZUZD, ISEQSITN, MATSSENT, NTHUNA } from '../../constants';
import { Grid, Typography } from '@material-ui/core';
import { useEffect, useRef } from 'preact/hooks';

const Home: FunctionalComponent = () => {
  const classes = styles();
  const iframeRef = useRef(null);
    return (
        <div class={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1" style={{marginBottom: 20}}>is-tgit amuslem?</Typography>
              <AudioPlayer src={MATSSENT} download />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1" style={{marginBottom: 20}}>is-tzuzdt laman d-sslamt?</Typography>
              <AudioPlayer src={AZUZD} download />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1" style={{marginBottom: 20}}>is dark kra n-iseqsitn?</Typography>
              <AudioPlayer src={ISEQSITN} download />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1" style={{marginBottom: 20}}>is-tumnt s-lmasih?</Typography>
              <AudioPlayer src={NTHUNA} download />
            </Grid>
          </Grid>
          <Typography style={{marginTop: 20}} variant="h5">awal n-rbbi</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" style={{marginBottom: 20}}>injil l-lmasih</Typography>
              <div dangerouslySetInnerHTML={{__html: `<div class="arc-cont"><iframe src="https://api.arclight.org/videoPlayerUrl?refId=1_507-jf-0-0&apiSessionId=611b7188aaf785.85639629&player=bc.vanilla6&dtm=0&playerStyle=default" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe><style>.arc-cont{position:relative;display:block;margin:10px auto;width:100%}.arc-cont:after{padding-top:59%;display:block;content:""}.arc-cont>iframe{position:absolute;top:0;bottom:0;right:0;left:0;width:98%;height:98%;border:0}</style></div>`}} />
            </Grid>
          </Grid>
       
        </div>
    );
};

export default Home;
