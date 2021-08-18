import { FunctionalComponent, h } from 'preact';
import AudioPlayer from 'material-ui-audio-player';
import styles from './styles';
import { AZUZD, colors, GODS_STORY, ISEQSITN, LATIN_NT, LATIN_OT, MATSSENT, NTHUNA } from '../../constants';
import { Button, Grid, Typography } from '@material-ui/core';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { useEffect, useState } from 'preact/hooks';
import CircularProgress from '@material-ui/core/CircularProgress';


const Home: FunctionalComponent = () => {
    const classes = styles();
    const qr1 = `/assets/images/16.jpg`;
    const qr2 = `/assets/images/17.jpg`;
    const qr3 = `/assets/images/18.jpg`;
    const qr4 = `/assets/images/19.jpg`;
    const qr5 = `/assets/images/20.jpg`;
    const qr6 = `/assets/images/21.jpg`;
    const rbbi = `/assets/images/14.jpg`;
    const amsiggel = `/assets/images/15.PNG`;
    const [ready, setReady] = useState(false);
    useEffect(() => {
      setReady(true);
    }, []);
    return (
        <div class={classes.root}>
          {ready ? <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{marginBottom: 20}}>is-tgit amuslem?</Typography>
            <AudioPlayer src={MATSSENT} download />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{marginBottom: 20}}>is-tzuzdt laman d-sslamt?</Typography>
              <AudioPlayer src={AZUZD} download  />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{marginBottom: 20}}>is dark kra n-iseqsitn?</Typography>
            <AudioPlayer src={ISEQSITN} download  />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{marginBottom: 20}}>is-tumnt s-lmasih?</Typography>
               <AudioPlayer src={NTHUNA} download  />
            </Grid>
          </Grid>
          <Typography style={{marginTop: 40, marginBottom: 10}} variant="h5">awal n-rbbi</Typography>
          <Grid justifyContent="space-evenly" container spacing={2}>
          <Grid  style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
          <Typography variant="h6" style={{marginBottom: 20}}>injil l-lmasih</Typography>
       
          </Grid>
          <Grid  style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
          <Typography variant="h6" style={{marginBottom: 20}}>lkhbar ifulkin</Typography>
          <Button><a href={LATIN_NT} target="_blank"><PictureAsPdfIcon style={{color: colors.red}} fontSize="large" /> </a></Button>

          </Grid>
          <Grid  style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
          <Typography variant="h6" style={{marginBottom: 20}}>arratn l-lanbya</Typography>
          <Button><a href={LATIN_OT} target="_blank"><PictureAsPdfIcon style={{color: colors.red}} fontSize="large" /></a> </Button>
            </Grid>
          </Grid>
          <Typography style={{marginTop: 40, marginBottom: 10}} variant="h5">videos</Typography>
          <Grid justifyContent="space-evenly" container spacing={2}>
            <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
              <Typography variant="h6">maylli iqsad rbbi</Typography>
              <video style={{maxHeight: 200}} poster={rbbi} controls>
                <source src={GODS_STORY} type="video/mp4" />
              </video>
            </Grid>
            <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
              <Typography variant="h6">amuddu n-umsiggel</Typography>
             <a href="https://www.amsiggel.com/" target="_blank">
               <img style={{maxHeight: 200}} src={amsiggel} />
               </a>
            </Grid>
            <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={3}>
              <Typography variant="h6">tudert l-lmasih</Typography>
              <div dangerouslySetInnerHTML={{__html: '<div class="arc-cont"><iframe src="https://api.arclight.org/videoPlayerUrl?refId=1_507-jf-0-0&apiSessionId=611b7188aaf785.85639629&player=bc.vanilla6&dtm=0&playerStyle=default" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe><style>.arc-cont{position:relative;display:block;margin:10px auto;width:100%}.arc-cont:after{padding-top:59%;display:block;content:""}.arc-cont>iframe{position:absolute;top:0;bottom:0;right:0;left:0;width:98%;height:98%;border:0}</style></div>'}} />
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="space-evenly">
            <Grid style={{textAlign: 'center'}}  item xs={12} sm={6} md={3}>
              <Typography variant="h6">awal i-wass</Typography>
              <img style={{margin: 10}} height={200} width={200} src={qr1} />
              <img style={{margin: 10}} height={200} width={200}  src={qr2} />
            </Grid>
            <Grid style={{textAlign: 'center'}}    item xs={12} sm={6} md={3}>
              <Typography variant="h6">amuddu n-umsiggel</Typography>
              <img style={{margin: 10}} height={200} width={200} src={qr3} />
              <img style={{margin: 10}} height={200} width={200}  src={qr4} />
            </Grid>
            <Grid style={{textAlign: 'center'}}    item xs={12} sm={6} md={3}>
              <Typography variant="h6">tachelhit info</Typography>
              <img  style={{margin: 10}} height={200} width={200} src={qr5} />
              <img  style={{margin: 10}} height={200} width={200} src={qr6} />
            </Grid>
          </Grid>
       </div> : <div style={{textAlign: 'center'}}><CircularProgress style={{textAlign: 'center'}} /></div>}
        </div>
    );
};

export default Home;
